// 平方 （使用 useMemo 减少性能开销）
// useMemo 第一个参数是函数，第二个参数参数是可变的数组
import { useMemo } from 'react'

const Index = (list: number[]) => {
  return useMemo(() => list.map((item: number) => {
    console.log(1);
    return Math.pow(item, 2)
  }), [])
}

export default Index;