// 把 type 里的属性变成可选
type PersonOmit = {
  name: string
  age: number
}
// 排除 age 只有 name
const LOmit: Omit<PersonOmit, 'age'> = {name: 'LLOmit'}

// const LOmitAge: Omit<Person, 'age'> = {age: 14} // error
// 类型变成 {} 可以输入任何属性
const LOmitErr: Omit<PersonOmit, 'age' | 'name'> = {
  a: '11'
}
