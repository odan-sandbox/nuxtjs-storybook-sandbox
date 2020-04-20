// import Vue from 'vue'

import Logo from './Logo'
export default { title: 'Logo' }

export const asAComponent = () => ({
  components: { Logo },
  template: '<logo />'
})
