<template>
    <div>
        <center>
            <v-container class="mt-16">
                <v-row>
                    <v-col cols="12">
                        <h4 class="text-center"><span class="mr-4">  
                            <v-avatar class="mt-n2 ml-n10">       
                                <img
                                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                                    alt="John"
                                >
                            </v-avatar> </span> {{usuario.email}}
                        </h4>
                    </v-col>
                    <br>
                    <v-col cols="12">
                        <h4 class="text-center mb-5 ml-n10"><span class="mr-4">  
                            <v-icon id="icono">mdi-bell</v-icon> </span> Notificaciones
                        </h4>
                    </v-col>
                    <br>
                    <v-col cols="12">
                        <h4 class="text-center mb-5 ml-n16"><span class="mr-4">  
                            <v-icon id="icono">mdi-lock</v-icon> </span> Privacidad
                        </h4>
                    </v-col>
                    <br>
                    <v-col cols="12">
                        <h4 class="text-center mb-5 ml-n16"><span class="mr-4">  
                            <v-icon id="icono">mdi-calendar-blank</v-icon> </span> Calendario
                        </h4>
                    </v-col>
                    <v-container>
                        <v-btn id="boton" @click="cerrarSesion" class="mt-3" block dark depressed color="#ff5252">Cerrar Sesion</v-btn>
                    </v-container>
                </v-row>
            </v-container>
        </center>
        <bottomBar></bottomBar>
    </div>
</template>

<script>
import bottomBar from '../components/bottombar'
import { mapState, mapActions } from 'vuex'

export default {

  components: {
    bottomBar
  },
    
    computed: {
        ...mapState('auth', ['usuario'])
    },

    methods: {
        ...mapActions('auth', ['cerrarSesion'])
    },

}
</script>

<style scoped>
#icono {
   color: black;
}
#boton {
  text-decoration: none;
}
</style>