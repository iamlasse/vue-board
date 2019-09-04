import {mapGetters, mapActions} from 'vuex';
import Draggable from 'vuedraggable'
import Card from '@/components/card/Card.vue'
export default {
  props : [
    'board', 'index'
  ],
  components : {
    Card,
    Draggable
  },
  computed : {
    ...mapGetters({
      cards: 'totalCards',
      boards: 'boards'
    }),
    dragOptions() {
      return {
        animation: 0, group: 'cards',
        // disabled: !this.editable,
        ghostClass: 'ghost',
        dragClass: 'dragging'
      };
    }
  },
  methods : {
    ...mapActions(['moveCard', 'updateBoard', 'saveCard', 'deleteCard', 'addCard']),
    updateBoardLocal() {
      this.updateBoard(this.index)
        .then(() => {
          this
            .$snackbar
            .open({message: 'Board saved', duration: 1000, queue: false})
        })
    },
    onMove({relatedContext, draggedContext}) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
    },
    promptUser() {
      var cardText = window.prompt("Add A card");
      if (cardText) {
        var cardCount = this.board.cards.length
        this.addCard({
            board: this.index,
            text: cardText
          })
      }
    },
    moveCardLocal(loc, card) {
      if ((this.index <= 0 && loc == 'left') || (this.index >= this.boards.length && loc == 'right')) 
        return

      this.moveCard({
          from: this.index,
          to: loc == 'left'
            ? this.index - 1
            : this.index + 1,
          card
        })
        .then(() => this.$snackbar.open({message: 'Card moved, Board saved', duration: 1000, queue: false}))
    },
    deleteCardLocal(card) {
      this.deleteCard({
          index: this.index,
          card: card.id
        })
        .then(() => this.$snackbar.open({duration: 1000, message: 'Card deleted'}))
    },
    saveCardLocal(card) {
      this.saveCard({
          index: this.index,
          card
        })
        .then(() => this.$snackbar.open({duration: 1000, message: `Card Saved ${card.id}`}))
    }
  }
}