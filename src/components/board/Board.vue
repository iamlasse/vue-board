<template>
  <div class="board">
    <div class="board-title" :style="{background: board.background}">
      <span>{{board.title}}</span>
    </div>
    <draggable element="div" class="dragArea" :class="{'is-empty': !board.cards.length}"
      v-model="board.cards" :options="dragOptions" :move="onMove" @end="updateBoard">
      <Card :tabindex="index" v-for="(card, index) in board.cards" :key="index"
        class="list-group-item" @save="saveCard" @move="moveCard" @delete="deleteCard" :card="card"
      />

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

<script src="./board.js">
</script>

<style lang="scss" scoped>

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


.dragArea.is-empty {
  align-items: stretch;
  background: #eee;
  flex-direction: row;
  margin-top: 10px;
  min-height: 76px;
  width: 100%;
}

</style>
