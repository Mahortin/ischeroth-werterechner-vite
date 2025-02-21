<script setup>
// import { ref, reactive, computed } from 'vue'
// import { ref, reactive } from "vue";
import { characterStore } from '@/stores/characterStore'

const store = characterStore()

defineProps({
  attributeKey: String,
  attributeName: String,
  attributeValue: Number,
})
</script>

<template>
  <div class="attribute-info">
    <span class="attribute-key">{{ attributeKey }}</span>
    <span class="attribute-name">{{ attributeName }}</span>
    <input
      type="number"
      value="{{ attributeValue }}"
      v-model="currentValue"
      placeholder="8"
      min="8"
      max="16"
      @change="store.setAttribute(attributeKey, currentValue)"
    />
  </div>
</template>

<style scoped>
.attribute-info {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

input {
  background-color: #2c3e50; /* Darker background for modern look */
  color: #ecf0f1; /* Light text for contrast */
  border: 1px solid #34495e; /* Subtle, softer border */
  padding: 10px 15px;
  border-radius: 6px; /* Rounded corners */
  font-size: 16px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1); /* Subtle inner shadow for depth */
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease; /* Smooth transitions */
}

input:focus {
  border-color: #1abc9c; /* Slightly brighter border on focus */
  box-shadow: 0 0 5px rgba(26, 188, 156, 0.5); /* Add a subtle glow effect on focus */
  outline: none; /* Remove the default outline */
}

input::placeholder {
  color: #7f8c8d; /* Slightly lighter placeholder text */
}
</style>
