import draggable from 'vuedraggable'
import Card from '@/components/card/Card.vue'
export default {
  props : [
    'board', 'index'
  ],
  components : {
    Card,
    draggable
  },
  computed : {
    cards() {
      return this.$store.getters.totalCards
    },
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
    updateBoard() {
      this
        .$store
        .dispatch('updateBoard', this.index)
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
        this
          .$store
          .commit('addCard', {
            board: this.index,
            text: cardText
          })
      }
    },
    moveCard(loc, card) {
      if ((this.index <= 0 && loc == 'left') || (this.index >= this.$store.getters.boards.length && loc == 'right')) 
        return

      this
        .$store
        .dispatch('moveCard', {
          from: this.index,
          to: loc == 'left'
            ? this.index - 1
            : this.index + 1,
          card
        })
        .then(() => this.$snackbar.open({message: 'Card moved, Board saved', duration: 1000, queue: false}))
    },
    deleteCard(card) {
      this
        .$store
        .dispatch('deleteCard', {
          index: this.index,
          card: card.id
        })
        .then(() => this.$snackbar.open({duration: 1000, message: 'Card deleted'}))
    },
    saveCard(card) {
      this
        .$store
        .dispatch('saveCard', {
          index: this.index,
          card
        })
        .then(() => this.$snackbar.open({duration: 1000, message: `Card Saved ${card.id}`}))
    }
  }
}