<script setup>
// import { ref, reactive, computed } from 'vue'
// import { ref, reactive } from "vue";
import { oldStore } from '../stores/oldStore'

defineProps({
  attributeKey: String,
  attributeName: String,
  attributeValue: Number,
})

const emit = defineEmits(['attribute-changed'])

function attributeChanged() {
  emit
}
</script>

<template>
  <button @click="attributeChanged()">Changed</button>

  <button @click="oldStore.increment">From B: {{ oldStore.count }}</button>

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
      @change="oldStore.updateAttribute({ key: attributeKey, value: currentValue })"
    />
  </div>
</template>

<style scoped>
/* @import '../assets/shared-styles.scss'; */
</style>
