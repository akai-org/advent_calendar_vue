<template>
    <div class="backend-calendar">
        <div class="card">
            
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