let activeEffect
export const effect = (fn: Function) => {
  const _effect = function () {
    activeEffect = _effect
  }
}
//调度中心targetMap
const targetMap = new WeakMap()
//订阅
export const track = (target, key) => {
  let depsMap = targetMap.get(target)
  //target是传入的对象，depsMap是对应对象的名称和订阅者数组的映射
  if (!depsMap) {
    depsMap = new Map()
    targetMap.set(target, depsMap)
  }
  //找到对应的订阅者数组集合，如果没有的话就创建
  let deps = depsMap.get(key)
  if (!deps) {
    deps = new Set()
    depsMap.set(key, deps)
  }
  //收集副作用函数
  deps.add(activeEffect)
}

//发布
export const trigger = (target, key) => {
  const depsMap = targetMap.get(target)
  //找到订阅者数组
  const deps = depsMap.get(key)
  deps.forEach(item => {
    item()
  })
}

class Dep {
  watchers: Object
  constructor() {
    this.watchers = {}
  }
  on(type, callback) {
    let depMap = this.watchers[type]
    if (!depMap) {
      this.watchers[type] = true
    }
    this.watchers[type].push(callback)
  }
  emit(type, ...args) {
    if (!type) {
      this.watchers[type] = []
    }
    this.watchers[type].forEach(item => {
      item.call(null, ...args)
    })
  }
}
