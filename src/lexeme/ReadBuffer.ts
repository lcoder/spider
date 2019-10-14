


export default class ReadBuffer {
    start: number
    forward: number
    text: string
    constructor( text: string ){
        this.start = 0
        this.forward = 0
        this.text = text
    }
    // 读取下一个字符
    next(): string | undefined {
        const size = this.text.length
        const { forward , text } = this
        const char = text[ forward ]
        const overflow = forward >= ( size - 1 )
        const target = overflow ? undefined : char
        if ( overflow === false ) {
            this.forward++
        }
        return target
    }
    // 成功，移动start
    // 失败，报错

}