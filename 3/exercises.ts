// 1a
let a = 1042 // number

// 1b
let b = 'apples and oranges' // string

// 1c
const c = 'pineapples' // 'pineapples'

// 1d
let d = [true, true, false] // boolean[]

// 1e
let e = {type: 'ficus'} // {type: string}

// 1f
let f = [1, false] // (number | boolean)[]

// 1g
const g = [3] // number[]

// 1h
let h = null // any


// 2a
let i: 3 = 3
i = 4 // Error TS2322: Type '4' is not assignable to type '3'.

// 2b
let j = [1, 2, 3]
j.push(4)
j.push('5') // Error TS2345: Argument of type '"5"' is not


// 2c
let k: never = 4 // Error TS2322: Type '4' is not assignable to type 'never'.

// 2d
let l: unknown = 4
let m = l * 2 // Error TS2571: Object is of type 'unknown'.
