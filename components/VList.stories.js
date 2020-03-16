import VList from './VList'
export default { title: 'VList' }

export const withItems = () => ({
  render: (h) => (
    <VList>
      <span>Hello VList1</span>
      <span>Hello VList2</span>
    </VList>
  )
})
