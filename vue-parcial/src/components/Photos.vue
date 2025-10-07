<template>
  <div>
    <h2>Photos</h2>
    <p>Galería de fotos.</p>
    <div class="photos__grid">
      <img src="https://via.placeholder.com/100" alt="foto1">
      <img src="https://via.placeholder.com/100" alt="foto2">
      <img src="https://via.placeholder.com/100" alt="foto3">
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.photos__grid {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.photos__grid img {
  border-radius: 6px;
}
</style>
