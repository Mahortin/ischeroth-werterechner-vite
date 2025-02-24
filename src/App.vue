<script setup>
import HelloWorld from './components/HelloWorld.vue'
import AttributesView from './components/AttributesView.vue'
import TalentsView from './components/TalentsView.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/phoenix.svg" width="125" height="125" />
    <div class="wrapper">
      <HelloWorld msg="Ischeroth Werterechner" />
    </div>
  </header>

  <main class="splitSection">
    <AttributesView />
    <TalentsView />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  background-color: #00261f;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
    color: white;
  }

  header .wrapper {
    display: flex;
    place-items: center;
    flex-wrap: wrap;
  }
}
</style>
