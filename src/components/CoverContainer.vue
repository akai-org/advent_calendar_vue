<template>
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
</template>

<script>
    export default {
        name: "CoverContainer",
        methods: {
            scrollMeTo(elementId) {
                let element = document.getElementById(elementId);
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

<style scoped>

</style>