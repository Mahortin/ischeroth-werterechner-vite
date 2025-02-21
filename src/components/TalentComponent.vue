<script setup>
import { characterStore } from '@/stores/characterStore'

const store = characterStore()

function doNothing() {
  window.confirm(store)
}

function incrementSkills() {
  store.skills.forEach((skill) => {
    skill.value++
  })
}
</script>

<template>
  <div class="column">
    <h2>Talente</h2>

    <!-- <label>{{ store.attributes }}</label> -->
    <div v-for="skill in store.skills" :key="skill.key" :value="skill.value">
      <label>{{ skill.key }}: {{ skill.value }}</label>
    </div>
    <button @click="doNothing">Nothing</button>
    <button @click="incrementSkills">+ from component</button>
  </div>
</template>

<style scoped></style>
