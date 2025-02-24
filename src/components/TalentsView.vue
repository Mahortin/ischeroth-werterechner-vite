<script setup>
import { characterStore } from '@/stores/characterStore'

const store = characterStore()

// function doNothing() {
//   window.confirm(store)
// }

// function incrementSkills() {
//   store.skills.forEach((skill) => {
//     skill.value++
//   })
// }
</script>

<template>
  <div class="column">
    <h2>Testarea</h2>
    <label>Filter: {{ store.groupfilter }}</label>
    <div
      :class="[skill.increased ? 'skill-info-highlighted' : 'skill-info']"
      v-for="skill in store.getFilteredSkills"
      :key="skill.key"
      :value="skill.value"
    >
      <label>{{ skill.key }}: {{ skill.value }}</label>
      <label>{{ skill.increased }}</label>
      <label>{{ skill.group }}</label>
    </div>

    <h2>Talente</h2>
    <!-- <label>{{ store.attributes }}</label> -->
    <div class="filter-buttons" v-for="group in store.skillgroups" :key="group.key">
      <button
        :class="store.groupfilter.includes(group.key) ? 'highlight' : ''"
        @click="store.addFilter(group.key)"
      >
        {{ group.name }}
      </button>
    </div>
    <div
      :class="[skill.increased ? 'skill-info-highlighted' : 'skill-info']"
      v-for="skill in store.getFilteredSkills"
      :key="skill.key"
      :value="skill.value"
    >
      <label>{{ skill.key }}: {{ skill.value }}</label>
      <label>{{ skill.increased }}</label>
      <label>{{ skill.group }}</label>
    </div>
    <!-- <button @click="doNothing">Nothing</button>
    <button @click="incrementSkills">+ from component</button> -->
  </div>
</template>

<style scoped>
.filter-buttons {
  display: inline-block;
  flex-direction: row;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.skill-info-highlighted {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3acf4b; /* Slightly darker greenish background on hover */
  color: #713604; /* Change the font color to white when active */
  border-radius: 8px; /* Rounded corners for a modern feel */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05); /* Soft shadow for depth */
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease; /* Smooth transitions */
  font-weight: bold; /* bold font for emphasis */
  width: 100%;
}

button.highlight {
  background-color: #3acf4b; /* Modern blue background for active state */
  color: #713604; /* Change the font color to white when active */
}
</style>
