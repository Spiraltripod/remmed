<template>
  <div>
    <v-container>
      <p class="h1 ml-16 mt-lg-16">Para Hoy</p>

            <b-list-group class="mb-16">
                <b-list-group-item v-for="medicamento in medicaciones" :key="medicamento.id">
                    <b-row align-h="end">
                        <b-col class="mt-2" cols="1">
                            <v-btn id="boton" :to="{name:'editar', params: {id: medicamento.id}}" color="white" depressed fab x-small>
                              <v-icon>mdi-information</v-icon>
                            </v-btn>
                            <v-icon @click="eliminarMedicacion({id: medicamento.id})">mdi-delete</v-icon>
                        </b-col>

                        <b-col class="mt-2" cols="9">
                            <P class="h5">{{medicamento.titulo}}</P>
                            {{medicamento.pastilla}}
                            {{medicamento.hora}}
                        </b-col>

                        <b-col class="mt-n3" cols="2">
                            <v-switch class="mb-n10" color="success" ></v-switch>
                        </b-col>
                    </b-row>
                </b-list-group-item>                   
            </b-list-group>

      <v-btn id="boton" class="mb-16" block dark depressed color="#ff5252" :to="{name: 'agregar'}">Agregar</v-btn>
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

    created() {
        this.getMedicaciones()
    },

    methods: {
        ...mapActions('crud', ['getMedicaciones', 'eliminarMedicacion'])
    },

    computed: {
        ...mapState('crud', ['medicaciones']),
        ...mapState('auth', ['usuario'])
    },

}
</script>

<style scoped>
#boton {
  text-decoration: none;
}
</style>
