import uuidv1 from 'uuid/v1'
const createId = () => uuidv1()
export default [{
    id: createId(),
    background: '#8E6E95',
    title: 'Winnie',
    cards: [{
        id: createId(),
        text: 'Text 100'
      },
      {
        id: createId(),
        text: 'Text 101'
      }
    ]
  },
  {
    id: createId(),
    background: '#39A59C',
    title: 'Bob',
    cards: [{
        id: createId(),
        text: 'Text 200'
      },
      {
        id: createId(),
        text: 'Text 201'
      },
    ]
  },
  {
    id: createId(),
    background: '#344759',
    title: 'Thomas',
    cards: [{
        id: createId(),
        text: 'Text 300'
      },
      {
        id: createId(),
        text: 'Text 301'
      }
    ]
  },
  {
    id: createId(),
    background: '#E8741E',
    title: 'George',
    cards: [{
        id: createId(),
        text: 'Text 400'
      },
      {
        id: createId(),
        text: 'Text 401'
      }
    ]
  }
]

