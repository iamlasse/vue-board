  import draggable from 'vuedraggable'
import Card from '@/components/card/Card.vue'
export default {
  props: ['board', 'index'],
  components: {
    Card,
    draggable
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: 'cards',
        // disabled: !this.editable,
        ghostClass: 'ghost',
        dragClass: 'dragging'
      };
    },
  },
  methods: {
    updateBoard(added, removed, moved) {
      this.$store.commit('updateBoard', this.index)
    },
    onMove({
      relatedContext,
      draggedContext
    }) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
    },
    promptUser() {
      var cardText = window.prompt("Add A card");
      if (cardText) {
        var cardCount = this.board.cards.length
        this.$store.commit('addCard', {
          board: this.index,
          text: cardText
        })
      }
    },
    moveCard(loc, card) {
      if (
        (this.index <= 0 && loc == 'left') ||
        (this.index >= this.$store.getters.boards.length && loc == 'right')
      ) return

      this.$store.commit('moveCard', {
        from: this.index,
        to: loc == 'left' ? this.index - 1 : this.index + 1,
        card
      })
    },
    deleteCard(card) {
      this.$store.commit('deleteCard', {
        index: this.index,
        card: card.id
      })
    },
    saveCard(card) {
      this.$store.commit('saveCard', {
        index: this.index,
        card
      })
    }
  }
}