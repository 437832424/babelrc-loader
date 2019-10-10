// import './static/main.css'
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './src/app.vue';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});

// class Foo {
//     static bar() {
//         this.baz();
//     }
//     static baz() {
//         console.log('hello');
//     }
//     baz() {
//         console.log('world');
//     }
// }
// Foo.baz();