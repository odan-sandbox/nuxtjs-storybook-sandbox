import Button from './Button'
export default { title: 'Button' }

export const withText = () => ({
  render: (h) => <Button>Hello Button</Button>
})

export const withPrimary = () => ({
  render: (h) => <Button color="primary">Hello Button</Button>
})
