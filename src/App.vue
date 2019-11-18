<template>
  <div id="app">

    <Login @handleSubmit="handleSubmit" v-if="!isShow"/>
    <IframeIndex v-if="isShow"/>

  </div>
</template>

<script>
  import IframeIndex from '@/iframe/index.vue';
  import Login from '@/login/index.vue';

  export default {
    name: 'app',
    components: {
      IframeIndex,
      Login
    },

    data () {

      return {
        isShow: false
      }
    },

    methods: {
      handleSubmit() {
        this.$router.push('/home');
        this.isShow = !this.isShow;
        // this.$refs[name].validate((valid) => {
        //   if (valid) {
        //     this.$router.push('/home');
        //     this.isShow = !this.isShow;
        //     this.$Message.success('Success!');
        //   } else {
        //     this.$Message.error('Fail!');
        //   }
        // })
      }
    }
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
