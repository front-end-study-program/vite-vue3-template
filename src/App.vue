<script setup lang="ts">
import { useCounterStore } from '@/stores/count'

const counter = useCounterStore()
const add = () => {
  counter.count++
}

</script>

<template>
  <div>
    {{ counter.count }}
    <button
      class="border-none inline-block pl-3"
      @click="add"
    >
      add
    </button>
    <router-view />
  </div>
</template>

<style>
#app {
  /* margin-top: 60px; */
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
