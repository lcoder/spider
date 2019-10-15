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
        // console.log( state , current , nextChar )
        switch ( state ) {
            case 0:
                if ( alphaReg.test( char ) ) {
                    this.state = 1
                }
                break
            case 1:
            case 2:
                const isWord = alphaNumReg.test( char )
                // console.log( current , nextChar , isWord )
                if ( isWord ) {
                    this.state = 2
                } else {
                    const ifKeyWord = KeyWords.includes( current )
                    // console.log( ifKeyWord , current )
                    if ( ifKeyWord ) {
                        this.reset()
                    } else {
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