import { createStore } from 'vuex'

const store = createStore({
  state: {
    cart: [],
    phoneNumber: null,
    isPhoneSaved: false // propiedad agregada
  },
  mutations: {
    addToCart(state, product) {
      state.cart.push(product)
    },
    removeFromCart(state, product) {
      const index = state.cart.findIndex(p => p.name === product.name)
      if (index !== -1) {
        state.cart.splice(index, 1)
      }
    },

    // setPhoneNumber(state, phoneNumber) {
    //   state.phoneNumber = phoneNumber
    // }
    setPhoneNumber(state, phoneNumber) {
      state.phoneNumber = phoneNumber
    }
  },

  actions: {
    addToCart({ commit }, product) {
      commit('addToCart', product)
    },
    removeFromCart({ commit }, product) {
      commit('removeFromCart', product)
    },

    // setPhoneNumber({ commit }, phoneNumber) {
    //   commit('setPhoneNumber', phoneNumber)
    // }
    setPhoneNumber({ state, commit }, phoneNumber) {
      if (!state.isPhoneSaved) { // verificación agregada
        console.log('setPhoneNumber', phoneNumber)
        console.log('isphone', state.isPhoneSaved)
        commit('setPhoneNumber', phoneNumber)
        state.isPhoneSaved = true // establecer isPhoneSaved en true
      }
    }
  },

  getters: {
    getPhoneNumber: state => state.phoneNumber
  }
})

export default store
