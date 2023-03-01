type BusClass = {
  emit: (name: string) => void
  on: (name: string, callback: Function) => void
}

type PramsKey = string | number | symbol
type List = {
  [key: PramsKey]: Array<Function>
}
class Bus implements BusClass {
  list: List
  constructor() {
    this.list = {}
  }
  //发布
  emit(name: string, ...args: Array<any>) {
    let eventName: Array<Function> = this.list[name]
    eventName.forEach(fn => {
      fn.apply(this, args)
    })
  }
  //订阅
  on(name: string, callback: Function) {
    this.list[name].push(callback)
  }
}

export default Bus
