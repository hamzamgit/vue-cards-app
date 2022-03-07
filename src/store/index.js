import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [
      {
        card_number: "4444-1000-2000-1000",
        first_name: "Jose",
        last_name: "Rizal",
        membership_tier: "gold",
      },
      {
        card_number: "4444-1000-2000-2000",
        first_name: "Juan",
        last_name: "Luna",
        membership_tier: "silver",
      },
      {
        card_number: "4444-1000-2000-3000",
        first_name: "Marcelo",
        last_name: "Del Pilar",
        membership_tier: "bronze",
      },
    ],
    card_number: 1001 //For demo purpose only.
  },
  mutations: {
    newCard(state, cards) {
      state.cards = cards
      state.card_number = state.card_number++
    }
  },
  actions: {
    newCardAction({ commit, state}, card) {
      card = {
        card_number: `4444-1000-2000-${state.card_number++}`,
        ...card
      }
      commit('newCard', [...state.cards, card])
    }
  },
  getters: {
    getCardDetailById: (state) => (cardNumber) => {
      return state.cards.find(card => card.card_number === cardNumber) || {}
    }
  }
})
