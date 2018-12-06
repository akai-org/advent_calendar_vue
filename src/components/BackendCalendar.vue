<template>
    <div class="backend-calendar" id="backend-calendar">
        <div>
            <div class="calendar-heading">
                Backend
                <div class="subheading">
                    Dla wszystkich tych, dla których PHP jest fajne!
                </div>
            </div>
            <div class="card calendar-place">
                <div class="calendar-place_heading">
                    Backendowy kalendarz adwentowy
                </div>
                <div class="calendar container">
                    <div class="calendar-tile-container" v-for="">
                        <div class="calendar-tile"></div>
                    </div>
                </div>
            </div>
                <footer>
                    <div class="jumbotron rounded-0">
                        AKAI 2018
                    </div>
                </footer>
        </div>
    </div>
</template>

<script>

    import appData from '../appData';

    export default {
        name: "BackendCalendar",
        data() {
            return {
                apiAddr: appData.apiAddr.tasks,
                apiData: null,
            }
        },
        mounted() {
            this.axios
                .get(appData.apiAddr.tasks)
                .then(response => {
                    this.apiData = response;
                })
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>