<script setup>
import { useCounterStore } from "@/stores/counter";
const counter = useCounterStore();
</script>

<template>
    <div class="pinia-counter-app">
        <h1>Pinia Counter - Componente 2</h1>
        <div class="counter-app">
            <div class="count-display">
                <h2>Contador: {{ counter.count }}</h2>
            </div>
            <button @click="counter.increment(5)">Incrementar Contador</button>
            <button @click="counter.decrement()">Decrementar Contador</button>
            <button @click="counter.addAndAwait(10)">Incrementar Contador después de 5 segundos</button>
        </div>
    </div>
</template>

<style scoped>
/* Estilos específicos para este componente Vue */

.pinia-counter-app {
    text-align: center;
    margin: 20px;
}

h1,
h2 {
    font-size: 28px;
    margin-bottom: 20px;
    color: #f0f0f0;
}

.counter-app {
    padding: 20px;
    background-color: #e6c226d0;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.count-display {
    margin: 10px 0;
}

button {
    margin: 10px 5px;
    padding: 12px 24px;
    background-color: #007BFF;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #0056b3;
}
</style>
