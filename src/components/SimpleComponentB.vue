<script setup>
import { simpleStore } from '@/stores/simpleStore'

const store = simpleStore()

function doSth() {
  window.confirm('Do something - this will be implemented')
}
</script>

<template>
  <div class="column">
    <h2>SimpleComponentB</h2>

    <label>{{ store.count }}</label>
    <button @click="store.getRich">Get rich!</button>
    <button @click="store.loseItAll">Lose the bet</button>
    <label>
      {{ store.name }} the {{ store.nickname }} [yearly income: {{ store.salaryInEuros }}]</label
    >
  </div>
</template>

<style scoped></style>
