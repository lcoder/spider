import { KeyWords , TokenType } from "../types"
import Token from "./token"
import { EOF } from "../types"

const alphaNumReg = /[A-Za-z_$0-9]/


export default class Keyword {
    getToken( current: string , nextChar: string | Symbol ) {
        const char: string = nextChar === EOF ? '' : ( nextChar as string )
        const isAlphaOrNum = alphaNumReg.test( char )
        const notAlphaAndNum = !isAlphaOrNum
        const ifKeyWord = KeyWords.includes( current )
        if ( ifKeyWord && notAlphaAndNum ) {
            return new Token( TokenType.Keyword , current )
        }
    }
}