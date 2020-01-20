/* eslint-disable no-console */
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      statusBefore: false
    }
  },
  created() {
  window.addEventListener('pagehide', this.storeAppState, false)
  window.addEventListener('beforeunload', this.updateHandler, false)
  },
  methods: {
    storeAppState() {
       sessionStorage.setItem('test', JSON.stringify({name: '222'}))
    },
     updateHandler(event) {
        event = event || window.event
        event.preventDefault();
        event.returnValue = 'XXX'
    },
  },
  beforeDestroy() {
    window.removeEventListener('pagehide', this.storeAppState, false)
    window.removeEventListener('beforeunload', this.updateHandler, false)
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
