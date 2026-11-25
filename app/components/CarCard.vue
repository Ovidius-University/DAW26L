<script setup lang="ts">
defineProps({
  car: Object
})
</script>

<!-- HTML -->
<template>
    <div style="border: 1px solid red; margin-top: 10px;padding: 10px;">
        <pre>{{ car }}</pre>
    </div>
</template>