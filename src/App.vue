<template>
  <div>
    <table border :width="'1000px'">
      <thead>
        <tr>
          <th>商品名称</th>
          <th>商品数量</th>
          <th>商品单价</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td>{{ item.name }}</td>
          <td>
            <button @click="addAndSub(false, $event, item)">-</button>
            {{ item.num }}
            <button @click="addAndSub(true, $event, item)">+</button>
          </td>
          <td>{{ item.price * item.num }}</td>
          <td @click="deleteItem(index)">删除</td>
        </tr>
      </tbody>
      <tfoot>
        <td></td>
        <td></td>
        <td></td>
        <td>总价 {{ allPrice }}</td>
      </tfoot>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
interface Shop {
  name: string
  num: number
  price: number
}
const data = reactive<Shop[]>([
  {
    name: 'zds的裤子',
    num: 1,
    price: 100
  },
  {
    name: 'zds的衣服',
    num: 2,
    price: 200
  },
  {
    name: 'zds子',
    num: 1,
    price: 300
  }
])
const addAndSub = (type: boolean, $event, item: Shop) => {
  if (type) {
    item.num++
  } else {
    item.num--
  }
}
const deleteItem = (index: number) => {
  data.splice(index, 1)
}
const allPrice = computed<number>(() => {
  return data.reduce((pre, item: Shop) => {
    return pre + item.num * item.price
  }, 0)
})
</script>

<style scoped></style>
