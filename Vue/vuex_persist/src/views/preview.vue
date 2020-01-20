<template>
  <div class="hello" v-if="status">
     {{file}}
     <button @click="handleBack">back</button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'Preview',
  computed: {
    ...mapGetters(['file', 'status'])
  },
  watch: {
    file(val){
      /* eslint-disable no-console */

      console.log(!!val)
      console.log(this.$route.name)
      val && this.$route.name !== 'preview' && this.$router.push('/preview')
    }
  },
  methods: {
    handleBack() {
      this.$store.commit('UPDATE_STATUS', false)
      this.$store.commit('UPDATE_FILE', {})
      this.$router.push('/signin')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
