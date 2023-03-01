<template>
  <div>
    <div @click.stop="add" v-for="item in data" :key="item.name" class="tree">
      <input type="checkbox" v-model="item.checked" /><span>{{ item.name }}</span>
      <Tree v-if="item?.children?.length" :data="item.children" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";
interface Tree {
  name: string;
  checked: boolean;
  children?: Tree[];
}
interface Iprop {
  data: Tree[];
}
const props = defineProps<Iprop>();
console.log(props.data);
function add() {}
</script>

<style scoped>
.tree {
  margin-left: 10px;
}
</style>
