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

<style scoped>

</style>
