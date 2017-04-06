<template>
  <div class="profile">
    <c-vipImg
      :pic="profile.pic"
      :desc="profile.desc"
      :grade="profile.grade"
    ></c-vipImg>
  </div>
</template>

<script>
import CVipImg from '../components/vip/c-vipImg'
import { vip } from 'vx/getters'
import { getVip } from 'vx/actions'
export default {
  data () {
      return {
        profile:{
          pic:"http://cdncs.101.com/v0.1/static/pbl4vip/vip//mine_vip_center_icon_diamond_gray@2x.png?1464147047735",
          desc:"开通会员立即享有以下特权",
          grade:0
        }
      }
  },

  route: {
  activate (transition) {
    transition.next()
    this.getVip({
      _id: transition.to.params.uid
    })
  }
  },

  vuex: {
    getters: {
      vip
    },
    actions: {
      getVip
    }
  },

  components: {
    CVipImg
  }
}
</script>
