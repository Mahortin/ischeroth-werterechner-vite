<script setup>
import { combatSkillStore } from '@/stores/combatSkillStore'

const store = combatSkillStore()
</script>

<template>
  <div>
    <h2>Kampf</h2>
    <table>
      <tr>
        <th>Talent</th>
        <th>AT</th>
        <th>PA</th>
        <th>Gruppe</th>
      </tr>
      <tr
        :class="[skill.increased ? 'skill-info highlight' : 'skill-info']"
        v-for="skill in store.getFilteredSkills"
        :key="skill.key"
        :value="skill.value"
      >
        <td>{{ skill.name }}</td>
        <td>{{ skill.attack }}</td>
        <td>{{ skill.defend }}</td>
        <td>{{ skill.group }}</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
button {
  padding: 5px 5px;
  margin: 3px;
  border: none;
  border-radius: 8px; /* Softer edges with rounded corners */
  font-size: 16px;
}

.filter-buttons {
  display: inline-block;
  flex-direction: row;
}

.skill-info {
  /* display: flex; */
  /* justify-content: space-between; */
  /* width: 100%; */
}

.highlight {
  /* display: flex; */
  justify-content: space-between;
  align-items: center;
  /* background-color: #93d800; 
  color: #422002;  */
  color: #93d800;
  font-weight: bold;
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease; /* Smooth transitions */
}

button.highlight {
  background-color: #93d800; /* Modern blue background for active state */
  color: #422002; /* Change the font color to white when active */
}
</style>
