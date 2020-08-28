import {mount, shallowMount} from '@vue/test-utils'
import Component from '@/views/Mount'
import "@testing-library/jest-dom"

describe('Test Component', () => {
    it('test', () => {
        const wrapper = mount(Component, {
            propsData: {
                propsVal: "2"
            },
            data: () => {
                return {
                    dataVal: "3"
                }
            },
            methods:{ method: (text) => {}}
        })
        console.log(wrapper.html());
    })
})