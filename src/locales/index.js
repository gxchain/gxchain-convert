import Vue from 'vue';
import VueI18n from 'vue-i18n';

import en from './en-US';
import zh from './zh-CN';
import ko from './ko-KR';

Vue.use(VueI18n);

const messages = {
  'en-US': en,
  'zh-CN': zh,
  'ko-KR': ko
};
let locale = localStorage.getItem('_locale') || 'en-US';
locale = locale.split('-')[0].toLowerCase() + '-' + locale.split('-')[1].toUpperCase();
localStorage.setItem('_locale', locale);

export default new VueI18n({
  locale: locale,
  messages
});
