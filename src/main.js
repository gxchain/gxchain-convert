import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import AxiosIns from './libs/AxiosInstance';
import GlobalParams from './libs/GlobalParams';
import UIPlugin from './libs/UIPlugin';
import locales from '@/locales';

Vue.use(GlobalParams);
Vue.use(UIPlugin);

Vue.config.productionTip = false;
Vue.prototype.$http = AxiosIns;
// Vue.http.headers.common['Access-Control-Allow-Origin'] = `*`;

new Vue({
  router,
  i18n: locales,
  store,
  render: (h) => h(App)
}).$mount('#app');
