<template>
  <div >
    <progress class="progress"
      :progress="progress"></progress>
    <toast class="toast"
      :toasts="toasts"
      @remove="removeToast"></toast>

    <router-view class="router-view"
      transition="router-view-transition"
      transition-mode="out-in"
      keep-alive></router-view>
  </div>
</template>

<script>
import store from 'vx/store'
import { progress, toasts } from 'vx/getters'
import { deleteToast } from 'vx/actions'
import Progress from 'solo/c-progress'
import Toast from 'solo/c-toast'
import Logo from 'solo/c-logo'
import Navbar from 'solo/c-navbar'
import Route from 'solo/c-route'
import { routes } from 'routes'
export default {
  name: 'App',
  store,

  data () {
    return {
      routes
    }
  },

  computed: {
    filter () {
      return (key, route) => {
        return key !== '/' && route.auth !== !this.auth
      }
    }
  },

  methods: {
    removeToast (toast) {
      this.deleteToast(toast)
    }
  },

  vuex: {
    getters: {
      progress,
      toasts
    },
    actions: {
      deleteToast
    }
  },

  components: {
    Progress,
    Toast,
    Logo,
    Navbar,
    Route
  }
}
</script>

<style src="styles/app"></style>
<style src="styles/views/components/logo"></style>
