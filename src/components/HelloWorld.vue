<template>
  <div class="hello">

    <cover-container></cover-container>
    <content-container></content-container>

  </div>
</template>

<script>
  import CoverContainer from "./CoverContainer";
  import ContentContainer from "./ContentContainer";
export default {
  name: 'HelloWorld',
  components: {
      CoverContainer,
      ContentContainer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
