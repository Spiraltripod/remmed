<template>
    <div>
        <v-btn id="boton" class="h5" depressed :to="{name: 'inicio'}"> volver </v-btn>
        <p class="h1 text-center mt-16">Detalles Medicacion</p>
        <v-container class="mt-16">
            <label class="font-weight-bold">Título</label>
            <input v-model="medicamento.titulo" class="form-control mb-3" placeholder="Titulo">

            <label class="font-weight-bold">Pastilla</label>
            <input v-model="medicamento.pastilla" class="form-control mb-3" placeholder="Pastilla">

            <label class="font-weight-bold">Cantidad</label>
            <input v-model="medicamento.cantidad" class="form-control mb-3" placeholder="Cantidad">

            <label class="font-weight-bold">Instrucciones</label>
            <input v-model="medicamento.instrucciones" class="form-control mb-3" placeholder="Instrucciones">

            <label class="mt-5 font-weight-bold">Día de Inicio</label>
            <input v-model="medicamento.start" type="date" class="form-control mb-3">

            <label class="mt-2 font-weight-bold">Día de Finalización</label>
            <input v-model="medicamento.end" type="date" class="form-control mb-3">

            <label class="mt-2 font-weight-bold">Hora</label>
            <br>
            <b-time v-model="medicamento.hora" show locale="en"></b-time>
                
            <v-btn id="boton" @click="editarMedicacion(medicamento)" class=" mt-16" height="50" block dark depressed color="primary">Editar Medicacion</v-btn>
            <v-btn id="boton" @click="eliminarMedicacion({id: id})" class="mb-16 mt-5" height="50" block dark depressed color="#ff5252">Eliminar Medicacion</v-btn>
        </v-container>

        <bottomBar class="mt-10"></bottomBar>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import bottomBar from '../components/bottombar'

export default {
    components: {
        bottomBar
    },

    data() {
        return {
            id: this.$route.params.id,
        }
    },

    computed: {
        ...mapState('crud', ['medicamento'])
    },

    methods: {
        ...mapActions('crud', ['editarMedicacion', 'getMedicamento', 'eliminarMedicacion'])
    },

    created() {
        this.getMedicamento(this.id)
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