
import { EOF } from "./types"

export default class ReadBuffer {
    state: number = 0
    start: number
    forward: number
    text: string
    constructor( text: string ){
        this.start = 0
        this.forward = 0
        this.text = text
    }
    // 读取下一个字符
    next(): string | Symbol | undefined {
        const size = this.text.length
        const { forward , text } = this
        const end = forward === size
        if ( end ) {
            this.forward++
            return EOF
        }
        const char = text[ forward ]
        const overflow = forward > ( size - 1 )
        const target = overflow ? undefined : char
        if ( overflow === false ) {
            this.forward++
        }
        return target
    }
    // 成功，移动start
    fastForward(){
        this.start = this.forward - 1
        this.forward = this.start
    }
    reset(){
        this.start = 0
        this.forward = 0
        this.text = ''
    }
    // 失败，报错

}