<script setup>
import { characterStore } from '@/stores/characterStore'

const store = characterStore()

function doNothing() {
  window.confirm(store)
}

function incrementAttributes() {
  store.attributes.forEach((attribute) => {
    attribute.value++
  })
}
</script>

<template>
  <div class="column">
    <h2>Attribute</h2>

    <!-- <label>{{ store.attributes }}</label> -->
    <div v-for="attribute in store.attributes" :key="attribute.key" :value="attribute.value">
      <label>{{ attribute.key }}: {{ attribute.value }}</label>
    </div>
    <button @click="doNothing">Nothing</button>
    <button @click="incrementAttributes">+</button>

    <!-- <input
      v-for="attribute in store.attributes"
      type="number"
      placeholder="store.salary"
      v-model="currentValue"
      @change="store.updateSalary(currentValue)"
    /> -->
  </div>
</template>

<style scoped></style>
