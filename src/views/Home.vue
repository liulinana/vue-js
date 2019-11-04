<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p id="title">{{this.$store.state.a.count}}</p>
    <Button type="primary" @click="()=>handelClick(1)">Primary</Button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  components: {
    HelloWorld
  },

  data: function() {
    return {
        message: 'Hello Vue.js!'
      };
  },

  computed: {
    ...mapGetters([
      'doneTodos',
      'anthorData'
    ]),
  },

  methods: {
    test (value) {
      console.log(value)
      return value
    },
    handelClick () {
      let arry = 1 |> this.test;
      console.log(arry);
      this.$store.commit('HOME_MUTATION');
      let aa = [];
      console.log(aa??length)
      // this.$store.dispatch('sync',{
      //   mutationTypes:'HOME_MUTATION',
      //   num: 100
      //   }).then(res=>{
      //
      // })
    }
  }
}
</script>

<style lang="less">
  @import "../styles/Home.less";
</style>
