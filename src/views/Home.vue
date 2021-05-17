<template>
  <div>
<button class="btn bg-danger" @click="cerrarSesion">Cerrar Sesión</button>  
  </div>
</template>
<script>
import Firebase from "firebase"
export default {
  name: "Home",
  methods: {
    cerrarSesion() {Firebase.auth().signOut().then((accept) => {
          console.log(accept);
          this.$router.push("login");
        });
    },
  },
};
</script>

