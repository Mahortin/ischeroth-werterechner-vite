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
    </div>
  </div>
</template>

<style scoped>
.attribute-info {
  display: flex;
  justify-content: space-between;
  align-content: space-between;
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
  /* background-color: #2c3e50;  */
  color: #ecf0f1; /* Light text for contrast */
  /* border: 1px solid #34495e; */
  padding: 2px 2px;
  font-size: 16px;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease; /* Smooth transitions */
}

label.highlight {
  flex-shrink: 0;
  color: #93d800;
  font-weight: bold;
}

button {
  padding: 5px 10px;
  margin: 3px;
  border: none;
  border-radius: 8px; /* Softer edges with rounded corners */
  font-size: 16px;
}

button.adjust-attribute {
  background-color: #f8f2e8; /* Light gray background */
  color: #333; /* Darker font color */
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease; /* Smooth transition effects */
}

button.add {
  background-color: #4500d8;
  color: white;
}
button.reduce {
  background-color: #d80027;
  color: white;
}

button.increase {
  background-color: #f8f2e8; /* Light gray background */
  color: #333; /* Darker font color */
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease; /* Smooth transition effects */
}
/* Active state: Change only the background color */
button.highlight {
  background-color: #93d800; /* Modern blue background for active state */
  color: #422002; /* Change the font color to white when active */
}

/* Hover state: Slight background change and shadow lift */
button:hover {
  background-color: #00d8b1; /* Light gray on hover for normal buttons */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15); /* Increase shadow for hover effect */
}

/* Hover state for active button */
button.highlight:hover {
  background-color: #7fbb00ff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}
</style>
