<template>
    <div id="calendar-popup" class="active">

    </div>
</template>

<script>
    export default {
        name: "Popup",
        props: {
            task: {
                type: Object,
            }
        },
        mounted () {
            console.log(this.task);
        }
    }
</script>

<style scoped>

</style>