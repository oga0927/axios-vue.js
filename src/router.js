import Vue from 'vue';
import Router from 'vue-router';
import Comments from './views/Comments.vue';
Vue.use(Router);

export default new Router({
  mode:'history',
  router:[
    {
      path: '/',
      component: Comments
    }
  ]
});