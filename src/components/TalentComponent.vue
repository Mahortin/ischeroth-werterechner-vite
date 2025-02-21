<script setup>
import characterStore from '@/stores/characterStore'

const store = characterStore()

function doSth() {
  window.confirm('Do something - this will be implemented')
}
</script>

<template>
  <div class="column">
    <h2>Talente</h2>

    <button @click="doSth">Click me!</button>
    <button @click="store.increment">{{ store.count }}</button>
    <label> {{ store.name }} the {{ store.nickname }} [yearly income: {{ store.salary }}]</label>

    <input
      type="number"
      placeholder="store.salary"
      v-model="currentValue"
      @change="store.updateSalary(currentValue)"
    />
  </div>
</template>

<style scoped></style>
