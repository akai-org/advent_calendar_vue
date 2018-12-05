<template>
    <div class="backend-calendar" id="backend-calendar">
        <div class="container-fluid">
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
                <div class="calendar">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12 col-sm-6 col-md-4 col-lg-3 calendar-tile-container">
                                <div class="calendar-tile"></div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-4 col-lg-3 calendar-tile-container">
                                <div class="calendar-tile"></div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-4 col-lg-3 calendar-tile-container">
                                <div class="calendar-tile"></div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-4 col-lg-3 calendar-tile-container">
                                <div class="calendar-tile"></div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-sm-6 col-md-4 col-lg-3 calendar-tile-container">
                                <div class="calendar-tile"></div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-4 col-lg-3 calendar-tile-container">
                                <div class="calendar-tile"></div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-4 col-lg-3 calendar-tile-container">
                                <div class="calendar-tile"></div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-4 col-lg-3 calendar-tile-container">
                                <div class="calendar-tile"></div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-sm-6 col-md-4 col-lg-3 calendar-tile-container">
                                <div class="calendar-tile"></div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-4 col-lg-3 calendar-tile-container">
                                <div class="calendar-tile"></div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-4 col-lg-3 calendar-tile-container">
                                <div class="calendar-tile"></div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-4 col-lg-3 calendar-tile-container">
                                <div class="calendar-tile"></div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-sm-6 col-md-4 col-lg-3 calendar-tile-container">
                                <div class="calendar-tile"></div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-4 col-lg-3 calendar-tile-container">
                                <div class="calendar-tile"></div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-4 col-lg-3 calendar-tile-container">
                                <div class="calendar-tile"></div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-4 col-lg-3 calendar-tile-container">
                                <div class="calendar-tile"></div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-sm-6 col-md-4 col-lg-3 calendar-tile-container">
                                <div class="calendar-tile"></div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-4 col-lg-3 calendar-tile-container">
                                <div class="calendar-tile"></div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-4 col-lg-3 calendar-tile-container">
                                <div class="calendar-tile"></div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-4 col-lg-3 calendar-tile-container">
                                <div class="calendar-tile"></div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-sm-6 col-md-4 col-lg-3 calendar-tile-container">
                                <div class="calendar-tile"></div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-4 col-lg-3 calendar-tile-container">
                                <div class="calendar-tile"></div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-4 col-lg-3 calendar-tile-container">
                                <div class="calendar-tile"></div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-4 col-lg-3 calendar-tile-container">
                                <div class="calendar-tile"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import appData from '../appData';

    export default {
        name: "BackendCalendar",
        data() {
            return {
                apiAddr: appData.apiAddr.tasks
            }
        }
    }
</script>

<style scoped>

</style>