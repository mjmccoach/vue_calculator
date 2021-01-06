import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('enterNum changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  })


  it('should be able to add one and four', () => {
    const wrapper =shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('1');
    expect(wrapper.vm.runningTotal).to.equal(5)
  })

  it('should be able to subtract four from seven', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 7
    wrapper.vm.subtract('3');
    expect(wrapper.vm.runningTotal).to.equal(4)
  })

  it('should be able to multiply three by five and get fifteen', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 3
    wrapper.vm.multiply('5');
    expect(wrapper.vm.runningTotal).to.equal(15)
  })

  it('should be able to divide twenty-one by seven and get three', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 21;
    wrapper.vm.divide('7');
    expect(wrapper.vm.runningTotal).to.equal(3)
  })

  it('should be able to concatenate multiple number clicks', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.numberClick('5');
    wrapper.vm.numberClick('6');
    wrapper.vm.numberClick('7');
    wrapper.vm.numberClick('8');
    expect(wrapper.vm.runningTotal).to.equal(5678)
  })
})
