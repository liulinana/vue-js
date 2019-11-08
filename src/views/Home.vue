<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p :title="message" id="title">{{this.$store.state.a.count}}</p>
    <Button type="primary" @click="handelClick(1)">Primary</Button>
    <ol>
      <li class="classLi" v-for="item in todos" v-bind:key="item.text">
        {{ item.text }}
      </li>
    </ol>
    <p style="color: blue">{{ message }}</p>
    <input v-model.trim="message">
    <button :disabled="false">Button</button>
    <div id="demo">{{ fullName }}</div>
    <div :style="styles">拾色器</div>
    <HelloWorld mmDd="c" msg="Welcome to Your Vue.js App" @enlarge-text="helloWorldFun"><p>children</p></HelloWorld>
    <sketch-picker :value="colors" @input="updateValue"></sketch-picker>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters } from 'vuex'
import { Sketch } from 'vue-color'

export default {
  name: 'home',
  components: {
    HelloWorld,
    // eslint-disable-next-line vue/no-unused-components
    'sketch-picker': Sketch,
  },

  data: function() {

    return {
        message: 'Hello Vue.js!',
        todos: [
          { text: '学习 JavaScript' },
          { text: '学习 Vue' },
          { text: '整个牛项目' }
        ],
        firstName: 'Foo',
        lastName: 'Bar',
        colors : '#194d33',
        styles:{
          width: '100px',
          height: '100px',
          background: '#194d33',
          color: 'red',
          fontSize: '13px'
        }
      };
  },

  watch:{
    '$route' (to, from) {
      // 对路由变化作出响应...
      console.log(to,from)
    }
  },

  computed: {
    ...mapGetters([
      'doneTodos',
      'anthorData'
    ]),
    fullName: {
      // getter
      get: function () {

        return this.firstName + ' ' + this.lastName
      },
      // setter
      set: function (newValue) {

        let names = newValue.split(' ');
        this.firstName = names[0];
        this.lastName = names[names.length - 1]
      }
    }
  },

  methods: {

    updateValue (color) {

      this.styles.background=color.hex;
    },
    
    helloWorldFun (value) {
      console.log(value,'vvv')
    },
    test (value) {

      return value
    },

    handelClick () {
      this.fullName = 'hhhh';


      this.$store.commit('HOME_MUTATION');


      this.todos[1].text= 'ddddd'
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
