<template>
    <div>
        <!-- Ejemplo de v-model para la entrada de texto -->
        <input v-model="message" placeholder="Escribe algo" />
        <p>Texto introducido: {{ message }}</p>

        <!-- Ejemplo de v-if para mostrar/ocultar un elemento -->
        <p v-if="showParagraph">Este párrafo se muestra si showParagraph es verdadero.</p>
        <button @click="toggleParagraph">Mostrar u ocultar párrafo</button>
        <!-- Ejemplo de v-for para repetir elementos -->
        <ul>
            <li v-for="(item, index) in items" :key="index">{{ item }}</li>
        </ul>

        <!-- Ejemplo de v-on o @ para manejar eventos -->
        <button @click="incrementCount">Incrementar Contador</button>
        <p>Contador: {{ count }}</p>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            message: '',
            showParagraph: true,
            items: ['Manzana', 'Banana', 'Cereza', 'Dátil'],
            count: 0,
        };
    },
    methods: {
        incrementCount() {
            this.count++;
        },
        toggleParagraph() {
            this.showParagraph = !this.showParagraph;
        },
    },
};
</script>

<style scoped>
/* Estilos específicos para este componente Vue */
div {
    text-align: center;
    margin: 20px;
}

input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
}

button {
    background-color: #007BFF;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

button:hover {
    background-color: #0056b3;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin-bottom: 5px;
}

p {
    font-size: 18px;
}
</style>
  