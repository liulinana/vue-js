<template>
  <div id="app">

    <IframeIndex/>

  </div>
</template>

<script>
  import IframeIndex from '@/iframe/index.vue'

  export default {
    name: 'app',
    components: {
        IframeIndex,
    },
  }
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
