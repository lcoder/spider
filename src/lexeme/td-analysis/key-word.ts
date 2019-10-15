import { KeyWords , TokenType } from "../types"
import Token from "./token"
import { EOF } from "../types"

const alphaReg = /[a-z]/


export default class Keyword {
    state: number = 0
    reset(){
        this.state = 0
    }
    getToken( current: string , nextChar: string | Symbol ) {
        const char: string = nextChar === EOF ? '' : ( nextChar as string )
        const { state } = this

        switch ( state ) {
            case 0:
                if ( alphaReg.test( char ) ) {
                    this.state = 1
                }
                break
            case 1:
                const ifKeyWord = KeyWords.includes( current )
                const isAlphaOrNum = alphaReg.test( char )
                const notAlphaAndNum = !isAlphaOrNum
                if ( ifKeyWord && notAlphaAndNum ) {
                    this.reset()
                    return new Token( TokenType.Keyword , current )
                }
                break
            default:
                break
        }
    }
}