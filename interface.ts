// 可以 extends type 不行

interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}

const bear: Bear = {
  name: 'c',
  honey: true
}


