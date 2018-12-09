<template>
    <div class="backend-calendar" id="backend-calendar">
        <popup></popup>
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
                <div class="calendar-tile-container" v-for="task in tasks">
                    <div class="calendar-tile" @click="displayPopup(task.id)">
                        {{getDateDay(task.date)}}
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <div class="jumbotron rounded-0">
                AKAI 2018
            </div>
        </footer>
    </div>
</template>

<script>

    import appData from '../appData';
    import Popup from '../components/Popup';
    export default {
        name: "BackendCalendar",
        components: {
            Popup
        },
        data() {
            return {
                apiAddr: appData.apiAddr.tasks,
                tasks: null,
            }
        },
        mounted() {
            this.axios
                .get(appData.apiAddr.tasks)
                .then((response) => {
                    this.tasks = response.data.data.tasks;
                    console.log(this.tasks);
                });

        },
        methods: {
            getDateDay(date) {
                let parsedDate = new Date(date);
                return parsedDate.getUTCDate();
            },

            displayPopup(tileId){

            }
        }
    }
</script>

<style scoped>

</style>