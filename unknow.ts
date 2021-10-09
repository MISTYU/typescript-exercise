// ts 后来增加的一个类型
// 不能确认类型 尽量用 unkonw 不用 any 它是 any 的一个类型安全的替代品
// unknow 不能复制给有类型的变量 因此可以减少不确定类型影响的范围

let x: unknown = 1
x = true

// let y: string  = x // 报错
// x 换成 any 则不报错