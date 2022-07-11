<template>
  <div class="home">
    home {{ count }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const count = ref(1)
</script>
<script lang="ts">
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.home {
  color: red;
}
</style>
