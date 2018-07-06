<template>
  <div class="" id="app">
    <header>
      <router-link to="/"><img src="@/assets/logo.1.png"></router-link>

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    </header>
    <section>
      <router-view/>
    </section>
  </div>
</template>

<style lang="scss">
@import '@/assets/base.scss';
@import '@/assets/app.scss';
</style>
