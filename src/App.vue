<template>
  <div id="app">
      <div class="cover-container">
        <div class="container">
            <div class="cover-banner">
                <div class="rounded-logo">
                    <img src="./assets/logo.svg" alt="">
                </div>
            </div>
            <div class="cover-title">
                Kalendarz adwentowy AKAI
            </div>
            <div class="cover-subtitle">
                Koło naukowe AKAI przedstawia advent of code, który pozwoli Ci czekać
                na święta razem z nami! Sprawdź, co dla Ciebie przygotowaliśmy!
            </div>
            <div class="cover-options">
                <a href="" class="btn btn-primary">Rozpocznij!</a>
            </div>
        </div>
      </div>
      <router-view/>
  </div>
</template>

<script>
  import './sass/app.scss';
  export default {
      name: 'App'
  }
</script>

<style>

</style>
