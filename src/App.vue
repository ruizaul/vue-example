<script setup>
import CounterComponent from './components/PiniaCounter.vue';
import CounterComponent2 from './components/PiniaCounter2.vue';
import DirectivesComponent from './components/DirectivesExample.vue';
</script>

<template>
  <main>
    <DirectivesComponent />
    <CounterComponent />
    <CounterComponent2 />
  </main>
</template>

<style>
/* Aquí especificamos que queremos usar la fuente Inter para todo el componente */
* {
  font-family: 'Inter';
}

/* Agrega otros estilos según sea necesario */
body {
  background-color: #4e6d5f;
}
</style>
