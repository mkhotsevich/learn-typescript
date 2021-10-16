let a: number
a = 1 as 1

let b: 1
b = 2 as number

let c: number | string
c = 'foo' as string

let d: number
d = true as boolean

let e: (number | string)[]
e = [1] as number[]

let f: number[]
f = [1] as (number | string)[]

let g: {a: boolean}
g = {a: true} as {a: true}

let h: {a: {b: [number | string]}}
h = {a: {b: ['c']}} as {a: {b: [string]}}

let i: (a: number) => string
i = ((b: number) => 'c') as (b: number) => string

let j: (a: string) => string
j = ((a: number) => 'b') as (a: number) => string

let k: (a: string) => string
k = ((a: number | string) => 'b') as (a: number | string) => string

enum E {
  X = 'X'
}
enum F {
  X = 'X'
}
let l: F.X
l = E.X as E.X

type O = {a: {b: {c: string}}}
type P = keyof O // 'a'
type Q = O['a']['b'] // {c: string}

type Exclusive<T, U> = Exclude<T, U> | Exclude<U, T>

type R = Exclusive<1 | 2 | 3, 2 | 3 | 4> // 1 | 4
type U = Exclusive<1 | 2, 2 | 4>


let globalCache = {
  get(key: string) {
    return 'user'
  }
}

let userId = fetchUser()
userId.toUpperCase()

function fetchUser() {
  return globalCache.get('userId')
}
