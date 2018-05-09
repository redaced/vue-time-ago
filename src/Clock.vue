<template>
    <div>{{ display }}</div>
</template>
<script>
    import moment from 'moment';

    export default {
        props:['datetime'],
        data() {
            return {
                // time: Date.now()
            }
        },
        computed: {
            display() {
                return moment(this.datetime).format("HH:mm:ss");
            }
        },
        created() {
            setInterval(() => {
                this.datetime = Date.now();
            }, 1000);
        }
    }
</script>
