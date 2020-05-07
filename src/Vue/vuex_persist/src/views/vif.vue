<template>
<div>
  <h1>1111</h1>
  <AxelPreviewOffice :src="src"/>
  <button @click="handleClick">btn</button>
</div>
</template>
<script>
import AxelPreviewOffice from '@/components/AxelPreviewOffice'
export default {
 components: {
    [AxelPreviewOffice.name] : AxelPreviewOffice
  },
  data() {
    return {
      src: '',
      i:0
    }
  },
  methods: {
    handleClick() {
      this.src = '1'
      // let pro = new Promise((resolve) => {
      //         setTimeout(() => {
      //         resolve(this.i++)
      //         }, 1000)
      // })

      // pro.then((data) => {
      //     this.src = data.toString()
      // })
       
    }
  }
 }

</script>