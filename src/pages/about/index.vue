<template>
  <div class="about">
    <h1>This is an about page</h1>
    <span>按键</span>
  </div>
</template>
<script>
export default {
  name: 'About',
  created () {
    this.keyupEnter()
  },
  methods: {
    keyupEnter () {
      console.log('bind')
      document.onkeydown = e => {
        if (e.key === 'Enter') {
          console.log(e)
          this.handleAddBook()
        }
      }
    },
    handleAddBook () {
      console.log('handle')
    }
  }
}
</script>
