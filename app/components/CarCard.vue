<script setup lang="ts">
defineProps({
  title: String,
  km: Number,
  brandName: String,
  color: String
})
</script>

<!-- HTML -->
<template>
    <div style="border: 1px solid red; margin-top: 10px;padding: 10px;">
        <h1>{{ title }}</h1>
        <p>{{ km }}</p>
        <p>{{ brandName }}</p>
        <p>{{ color }}</p>
    </div>
</template>