<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>{{message}}</p>
    <Button type="primary" @click="()=>handelClick(1)">Primary</Button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
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

  data: function() {
    return {
        message: 'Hello Vue.js!'
      };
  },

  methods: {
    handelClick (value) {
      console.log(value)
    }
  },
  // eslint-disable-next-line no-unused-vars

}
</script>
