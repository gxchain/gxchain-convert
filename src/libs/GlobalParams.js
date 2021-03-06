import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';

export default {
  install(Vue) {
    Vue.mixin({
      computed: {
        dayjs() {
          dayjs.locale('zh-cn', {
            months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split(
              '_'
            ),
            monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split(
              '_'
            ),
            weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split(
              '_'
            ),
            weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
            weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
            calendar: {
              sameDay: '[今日]',
              nextDay: '[明日]',
              nextWeek: '[下周]',
              lastDay: '[昨日]',
              lastWeek: '[上周]',
              sameElse: ' '
            },
            ordinal: function(number, period) {
              switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                  return number + '日';
                case 'M':
                  return number + '月';
                case 'w':
                case 'W':
                  return number + '周';
                default:
                  return number;
              }
            },
            relativeTime: {
              future: '%s内',
              past: '%s前',
              s: '几秒',
              ss: '%d 秒',
              m: '1 分钟',
              mm: '%d 分钟',
              h: '1 小时',
              hh: '%d 小时',
              d: '1 天',
              dd: '%d 天',
              M: '1 个月',
              MM: '%d 个月',
              y: '1 年',
              yy: '%d 年'
            }
          });
          dayjs.extend(calendar);
          return dayjs;
        }
      },
      methods: {}
    });
  }
};
