<script setup>
// import { ref, reactive, computed } from 'vue'
// import { ref, reactive } from "vue";
import { defineProps } from 'vue'
// import { store } from "@/store/store";

defineProps({
  talentKey: String,
  talentName: String,
  talentValue: Number,
})

function listTalente() {
  window.alert(this.talentKey + ' ' + this.talentName + ' ' + this.talentValue)
}
</script>

<template>
  <button @click="listTalente()">SingleTalent</button>

  <div>
    <span>{{ talentKey }}</span>
    <span>{{ talentName }}</span>
    <span>{{ talentValue }}</span>
  </div>
</template>

<style scoped>
@import '../assets/shared-styles.scss';
</style>
