import Vue from 'vue/dist/vue';

new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});

new Vue({
  el: '#app2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
});

new Vue({
  el: '#app3',
  data: {
    seen: true
  }
});

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message
        .split('')
        .reverse()
        .join('');
    }
  }
});

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
});
