<template>
    <div style="margin: 16px">
        <v-text-field v-model="name" label="name"/>
        <v-text-field v-model="content" label="content"/>
        <v-btn color="green" @click="update">Save</v-btn>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "NewsEdit",
        data: () => ({
            id: null,
            name: "",
            content: "",
        }),
        computed: {
          ...mapGetters(["getNewsItem"])
        },
        methods: {
            async init() {
                let id = this.$route.params.id;
                await this.fetchNewsItem({id});
                let item = this.getNewsItem(id);
                this.id = item.id;
                this.name = item.name;
                this.content = item.content;
            },
            async update() {
                await this.updateNewsItem({
                    id: this.id,
                    name: this.name,
                    content: this.content
                });
                await this.$router.push('/news')
            },
            ...mapActions(["updateNewsItem", "fetchNewsItem"])
        },
        async created() {
            this.init();
        }
    }

</script>

<style scoped>

</style>