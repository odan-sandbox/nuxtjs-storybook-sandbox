<template>
  <button :class="getClass"><slot></slot></button>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  props: {
    color: {
      type: String,
      default: 'normal',
      validator(value) {
        return ['primary', 'secondary', 'normal'].includes(value)
      }
    }
  },
  computed: {
    getClass() {
      return {
        [`button-${this.color}`]: true
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.button-primary {
  color: red;
}
</style>
