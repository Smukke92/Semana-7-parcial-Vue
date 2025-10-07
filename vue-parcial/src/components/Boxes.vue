<template>
  <div>
    <h2>Boxes</h2>
    <p>Sección de cajas personalizadas.</p>
    <div class="boxes__grid">
      <div class="boxes__item">Box 1</div>
      <div class="boxes__item">Box 2</div>
      <div class="boxes__item">Box 3</div>
      <div class="boxes__item">Box 4</div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.boxes__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
.boxes__item {
  background: #444;
  color: white;
  padding: 15px;
  border-radius: 6px;
  text-align: center;
  font-weight: bold;
}
</style>
