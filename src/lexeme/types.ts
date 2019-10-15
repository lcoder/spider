

export const KeyWords = [
    'var' ,
    'const' ,
    'let' ,
    'break' ,
    'case' ,
    'catch' ,
    'continue' ,
    'debugger' ,
    'default' ,
    'do' ,
    'else' ,
    'finally' ,
    'for' ,
    'function' ,
    'if' ,
    'return' ,
    'switch' ,
    'throw' ,
    'try' ,
    'while' ,
    'with' ,
    'new' ,
    'super' ,
    'class' ,
    'extends' ,
    'export' ,
    'null' ,
    'true' ,
    'false' ,
    'in' ,
    'instanceof' ,
    'typeof' ,
    'void' ,
    'delete'
]

export const Separators = [
    ',' ,
    ';' ,
    '[' ,
    ']' ,
    '{' ,
    '}' ,
]

export const EOF = Symbol('EOF')

export enum TokenType {
    Keyword,        // 关键字 var
    Identifier ,    // 标识符
    Semicolon ,     // ;
    Comma ,         // ,
    Number ,        // 数字 浮点数
    String ,        // 字符串
    Separator ,     // , ; [ ] { }
    Assignment ,    // 赋值
    Comparison ,    // 比较
}
