<!-- JS/TS -->
<script setup lang="ts">
const { data } = await useFetch("/api/cars")

console.log("data:", data.value)

async function saveCar(e) {
  e.preventDefault()

  var title = document.getElementById('input-title').value
  var km = document.getElementById('input-km').value
  var color = document.getElementById('input-color').value

  const response = await $fetch('/api/cars/create', {
    method: 'POST',
    body: {
      title,
      km: Number(km),
      color,
      modelId: 1
    },
  })

  console.log(response)
}
</script>

<!-- HTML -->
<template>
  <div>
    <h1>DAW26L Test</h1>

    <h2>Add a new car</h2>
    <form>
      <input id="input-title" placeholder="Title" />
      <input id="input-km" placeholder="KM" />
      <input id="input-color" placeholder="Color" />
      <button @click="saveCar">Submit</button>
    </form>

    <h2>Cars:</h2>
    <CarCard 
      v-for="(car, index) in data"
      :key="index"
      :car="car"
    />

  </div>
</template>

<!-- CSS -->
<style>
form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>