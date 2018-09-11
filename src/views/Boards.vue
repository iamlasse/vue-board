<template>
  <div class="board-wrapper">
    <div class="card-count-wrapper">
      <b-taglist attached>
        <b-tag rounded size="is-medium" type="is-light">Total Cards</b-tag>
        <b-tag rounded size="is-medium" type="is-primary">{{cards}}</b-tag>
      </b-taglist>
    </div>
    <div class="board-container">
      <div class="board-item" v-for="(board, index) in boards" :key="board.id">
        <Board :board="board" :index="index" />
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Board from '@/components/board/Board.vue'
  export default {
    name: 'Boards',
    components: {
      Board
    },
    computed: {
      cards(){
        return this.$store.getters.totalCards
      },
      boards(){
        return this.$store.getters.boards
      }
    },
    data() {
      return {
        isActive: false
      }
    },
    created (){
      this.getBoards()
    },
    methods: {
      getBoards(){
        // this.$store.commit('getBoards')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .board-wrapper {
    padding: 25px;
  }
  .board-container {
    display: flex;
    flex-wrap: wrap;
    overflow-x: scroll;
    justify-content: flex-start;
  }
  .board-item {
    width: 25%;
    margin-bottom: 20px;
    padding: 0 12.5px;
    &:first-child {
      padding-left: 0;
    }
    &:last-child {
      padding-right: 0;
    }
  }

  .card-count-wrapper {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
  }
</style>