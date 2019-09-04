import {mapGetters} from 'vuex'
import Notes from '@/components/notes/Notes.vue'

export default {
  props : ['card'],
  watch : {
    editing(n, o) {
      // console.log(n, o);
      if (n == true) 
        this.$refs.note.focus()
      else 
        this.saveCard()
    }
  },
  beforeMount() {
    window.addEventListener('keyup', this.saveCardEnter);
  },
  beforeDestroy() {
    window.removeEventListener('keyup', this.saveCardEnter)
  },
  computed : {
    ...mapGetters(['notesForCard']),
    numberNotes() {
      return this.notesForCard(this.card).length || 0
    }
  },
  methods : {
    saveCardEnter(e) {
      if (e.which === 13 || e.code === 'Enter' || e.keyCode === 13) {
        // console.log('Save card press enter', e);
        this.saveCard()
      }
    },
    saveCard() {
      // console.log('Save Card?');

      this.$emit('save', this.card)
      this.editing = false
    },
    moveCard(location) {
      this.$emit('move', location, this.card)
    },
    deleteCard() {
      this.$emit('delete', this.card)
    },
    showNotes() {
      console.log('Show notes for card ', this.card);
      this
        .$modal
        .open({
          parent: this,
          props: {
            card: this.card
          },
          component: Notes
        })
    }
  },
  data() {
    return {editing: false}
  }
}