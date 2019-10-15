import { KeyWords , TokenType } from "../types"
import Token from "./token"

const alphaReg = /[A-Za-z_$]/
const alphaNumReg = /[A-Za-z_$0-9]/


export default class Identifier {
    state: number = 0
    reset(){
        this.state = 0
    }
    getToken( current: string , nextChar: string ) {
        const { state } = this
        if ( alphaReg.test( nextChar ) ) {
            this.state = 1
        }
        const isAlphaOrNum = alphaNumReg.test( nextChar )
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