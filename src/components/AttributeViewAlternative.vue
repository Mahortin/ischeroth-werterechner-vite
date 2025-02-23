<script setup>
import { characterStore } from '@/stores/characterStore'

const store = characterStore()
</script>

<template>
  <div class="column">
    <h2>Attribute Alternative</h2>
    <!-- <label>{{ store.attributes }}</label> -->
    <div v-for="attribute in store.attributes" :key="attribute.key" :value="attribute.value">
      <div class="attribute-info">
        <span class="attribute-key">{{ attribute.key }}</span>
        <span class="attribute-name">{{ attribute.name }}</span>
        <input
          :class="increased > 0 ? 'highlight' : ''"
          type="number"
          value="{{ attribute.value }}"
          v-model.number="currentValue"
          placeholder="8"
          min="8"
          max="16"
          @change="updateAttribute(attribute.key, currentValue)"
        />
        <button
          :class="attribute.increased === 2 ? 'highlight' : ''"
          @click="increaseBaseBy(attributeKey, 16)"
        >
          Another thing {{ currentValue }}
        </button>
        <button
          :class="attribute.increased === 2 ? 'highlight' : ''"
          @click="store.setAttribute(attribute.key)"
        >
          {{ currentValue }}
        </button>
        <span>{{ attribute.increased }}</span>
        <div>
          <button
            :class="attribute.increased === 1 ? 'highlight' : ''"
            @click="store.increaseAttribute(attribute.key, 1)"
          >
            +
          </button>
          <button
            :class="attribute.increased === 2 ? 'highlight' : ''"
            @click="store.increaseAttribute(attribute.key, 2)"
          >
            ++
          </button>
        </div>
      </div>
    </div>
    <!-- <button @click="doNothing">Nothing</button>
    <button @click="incrementSkills">+ from component</button> -->
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

input.highlight {
  flex-shrink: 0;
  color: #3acf4b;
}

button {
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 8px; /* Softer edges with rounded corners */
  background-color: #f8f2e8; /* Light gray background */
  color: #333; /* Darker font color */
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease; /* Smooth transition effects */
}
/* Active state: Change only the background color */
button.highlight {
  background-color: #3acf4b; /* Modern blue background for active state */
  color: #713604; /* Change the font color to white when active */
}

/* Hover state: Slight background change and shadow lift */
button:hover {
  background-color: #f5ebda; /* Light gray on hover for normal buttons */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15); /* Increase shadow for hover effect */
}

/* Hover state for active button */
button.highlight:hover {
  background-color: #51cf5f; /* Slightly darker blue on hover */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15); /* Increase shadow for hover effect */
}
</style>
