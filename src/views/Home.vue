<template>
  <div class="board-wrapper">
    <div class="board-container">

      <div class="board-item" v-for="board in allBoards" :key="board.id">
        <Board :board="board" />
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Board from '@/components/Board.vue'
  export default {
    name: 'home',
    components: {
      Board
    },
    computed: {
      allBoards(){
        return this.$store.getters.allBoards.sort()
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
</style>