type Reservation = unknown

type Reserve = {
  (from: Date, to: Date, destination: string): Reservation
  (from: Date, destination: string): Reservation
  (destination: string): Reservation
}

let reserve: Reserve = (
  fromOrDestination: Date | string,
  toOrDestination?: Date | string,
  destination?: string
) => {
  if (
    fromOrDestination instanceof Date &&
    toOrDestination instanceof Date &&
    destination !== undefined
  ) {
  } else if (
    fromOrDestination instanceof Date &&
    typeof toOrDestination === 'string'
  ) {
  } else if (typeof fromOrDestination === 'string') {
  }
}


function call<T extends [unknown, string, ...unknown[]], R>(
  f: (...args: T) => R,
  ...args: T
): R {
  return f(...args)
}

function fill(length: number, value: string): string[] {
  return Array.from({length}, () => value)
}

call(fill, 10, 'a') // string[]

is('string', 'otherstring') // false

is(true, false) // false

is(42, 42) // true

is(10, 'foo') // Error 

// [Hard] I should be able to pass any number of arguments
is([1], [1, 2], [1, 2, 3]) // false

function is<T>(a: T, ...b: [T, ...T[]]): boolean {
  return b.every(_ => _ === a)
}
