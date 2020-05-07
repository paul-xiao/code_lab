<template>
  <div class="hello">
     {{status}}
    <button @click="handlePreivew" v-if="!status">preview</button>
    <Preview />
  </div>
</template>

<script>
import { mapGetters} from 'vuex'
import Preview from './preview'
export default {
  name: 'Signin',
  components: {
    [Preview.name]: Preview
  },
  data() {
    return {
      tmp: null
    }
  },
  computed: {
    ...mapGetters(['status'])
  },
  watch: {
    $route() {
                   // eslint-disable-next-line no-console
      console.log(this.$route.name)
      if (this.$route.name === 'preview') {
        !this.status && this.$store.commit('UPDATE_STATUS', true)
         
      }
    }
  },
  beforeMount() {
    // eslint-disable-next-line no-console
    // this.tmp = JSON.parse(sessionStorage.getItem('test'))
  },
  methods: {
    handlePreivew() {
      this.$store.commit('UPDATE_STATUS', true)
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
