<template>
    <div style="margin: 16px">
        <v-text-field v-model="name" label="name"/>
        <v-text-field v-model="content" label="content"/>
        <v-btn color="green" @click="create">Create</v-btn>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "NewsCreate",
        data: () => ({
            name: "",
            content: "",
        }),
        methods: {
            async create() {
                await this.createNewsItem({
                    name: this.name,
                    content: this.content
                });
                this.$router.push('/news')
            },
            ...mapActions(["createNewsItem"])
        },
        async created() {
        }
    }
</script>

<style scoped>

</style>