<template>
    <div>
        <v-btn id="boton" class="h5" depressed :to="{name: 'inicio'}"> volver </v-btn>
        <p class="h1 text-center mt-16">Agregar Nueva Medicacion</p>
        <v-container class="mt-16">

            <input v-model="titulo" class="form-control mb-3" placeholder="Titulo">
            <input v-model="pastilla" class="form-control mb-3" placeholder="Pastilla">
            <input v-model="cantidad" class="form-control mb-3" placeholder="Cantidad">
            <input v-model="instrucciones" class="form-control mb-3" placeholder="Instrucciones">
            <input v-model="start" type="date" class="form-control mb-3" >
            <input v-model="end" type="date" class="form-control mb-3">

            <v-btn id="boton" @click="agregarMedicacion({titulo: titulo, pastilla: pastilla, cantidad: cantidad, instrucciones: instrucciones, start: start, end: end, terminado: terminado})" class="mb-16 mt-16" block dark depressed color="#ff5252">Crear Medicacion</v-btn>
        </v-container>

        <bottomBar class="mt-10"></bottomBar>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import bottomBar from '../components/bottombar'

export default {
    components: {
        bottomBar
    },

    data() {
        return {
            titulo: '',
            pastilla: '',
            cantidad: '',
            instrucciones: '',
            start: '',
            end: '',
            terminado: false
        }
    },

    methods: {
        ...mapActions('crud', ['agregarMedicacion'])
    },


}
</script>

<style scoped>
input {
  border-radius: 100px;
  background-color: rgb(255, 255, 255);
}

#boton {
  text-decoration: none;
}
</style>
