<template>
  <div class="notes-wrapper">
    <h2 class="is-size-4">Notes</h2>
    <div class="notes-list" id="note_list">
      <ul>
        <li v-for="(note, index) in notes" :key="index">
          <span>{{note.note}}</span>
          <em>{{timeFormatted(note.time)}}</em>
        </li>
      </ul>
      <div class="empty-notes" v-show="!notes.length">
        No notes? Add one below
      </div>
    </div>
    <div class="note-add">
      <form v-on:submit.prevent>
        <b-field grouped>
          <b-input
          expanded
          placeholder="Add Note"
          type="text"
          v-model.lazy.trim="noteText"
          @keyup.enter="addNote"
          ></b-input>

          <p class="control">
            <button class="button is-primary add-note" @click="addNote">Add Note</button>
          </p>
        </b-field>
      </form>
    </div>
  </div>
</template>

<script src="./notes.js"></script>

<style lang="scss" src="./notes.scss">
</style>
