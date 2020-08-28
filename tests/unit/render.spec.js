import {shallowMount} from '@vue/test-utils'
import Component from '@/views/Render'
import "@testing-library/jest-dom"

describe('Test Component', () => {
    it('test', () => {
        const wrapper = shallowMount(Component, {})

        let wrapperArray = wrapper.findAll('h2');
        for (let i = 0; i < wrapperArray.length; i++) {
            let vueWrapper = wrapperArray.at(i);

            console.log(vueWrapper.attributes());

            if (vueWrapper.attributes().hidden) {
                expect(vueWrapper.classes()).toContain('class1');
                expect(vueWrapper.classes()).not.toContain('class2');
            } else {
                expect(vueWrapper.classes()).toContain('class1');
                expect(vueWrapper.classes()).toContain('class2');
            }
        }
    })
})