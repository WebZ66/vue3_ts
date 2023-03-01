<template>
  <div>
    <A v-move:aaa.xiaoman="{ background: 'red' }" />
  </div>
</template>

<script setup lang="ts">
import A from './components/directive/A.vue'
import { ref, reactive, computed, DirectiveBinding, Directive } from 'vue'
const vMove: Directive = {
  created() {
    console.log('元素初始化调用')
  },
  beforeMount() {
    console.log('指令绑定到元素后调用，只调用一次')
  },
  mounted(el: HTMLElement, dir: DirectiveBinding) {},
  updated() {},
  unmounted() {
    console.log('指令被移除后调用')
  }
}
</script>

<style scoped></style>
