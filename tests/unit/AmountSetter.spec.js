import { shallowMount, mount } from '@vue/test-utils'
import AmountSetter from '@/components/AmountSetter.vue'

describe('AmountSetter.vue', () => {
  let wrapper;

  beforeEach(() => {
      const placeholder = 'minimum salary'
	  wrapper = mount(AmountSetter, {
	    propsData: { placeholder }
	  })
  }); 

  it('renders props.placeholder when passed', () => {    
    expect(wrapper.contains('input[placeholder="enter minimum salary"]')).toBe(true)
  })

  it('hides input box when amount has been submitted', async () => {    
    expect(wrapper.contains('input')).toBe(true)
    expect(wrapper.contains('.submitted')).toBe(false)
    clickSubmit(wrapper)
    expect(wrapper.contains('input')).toBe(false)
    expect(wrapper.contains('.submitted')).toBe(true)
  })

})

async function clickSubmit(wrapper){
	const submit = wrapper.find('button')
    submit.trigger('click')
    await wrapper.vm.$nextTick()
}