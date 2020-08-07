import {createLocalVue, mount} from '@vue/test-utils'
import Component from '@/views/NewsEdit'
import "@testing-library/jest-dom"
import Vuetify from "vuetify";
import Vue from 'vue'
import Vuex from 'vuex'
import flushPromises from 'flush-promises'

Vue.use(Vuetify);
const localVue = createLocalVue()
localVue.use(Vuetify);
localVue.use(Vuex)

const $route = {
}

const $router = {
}

const storeL = {
}

describe('Test Component', () => {
    it('test', async (done) => {
        const wrapper = mount(Component, {
            localVue,
            created() {
                this.$vuetify.lang = {
                    t: () => {
                    },
                };
            }
        })

    })
})