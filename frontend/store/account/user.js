
export const state = () => ({
  profileImg: '' // 프로필 이미지
})

export const getters = {
  getProfileImg (state) {
    return state.profileImg
  },
}

export const mutations = {
  setProfileImg (state, imgPath){
    state.profileImg = imgPath
  }
}

export const actions = {
  setProfileImg({ state, commit }, { imgPath }){
    commit('setProfileImg', imgPath)
  }
}
