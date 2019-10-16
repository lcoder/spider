import { TokenType , Separators as sptrs } from "../types"
import Token from "./token"


export default class Separator {
    state: number = 0
    reset(){
        this.state = 0
    }
    getToken( current: string , nextChar: string | Symbol ) {
        const { state } = this
        switch( state ) {
            case 0:
                if ( sptrs.includes( current ) ) {
                    return new Token( TokenType.Separator , current )
                }
                break;
            default:
                break
        }
    }
}