import { shallowMount } from '@vue/test-utils'
import Negotiation from '@/components/Negotiation.vue'

describe('Negotiation.vue', () => {
  it('Smoke test for negotiation component', () => {
    const wrapper = shallowMount(Negotiation)
    expect(wrapper.exists()).toBe(true)
  })
})
