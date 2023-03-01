<template>
  <div class="wrap">
    <div
      :style="{ height: item.height + 'px', background: item.background, top: item.top + 'px', left: item.left + 'px' }"
      v-for="(item, index) in waterList" :key="index" class="items"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'
interface Iprops {
  list: Iitem[]
}
interface Iitem {
  height: number
  background: string
  top?: number
  left?: number
}
const props = withDefaults(defineProps<Iprops>(), {})
const waterList = reactive<Iitem[]>([])
const heightList: number[] = []
const init = () => {
  const width = 130
  //获取可视区域的距离
  const x = document.body.clientWidth
  const column = Math.floor(x / width)
  for (let i = 0; i < props.list.length; i++) {
    //如果i小于11
    if (i < column) {
      props.list[i].left = i * width
      props.list[i].top = 20
      waterList.push(props.list[i])
      heightList.push(props.list[i].height)
    } else {
      //超出11个以后，找出之前的高度最小值，然后把当前的添到后面
      let current = heightList[0]
      let index = 0
      heightList.forEach((h, id) => {
        //找出最小的值的index 和 height
        if (current > h) {
          current = h
          //heightList也就是据上面高度
          index = id
        }
      })
      //current就是heightList[index]

      //找出当前应该存放的最小的位置的index和当前它的高度
      //如果没有+30 那么height[index]==current  100+100+10
      props.list[i].top = current
      if (index == 7) {
        console.log(current, props.list[i].top, heightList[index])
      }
      props.list[i].left = index * width
      //每一次都是从头开始的 都要加上最上面那个20  heightList[index]只是上一个高度 因为是绝对定位的，所以只是距离高度而已呀
      heightList[index] = heightList[index] + props.list[i].height + 10
      waterList.push(props.list[i])
    }
  }
}
onMounted(() => {
  init()
})
</script>

<style scoped>
.wraps {
  position: relative;
  height: 100%;
}

.items {
  position: absolute;
  width: 120px;
}
</style>
