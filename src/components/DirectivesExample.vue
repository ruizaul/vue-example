<script>
import PropsComponent from './PropsExample.vue';

export default {
    components: {
        PropsComponent,
    },
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
            // Método para incrementar el contador
            this.count++;
        },
        toggleParagraph() {
            // Método para alternar la visibilidad del párrafo
            this.showParagraph = !this.showParagraph;
        },
    },
};
</script>

<template>
    <section class="directive-examples">

        <img src="/src/assets/Vue.svg" alt="logo pinia" width="50" height="50">
        <h1>Directivas en Vue</h1>

        <div class="example">
            <!-- Ejemplo de v-on o @ para manejar eventos -->
            <h2>v-on</h2>
            <button @click="incrementCount">Incrementar Contador</button>
            <p>Contador: {{ count }}</p>
        </div>

        <PropsComponent :propCount="count" />

        <div class="example">
            <!-- Ejemplo de v-if para mostrar/ocultar un elemento -->
            <h2>v-if</h2>
            <p v-if="showParagraph">Este párrafo se muestra si showParagraph es verdadero.</p>
            <button @click="toggleParagraph">Mostrar u ocultar párrafo</button>
        </div>

        <div class="example">
            <!-- Ejemplo de v-for para repetir elementos -->
            <h2>v-for</h2>
            <ul>
                <li v-for="(item, index) in items" :key="index">{{ item }}</li>
            </ul>
        </div>

        <div class="example">
            <!-- Ejemplo de v-model para la entrada de texto -->
            <h2>v-model</h2>
            <input v-model="message" placeholder="Escribe algo" />
            <p>Texto introducido: {{ message }}</p>
        </div>

    </section>
</template>

<style scoped>
/* Estilos específicos para este componente Vue */
h1,
h2,
p,
li {
    color: #ffffff;
}

/* Estilos generales del contenedor */
.directive-examples {
    text-align: center;
    padding: 5px;
    margin: 40px;
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

/* Estilos para la entrada de texto */
input {
    padding: 10px;
    margin-bottom: 10px;
}

/* Estilos para el botón de mostrar/ocultar párrafo */
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

/* Estilos para la lista de elementos */
ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin-bottom: 5px;
}

/* Estilos para el párrafo y el contador */
p {
    font-size: 18px;
}
</style>
