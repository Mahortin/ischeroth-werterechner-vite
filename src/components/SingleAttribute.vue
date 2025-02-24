<script setup>
// import { ref, reactive, computed } from 'vue'
// import { ref, reactive } from "vue";
import { characterStore } from '@/stores/characterStore'
import { storeToRefs } from 'pinia'

defineProps({
  attributeKey: String,
  attributeName: String,
  attributeValue: Number,
  increased: Number,
})

const store = characterStore()
const { getValueByKey } = storeToRefs(store)
</script>

<template>
  <div class="attribute-info">
    <span class="attribute-key">{{ attributeKey }}</span>
    <span class="attribute-name">{{ attributeName }}</span>
    <label :class="increased > 0 ? 'highlight' : ''">{{ getValueByKey(attributeKey) }}</label>
    <div>
      <button class="adjust-attribute add" @click="store.addToAttribute(attributeKey, 1)">
        +1
      </button>
      <button class="adjust-attribute add" @click="store.addToAttribute(attributeKey, 5)">
        +5
      </button>
      <button class="adjust-attribute reduce" @click="store.addToAttribute(attributeKey, -5)">
        -5
      </button>
      <button class="adjust-attribute reduce" @click="store.addToAttribute(attributeKey, -1)">
        -1
      </button>
    </div>
    <div>
      <button
        :class="increased === 1 ? 'increase highlight' : 'increase'"
        @click="store.increaseAttribute(attributeKey, 1)"
      >
        +
      </button>
      <button
        :class="increased === 2 ? 'increase highlight' : 'increase'"
        @click="store.increaseAttribute(attributeKey, 2)"
      >
        ++
      </button>
      <span>{{ increased }}</span>
    </div>
  </div>
</template>

<style scoped>
.attribute-info {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.arrange-horizontally > * {
  display: inline-block;
  text-align: center;
}
.arrange-vertically > * {
  display: block;
}

label {
  background-color: #2c3e50; /* Darker background for modern look */
  color: #ecf0f1; /* Light text for contrast */
  border: 1px solid #34495e; /* Subtle, softer border */
  padding: 5px 8px;
  border-radius: 6px; /* Rounded corners */
  font-size: 16px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1); /* Subtle inner shadow for depth */
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease; /* Smooth transitions */
}

label:focus {
  border-color: #1abc9c; /* Slightly brighter border on focus */
  box-shadow: 0 0 5px rgba(26, 188, 156, 0.5); /* Add a subtle glow effect on focus */
  outline: none; /* Remove the default outline */
}

label::placeholder {
  color: #7f8c8d; /* Slightly lighter placeholder text */
}

label.highlight {
  flex-shrink: 0;
  color: #3acf4b;
}

button.adjust-attribute {
  padding: 3px 7px;
  margin: 3px;
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

button.add {
  background-color: greenyellow; /* Light gray background */
}
button.reduce {
  background-color: coral; /* Light gray background */
}

button.increase {
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
