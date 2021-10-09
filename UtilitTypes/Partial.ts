// 把 type 里的属变成可选
type Person = {
  name: string
  age: number
}

const LA: Partial<Person> = {age: 11}
const LN: Partial<Person> = {name: '11'}
const LNA: Partial<Person> = {name: '11', age: 11}

// 实现
// type Partial<T> = {
//   [P in keyof T]?: T[P]
// }
