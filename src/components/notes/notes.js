import moment from 'moment'

const updateScroll = (elm) => {
  var element = document.getElementById(elm)
  var containerHeight = element.clientHeight
  var contentHeight = element.scrollHeight
  element.scrollTop = contentHeight - containerHeight
}

export default {
  props: ['card'],
  data() {
    return {
      noteText: ''
    }
  },
  computed: {
    notes() {
      return this.$store.getters.notesForCard(this.card)
    }
  },
  methods: {
    timeFormatted(time) {
      return moment(time).calendar()
    },
    addNote() {
      if (!this.noteText) return
      console.log('Add Note')
      this.$store.commit('addNote', {
        card: this.card,
        note: this.noteText,
        time: new Date()
      })
      this.noteText = ''
      setTimeout(() => {
        updateScroll('note_list')
      }, 100);
    }
  }
}