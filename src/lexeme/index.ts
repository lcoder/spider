import ReadBuffer from "./read-buffer"
import tdAnalysis from "./td-analysis/index"
import { isWhitespace } from "./whitespace"
import { EOF } from "./types"


const scanner = ( text: string ) => {
    const read = new ReadBuffer( text )
    const tokens = []
    let char: string | undefined | Symbol
    let word: string = ''

    while( (char = read.next()) !== undefined ) {
        let current: string = word
        let flag = false
        for( let i = 0 ; i < tdAnalysis.length ; i++ ) {
            const item = tdAnalysis[ i ]
            const tk = item.getToken( current , char )
            const hasToken = tk !== undefined
            if ( hasToken ) {
                tokens.push( tk )
                flag = true
                break;
            }
        }
        if ( flag ) {
            word = ''
        }
        if ( typeof char === 'string' ) {
            const charCode: number | undefined = char.codePointAt( 0 )
            const ifWhiteSpace = isWhitespace( charCode as number )
            if ( ifWhiteSpace ) {
                continue;
            }
        }
        if ( char !== EOF ) {
            word += char
        }
    }
    read.reset()
    console.log( tokens )
}

export default scanner;