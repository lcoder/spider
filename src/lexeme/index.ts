import ReadBuffer from "./ReadBuffer"



const scanner = ( text: string ) => {
    const read = new ReadBuffer( text )
    let char: string | undefined
    let word: string = ''
    while( (char = read.next()) !== undefined ) {
        word += char
        console.log( word )
    }
    // let start = 0
    // let forword = 0
    // for ( let i = 0; i < text.length; i++ ) {
    //     start = i
    //     forword = start + 1
    //     const char = text[ i ]
    //     console.log(char)
    // }
}

export default scanner;