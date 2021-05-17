import Vue from "vue";
import Vuex from "vuex";
import router from '@/router'
import firebase from "firebase"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    correo: "",
    contrasena: ""
  },
  mutations: {
    log_in() {
      router.push("home");
    },
    updateEmail (state, correo) {
      state.correo = correo
    },
    updatePassword (state, contrasena) {
      state.contrasena = contrasena
    }
  },
  actions: {
    login({ state, commit }) {
      firebase
        .auth().signInWithEmailAndPassword(state.correo, state.contrasena).then((userCredential) => {
        console.log(userCredential);
          commit('log_in')
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },

});