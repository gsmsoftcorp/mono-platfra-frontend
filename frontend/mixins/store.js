
import Vue from 'vue'
import { mapGetters, mapMutations, mapActions } from 'vuex'

// store의 js를 가져옵니다.
Vue.mixin({
  computed: {
    ...mapGetters({
      getProfileImg: 'account/user/getProfileImg'
    }),
  },
  methods: {
    ...mapMutations({
      setProfileImg: 'account/user/setProfileImg'
    }),
    ...mapActions({
    }),
  },

})
