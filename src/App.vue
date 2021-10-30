<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition><router-view></router-view></transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import Spinner from './components/Spinner.vue'
import ToolBar from './components/ToolBar.vue'
import bus from './utils/bus.js'

export default{
  components:{
    ToolBar,
    Spinner
  },
  data(){
    return {
      loadingStatus:false
    }
  },
  methods:{
    startSpinner(){
      this.loadingStatus = true
      console.log('startSpinner loadingStatus : ' + this.loadingStatus );
    },
    endSpinner(){
      this.loadingStatus = false
      console.log('endSpinner loadingStatus : ' + this.loadingStatus );
    }
  },
  created(){
    bus.$on('start:spinner', this.startSpinner)
    bus.$on('end:spinner', this.endSpinner)
  },
  beforeDestory(){
    bus.$off('start:spinner', this.startSpinner)
    bus.$off('end:spinner', this.endSpinner)
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
a {
 text-decoration:none;
 color: #34495e;
}
a:hover {
  color:#42b884;
  text-decoration:underline;
}
a.router-link-exact-active {
  text-decoration:underline;
}
</style>
