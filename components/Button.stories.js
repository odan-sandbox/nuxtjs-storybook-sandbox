import Button from './Button'
export default { title: 'Button' }

export const withText = () => ({
  components: { Button },
  template: '<Button>Hello Button</Button>'
})

export const withPrimary = () => ({
  components: { Button },
  template: '<Button color="primary">Hello Button</Button>'
})
