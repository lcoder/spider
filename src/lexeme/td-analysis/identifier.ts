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
        if ( alphaReg.test( char ) ) {
            this.state = 1
        }
        const isAlphaOrNum = alphaNumReg.test( char )
        if ( state !== 0 && isAlphaOrNum ) {
            this.state = 1
        }
        const notAlphaAndNum = !isAlphaOrNum
        const ifKeyWord = KeyWords.includes( current )
        const notKeyWord = !ifKeyWord
        if ( state === 1 && notAlphaAndNum && notKeyWord ) {
            this.reset()
            return new Token( TokenType.Identifier , current )
        }
    }
}