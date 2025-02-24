<script setup>
import { characterStore } from '@/stores/characterStore'

const store = characterStore()
</script>

<template>
  <div>
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
    <button
      :class="store.groupfilter.includes('increased') ? 'highlight' : ''"
      @click="store.addFilter('increased')"
    >
      Erhöhte
    </button>
    <button @click="store.resetFilter()">Reset</button>

    <table>
      <tr>
        <th>Talent</th>
        <th>Expertise</th>
        <th>Gruppe</th>
      </tr>
      <tr
        :class="[skill.increased ? 'skill-info highlight' : 'skill-info']"
        v-for="skill in store.getFilteredSkills"
        :key="skill.key"
        :value="skill.value"
      >
        <td>{{ skill.name }}</td>
        <td>{{ skill.value }}</td>
        <td>{{ skill.group }}</td>
      </tr>
    </table>

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
  width: 100%;
}

button.highlight {
  background-color: #93d800; /* Modern blue background for active state */
  color: #422002; /* Change the font color to white when active */
}
</style>
