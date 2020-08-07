<template>
    <div style="margin: 16px">
        <h1>
            Hello world!
        </h1>
        <h2 v-for="item in items" :hidden="item.hidden" :class="item.classes">
            {{item.text}}
        </h2>
    </div>
</template>

<script>
    export default {
        name: "Render",
        data: () => ({
            secret: 'Secret',
            items: [
                {
                    text: "Visible h2",
                    hidden: false,
                    classes: "class1 class2"
                },
                {
                    text: "Hidden h2",
                    hidden: true,
                    classes: "class1"
                }
            ]
        })
    }
</script>

<style scoped>

</style>