import { TokenType } from "../types"



export default class Token {
    // type: TokenType
    value?: string
    typeName: string
    constructor( tokenType: TokenType , value: string ) {
        // this.type = tokenType
        this.typeName = TokenType[ tokenType ]
        this.value = value
    }
}