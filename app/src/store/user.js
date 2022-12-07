import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state () {
    return {
      id: '',
      token: '',
      isLoggedIn: false,
      profile: {}
    }
  },
  actions: {
    init: function () {
      const userid = localStorage.getItem('userid')
      const token = localStorage.getItem('token')
      if (userid && token) {
        this.login(userid, token)
      }
    },
    check: function () {
      const that = this
      if (localStorage.getItem('token')) {
        fetch(
          'https://admin.mkay-development.de/api/users/' +
            localStorage.getItem('userid'),
          {
            method: 'GET',
            headers: { Authorization: 'User ' + localStorage.getItem('token') }
          }
        )
          .then(function (response) {
            return response.json()
          })
          .then(function (data) {
            if (data.profile) {
              that.isLoggedIn = true
              that.profile = data.profile
            }
          })
      }
    },
    logout: function () {
      this.remove()
      this.isLoggedIn = false
    },
    login: function (id, token) {
      this.id = id
      this.token = token
      this.isLoggedIn = true
      this.save()
    },
    save: function () {
      localStorage.setItem('userid', this.id)
      localStorage.setItem('token', this.token)
    },
    remove: function () {
      localStorage.removeItem('userid')
      localStorage.removeItem('token')
    }
  }
})
