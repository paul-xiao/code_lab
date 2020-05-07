
<template>
  <div class="axel-preview__office">
    <div class="view-wrap">
      <iframe
        v-if="src"
        width='100%'
        height='100%'
        ref="ifr"
        frameborder='1'>
      </iframe>
      <div v-if="src">hidden text</div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
/* eslint-disable no-console */
export default {
  name: 'AxelPreviewOffice',
  props: {
    src: {
      type: String,
      default: ''
    }
  },
  mounted() {
    this.init()
  },
  watch: {
    src() {
      this.init()
    }
  },
  methods: {
    init() {
      console.log(this.src)
      console.log(this.$refs.ifr) // undefined
      console.log(document.querySelector('iframe'))// null 

      this.$nextTick(() => {
         console.log(this.$refs.ifr) // <iframe />
         console.log(document.querySelector('iframe'))//<iframe />
      })
    }
  }
}
</script>
