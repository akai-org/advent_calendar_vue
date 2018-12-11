<template>
    <div class="backend-calendar" id="backend-calendar">
        <popup v-bind:task="currentTask"></popup>
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
                    <div class="calendar-tile" @click="displayPopup(getDateDay(task.date))">
                        {{getDateDay(task.date)}}
                    </div>
                </div>
            </div>
        </div>
        <footer></footer>
    </div>
</template>

<script>

    import appData from '../appData';
    import Popup from '../components/Popup';
    import Footer from '../components/Footer';

    export default {
        name: "BackendCalendar",
        components: {
            Popup,
            Footer
        },
        data() {
            return {
                apiAddr: appData.apiAddr.backendTasks,
                tasks: [],
                currentTask: {
                    date: new Date(),
                    name: 'noname',
                    description: 'nodescription'
                }
            }
        },
        mounted() {
            this.axios
                .get(this.apiAddr)
                .then((response) => {
                    this.tasks = response.data.data.tasks;
                });

        },
        methods: {
            getDateDay(date) {
                let parsedDate = new Date(date);
                return parsedDate.getUTCDate();
            },

            displayPopup(taskDate) {
                this.currentTask = this.tasks[taskDate - 1];
                document.getElementById('calendar-popup').classList.add('active');
            },


        }
    }
</script>

<style scoped>

</style>