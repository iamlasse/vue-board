<template>
  <div class="board">
    <div class="board-title" :style="{background: board.background}">
      <span>{{board.title}}</span>
    </div>
    <!-- <div class="empty-slot" v-show="!board.cards.length">
      <h3>Add a card</h3>
    </div> -->
    <draggable element="div" class="dragArea" :class="{'is-empty': !board.cards.length}"
      v-model="board.cards" :options="dragOptions" :move="onMove" @change="updateBoard">
      <Card v-for="(card, index) in board.cards" :key="index" class="list-group-item" @move="moveCard"
        :card="card" />

    </draggable>
    <a class="button" @click="promptUser">
      <strong>
        <span class="icon is-small">
          <i class="mdi mdi-plus "></i>
        </span>
      </strong>
      <span class="button-text">Add Card</span>
    </a>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import Card from '@/components/Card.vue'
export default {
  props: ['board', 'index'],
  components: {Card, draggable},
  computed: {
    dragOptions () {
      return  {
        animation: 0,
        group: 'cards',
        // disabled: !this.editable,
        ghostClass: 'ghost',
        dragClass: 'dragging'
      };
    },
  },
  methods: {
    updateBoard(added, removed, moved){
      this.$store.commit('updateBoard', this.board)
    },
    onMove ({relatedContext, draggedContext}) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
    },
    promptUser () {
      var cardText = window.prompt("Add A card");
      if(cardText){
        var cardCount = this.board.cards.length
      this.$store.commit('addCard', {
        board: this.index,
        text: cardText
      })
      }
    },
    moveCard(loc, card){
      if(
        (this.index <= 0 && loc == 'left') ||
        (this.index >= this.$store.getters.boards.length && loc == 'right')
      ) return

      this.$store.commit('moveCard', {
        from: this.index,
        to: loc == 'left' ? this.index-1 : this.index+1,
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
  box-shadow: none;
  transition: box-shadow 0.2s ease;
  &:hover {
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  }
}

.board-title {
  height: 30px;
  padding: 20px 0;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    color: #fff;
  }
}

.ghost {
  opacity: .5;
  background: rgb(233, 233, 233);
}
.no-move {
  transition: transform 0s;
}

.list-group-item {
  cursor: pointer;
}

.sortable-drag {
  transform: rotate(5deg);
  border: 5px solid red;
}

.button {
  background: transparent;
  border: none;
  margin-top: 10px;
  transition: color 0.2s ease;
  &:hover {
    i, .button-text {
      color: rgb(69, 127, 167)
    }
  }
  i {
    font-size: 150%;
    color: darken($color: #f9f9f9, $amount: 30)
  }
  .button-text {
    margin-left: 5px;
    color: darken($color: #f9f9f9, $amount: 30)

  }
}
.dragArea.is-empty {
  align-items: stretch;
  background: #eee;
  flex-direction: row;
  margin-top: 10px;
  min-height: 76px;
  width: 100%;
}

</style>
