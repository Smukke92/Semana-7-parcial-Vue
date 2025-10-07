<template>
  <div class="layout">
    <!-- HEADER -->
    <header class="layout__header">
      <div class="header__logo">
        <!-- Use the public favicon as a safe default to avoid broken image paths -->
        <img src="/favicon.ico" alt="Logo" />
      </div>
      <div class="header__search">
        <input type="text" placeholder="Buscar..." class="header__search-input" v-model="search" />
      </div>
    </header>

    <!-- NAV -->
      <nav class="nav">
        <router-link
          v-for="s in sections"
          :key="s.path"
          :to="s.path"
          class="nav__link"
          active-class="nav__link--active"
        >
          {{ s.name }}
        </router-link>
      </nav>

    <!-- MAIN CONTENT -->
    <main class="layout__content">
        <router-view v-slot="{ Component }">
          <component :is="Component" :search="search" />
        </router-view>
    </main>

    <!-- FOOTER -->
    <footer class="layout__footer">
      <p class="layout__footer-text">BMO FRIENDS 2025 ☘</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Datos y lógica de navegación
const sections = [
  { name: 'Muro', path: '/muro' },
  { name: 'Info', path: '/info' },
  { name: 'Photos', path: '/photos' },
  { name: 'Boxes', path: '/boxes' },
]

const search = ref('')
</script>

<style scoped>
/* Tus estilos anteriores se pueden reutilizar */
.photos__grid {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.boxes__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
.boxes__item {
  background: #444;
  padding: 10px;
  border-radius: 6px;
  color: white;
}
</style>
