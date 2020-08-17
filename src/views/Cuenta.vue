<template>
    <div>
        <v-btn id="boton" class="h5" depressed :to="{name: 'ajustes'}"> volver </v-btn>
        <p class="h1 text-center mt-16">Ajustes de Cuenta</p>

        <v-container>
            <b-alert v-if="alerta == 1" show variant="success">Se ha Enviado un Correo a tu Email</b-alert>
        </v-container>

        <v-container class="mt-16" v-if="abrir == 1">

            <label class="font-weight-bold">Escribe tu Correo Electronico</label>
            <input v-model="email" class="form-control mb-3" >

            <v-btn id="boton" @click="cambiarPassword(email)" class="mb-16 mt-16" height="50" block dark depressed color="success">Enviar Correo</v-btn>
        </v-container>
        
        <v-container v-if="abrir == 0">
            <v-row>
                <v-col cols="12">
                    <v-btn id="boton" @click="abrir = 1" class=" mt-16" height="50" block dark depressed color="primary">Cambiar Contraseña</v-btn>
                </v-col>
            </v-row>
        </v-container>

        <bottomBar class="mt-10"></bottomBar>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { auth } from '@/firebase'
import bottomBar from '../components/bottombar'

export default {

    components: {
      bottomBar
    },

    data() {
        return {
            email: '',
            abrir: 0,
            alerta: 0
        }
    },

    computed: {
        ...mapState('auth', ['usuario'])
    },

    methods: {
        cambiarPassword(email) {
            console.log(email);
            const cero = 0
            const uno = 1
            
            auth.sendPasswordResetEmail(email)
            .then(function() {
                console.log(`correo enviado a ${email}`);
                
            })
            .catch(function(error) {
                console.log(error);
            });

            this.alerta = uno
            this.abrir = cero
        },
    },
}
</script>