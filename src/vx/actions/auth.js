import { GET_BEARER, DELETE_BEARER, CREATE_USER } from '../types'
import { POST, DELETE } from 'utils/ajax'

export default {
  getBearer ({ dispatch }, payload) {
    // const auth = location.search...
    // console.log("22222")
    // console.log(location)
    location()

    dispatch(GET_BEARER, location())
  },

  deleteBearer ({ dispatch }) {
    dispatch(DELETE_BEARER, DELETE('/apis/auth/logout'))
  },

  createUser ({ dispatch }, payload) {
    dispatch(CREATE_USER, POST('/apis/auth/signup', {
      body: payload
    }))
  }
}
