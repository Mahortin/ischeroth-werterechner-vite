<script setup>
function doSth() {
  window.confirm('Do something - this will be implemented')
}
</script>

<template>
  <div class="column">
    <h2>SimpleComponent</h2>

    <button @click="doSth">
      Click me!
      <!-- mybutton -->
    </button>
  </div>
</template>

<style scoped></style>
