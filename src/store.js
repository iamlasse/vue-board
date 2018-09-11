import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import boards from '@/static/boards.js'
import uuidv1 from 'uuid/v1'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    boards,
    notes: []
  },
  plugins: [createPersistedState({key: 'boardapp', storage: window.sessionStorage})],
  mutations: {
    updateBoard(state, board) {
      var foundBoard = state.boards[board]
      if (foundBoard) 
        foundBoard = board
    },
    addCard(state, payload) {
      var board = state.boards[payload.board]
      board.cards = board
        .cards
        .concat({id: uuidv1(), text: payload.text})
    },
    moveCard(state, payload) {
      const from = state.boards[payload.from]
      const to = state.boards[payload.to]
      from.cards = from
        .cards
        .filter(c => c.id !== payload.card.id)
      to.cards = to
        .cards
        .concat(payload.card)
    },
    deleteCard(state, {index, card}) {
      const board = state.boards[index]
      board.cards = board
        .cards
        .filter(c => c.id !== card)
    },
    saveCard(state, {index, card}) {
      console.log('Update card', card, index);
      const foundBoard = state.boards[index]
      const foundCardIndex = _.find(foundBoard.cards, {id: card.id})
      console.log('found card', foundCardIndex);
      foundBoard.cards[foundCardIndex] = card
    },
    addNote(state, {card, note, time}) {
      console.log(card, note);
      state.notes = state
        .notes
        .concat({cardId: card.id, note, time})

    }
  },
  actions: {
    saveCard({
      commit,
      state
    }, {index, card}) {
      console.log('save card', card)
      commit('saveCard', {index, card})
      return Promise.resolve()
    },
    updateBoard({
      commit,
      state
    }, index) {
      commit('updateBoard', index)
      return Promise.resolve()
    },
    moveCard({
      commit,
      state
    }, payload) {
      commit('moveCard', payload)
      return Promise.resolve()
    },
    deleteCard({
      commit,
      state
    }, payload) {
      commit('deleteCard', payload)
      return Promise.resolve()
    }
  },
  getters: {
    boards: (state, getters) => _.sortBy(state.boards, 'id'),
    notesForCard: state => card => state
      .notes
      .filter(note => note.cardId == card.id),
    totalCards: state => state
      .boards
      .reduce((acc, board) => acc + board.cards.length, 0)
  }
})

store.subscribe((mutation, state) => {
  console.log('Save State', mutation, state);
  // Store the state object as a JSON string
  window
    .sessionStorage
    .setItem('boardapp', JSON.stringify(state));
});

export default store