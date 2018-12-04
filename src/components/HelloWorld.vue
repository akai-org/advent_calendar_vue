<template>
  <div class="hello">

    <div id="cover-container" class="cover-container">
      <div class="container">
        <div class="cover-banner">
          <div class="rounded-logo">
            <img src="../assets/logo.svg" alt="">
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
          <a @click="scrollMeTo('content-container')" class="btn btn-primary">Rozpocznij!</a>
        </div>
      </div>
    </div>

    <div id="content-container" class="content-container" ref="content-container">
      <div class="jumbotron rounded-0 separation-bar"></div>
      <div class="container-fluid">
        <div class="content-title">
          Wybierz swoją dziedzinę!
        </div>
        <div class="content">
          Aby wziąć udział w naszej adwentowej zabawie musisz wybrać dziedzinę, z której
          zadania chciałbyś wykonywać. W której z nich czujesz się najlepiej?
        </div>
        <div class="content-choice">
          <div class="row">
            <div class="col-xl-3 col-lg-6 col-12 calendar-selection backend">
              <router-link to="/backend" class="selection-link">
                <div class="selection-title">
                  <div>Backend</div>
                </div>
                <div class="selection-image">
                  <i class="material-icons">settings</i>
                </div>
              </router-link>
            </div>
            <div class="col-xl-3 col-lg-6 col-12 calendar-selection frontend">
              <router-link to="/frontend" class="selection-link">
                <div class="selection-title">
                  <div>Frontend</div>
                </div>
                <div class="selection-image">
                  <i class="material-icons">code</i>
                </div>
              </router-link>
            </div>
            <div class="col-xl-3 col-lg-6 col-12 calendar-selection mobile">
              <router-link to="/mobile" class="selection-link">
                <div class="selection-title">
                  <div>Mobile</div>
                </div>
                <div class="selection-image">
                  <i class="material-icons">android</i>
                </div>
              </router-link>
            </div>
            <div class="col-xl-3 col-lg-6 col-12 calendar-selection design">
              <router-link to="/design" class="selection-link">
                <div class="selection-title">
                  <div>Design</div>
                </div>
                <div class="selection-image">
                  <i class="material-icons">brush</i>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
      scrollMeTo(refName) {
          let element = this.$refs[refName];
          let top = element.offsetTop;

          this.smoothScrollToPosition(top);
      },

      smoothScrollToPosition(offset) {
          let currentOffset = window.pageYOffset;

          window.scrollBy({
              top: offset - currentOffset,
              left: 0,
              behavior: 'smooth'
          })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
