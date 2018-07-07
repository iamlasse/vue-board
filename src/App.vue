<template>
  <div class="" id="app">

    <offline @detected-condition="handleConnectivityChange"></offline>
    <transition name="fade">
      <div class="connection-header" v-show="!online">
        <p>You're offline... We have saved your cards for you, and you can keep working</p>
      </div>
    </transition>
    <header>
      <!-- <router-link to="/"><img src="@/assets/logo.1.png"></router-link> -->

    <div id="nav">
      <router-link to="/">Boards</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    </header>
    <section>
      <router-view/>
    </section>
  </div>
</template>

<script>
import offline from 'v-offline';
export default {
  components: {
    offline
  },
  data(){
    return {
      online: true
    }
  },
  methods: {
    handleConnectivityChange(status) {
      console.log(status);
      this.online = status
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/base.scss';
@import '@/assets/app.scss';
</style>
