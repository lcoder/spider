import { TokenType } from "../types"
import Token from "./token"
import { EOF } from "../types"

const numReg = /\d/

const dotReg = /\./

export default class Numbers {
    state: number = 0
    reset(){
        this.state = 0
    }
    getToken( current: string , nextChar: string | Symbol ) {
        const { state } = this
        const char = nextChar === EOF ? '' : ( nextChar as string )
        const isNum = numReg.test( char ) ,
            isDot = dotReg.test( char ) ,
            isEulerNumber = char === 'e' || char === 'E' ,
            ifPosNeg = char === '+' || char === '-'
        const returnToken = () => {
                this.reset()
                return new Token( TokenType.Number , current )
            }
        switch( state ) {
            // 初始化
            case 0:
                if ( isNum ) {
                    this.state = 13
                }
                break;
            // 数字
            case 13:
                if ( isNum ) {
                    // loop
                } else if ( isDot ) {
                    this.state = 14
                } else if ( isEulerNumber ) {
                    this.state = 16
                } else {
                    return returnToken()
                }
                break;
            // 小数点
            case 14: 
                if ( isNum ) {
                    this.state = 15
                } else {
                    return returnToken()
                }
                break;
            // 小数点后的数字
            case 15:
                if ( isNum ) {
                    // loop
                } else if ( isEulerNumber ) {
                    this.state = 16
                } else {
                    return returnToken()
                }
                break
            // 指数
            case 16:
                if ( ifPosNeg ) {
                    this.state = 17
                } else if ( isNum ) {
                    this.state = 18
                } else {
                    throw new Error( 'Uncaught SyntaxError: Unexpected number,e 需要数字' )
                }
                break
            // + -
            case 17:
                if ( isNum ) {
                    this.state = 18
                } else {
                    throw new Error( 'Uncaught SyntaxError: Unexpected number,+- 需要数字' )
                } 
                break
            // 数字
            case 18:
                if ( isNum ) {
                    // loop
                } else {
                    return returnToken()
                }
                break
            default:
                break
        }
    }
}