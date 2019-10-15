import { KeyWords , TokenType } from "../types"
import Token from "./token"

const alphaNumReg = /[A-Za-z_$0-9]/


export default class Keyword {
    getToken( current: string , nextChar: string ) {
        const isAlphaOrNum = alphaNumReg.test( nextChar )
        const notAlphaAndNum = !isAlphaOrNum
        const ifKeyWord = KeyWords.includes( current )
        if ( ifKeyWord && notAlphaAndNum ) {
            return new Token( TokenType.Keyword , current )
        }
    }
}