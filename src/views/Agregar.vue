<template>
    <div>
        <v-btn id="boton" class="h5" depressed :to="{name: 'inicio'}"> volver </v-btn>
        <p class="h1 text-center mt-16">Agregar Nueva Medicacion</p>
        <v-container class="mt-16">
            <label class="font-weight-bold">Título</label>
            <input v-model="titulo" class="form-control mb-3" >

            <label class="font-weight-bold">Pastilla</label>
            <input v-model="pastilla" class="form-control mb-3" >

            <label class="font-weight-bold">Cantidad</label>
            <input v-model="cantidad" class="form-control mb-3" >

            <label class="font-weight-bold">Instrucciones</label>
            <input v-model="instrucciones" class="form-control mb-3" >

            <label class="mt-5 font-weight-bold">Día de Inicio</label>
            <input v-model="start" type="date" class="form-control mb-3" >

            <label class="mt-2 font-weight-bold">Día de Finalización</label>
            <input v-model="end" type="date" class="form-control mb-3">

            <label class="mt-2 font-weight-bold">Hora</label>
            <br>
            <b-time v-model="hora" show locale="en"></b-time>

            <v-btn id="boton" @click="agregarMedicacion({titulo: titulo, pastilla: pastilla, cantidad: cantidad, instrucciones: instrucciones, start: start, end: end, hora: hora, terminado: terminado})" class="mb-16 mt-16" height="50" block dark depressed color="success">Crear Medicacion</v-btn>
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
            hora: '',
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
