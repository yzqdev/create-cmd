<template>
  <div class="h-full ">
    <div class="text-center">首页</div>
    <div class="h-full flex justify-center items-center">
      <van-button type="primary" @click="count++">{{ count }}</van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
let count = $ref(0)
</script>
