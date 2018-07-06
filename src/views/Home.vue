<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            <HelloWorld msg="Welcome to Triplebyte Interview App" />
          </h1>
          <h2 class="subtitle">
            Add more stuff here
          </h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'
  export default {
    name: 'home',
    components: {
      HelloWorld
    },
    data() {
      return {
        isActive: false
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
</style>