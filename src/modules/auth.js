//store/modules/auth.js

import axios from 'axios';

const state = {
    user: null,
    posts: null,
};

const getters = {
    isAuthenticated: state => !!state.user,    
    StatePosts: state => state.posts,
    StateUser: state => state.user,
};

const mutations = {
    setUser(state, username){
        state.user = username
    },
    setPosts(state, posts){
        state.posts = posts
    },
    LogOut(state){
        state.user = null
        state.posts = null
    },
};

const actions = {
    async Register( {dispatch}, form ){
        console.log("I'm on it!")
        await axios.post('/user/register', form)
        .then(res => {
            console.dir(res)
          })
          .catch(error => {
            console.log({
              error, 
              'error status': error.response.status, 
              'error response': error.response.data
            })
            alert('Authentication failed')
          })
        let UserForm = new FormData()
        UserForm.append('username', form.username)
        UserForm.append('password', form.password)
        await dispatch('LogIn', UserForm)
    },
    async LogIn({commit}, User) {
        await axios.post('/user/login', User)
        .then(res => {
        console.dir(res)
        })
        .catch(error => {
        console.log({
            error, 
            'error status': error.response.status, 
            'error response': error.response.data
        })
        alert('Authentication failed')
        })
          
        await commit('setUser', User.get('username'))
    },
    async LogOut({commit}){
        let user = null
        commit('LogOut', user)
    }
};

export default {
  state,
  getters,
  actions,
  mutations
};
