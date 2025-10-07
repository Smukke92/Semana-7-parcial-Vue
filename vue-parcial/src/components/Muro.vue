<template>
  <div>
    <h2>Muro</h2>
    <p>Aquí se muestran las publicaciones de tus amigos.</p>
    <article v-for="(post, index) in filteredPosts" :key="index">
      <h3>{{ post.name }}</h3>
      <p>{{ post.text }}</p>
    </article>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
const props = defineProps({ search: { type: String, default: '' } })

const posts = ref([
  { name: 'Juan', text: 'Hola a todos 👋' },
  { name: 'María', text: '¡Qué lindo día hoy!' }
])

const filteredPosts = computed(() => {
  const q = props.search.toLowerCase()
  return posts.value.filter(p =>
    p.name.toLowerCase().includes(q) || p.text.toLowerCase().includes(q)
  )
})
</script>

<style scoped>
article {
  background: rgba(255,255,255,0.1);
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 6px;
}
</style>
