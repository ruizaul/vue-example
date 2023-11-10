<script setup>
import { useCounterStore } from "@/stores/counter";
const counter = useCounterStore();
</script>


<template>
    <div class="counter-app">
        <div class="count-display">
            <h1>Contador: {{ counter.count }}</h1>
        </div>
        <button @click="counter.increment(5)">Incrementar Contador</button>
        <button @click="counter.decrement()">Decrementar Contador</button>
        <button @click="counter.addAndAwait(10)">Incrementar Contador después de 5 segundos</button>

    </div>
</template>

<style scoped>
.counter-app {
    text-align: center;
    margin: 20px;
}

.count-display {
    margin: 10px;
}

button {
    margin: 5px;
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

button:hover {
    background-color: #0056b3;
}
</style>