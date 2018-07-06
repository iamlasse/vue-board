<template>
  <div class="card">
  <span class="arrow" @click="moveCard('left')">
    <i class="mdi mdi-arrow-left"></i>
  </span>
  <div class="card-body">
    {{card.text}}
  </div>
  <span class="arrow" @click="moveCard('right')">
    <i class="mdi mdi-arrow-right"></i>
  </span>
  </div>
</template>

<script>
export default {
  props: ['card'],
  methods: {
    moveCard(location){
      this.$emit('move', location, this.card)
    }
  }
}
</script>

<style lang="scss">
  .card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .arrow {
      padding: 10px;
      cursor: pointer;
    }
    .card-body {
      text-align: left;
      flex: 2;
    }
  }
</style>
