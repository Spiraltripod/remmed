<template>
    <div>
        <v-btn id="boton" class="h5" depressed :to="{name: 'inicio'}"> volver </v-btn>
        <p class="h1 text-center mt-16">Detalles Medicacion</p>
        <v-container class="mt-16">

            <input v-model="medicamento.titulo" class="form-control mb-3" placeholder="Titulo">
            <input v-model="medicamento.pastilla" class="form-control mb-3" placeholder="Pastilla">
            <input v-model="medicamento.cantidad" class="form-control mb-3" placeholder="Cantidad">
            <input v-model="medicamento.instrucciones" class="form-control mb-3" placeholder="Instrucciones">
            <input v-model="medicamento.start" type="date" class="form-control mb-3">
            <input v-model="medicamento.end" type="date" class="form-control mb-3">

            <v-btn id="boton" @click="editarMedicacion(medicamento)" class="mb-16 mt-16" block dark depressed color="#ff5252">Editar Medicacion</v-btn>
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
        ...mapActions('crud', ['editarMedicacion', 'getMedicamento'])
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