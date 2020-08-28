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
    path: '/news/edit/1',
    params: {id: '1'}
}

const $router = {
    push: () => {
        console.log('push')
    }
}

const storeL = {
    getters: {
        getNewsItem() {
            return () => {
                return {id: '1', name: 'name', content: 'content'};
            }
        }
    },
    actions: {
        async updateNewsItem() {
            console.log(1);
            return;
        },
        async fetchNewsItem() {
            return;
        }
    }
}

describe('Test Component', () => {
    it('test', async (done) => {
        const store = new Vuex.Store(storeL);
        let spyOn = jest.spyOn($router, 'push');
        const wrapper = mount(Component, {
            mocks: {
                $route,
                $router,
            },
            store,
            localVue,
            created() {
                this.$vuetify.lang = {
                    t: () => {
                    },
                };
            }
        })
        await wrapper.vm.init();

        console.log(wrapper.html());
        await wrapper.find('.v-btn').trigger('click')
        done()
    })
})