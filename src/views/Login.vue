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

                <input 
                    placeholder="Correo Electronico"
                    type="email"
                    class="form-control mb-3"
                    v-model="email"
                >
                <input 
                    id="input"
                    placeholder="Contraseña"
                    type="password"
                    class="form-control mb-3"
                    v-model="pass"
                >

                <v-btn id="boton" @click="ingresoUsuario({email: email, pass: pass})" class="mt-10" height="50" block dark depressed color="#00514e" >Iniciar Sesion</v-btn>
                <v-btn id="boton" :to="{name: 'CrearCuenta'}" class="mt-3" height="50" block dark depressed color="#00514e">Crear Cuenta</v-btn>
                <v-btn id="boton" class="mt-3" height="50" text block depressed >¿Olvido su Contraseña?</v-btn>
              </v-card-text>
          </v-container>
        </v-card>
      </v-row>
</template>

<script>
import { mapActions } from 'vuex';

export default {

    data() {
        return {
            email: '',
            pass: '',
        }
    },

    methods: {
        ...mapActions('auth', ['ingresoUsuario'])
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