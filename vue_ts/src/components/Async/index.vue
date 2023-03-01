<template>
  <div>
    <div class="sync">
      <div class="sync-content">
        <div>我叫zds</div>
      </div>
      <div class="sync-pop">
        <div>123</div>
        <div>123</div>
      </div>
      <button @click="add">点击</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import { axios } from "./axios";

interface Data {
  data: {
    name: string;
    age: number;
  };
}
async function add() {
  const { data } = await axios.get<Data>("http://localhost:3000/api/get");
  console.log(data);
}
</script>

<style scoped>
.sync {
  width: 600px;
  height: 300px;
  background-color: #eee;
}
</style>
