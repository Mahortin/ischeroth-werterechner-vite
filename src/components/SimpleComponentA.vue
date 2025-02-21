<script setup>
import { simpleStore } from '@/stores/simpleStore'

const store = simpleStore()

function doSth() {
  window.confirm('Do something - this will be implemented')
}
</script>

<template>
  <div class="column">
    <h2>SimpleComponentA</h2>

    <button @click="doSth">Click me!</button>
    <button @click="store.increment">{{ store.count }}</button>
  </div>
</template>

<style scoped></style>
