# 快速上手

#### 全量引入
<br />

<font size=2>一般在 webpack 入口文件 `main.js` 中如下配置：</font> 
```javascript {4,5,7}
import Vue from 'vue';
import router from './router.js';
import App from 'components/app.vue';
import xwheels from 'x-wheels';
import "x-wheels/dist/index.css";

Vue.use(xwheels);

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
```

#### 按需引入
<br />

- 注册全局组件
<br />

<font size=2>一般在 webpack 入口文件 `main.js` 中如下配置：</font> 
```javascript {4,5,7}
import Vue from 'vue';
import router from './router.js';
import App from 'components/app.vue';
import "x-wheels/dist/index.css";
import {XButton} from 'x-wheels';

Vue.component('x-button', XButton);

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
```

- 在组件中直接使用
<br />

<font size=2>在`*.vue`中导入，并注册组件。</font> 
```vue {2,3}
<script>
    import "x-wheels/dist/index.css";
    import {XButton} from 'x-wheels';
    
    export default {
        components: {
            'x-button': XButton
        }       
    }
</script>
```
