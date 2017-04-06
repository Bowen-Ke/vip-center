<template>
  <div class = 'desc' id = 'xxx'>
  <!-- {{ vip1.desc}} -->
</div>
    <!--<hr class = "vip-item-title-line" />-->
</template>

<script>
  import { vip } from 'vx/getters'
  import { getVip } from 'vx/actions'
  export default {
    data(){
      return {
        'vip1':{
          'desc':'<a href="http://lib.csdn.net/base/unity3d/structure"><font color=red>Unity3D学习，离VR开发还有一步</font></a>'
        }
      }
    },
    route: {
      activate (transition) {
        var html = '<p>g;jgjsgjsglsdpgjsd;<br/>lgjglpjkhkhklkhkphkhiophl;jhdfjhllfdjhjpodjhosjhjdsopjdpohjhopdjohpjdj</p>';
        var target = document.getElementById('xxx');
        target.innerHTML = html;
        transition.next()
        console.log(transition)
        this.getVip({
          appName: transition.to.query.appName
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

    }
  }
</script>

<style src="styles/views/vip1"></style>
