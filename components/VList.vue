<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  render(createElement) {
    const li = (this.$slots.default || []).map((vnode) => {
      return createElement('li', { class: 'item' }, [vnode])
    })

    return createElement('ul', { class: 'v-list' }, li)
  }
})
</script>

<style lang="scss" scoped>
.v-list {
  display: flex;
  flex-direction: column;
  list-style: none;
}
</style>
