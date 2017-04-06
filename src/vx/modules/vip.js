import {
  GET_VIP
} from '../types'

import {
  PROMISE_SUCCESS
} from '../constants'

const state = {
  vip: {
    // username: '',
    // state: 1,
    // created: 0
  }
}

const mutations = {
  [GET_VIP] (state, { payload, meta }) {
    if (meta === PROMISE_SUCCESS) {
      state.vip = payload
    }
  }
}

export default {
  state,
  mutations
}
