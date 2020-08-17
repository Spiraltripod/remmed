<template>
  <div>
    <v-container>
      <p class="h1 ml-16 mt-lg-16 text-center">Medicaciones</p>

            <b-list-group class="mb-16">
                <b-list-group-item v-for="medicamento in medicaciones" :key="medicamento.id">
                    <b-row align-h="end">
                        <b-col class="mt-2" cols="2">
                            <v-btn id="boton" :to="{name:'editar', params: {id: medicamento.id}}" color="white" depressed fab x-small>
                              <v-icon>mdi-information</v-icon>
                            </v-btn>
                        </b-col>

                        <b-col  class="mt-2" cols="8">
                            <P class="h5">{{medicamento.titulo}}</P>

                            <p class="mt-2 font-weight-bold">Pastilla: 
                              <span class="font-weight-regular">{{medicamento.pastilla}}</span> 
                            </p>

                            <p class="mt-2 font-weight-bold">Hora: 
                              <span class="font-weight-regular">{{medicamento.hora}}</span> 
                            </p>
                        </b-col>

                        <b-col class="mt-n3" cols="2">
                            <v-switch class="mb-n10" color="success" ></v-switch>
                        </b-col>
                    </b-row>
                </b-list-group-item>                   
            </b-list-group>
      <v-btn id="boton" class="mb-16" height="50" block dark depressed color="success" :to="{name: 'agregar'}">Agregar</v-btn>
    </v-container>
    <bottomBar class="mt-10"></bottomBar>
  </div>
</template>

<script>
import bottomBar from '../components/bottombar'
import { mapActions, mapState } from 'vuex'

export default {
    components: {
      bottomBar
    },

    data() {
      return {
        medicamentoHoy: [],
        medicamentoManana: ''
      }
    },

    created() {
        this.getMedicaciones()
    },

    computed: {
        ...mapState('crud', ['medicaciones']),
        ...mapState('auth', ['usuario']),
    },

    methods: {
        ...mapActions('crud', ['getMedicaciones', 'eliminarMedicacion']),
    },

}
</script>

<style scoped>
#boton {
  text-decoration: none;
}
</style>
