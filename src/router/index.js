import Vue from 'vue';
import Router from 'vue-router';

// Moved to pages from components
import Home from '@/pages/Home';
import Cart from '@/pages/Cart';
import Admin from '@/pages/Admin';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
    },
    {
      path: '/admin/create',
      name: 'CreateAdmin',
      component: CreateAdmin,
    },
    {
      path: '/admin',
      name: 'EditAdmin',
      component: EditAdmin,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
  ],
});
