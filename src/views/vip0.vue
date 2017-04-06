<template>
    <!-- <title>{{__('message.plato')}}</title> -->
  <div  v-bind:class="{ 'vip': vip.grade, 'vip1': vip.grade == 0 }">
    <image class="vip-img"
      :src="vip.pic" v-if = "vip.grade >= 0"></image>
    <P class="vip-text2" v-if = "vip.grade > 0"> 我的等级</p>
    <P class="vip-text2" v-if = "vip.grade == 0"> 暂未开通</p>
    <p class="vip-text" v-if = "vip.grade > 0"> VIP{{vip.grade}}</p>
    <p class="vip-text3" v-if = "vip.desc"> {{vip.desc}}</p>
   <button class="vip-button" v-if = "vip.operText"  @click="_click(vip.grade)"> {{vip.operText}}</button>
    <div class="table" v-if ="vip.privilegeTable && vip.privilegeTable.length > 0">
      <table class="vip-table"  v-if ="vip.privilegeTable">
        <tr bgcolor="#d4eeff" style='Color:#38adff'>
          <td v-bind:class="{ 'vip-table-th': $index == 0, 'vip-table-td': $index != 0 }" v-for = "tableItem in vip.privilegeTable">{{tableItem.name}}</td>
        </tr>
        <tr bgcolor="#ffffff" style='Color:#0090ff'>
          <td v-bind:class="{ 'vip-table-th': $index == 0, 'vip-table-td': $index != 0 }" v-for = "tableItem in vip.privilegeTable">{{tableItem.value}}</td>
        </tr>
      </table>
    </div>

    <div v-bind:class="{ 'vip-list': vip.grade, 'vip-list1': !vip.grade }">
      <div class="vip-item" v-for = "vipItem in vip.privilegeItems">
        <p class="vip-item-title"> {{vipItem.itemName}}</p>
        <hr class = "vip-item-title-line" color = "#dddddd" />
        <div class = "vip-item" v-for = "item in vipItem.itemDetails">
          <p class="vip-item-name" v-if = "item.desc"> {{item.name}}</p>
          <p class="vip-item-desc" v-if = "item.desc"> {{item.desc}}</p>
          <p class="vip-item-name-center" v-else = "item.desc"> {{item.name}}</p>
          <image class="vip-item-icon"
                 :src ="item.pic" ></image>
            <hr class = "vip-item-line" color = "#dddddd" v-if="$index !=  vipItem.itemDetails.length -1"/>
          </div>
          <hr class = "vip-item-botton-line" color = "#eeeeee"/>
          <div class = "vip-item-line-space"></div>
          <hr class = "vip-item-botton-line" color = "#eeeeee"/>
      </div>
  </div>
  </div>

</template>

<script>
import { vip } from 'vx/getters'
import { getVip } from 'vx/actions'
export default {
  route: {
    activate () {
      this.getVip()
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
  methods: {
    _click (grade) {
      if (window.Bridge) {
        var appFactory = window.Bridge.require('sdp.appfactory')
        var ret
        if (grade > 0) {
          // 升级会员跳转
          ret = appFactory.goPage({ 'page': 'cmp://com.nd.pbl.vip-component/vipupgrade' })
        } else {
          // 开通会员调转
          ret = appFactory.goPage({ 'page': 'cmp://com.nd.pbl.vip-component/vipopen' })
        }
        if (ret.result === false) {
          console.log('goPage failed' + ret.message)
        }
      }
    }
  },

  components: {

  }
}
</script>

<style src="styles/views/vip"></style>
