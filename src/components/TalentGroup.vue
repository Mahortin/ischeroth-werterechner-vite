<script setup>
// import { ref, reactive, computed } from 'vue'
// import { ref, reactive } from "vue";
// import { oldStore } from '../stores/oldStore'
import SingleTalent from './SingleTalent.vue'

defineProps({
  groupKey: String,
  groupName: String,
  talente: Array,
})

function listTalente() {
  window.alert(this.talente)
}
</script>

<template>
  <button @click="listTalente()">TalentGroup</button>

  <div>
    <h2>{{ groupName }}</h2>
    <span>{{ groupKey }}</span>
  </div>
  <SingleTalent
    v-for="talent in talente"
    :key="talent.key"
    :talentName="talent.name"
    :value="talent.basevalue"
  >
  </SingleTalent>
</template>

<style scoped>
/* @import '../assets/shared-styles.scss'; */
</style>
