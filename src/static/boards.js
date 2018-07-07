import uuidv1 from 'uuid/v1'
const createId = () => uuidv1()
const people = [
  {
    name: 'Winnie',
    color: '#8E6E95'
  },
  {
    name: 'Bob',
    color: '#39A59C'
  },
  {
    name: 'Thomas',
    color: '#344759'
  },
  {
    name: 'George',
    color: '#E8741E'
  }
]

const createBoards = () => {
  var boards = []
  people.forEach(person => {
    const cards = [{
      id: createId(),
      text: 'Quis duis anim velit sunt irure qui sunt veniam aute nulla et.',
    }, {
      id: createId(),
      text: 'Quis duis anim velit sunt irure qui sunt veniam aute nulla et.'
    }]

    boards.push({
      id: createId(),
      title: person.name,
      background: person.color,
      cards
    })
  })

  return boards
}

export default createBoards()

