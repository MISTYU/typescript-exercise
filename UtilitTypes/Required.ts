// 这个类型的作用就是把类型 T 中的所有属性都转为必选属性。

interface Props {
  a?: string
  b?: string
  c?: string
}

// 仅保留b,c属性并转为必填
type NewProps1 = Required<Pick<Props, 'b' | 'c'>>

// 需要保留Props的所有属性，但是b，c需要必填
type NewProps2 = Partial<Props> & Required<Pick<Props, 'b' | 'c'>>

const obj: NewProps2 = {
  b: '1',
  c: '2'
}

// type Required<T> = {
//   [P in keyof T]-?: T[P];
// };