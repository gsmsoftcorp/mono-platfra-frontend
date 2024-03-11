import Vue from 'vue'

Vue.mixin({
  methods: {
    movePage(name, seq) {
      this.$router.push({ name: name, params: { seq : seq }})
    }
  }
})
