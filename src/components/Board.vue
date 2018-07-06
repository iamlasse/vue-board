<template>
  <div class="board">
    <div class="board-title" :style="{background: board.background}">
      <span>{{board.title}}</span>
    </div>
    <Card v-for="card in board.cards" :key="card.id" class="card" @move="moveCard" :card="card" />
    <a class="button" @click="promptUser">
      <span class="icon is-small">
        <i class="mdi mdi-plus "></i>
      </span>
        Add Card
    </a>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
export default {
  props: ['board'],
  components: {Card},
  methods: {
    promptUser () {
      var cardText = window.prompt("Add A card");
      console.log(cardText)
      var cardCount = this.board.cards.length
      this.$store.commit('addCard', {
        id: this.board.id,
        text: cardText
      })
      console.log('Card added')
    },
    moveCard(loc, card){
      console.log(loc, card)
      var to = undefined
      if(loc == 'left' && this.board.id <= 1) return;
      if(loc == 'right' && this.board.id >= 4) return;
      if(loc == 'left'){
        to = this.board.id - 1
      } else if(loc == 'right'){
        to = this.board.id + 1
      }
      this.$store.commit('moveCard', {
        from: this.board.id,
        to,
        card
      })
    }
  }
}
</script>

<style lang="scss">
  .card {
    padding: 1em;
    margin: 10px 0;
    border-radius: 3px;
  }
  .board-title {
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      color: #fff;

    }
  }
</style>
