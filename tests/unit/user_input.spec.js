import {createLocalVue, mount} from '@vue/test-utils'
import Component from '@/views/UserInput'
import "@testing-library/jest-dom"
import Vuetify from "vuetify";
import Vue from 'vue'


describe('Test Component', () => {
    it('test', async () => {
        let spyInstance = jest.spyOn(Component.methods, 'onBtnClick');
        const wrapper = mount(Component, {})

        expect(spyInstance).not.toBeCalled()
        expect(wrapper.vm.$data.btnClicks).toBe(0)
        let vueWrapper = wrapper.find('button');
        vueWrapper.trigger('click');
        expect(wrapper.vm.$data.btnClicks).toBe(1)
        expect(spyInstance).toBeCalled()

        expect(wrapper.emitted()).toHaveProperty('btnClicks')
    })
})