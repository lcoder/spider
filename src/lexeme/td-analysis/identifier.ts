import { KeyWords , TokenType } from "../types"
import Token from "./token"
import { EOF } from "../types"

const alphaReg = /[A-Za-z_$]/
const alphaNumReg = /[A-Za-z_$0-9]/


export default class Identifier {
    state: number = 0
    reset(){
        this.state = 0
    }
    getToken( current: string , nextChar: string | Symbol ) {
        const { state } = this
        const char: string = nextChar === EOF ? '' : ( nextChar as string )
        
        switch ( state ) {
            case 0:
                if ( alphaReg.test( char ) ) {
                    this.state = 1
                }
                break
            case 1:
            case 2:
                if ( alphaNumReg.test( char ) ) {
                    this.state = 2
                } else {
                    const ifKeyWord = KeyWords.includes( current )
                    const notKeyWord = !ifKeyWord
                    if ( notKeyWord ) {
                        this.reset()
                        return new Token( TokenType.Identifier , current )
                    }
                }
                break
            default:
                break
        }
    }
}