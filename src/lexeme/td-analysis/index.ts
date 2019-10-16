import KeyWord from "./key-word"
import Identifier from "./identifier"
import Numbers from "./number"
import Comparison from "./comparison"
import separator from "./separator"


export default [
    new KeyWord() ,
    new Identifier() ,
    new Numbers() ,
    new Comparison() ,
    new separator() ,
]