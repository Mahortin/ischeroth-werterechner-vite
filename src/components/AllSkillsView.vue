<script setup>
import SkillsFilter from './SkillsFilter.vue'
import CombatSkillsView from './CombatSkillsView.vue'
import SkillView from './SkillsView.vue'
</script>

<template>
  <div class="column">
    <h2>Talente</h2>
    <SkillsFilter />
    <CombatSkillsView />
    <SkillView />
  </div>
</template>

<style scoped></style>
