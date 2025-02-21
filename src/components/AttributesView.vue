<script setup>
import AttributeComponent from './SingleAttribute.vue'
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
      <input
        type="number"
        placeholder="8"
        value="{{attribute.value
        }}"
        v-model="currentValue"
        min="8"
        max="16"
        @change="store.setAttribute(attribute.key, currentValue)"
      />
    </div>
    <div v-for="attribute in store.attributes" :key="attribute.key" :value="attribute.value">
      <AttributeComponent
        :key="attribute.key"
        :attributeKey="attribute.key"
        :attributeName="attribute.name"
        :attributeValue="attribute.basevalue"
        :increased="attribute.increased"
        @attribute-changed="doNothing"
      ></AttributeComponent>
    </div>
    <button @click="doNothing">Nothing</button>
    <button @click="incrementAttributes">+ from Component</button>
    <button @click="store.increment">+ from Store</button>
  </div>
</template>

<style scoped></style>
