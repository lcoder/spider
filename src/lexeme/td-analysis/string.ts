
import { TokenType } from "../types"
import Token from "./token"

const strFlagReg = /["']/g   // " '


export default class Strings {
    prevFlag ?: string
    state: number = 0
    reset(){
        this.prevFlag = undefined
        this.state = 0
    }
    getToken( current: string , nextChar: string | Symbol ) {
        const { state , prevFlag } = this ,
            char = typeof nextChar === 'string' ? nextChar : ''
        strFlagReg.lastIndex = 0
        const returnToken = () => {
                this.reset()
                strFlagReg.lastIndex = 0
                current = current.replace( strFlagReg , '' )
                return new Token( TokenType.String , current )
            } ,
            ifStringFlag = strFlagReg.test( char ) ,
            sameWithPrev = ifStringFlag && prevFlag === char
    
        switch( state ) {
            case 0:
                if ( ifStringFlag ) {
                    this.state = 1
                    this.prevFlag = char
                }      
                break;
            case 1:
                if ( sameWithPrev ) {
                    this.state = 2
                } else {
                    // loop
                }
                break
            case 2: 
                return returnToken()
            default:
                break
        }
    }
}