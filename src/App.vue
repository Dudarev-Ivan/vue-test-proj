<template>
    <v-app>
        <v-navigation-drawer
                app
                expand-on-hover
                right
                >
            <v-list dense>
                <v-list-item v-for="item in drawerItems" :to="item.to" :key="item.name">
                    <v-list-item-content>
                        <v-list-item-title>{{item.name}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <router-view/>
        </v-main>
    </v-app>
</template>

<script>

    export default {
        name: 'App',

        components: {
        },

        data: () => ({
            drawerItems: [
                {
                    name: "Mount",
                    to: "/mount"
                },
                {
                    name: "Render",
                    to: "/render"
                },
                {
                    name: "User input",
                    to: "/user_input"
                },
                {
                    name: "News",
                    to: "/news"
                }
            ]
        }),
    };
</script>
