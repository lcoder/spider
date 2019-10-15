import ReadBuffer from "./read-buffer"
import tdAnalysis from "./td-analysis/index"
import { isWhitespace } from "./whitespace"


const scanner = ( text: string ) => {
    const read = new ReadBuffer( text )
    const tokens = []
    let char: string | undefined
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
        const charCode: number | undefined = char.codePointAt( 0 )
        const ifWhiteSpace = isWhitespace( charCode as number )
        if ( ifWhiteSpace ) {
            continue;
        }
        word += char
    }
    console.log( tokens )
}

export default scanner;