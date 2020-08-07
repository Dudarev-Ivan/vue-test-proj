<template>
    <div style="margin: 16px">
        <v-spacer/>
        <v-btn color="green" to="/news/create">Create</v-btn>
        <v-container fluid>
            <v-row dense>
                <v-col v-for="item in getNews" cols="2" style="padding: 8px">
                    <v-card>
                        <v-card-title>{{item.name}}</v-card-title>
                        <v-card-text>{{item.content}}</v-card-text>
                        <v-card-actions>
                            <v-btn color="blue" :to="'/news/edit/'+item.id">Edit</v-btn>
                            <v-spacer/>
                            <v-btn color="red" @click="deleteNewsItem(item)">Delete</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "NewsList",
        computed: {
            ...mapGetters(["getNews"])
        },
        methods: {
            ...mapActions(["fetchNews", "deleteNewsItem"])
        },
        mounted() {
            this.fetchNews();
        }
    }
</script>

<style scoped>

</style>