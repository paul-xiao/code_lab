<template>
  <div class="hello">
    <h4>Signin</h4>
  </div>
</template>

<script>
export default {
  name: 'Signin',
  mounted() {
    let {redirect = '/'} = this.$route.query
    // eslint-disable-next-line no-console
    console.log(redirect)
    this.$router.push(redirect)
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
