<template>
  <div>
    <header class="header">
      <slot name="header" />
    </header>
    <main class="main">
      <slot></slot>
    </main>
    <footer class="footer">
      <slot name="footer" :data="1" />
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";
</script>

<style scoped>
.header {
  width: 100%;
  height: 60px;
  background-color: blue;
}
.main {
  width: 100%;
  height: 300px;
  background: red;
}
.footer {
  width: 100%;
  height: 200px;
  background: green;
}
</style>
