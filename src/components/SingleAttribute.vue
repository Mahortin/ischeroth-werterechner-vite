<script setup>
// import { ref, reactive, computed } from 'vue'
// import { ref, reactive } from "vue";
import { defineProps, defineEmits } from 'vue'
import { store } from '@/store/store'

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

  <button @click="store.increment">From B: {{ store.count }}</button>

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
      @change="store.updateAttribute({ key: attributeKey, value: currentValue })"
    />
  </div>
</template>

<style scoped>
@import '../assets/shared-styles.scss';
</style>
