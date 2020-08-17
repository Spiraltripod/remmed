<template>
    <div>
        <center>
            <v-container class="mt-16">
                <v-row>
                    <v-col cols="12">
                        <h4 class="text-center"><span class="mr-4">  
                            <v-avatar class="mt-n2 ml-n10">       
                            </v-avatar> </span> Bienvenido {{usuario.email}}
                        </h4>
                    </v-col>
                    <br>
                    <v-col cols="12">
                         <v-btn id="boton" :to="{name: 'cuenta'}" class="mt-3" block depressed text> 
                             <v-icon id="icono" class="mr-2">mdi-account</v-icon>
                             Cuenta
                        </v-btn>
                    </v-col>
                    <br>
                    <v-col cols="12">
                         <v-btn id="boton" class="mt-3" block depressed text> 
                             <v-icon id="icono" class="mr-2">mdi-lock</v-icon>
                             Privacidad
                        </v-btn>
                    </v-col>
                    <br>
                    <v-container>
                        <v-btn id="boton" @click="cerrarSesion" class="mt-3" height="50" block dark depressed color="#ff5252">Cerrar Sesion</v-btn>
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