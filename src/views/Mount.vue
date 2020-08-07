<template>
    <div style="margin: 16px">
        <MountChild/>
        <p id="data">{{dataVal}}</p>
        <p id="props">{{propsVal}}</p>
    </div>
</template>

<script>
    import MountChild from "../components/MountChild";

    export default {
        name: "Mount",
        components: {MountChild},
        props: {
            propsVal: {}
        },
        data: () => ({
            dataVal: "someValue"
        }),
        methods: {
            method(text) {
                console.log(text)
            }
        },
        mounted() {
            this.method("Method called");
        }
    }
</script>

<style scoped>

</style>