import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import boards from '@/static/boards.js'
import uuidv1 from 'uuid/v1'
import createPersistedState from "vuex-persistedstate";
import * as Cookies from "js-cookie";
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    boards
  },
  plugins: [createPersistedState({
    key: 'boardapp',
    storage: window.sessionStorage
  })],
  mutations: {
    updateBoard(state, board){
      var foundBoard = _.find(state.boards, {id: board.id})

      foundBoard = board
    },
    addCard(state, payload) {
      var board = state.boards[payload.board]
      board.cards = board.cards.concat({
        id: uuidv1(),
        text: payload.text
      })
    },
    moveCard(state, payload){
        const from = state.boards[payload.from]
        const to = state.boards[payload.to]
        from.cards = from.cards.filter(c => c.id !== payload.card.id)
        to.cards = to.cards.concat(payload.card)
    }
  },
  actions: {

  },
  getters: {
    boards: (state, getters) => _.sortBy(state.boards, 'id')
  }
})

store.subscribe((mutation, state) => {
  console.log(mutation, state);

  // Store the state object as a JSON string
  localStorage.setItem('boards', JSON.stringify(state.boards));
});

export default store