// 可以抽象 联合类型
// 可以用于 Utility type
// Omit Exclude Parameters ...  都是 类型别名
type StrOrNum = string | number

type AnimalType = {
  name: string
}

type BearType = AnimalType & {
  honey: boolean
}


const bearType: BearType = {
  name: 'f',
  honey: false
}