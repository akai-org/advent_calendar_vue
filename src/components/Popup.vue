<template>
    <div id="calendar-popup" ref="mainPopupPanel">
        <div class="popup-window card m-5">
            <div class="popup-heading card-header">
                {{getDateDay(task.date)}} grudnia
            </div>
            <div class="popup-content">
                <div class="task-name">
                    {{task.name}}
                </div>
                <div class="task-description">
                    {{task.description}}
                </div>
            </div>
            <div class="popup-options">
                <button @click="exit()" class="btn">Zamknij</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Popup",
        props: {
            task: {

            }
        },
        methods: {
            exit() {
                this.$refs.mainPopupPanel.classList.remove('active');
            },

            getDateDay(date) {
                let parsedDate = new Date(date);
                return parsedDate.getUTCDate();
            }
        }
    }
</script>

<style scoped>

</style>