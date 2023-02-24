export const reactive = <T extends object>(target: T) => {
  return new Proxy(target, {
    get(target, key, receiver) {
      //为了保证上下文正确
      let res = Reflect.get(target, key, receiver)
    },
    set(target, key, newValue, receiver) {
      return Reflect.set(target, key, newValue, receiver)
    }
  })
}
