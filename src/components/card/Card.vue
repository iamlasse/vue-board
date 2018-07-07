<template>
  <div class="card">
    <span class="arrow" @click="moveCard('left')">
      <i class="mdi mdi-chevron-left"></i>
    </span>
    <div class="card-body" @click="editing = true">
      <form v-show="editing" @submit.prevent>
        <b-field>
          <b-input
            expanded
            placeholder="Edit Card"
            ref="note"
            type="text"
            v-model.lazy.trim="card.text"
            @blur="editing = false"
            ></b-input>
        </b-field>
      </form>
      <p v-show="!editing">{{card.text}}</p>
      <span class="card-actions">
        <i class="mdi mdi-note-outline" @click="showNotes"></i>
        <i class="mdi mdi-delete-circle" @click="deleteCard"></i>
      </span>
    </div>
    <span class="arrow" @click="moveCard('right')">
      <i class="mdi mdi-chevron-right"></i>
    </span>
  </div>
</template>

<script src="./card.js"></script>

<style lang="scss" scoped>
@import './card.scss';
</style>
