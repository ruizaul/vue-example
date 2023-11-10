<script>
export default {
    props: {
        propCount: Number,
    },
    data() {
        return {
            // Puedes mantener un contador local si deseas realizar cambios en él.
            // Si solo quieres mostrar el valor de propCount, puedes omitir este paso.
            localCount: this.propCount || 0,
        };
    },
    methods: {
        incrementLocalCount() {
            // Método para incrementar el contador local
            this.localCount++;
        },
    },
    watch: {
        // Observa cambios en la propCount y actualiza localCount
        propCount(newValue) {
            this.localCount = newValue;
        },
    },
};
</script>

<template>
    <div class="example">
        <!-- Ejemplo de v-model para la entrada de texto -->
        <h2>Props</h2>
        <p>Contador: {{ localCount }}</p>

        <!-- Botón para aumentar el contador local -->
        <button @click="incrementLocalCount">Incrementar Contador Local</button>
    </div>
</template>

<style scoped>
/* Estilos específicos para este componente Vue */

h1,
h2,
p,
li {
    color: #ffffff;
}

/* Estilos para cada ejemplo */
.example {
    margin-bottom: 40px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #212221d8;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Estilos para el botón de mostrar/ocultar párrafo y el botón de incremento */
button {
    margin-top: 10px;
    background-color: #007BFF;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #0056b3;
}

/* Estilos para el párrafo y el contador */
p {
    font-size: 18px;
}
</style>
