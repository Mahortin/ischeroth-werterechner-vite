<script setup>
// import { ref, reactive, computed } from 'vue'
import { ref, reactive } from 'vue'
import SingleAttribute from './SingleAttribute.vue'
import { oldStore } from '../stores/oldStore'
// const count = ref(0);
const user = reactive({
  email: '',
  password: '',
})

const obj = ref({
  nested: { count: 0 },
  arr: ['foo', 'bar'],
})

function login() {
  user.email = 'john doe'
}

function mutateDeeply() {
  // these will work as expected.
  obj.value.nested.count++
  obj.value.arr.push('baz')
}

function warning() {
  window.confirm('sometext')
}
</script>

<template>
  <div class="column">
    <h1>Eigenschaften</h1>
    <SingleAttribute
      v-for="attribute in oldStore.attributes"
      :key="attribute.key"
      :attributeKey="attribute.key"
      :attributeName="attribute.name"
      :attributeValue="attribute.basevalue"
      @attribute-changed="oldStore.updateAttribute(attribute)"
    >
    </SingleAttribute>

    <h1>Übungsbereich</h1>
    <button @click="warning">WARNING!</button>
    <button @click="oldStore.updateAttribute(null)">update Attribute</button>
    <button @click="oldStore.increment">From A: {{ oldStore.count }}</button>

    <!-- count for reactive example -->
    <button @click="login">Login</button>
    <span> User logged in: {{ user.email }} </span>

    <button v-if="user.email == 'john doe'" @click="mutateDeeply">
      {{ obj.arr }}
      <!-- mybutton -->
    </button>

    <button @click="mutateDeeply">
      {{ obj.nested.count }}
      <!-- mybutton -->
    </button>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
/* @import '../assets/shared-styles.scss'; */
</style>
