import { TokenType } from "../types"
import Token from "./token"


export default class Comparison {
    state: number = 0
    reset(){
        this.state = 0
    }
    getToken( current: string , nextChar: string | Symbol ) {
        const { state } = this
        const isLess = nextChar === '<' ,
            isEqual = nextChar === '=' ,
            isGreater = nextChar === '>'
        const returnToken = ( token: TokenType , value: string ) => {
                this.reset()
                return new Token( token , value )
            }

        switch( state ) {
            // 初始化
            case 0:
                if ( isLess ) {
                    this.state = 1
                } else if ( isEqual ) {
                    this.state = 4
                } else if ( isGreater ) {
                    this.state = 7
                } else {
                    // next
                }
                break
            case 1:
                if ( isEqual ) {
                    this.state = 2
                } else {
                    return returnToken( TokenType.Comparison , current )
                }
                break
            case 2:
                return returnToken( TokenType.Comparison , current )
            case 4:
                if ( isEqual ) {
                    this.state = 5
                } else {
                    return returnToken( TokenType.Assignment , current )
                }
                break
            case 5:
                if ( isEqual ) {
                    this.state = 6
                } else {
                    return returnToken( TokenType.Comparison , current )
                }
                break
            case 6:
                return returnToken( TokenType.Comparison , current )
            case 7:
                if ( isEqual ) {
                    this.state = 8
                } else {
                    return returnToken( TokenType.Comparison , current )
                }
                break
            case 8:
                return returnToken( TokenType.Comparison , current )
            default:
                break
        }
    }
}