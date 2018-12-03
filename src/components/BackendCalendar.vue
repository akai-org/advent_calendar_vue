<template>
    <div class="backend-calendar">

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