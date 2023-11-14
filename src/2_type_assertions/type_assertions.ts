//? Утверждение типа
let someValue: unknown = 'string'
let strLength = someValue.length //Object is of type 'unknown'
let stringLength = (someValue as string).length
let stringLen = (<string>someValue).length
let str1 = '123' as number
let num = '123' as unknown as number

//? литеральные типы
let constant = 'constant' as const // || const a = 'constant'

let params = {
    type: 'success',
    query: {
        page: 1,
        per_page: 10
    }
} as const

const arr_params = ['success', 1, 10] as const
arr_params.push('3')