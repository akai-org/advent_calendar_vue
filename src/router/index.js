import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
import BackendCalendar from '@/components/BackendCalendar';
import DesignCalendar from '@/components/DesignCalendar';
import FrontendCalendar from '@/components/FrontendCalendar';
import MobileCalendar from '@/components/MobileCalendar';

Vue.use(Router);

export default new Router({
  routes: [
      {
          path: '/',
          name: 'HelloWorld',
          component: HelloWorld
      },
      {
          path: '/backend',
          name: 'Backend',
          component: BackendCalendar,
          props: true
      },
      {
          path: '/frontend',
          name: 'Frontend',
          component: FrontendCalendar
      },
      {
          path: '/mobile',
          name: 'Mobile',
          component: MobileCalendar
      },
      {
          path: '/design',
          name: 'Design',
          component: DesignCalendar
      },
  ]
})
