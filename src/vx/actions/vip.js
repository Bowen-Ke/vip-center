import { GET_VIP } from '../types'
import { GET } from 'utils/ajax'

export default {
  getVip ({ dispatch }) {
    if (!window.onPageShow) {
      // 第一次加载，都请求数据
      dispatch(GET_VIP, GET('http://vipbeta.101.com/v0.1/vipmain/details'))
      // 每次页面展示的时候刷新数据
      window.onPageShow = function () {
        dispatch(GET_VIP, GET('https://vipbeta.101.com/v0.1/vipmain/details'))
      }
    }
    // dispatch(GET_VIP, GET('http://pbl4vip.dev.web.nd/v0.1/vipmain/details'))
    // dispatch(GET_VIP, GET(`http://pbl4wallet.dev.web.nd/v0.1/${appName}/wallet/protocolContent`))
  }
}
