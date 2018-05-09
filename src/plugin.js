import TimeAgo from './TimeAgo.vue';

module.exports = {
  install: function (Vue, options) {
    Vue.component('vue-time-ago', TimeAgo);
  }
};
