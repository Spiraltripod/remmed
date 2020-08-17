<template>
      <v-row>
        <v-card id="background" class="text-center" width="10000" height="970">
          <v-container>
            <center>
              <v-card-text>
                <v-img src="@/assets/logo.png" width="500"></v-img>
              </v-card-text>
            </center>

              <v-card-text>
                <b-alert v-if="alerta == 1" show variant="success">Se ha Enviado un Correo a tu Email</b-alert>

                <input 
                    placeholder="Correo Electronico"
                    type="email"
                    class="form-control mb-3"
                    v-model="email"
                >

                <v-btn id="boton" @click="reestablecerContrasena(email)" class="mt-10" height="50" block dark depressed color="#00514e" >Reestablecer Contraseña</v-btn>
                <v-btn id="boton" :to="{name: 'login'}" class="mt-3" height="50" text block depressed >Volver</v-btn>
              </v-card-text>
          </v-container>
        </v-card>
      </v-row>
</template>

<script>
import { mapActions } from 'vuex';
import { auth } from '@/firebase'
import router from '@/router'

export default {

    data() {
        return {
            email: '',
            alerta: 0
        }
    },

    methods: {
        reestablecerContrasena(email) {
            console.log(email);
            const uno = 1
            this.alerta = uno
            
            auth.sendPasswordResetEmail(email).then(function() {
              setTimeout(function() {
                router.push({name:'login'})
              }, 3000)
            // Email sent.
            }).catch(function(error) {
                console.log(error);
            });
        }
    },
  
}
</script>

<style scoped>
input {
  border-radius: 100px;
  background-color: rgb(255, 255, 255);
}

#background {
  background-color: rgb(228, 228, 228);
}

#boton {
  text-decoration: none;
}
</style>