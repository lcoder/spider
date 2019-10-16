import ReadBuffer from "./read-buffer"
import tdAnalysis from "./td-analysis/index"
import { isWhitespace } from "./whitespace"
import { EOF } from "./types"


const scanner = ( text: string ) => {
    const read = new ReadBuffer( text )
    const tokens: any = []
    let char: string | undefined | Symbol
    let word: string = ''
    tdAnalysis.forEach( td => td.reset() )
    while( (char = read.next()) !== undefined ) {
        let current: string = word
        const tmps = []
        for( let i = 0 ; i < tdAnalysis.length ; i++ ) {
            const item = tdAnalysis[ i ]
            const tk = item.getToken( current , char )
            const hasToken = tk !== undefined
            if ( hasToken ) {
                tmps.push( tk )
            }
        }
        const everyEnded = tdAnalysis.every( td => td.state === 0 )
        if ( everyEnded ) {
            let size = tmps.length ,
                hasMembers = size > 0 ,
                target = hasMembers ? tmps[ size - 1 ] : undefined
            if ( target ) {
                tokens.push( target )
                word = ''
                read.fastForward()
                continue
            }
        }
        if ( typeof char === 'string' ) {
            const charCode: number | undefined = char.codePointAt( 0 )
            const ifWhiteSpace = isWhitespace( charCode as number ) ,
                isLineFeed = charCode === 10
            if ( ifWhiteSpace || isLineFeed ) {
                continue;
            }
        }
        if ( char !== EOF ) {
            word += char
        }
    }
    read.reset()
    return tokens
}

export default scanner;