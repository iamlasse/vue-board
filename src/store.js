import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import boards from '@/static/boards.js'
// import VuexPersistence from 'vuex-persist'
import createPersistedState from "vuex-persistedstate";
import * as Cookies from "js-cookie";
Vue.use(Vuex)

// const vuexLocal = new VuexPersistence({
//   key: 'vuex-app',
//   storage: window.localStorage,
//   reducer: (state) => ({
//     boards: state.boards
//   }),
//   filter: (mutation) => (mutation.type === 'moveCard' || mutation.type == 'addCard')
// })

const store = new Vuex.Store({
  state: {
    boards
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })],
  mutations: {
    updateBoard(state, board){
      var foundBoard = _.find(state.boards, {id: board.id})

      foundBoard = board
    },
    addCard(state, payload) {
      var board = _.find(state.boards, {id: payload.id})
      var lastId = board.id * 100
      if(board.cards.length)
        lastId = board.cards[board.cards.length - 1].id +1

      board.cards.push({
        id: lastId,
        text: payload.text
      })
    },
    moveCard(state, payload){

        var from = _.find(state.boards, {
          id: payload.from
        })

        var to = _.find(state.boards, {
          id: payload.to
        })

       console.log(to.cards.length + to.id*100)
        var card = {
          id: to.id * 100 + to.cards.length,
          text: payload.card.text
        }
        var index = from.cards.findIndex(el => el.id == payload.card.id)
        to.cards.unshift(card)
        from.cards.splice(index, 1)


    }
  },
  actions: {

  },
  getters: {
    allBoards: (state, getters) => _.sortBy(state.boards, 'id')
  }
})

store.subscribe((mutation, state) => {
  // Store the state object as a JSON string
  // localStorage.setItem('boards', JSON.stringify(state.boards));
});

export default store