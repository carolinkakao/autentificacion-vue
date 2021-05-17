<template>
  <div class="home">
    <b-card  class="mx-auto mt-5 bg-danger tarjeta">
      <!-- input mail -->
      <b-form-input v-model="correo" class="mb-2" type="email" placeholder="Agrega tu Email" required></b-form-input>
       <!-- input contraseña -->
      <b-form-input v-model="contrasena" class="mb-2" type="password" aria-describedby="password-help-block" placeholder="Agrega tu Contraseña"></b-form-input>
       <!-- boton validador -->
       <b-button @click="login()" variant="success">Iniciar Sesión</b-button>
    </b-card>
  </div>
</template>
<script>
import { mapActions } from "vuex"
export default {
  name: "Login",
    computed: {
       contrasena: {
      set(value) {
        this.$store.commit('updatePassword', value)
      },
      get() {
        return this.$store.state.contrasena
      },
    },
    correo: {
      
      set(value) {
        this.$store.commit('updateEmail', value)
      },
      get() {
        return this.$store.state.correo
      },
    },
   
  },
  methods: {
    ...mapActions(["login"]),
  }
    }
</script>
<style lang="scss">

</style>