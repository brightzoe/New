# 框架学习

## vue

- 引用方式

  - script 引用
  - npm 安装 npm install vue

- 插值

  - 文本或 js 表达式(单个表达式)插值 {{value}}
    `<span>Message: {{ msg }}</span>`
    `{{ 1+1==2 ? "1" : "hh" }}`
    只能在两个 html 标签之间插值，不能插值在一个标签内

  - html 插值 v-html 指令

    `<p v-html="rawHtml"></p>`

    p 标签的内容 会替换为 rawHtml 渲染的内容，直接作为 html。

### 指令，以 v- 为前缀

- v-bind
  将某个属性绑定为一个变量 `<span v-bind:title="message">`
  缩写`<span :title="message">`
  动态参数:`<span :[title]="message">` 属性名也是表达式，避免大写字母
- v-on
  添加事件监听器 `<button v-on:click="reverseMessage">反转消息</button>`
  缩写 `<button @click="reverseMessage">反转消息</button>`
  `<button @click="reverseMessage(idx,$event)">反转消息</button>`

  - 修饰符
    `<form v-on:submit.prevent.stop="onSubmit">...</form>`
    .prevent: event.preventDefault();
    .stop:event.stopPropagation();

- v-if
  判断一个元素是否显示，值为 true 时显示，false 不显示
  `<p v-if="seen">现在你看到我了</p>`
  `<p v-else>现在你看到另一个了</p>`
  v-else 元素必须紧跟在带 v-if 或者 v-else-if 的元素的后面，否则它将不会被识别,可以配合 template 元素实现分组渲染,不会被包在别的元素里面，如 div.
  可以配合设置具有唯一值的 key 属性，来表达“两个元素完全独立，不要复用”的情况

  ```html
  <template v-if="ok">
  	<h1>Title</h1>
  	<p>Paragraph 1</p>
  	<p>Paragraph 2</p>
  </template>
  ```

- v-show
  和 v-if 用法一样，不同的是带有 v-show 的元素始终会被渲染并保留在 DOM 中。v-show 只是简单地切换元素的 CSS 属性 display, v-show 不支持 `<template>` 元素，也不支持 v-else.
  > **v-if vs v-show**
  > v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
  > v-if 也是惰性的:如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
  > 相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
  > 一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。
- v-for
  可以绑定数组的数据来渲染一个项目列表 ,需要配合使用 `(item, index) in items` 形式的特殊语法,index 不用时可以省略.
  由于 vue 默认是就地更新每个元素，需要每项设置唯一的`key`,以便它能跟踪每个节点的身份，从而重用和重新排序现有元素.

```html
<li v-for="todo in todos" :key="todo.content">{{ todo.text }}</li>
```

也可以绑定对象的数据来渲染一个项目列表，可以传递 3 个参数，index 表示第几个，类似数组.

```html
<div v-for="(value, key, index) in object">
	{{ index }}. {{ key }}: {{ value }}
</div>
```

- v-model
  FIXME 表单输入绑定
  实现表单输入和应用状态之间的双向绑定。相当于添加一个属性和一个事件监听器.
  `<input>`、`<textarea>` 及 `<select>` 可以双向绑定各种数据类型的值.
  v-model 在内部为不同的输入元素使用不同的属性并抛出不同的事件:
  text 和 textarea 元素使用 value 属性和 input 事件；
  checkbox 和 radio 使用 checked 属性和 change 事件；
  select 字段将 value 作为 属性和 change 作为事件。

### 创建 vue 应用

除了数据 property,Vue 实例还暴露了一些实例 property 与方法。如`app.$data,app.$el,app.$watch`

```js
var app = new Vue({
el: //选择器选定一个元素，该元素及其后代可以进行 vue 操作
data: {}
//储存相关数据，vue 内部会把所有的数据的变为 getter 和 setter；
//只有当实例被创建时就已经存在于 data 中的 property 才是响应式的.
computed:{
  total:{
    get:function(){}
    set:function(){}
}
//NOTE: 计算属性，一个函数，只有函数的返回结果发生变化时才会重新运行渲染。自带缓存效果,当一个属性的值是现有的数据推导出来的可以用计算属性,计算属性基于他们的响应式依赖进行缓存。
// 默认只有 getter，也可以写 setter。
}
watch:{
  price:function(){}
  amount:function(){}
//帧听属性，监听并响应vue实例中数据的变动，相比计算属性更通用，不要滥用。如果需要在数据变化时执行异步或开销较大的操作时，watch最有用。
}
methods:{
method1:function(){}
method2(){}
}
template://html 代码
//当一个实例里面有 template 属性时，初始化实例时会将 template 的值作为虚拟 DOM 而忽略实际的 el 元素内容
})
```

- 数组的变更检测
  数组的下标没有设置为 getter 和 setter，所以不能通过更改数组下标的方式改变页面，因为 vue 并不能监听到下标的变化，即当你利用索引直接设置一个数组项时，和当你修改数组的长度时，Vue 不能检测数组的变动；可以通过 `Vue.set(vm.items, indexOfItem, newValue)` 添加。
  vue 对一些方法进行了一层包装，这些方法会触发视图更新:`push(),pop(),shift(),unshift(),splice(),sort(),reverse() `
- 对象的变更检测
  对象也不可以直接通过增加和删除属性来触发视图更新，因为普通属性不会变为 getter 和 setter， 可以用 `Vue.set(vm.items, key, newValue)` 添加
  }

### 修饰符

修饰符 (modifier) 是以半角句号.指明的特殊后缀，用于指出一个指令应该以特殊方式绑定

- 事件修饰符
  .stop => event.stopPropagation()
  .prevent => event.preventDefault()
  .capture => 添加事件监听器时使用事件捕获模式
  .self => event.target 是当前元素自身时触发
  .once => 事件将只会触发一次
  .passive => 表示不阻止事件的默认行为
  .sync=>父组件监听子组件并更新本地数据
- 按键修饰符
  .enter;.tab;.delete ;.esc;.space;.up;.down;.left;.right
- 系统修饰键
  .ctrl;.alt;.shift;.meta
- 鼠标按钮修饰符
  .left;.right;.middle
- .exact 修饰符
  @click.ctrl.exact 有且只有 Ctrl 被按下的时候才触发
- 表单修饰符

  - .lazy 在默认情况下，v-model 在每次 input 事件触发后将输入框的值与数据进行同步。可以添加 lazy 修饰符，从而转变为使用 change 事件进行同步.v-model.lazy
  - .number 如果想自动将用户的输入值转为数值类型，可以给 v-model 添加 number 修饰符.v-model.number
  - .trim 如果要自动过滤用户输入的首尾空白字符，可以给 v-model 添加 trim 修饰符.v-model.trim

- Class 与 Style 绑定

  - class 的绑定
    - 直接绑定字符串作为类名
    - 绑定到一个对象，对象里值为 true 的属性名为一个类名
      `v-bind:class="{ active: 1+2===3, 'text-danger': false }" => class = active`
      对象不必定义在模板里，可以在 js 里面,可以写在返回对象的 computed 属性上。
    - 绑定一个数组传给 `v-bind:class`,以应用一个 class 列表。数组中可以套用对象语法。
      `v-bind:class="[activeClass, errorClass]"`, 判断规则和上面 2 中一样
  - style 的绑定
    - 绑定到字符串 `:style ="'color:red'"`
    - 绑定到一个对象,data 里面可以写一个 style 对象。CSS 属性名可以用驼峰式或短横线分隔来命名
      `v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"`
    - 绑定到数组
      数组里面可以写多个样式对象。
    - 多重值
      `:style="{ display: ['-webkit-box', '-ms-flexbox', 'flex']`
      只会渲染数组中最后一个被浏览器支持的值

- key 属性的作用
  Vue 提供了一种方式来表达一个元素独一的身份,识别节点的通用机制。只需添加一个具有唯一值的 key 属性，虚拟 DOM 在进行对比渲染时，key 值不相同的元素不会作对比， 保证了同一个元素渲染前后都只和自身对比；而不会因为元素位置的变化导致从头渲染；

- vue 初始化将 data 都变为 getter 和 setter 函数

```js
function observe(obj) {
	for (let prop in obj) {
		let val = obj[prop];
		if (typeof val == 'object') {
			val = observe(val);
		}
		Object.defineProperty(obj, prop, {
			get: function () {
				return val;
			},
			set: function (value) {
				if (typeof value == 'object') {
					value = observe(value);
				}
				val = value;
			},
		});
	}
	return obj;
}
```

- 异步更新队列

  - Vue 在更新 DOM 时是异步执行的，每次数据变更都会次发出渲染的信号
  - vue 收到信号后会检查是否渲染任务已经在任务队列里，已经存在就忽略
  - 在本轮事件循环的最后执行渲染
  - 防止了重复渲染，提高性能

### 生命周期钩子 lifecycle hooks

- 生命周期
  Vue 实例从创建到销毁的过程，就是生命周期。也就是从开始创建、初始化数据、编译模板、挂载 DOM → 渲染、更新 → 渲染、卸载等一系列过程
- 钩子
  钩子就是在生命周期的某个阶段给你一个做某些处理的机会（执行一段 js 代码）
- 流程
  - 创建一个 vue 实例 vm，new Vue()
  - 初始化事件和生命周期
    - 将 vm 转化为一个事件监听触发器，可以监听和触发事件；
    - 初始化生命周期，为其添加了钩子函数
  - 执行钩子函数 beforeCreate
  - 初始化注入和校验
    - 检查代码正确性
    - 将 data 里面的每一个数据变为 getter 和 setter
  - 执行钩子函数 **created**
  - 判断是否有 el 属性
    - 没有就暂停周期等待调用 vm.\$mount(el) 函数，再执行下一步
    - 有就直接执行下一步
  - 判断是否有 template 属性
    - 有模板就将模板编译到 render() 中渲染得到虚拟 dom（一个树状结构的对象）
    - 没有模板就将 el 元素的 outerHTML 作为模板执行上面的操作
  - 执行钩子函数 beforeMount
  - 创建 vm.\$el 并替换 el 属性
    - 通过虚拟 DOM 创建了一个真实的 DOM 元素 el
    - el 之前是选择器一个字符串，现在替换为一个真正的 DOM 元素
  - 执行钩子函数 **mounted**
  - 挂载完毕
    - 当 data 被修改时，调用钩子函数 beforeUpdate
    - 虚拟 DOM 重新渲染并更新页面
    - 更新完毕执行钩子函数 **updated**
  - 当调用 vm.\$destroy() 时
    - 执行钩子函数 beforeDestroy
    - 解除绑定销毁组件以及事件监听器
    - 销毁完毕
    - 执行钩子函数 **destroy**

### 组件

可**复用**的 Vue 实例，组件名称当 html 标签使用。
与 new Vue 接收相同的选项，例如 data、computed、watch、methods 以及生命周期钩子等。仅有的例外是像 el 这样根实例特有的选项。
组件要先注册才能使用。两种注册类型:全局注册、局部注册。

- 创建组件
  全局注册组件:

```js
  Vue.component('组件名称，之后当做标签使用',{
  template:`模板内容` //模板 html 的最外层必须要有且只有一个根元素包裹着所有的元素，最外层不能是多个兄弟元素并列
  props:{//组件的属性,可以直接用在html标签里面
  count: Number//限制值的类型,也可以用数组[String, Number]
  productName: {
  type: String, //类型为 String
  required: true, //必要属性，必须传值
  default: 'product'
  }
  price: {
  validator: function (value) {
  // 验证函数
  return value>=0
  }
  }
  //通过 Prop 向子组件传递属性，属性值由组件标签上传递:bind 过来
  //单向下行绑定:父级 prop 的更新会向下流动到子组件中，但是反过来则不行
  }
  data(){
  return obj
  //一个组件的 data 须是一个函数，返回一个新的对象，因此每个实例可以维护一份被返回对象的独立的拷贝，每个组件之间的运行是独立的，数据不会共享
  //这个函数只在组件初始化时运行一遍，数据之后保存在 getter 和 setter 里
  }
  methods:{

  }
```

局部注册组件，'component-a'只能在父组件使用:

```js
  components: {
  'component-a': {
  data(){},
  template:``
  methods:{}
  }

  }
  inheritAttrs: false
  //为组件标签添加属性会自动继承到组件模板的根元素上。你不希望组件的根元素继承特性，你可以在组件的选项中设置这个，但是不会影响 style 和 class 的绑定和继承；
  //$attrs 可以收集父组件中的所有传过来的属性中除了那些在组件中没有通过 props 定义的
  })
```

- 监听子组件事件
  子组件使用事件抛出一个值。

  - 父组件监听子组件 @click="func"
  - 子组件在某种情况下（比如自己触发了自己的事件）触发该自定义事件
    如在点击时触发自定义事件 v-on:click="\$emit('event1' ,argument)
  - emit 的第二个参数表示可以给父组件传递的参数，父组件可以通过 $event 接收这个参数.如果父组件的事件处理函数是一个方法，那么 $event 将会作为第一个参数传入这个方法
    v-on:event1='$event'
    v-on:event1='fun' methods:{func($event){}}

- 组件的数据传递

  - 自上而下通过 prop 传递，从父组件传到子组件，不能在子组件中修改 prop。
  - 自下而上通过事件触发传递
  - 组件操作 prop 传递来的数据时，组件不要修改它，只读取，通过触发事件上级组件反馈，由上级组件操作数据；数据的拥有者是哪个组件，哪个组件才可以更改它；
    组件的层次过深时，组件树数据的传递太繁琐，建议将数据放到全局，每个组件直接修改全局数据，这样就不用传递数据
  - 两个并列的组件的交互方法:通过相同的父组件作中转操作

- 组件相关的命名
  由于 html 的解析不区分大小写，会把所有大写字符解释为小写字符，再加上 vue 里面的各种命名没有统一，为防止错误，命名都采用 A-B-C 形式。

- 组件的模块式导入和导出
  和 ES6 规定的模块方式一样
  import ComponentA from './ComponentA'
  import ComponentC from './ComponentC'

  export default {
  components: {
  ComponentA,
  ComponentC
  },
  // ...
  }

- 子元素:标签包裹在另外一个标签里面
  子组件:一个组件里面的 template 用到了其他组件

### 插槽 slot

    - <slot></slot>写在组件的 template 里面，外部组件标签的 innerHtml 会替代<slot></slot>得到完整的 template。即组件标签的子元素会转化替换掉组件的子组件<slot></slot>

    - 父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。

    - <slot>default</slot>当组件标签没有子元素时会显示 default

    - 具名插槽

      - <slot name="header"></slot>为插槽起名字

      - <template v-slot:header> </template> 通过 template 元素使用该插槽，v-slot 只能添加在一个 <template>上 v-slot:header 可以缩写为#header

- 动态组件

  - <keep-alive>缓存组件内容
  - is 特性 用于动态组件且基于 DOM 内模板的限制来工作 接收 string | Object
    <component v-bind:is="currentView"></component>可以通过 currentView 判断绑定的组件名

- 异步组件
  Vue.component('async-example', function (resolve, reject) {里面执行异步操作}

- 访问组件和元素

  - 访问根实例 vm.\$root
  - 访问父级组件实例 vm.\$parent
  - 访问子组件实例或子元素 通过 ref 特性 vm.\$refs

- X-Template 模板的另外的定义方式

  <script type="text/x-template" id="hello-world-template">
    <p>Hello hello hello</p>
  </script>

  Vue.component('hello-world', {
  template: '#hello-world-template'
  })

- 强制更新 迫使 Vue 实例重新渲染。vm.\$forceUpdate()

### Vuex

- Vuex 是一个专为 Vue.js 应用程序开发的数据管理模式。它采用集中式存储管理应用的所有组件的数据

- 安装
  除了通过 script 标签引用，其它方式引用要确保在开头调用了 Vue.use(Vuex)

- 使用方法

  - 对于根组件
    var app5 = new Vue({
    store:store, 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件，子组件可以通过 this.\$store 访问到根组件的 store 对象
    })

  - 创建一个仓库实例
    var store = new Vuex.Store({
    state:{
    data:value state 里面储存数据
    },

    mutations: {
    increment (state) {
    state.count++
    }
    更改 Vuex 的 store 中的状态的唯一方法是提交 mutation, 里面是一些数据操作的函数，子组件通过这些函数操作数据，函数第一个参数默认为 state
    mutation 里面的函数必须是同步的
    }

    action:{
    increment (context) {
    context.commit('increment')
    }
    action 作用是多次触发 mutation 里面的函数，而且可以是异步的；Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象（理解时可以直接当做 store）
    }

    getters: {
    isAllSelected(state) {
    return state.todos.every(it => it.done)
    }
    里面是一些 getter 函数，函数第一个参数默认为 state；就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
    }
    })

  - 对于子组件
    Vue.component('todo-footer', {
    methods:{
    clearCompleted() {
    this.$store.commit('clearCompleted',argument)
            }可以通过 this.$store.commit 触发 store 实例 mutations 里面的数据变更函数
    increment(){
    this.$store.dispatch('increment',argument)
            }可以通过 this.$store.dispatch 触发 store 实例 action 里面的数据变更函数
    },
    computed:{
    leftCount() {
    return this.$store.getters.leftCount
            }可以通过 this.$store.getters 触发 store 实例 getters 里面的 getter 函数
    },
    })

- 模块
  Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter const moduleA = { state: { ... }, mutations: { ... }, actions: { ... }, getters: { ... }}
  const moduleB = {state: { ... },mutations: { ... },actions: { ... }}
  const store = new Vuex.Store({modules: { a: moduleA, b: moduleB}})

### Vue Router

- 前端路由
  页面本身不刷新，前端发送了请求，后端发回了数据，前端解析数据把数据渲染到前端对应的页面模板中。
  Vue Router 默认是 Hash 模式的前端路由，通过#后面值的改变，渲染指定 DOM 位置的不同组件

- Vue Router 是 Vue.js 官方的路由管理器，用于构建单页面应用

- 安装
  除了通过 scrip 标签引用，其它方式引用要确保在开头调用了 Vue.use(VueRouter)，而且 Vue.js 需要先加载

- 使用方法

  - 对于 HTML

    <div id="app">
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
      <router-view></router-view>
    </div>

    <router-link>表示组件，to 属性指定链接，会被渲染成一个 `<a>` 标签
    <router-view></router-view> 路由匹配到的组件将渲染在这里

  - 对于 router 对象
    const router = new VueRouter({
    routes: [{
    path: "/a", 路由匹配到的路径
    redirect: '/wechat' 路由匹配到该路径跳转另外路径
    name:"112" 命名路由用的，一般用不到
    alias: '/b' 别名，用户访问 /b 时，URL 会保持为 /b，但是路由匹配则为 /a，就像用户访问 /a 一样；用得少
    },
    {
    path: "/wechat", 路由匹配到的路径
    component: wechat, 路由匹配到该路径就渲染这个组件
    children:[{
    path: 'man', 这个路径表示匹配到 /wechat/man 这个路径
    components:safe,
    这个属性用于路由的嵌套
    }]
    } ,

  - 对于根组件
    const app = new Vue({
    router, 把 router 对象提供给 “router” 选项，这可以把 router 的实例注入所有的子组件，子组件可以通过 this.\$router 访问到根组件的 router 对象
    el: "#app",
    })

  - 对于组件
    let chat = {
    template:`必要属性 <div> <div>你正在和{{$route.params.id}}聊天</div> <button @click="$router.go(-1)">返回</button> </div>`
    }

- 其它方法

  - 路由对象 route
    一个路由对象 (route object) 表示当前激活的路由的状态信息，路由对象是不可变的，每次成功的导航后都会产生一个新的对象。
    访问方式:在组件内，即 this.$route；通过 watch 监控 $route ；全局 router.match(location) 的返回值
  - 动态参数
    {path: '/user/:id', component: User }
    通过 id 来传递动态参数
    /user/foo 和 /user/bar 都将映射到这个路由。参数储存在 this.$route.params 这个对象里，在组件里可以通过 this.$route.params.id 拿到参数；同时也有 $route.query 和 $route.hash 的 api
  - 当使用路由参数时，例如从 /user/foo 导航到 /user/bar，原来的组件实例会被复用，组件的生命周期钩子不会再被调用；复用组件时，想对路由参数的变化作出响应的话，通过 watch 监控 $route 对象
      watch: {
      '$route' (to, from) {
    // 对路由变化作出响应。..
    }

  - 通配符
    path: '\*' 会匹配所有路径
  - 编程式导航 效果和<router-link>一样，可直接在组件中调用
    router.push('path') 会向 history 添加新记录
    router.replace('path') 不会向 history 添加新记录
    router.go(n) 在 history 记录中向前或者后退多少步

- HTML5 History 模式

  - vue-router 默认 hash 模式 ，即使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。
  - HTML History 模式就是除掉路径中的#号，使其看上去美观
    http://localhost:3010/new-product/vue-app#/orders/paid/weifahuo
    让以下地址返回的内容跟上面的地址返回一样的内容，同时注意相对路径
    上方#标明了前端路由的路径，下方没有，所以需要在 router 里设置后端路由是从哪到哪，需要在服务端增加一个覆盖所有情况的候选资源
    http://localhost:3010/new-product/vue-app/orders/paid/weifahuo

### Vue CLI(command line interface)

- runtime 版本和完整版本 vue 的区别

  - render 函数 接受三个参数，render（标签名，属性，子元素），根据传入信息将其转化为虚拟 DOM
  - vue.complile 是 vue 编译器，浏览器通过这个编译器将模板字符串转化为 render 函数
  - 完整版 vue 有这个编译工具，runtime 版本没有，但是 runtime 版本会提前把模板字符串编译为 render 函数，这样就少了浏览器的编译过程，提升性能和效率

- vue 相关文件和工具
  babel:一个广泛使用的转码器，可以将 ES6 代码转为 ES5 代码，从而在现有环境执行；让旧版本的浏览器可以用最新的语法
  stylus : 一种类似 scss 的语言，现在主流是 scss
  vue-loader: web-pack 插件，编译器
  ESLint:js 代码风格检查工具，目前流行的是 Airbn/standard/prettier
  browserslist 查询每一款浏览器支持什么特性的工具
  .editorconfig 编辑器配置文件
  PostCSS 一个平台，可以安装各种 js 插件转换编译 CSS
  package-lock 锁定安装时的包的版本号，并且需要上传到 git，以保证其他人在 npm install 时大家的依赖能保证一致
  npm run XXX 是执行配置在 package.json 中的脚本
  npm run build , 相当于运行 vue-cli-service build，会生成一个 dist 文件，里面是打包的可用于生产环境的包，之后把这些包放到 web 服务器里面的 static 文件夹里
  umd Universal Module Definition 一些模块类型，umd 类型的会全局定义一个变量

- .vue 文件的格式

  - <template>模板内容，可以高亮</template>

  - <style lang="scss" scoped> css 代码 </style> scoped 表示 css 只对这个组件生效

  - <script>js 代码</script>

  - import 模块 / 组件 from path 导入模块

    - 这里可以用 @表示 src 文件的路径，比较方便

- export default {components:{导入得到局部组件需要在这个里面赋值过来才能在 template 生效，一般组件名都大写}, 其它组件属性}

- 安装 npm install -g @vue/cli

- 单个文件快速原型开发
  vue serve 文件名 vue serve index.vue

- 创建一个项目

  - winpty vue.cmd create 项目名称 linux 环境下
    vue create 项目名称 window 环境下
  - 会生成一个项目文件夹，里面有以下信息
    - git 相关
    - public 网站用到的公开的文件，一般是图片和 html，基本不用动
    - src 项目的源代码
      - main.js 入口 js 文件
      - App.vue 入口组件
      - components 组件，会被 App.vue 引用
      - views 视图，路由对应的组件文件放这里
      - 路由，数据仓库，视图等
      - asset 静态资源
    - 一些配置文件
      readme.md 告诉你这么开启这个项目的命令
  - 相关文件配置好后，运行 npm run build , 它会把相关文件打包到 dist 文件里，之后吧 dist 文件里面的资源放到 static 文件里

## React

- 三个引用

  - 这个文件是用来实现虚拟 dom 的，全局创建一个 react 变量，react 代码里面的每一个标签都通过 babel 转化为了 ` React.createElement()``<script src="https://unpkg.com/react@16/umd/react.development.js"></script> `
  - 这个文件是用来实现真实 dom 的，全局创建一个 ReactDOM 变量`<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>`

  - 这个 babel 文件是用来编译 react 代码的，如 JSX, 编译为 ES5 代码
    ` <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>``<script type="text/babel">react代码</script> `

- Source map
  Source map 就是一个信息文件，里面储存着位置信息。也就是说，转换后的代码的每一个位置，所对应的转换前的位置。有了它，出错的时候，除错工具将直接显示原始代码，而不是转换后的代码。
- 插值
  通过{}插值，里面可以是各种类型的值，可以是表达式但不能是语句
- style 属性只接收对象不接收字符串,`style ={{color:red}}`
- className= "" 属性的类型 class 要写为 className，react 的 className 属性不能动态的添加值，可以用 npm 库的 classnames
- 条件渲染:用`true && expression` 或者三目运算符 ? :
- key 和 ref 属性是组件的特殊属性，不在 props 上面，在 props.key 读不到！
  fixme:为什么 key 是必须的？使用 idx 作为 key 的负面影响？diff 算法怎么比较？
  > key 要稳定，可预测，列表内唯一。react 的 render()方法会创建一颗由 react 元素组成的虚拟 DOM 树，state/props 更新时，会重新 render 返回一颗不同的树。基于这两棵树的差别，有效率地更新 UI 以保证当前 UI 与最新的树保持同步。将生成的一棵树转换为另一棵树的 diff 算法比较复杂，key 同来匹配原有树上的子元素和最新树上的子元素。
  > 使用 index 作为 key 在元素不进行重新排序时比较合适。如果基于下标的组件进行了重新排序，修改顺序会修改当前的 key，导致非受控组件 state 相互篡改产生无法预期的变动。
  > 为什么用虚拟 dom?对虚拟 dom 的理解？
  > dom 结构+style 结构=>render
  > 虚拟 dom 目的：抽象出虚拟层,进行变化前后的比较，确定是不是需要更新，进行批量的操作，做最少的更新，减少重绘，重布局的次数，减少真实 dom 的操作，减少浏览器刷新次数。

### JSX

#### 是什么？

- JavaScript 的语法扩展，一种标签语法，是`React.createElement()`的语法糖。
  JSX: `<Btn>Hello, world!</Btn>`，会调用 `React.createElement(Btn,props,children)`创建 React 元素。
- JSX 自定义标签，一定是首字母大写。可以是 **变量** ，可以用 **对象点语法(Foo.Abc)** 引用，但不能是表达式，其他情况会当做原生标签的字符串传入`React.createElement()`。
- 使用组件时，根元素内部的子元素或者文字等，可以在组件里通过`props.children`读到。
- JSX 会移除行首，行尾的空格以及空行。与标签相邻的空行均会被删除，文本字符串之间的新行会被压缩为一个空格。
- `<label htmlFor ="">` label 标签里面的 for 属性，因为 for 是 js 关键字，JSX 里面要写作 htmlfor,class 要写作 className.
- jsx 返回的内容也只能有一个根结点，不产生单独的作用域。

#### 为什么用？

- 执行速度快
- 类型安全，比 React.createElement 容易写。避免写错

### 组件

- 组件名必须大写
- 不能将通用表达式作为组件名，组件名必须是静态的，即使用组件时它是确定唯一的
- 声明 react 组件不能修改自身的 props/state，像纯函数一样保护他们的 props/state.

  ```js
  //用class声明组件
  class Foo extends React.Component {
  	constructor(props) {
  		super(props); //用来引入 this.props 用来接收组件标签传来的属性，一般是一个对象{prop:value},props 只读不能更改；props.children 可以直接拿到组件的子元素或者中间的插值
  		this.state = {
  			//用来记录数据状态
  			data: lala,
  		};
  	}
  	render() {
  		//会返回一个虚拟 dom，就是组件模板
  		return <div>{this.state.key}</div>; //React 通过{}传递动态数据
  	}
  	method = () => {
  		this.setState({}); //or
  		this.setState((state) => {
  			return {};
  		});
  		//setState 也可以接收一个函数，参数默认是 state，返回一个新的 state 对象
  	};
  }

  //声明一个简单的函数组件，函数组件没有实例，节省内存，也没有 ref 属性
  function Welcome(props) {
  	return <h1>Hello, {props.name}</h1>;
  }
  ```

#### 高阶组件 HOC

- 和高阶函数类似，高阶组件是参数为组件，返回值为新组件的函数。组件是将 props 转换为 UI，而高阶组件是将组件转换为另一个组件。
- 需要在一个地方定义一个逻辑，并在许多组件之间共享。HOC 是纯函数，不修改传入的组件。
- 需要给 HOC 定义一个 displayName。静态方法需要复制。ref 需要转发。
  [高阶组件中转发 ref](https://zh-hans.reactjs.org/docs/forwarding-refs.html#forwarding-refs-in-higher-order-components)
  ```js
  function logProps(Comp) {
  	return class extends React.Components {
  		componentWillUpdate() {
  			console.log('hello');
  		}
  		render() {
  			//高阶函数传递props
  			return <Comp> {...this.props} </Comp>;
  		}
  	};
  }
  let SuperComp = logProps(Comp);
  SuperComp.displayName = 'Comp';
  ```

### State

- state 是局部的（封装的），其他组件不能访问。
  传递 state(**单向数据流**):把 state 作为 props 向下传递到子组件中，子组件通过 props 接收,但无法知道它的来源。

  ```js
  function FormattedDate(props) {
  	return <h2>it's {props.data.toLocaleTimeString()}</h2>;
  }
  class FormattedDate extends React.Component {
  	render() {
  		return <h2>it's {this.props.data.toLocaleTimeString()}</h2>;
  	}
  }
  ReactDOM.render(
  	<FormattedDate date={this.state.date} />,
  	document.getElementById('root')
  );
  ```

- 构造函数是唯一可以给`this.state`赋值的地方。**不要直接修改 State，应该使用`setState()`。**
  React 只能通过 `setState` 设置数据状态更新 state，state 改变了，该组件就会重新渲染。
  State 的更新会被合并，只更改新 state 传入的部分，其它数据保留。`this.state` 的指向从开始创建到更新一直没有改变，指向同一个对象，对象里面的数据发生改变。
- `this.setState()`更新是异步的，微任务，回调可以接一个 state 参数，作为上个 setState 更新后的 state(与 this.state 不是同一个对象！)，注意 setState 是回调形式的异步，不是 promise，所以不能用 await

- State 的更新可能是异步的，出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用。
  `this.props`与`this.state`可能会异步更新。在 React 中，`this.props` 和 `this.state` 都代表着已经被渲染了的值，即当前屏幕上显示的值。
  - 在同步函数(事件处理函数里)里面调用 `setState` 那么 state 的更新是异步的，state 的批更新机制。
  - 在异步函数(自己定义的函数)里面调用 `setState` 那么 state 的更新是同步的。
    FIXME:state 同步异步问题
    > **什么时候是同步的？什么时候是异步的？为什么有时是同步的，有时是异步的？**
    > 在事件处理函数中，state 更新是异步的，在浏览器事件处理结束后批量合并，避免不必要的重新渲染，效率更高，提升性能。在很多情况下 React 使用 state 批更新机制。
    > **那为什么不立即更新 state,而不重新渲染组件呢？**
    > 保证 React 提供的对象（props,state）在内部状态和更新保持一致，确保他们是协调的很重要，如果不一致，出现问题很难定位。
    > 异步渲染保证用户体验。
    > **state 与 props 的区别是什么？**
    > 共同点:都是对象，用来保存信息，可以控制组件的渲染输出。
    > state 是存储在组件中的数据及状态，在组件内部由组件自己管理。（类似一个函数内声明的变量）
    > props 是组件的属性，写在组件标签上的，通过 props 单向传递给组件。（类似于函数的形参）

### 事件处理

事件处理:

- 事件命名 camelCase:onClick,onDoubleClick,onChange
- React 事件是合成事件，与原生事件不完全相同。
  不能通过返回 false 阻止默认行为，必须显式使用 preventDefault()。

- 处理 this 的问题

  1. 在 constructor 里面把所有事件处理函数绑定 this:`this.handleClick=this.handleClick.bind(this)`
  2. 事件处理函数包一层箭头函数，指定 this
  3. 在 render 里写箭头函数,如果函数没有参数或者只有参数 e,在 render 里可以直接写函数名字.

  ```js
  class Foo extends React.Components{
    //class fields语法
    handleClick=()=>{
      console.log(this)
    }
    render(){
      return <button onClick={this.handleClick}></button>
    }
  }
  或者:
  class Foo extends React.Components{
    handleClick(){
      console.log(this)
    }
    render(){
      //确保handleClick内的this被绑定。
      return <button onClick={()=>this.handleClick()}></button>
    }
  }
  ```

  推荐第一种:class fields 语法。

  第二种每次在渲染 Foo 时都会创建不同的回调函数。如果回调函数作为 props 传入子组件时，组件可能会进行额外的重新渲染。

### 表单

- textarea 文本内容通过 value 设置。select 默认选项通过 value 设置。
- 表单 onChange 事件按键即触发，原生 change 事件(vue)在光标移开/回车才触发。

- 受控组件:表单元素有 value 属性，这个时表单无法被修改。
  React 组件里的 state 是唯一数据源，渲染表单的 react 组件还控制着用户输入过程中表单发生的操作。被 react 以这种方式控制取值的表单输入元素叫做”受控组件“。
- 非受控组件
  - 不加上 value 属性，defaultValue 替代 value 属性
  - 加上 value 属性和 onChange 事件
- react forms api:formik

### Fragments

一个组件返回多个并列子元素的方法。

```js
render() {
  return (
    <React.Fragment>
    <ChildA />
    <ChildB />
    <ChildC />
    </React.Fragment>
  );
}
```

- 也可以用`<>` `</>` 代替 Fragments 组件实现组合，但是 Fragments 支持 key 属性，目前也是唯一支持的属性。

### Refs

- 提供了父组件访问子组件或者子元素的唯一方法

#### 使用方法

为子组件标签提供一个 ref 属性
NOTE:refs 使用方法，优劣对比，区别

- 方法一
  - ref 属性值是一个字符串 `<input ref ='box'/>`，在父类方法里面通过 `this.refs.box` 就可以拿到 input 元素
  - **不要用字符串形式的 ref**,因为 react 需要跟踪当前需要渲染的组件，拿到当前的 this,react 难以实现，性能低。render 属性，返回 react 元素，ref 的传递难以实现。
  ```js
  class DatePicker extends React.Component {
  	componentDidMount() {
  		console.log(this.refs.pickerField);
  	}
  	render() {
  		return <input ref="pickerField" type="text" />;
  	}
  }
  ```
- 方法二
  - ref 属性值是一个函数 `<input ref ={ el => this.box = el } />`, 该子组件的实例默认为参数，并且把该实例挂载到父类的某个属性上面，然后父类通过该属性访问子组件，即 this.box 即可访问到
  - 一般把 ref 的属性值函数定义为父类的一个方法，子组件引用该方法即可；如果不这样父类每次被渲染时，react 没法识别函数有没有更改，子组件都会生成一个函数，浪费性能；通过引入就可以不再重复渲染这个不变的函数
  - 如果 ref 回调函数是以内联函数的方式定义的，在更新过程中它会被执行两次，第一次传入参数 null，然后第二次会传入参数 DOM 元素。这是因为在每次渲染时会创建一个新的函数实例，所以 React 清空旧的 ref 并且设置新的。
  ```js
  class DatePicker extends React.Component {
  	setRef = (el) => {
  		console.log('running ref func');
  		this.refs.myDiv = el;
  	};
  	render() {
  		//子组件的ref是一个函数
  		return <input ref={this.setRef} type="text" />;
  	}
  }
  ```
- **方法三**【最推荐的】
  - 在父类构造函数中创造一个 ref 对象； `this.boxRef = React.createRef() `，需要多个 ref 就创建多个对象。
  - 使用的时候，子组件:`ref={this.boxRef}`,访问子组件:`this.boxRef.current`
  - 这种方法由于这个对象绑定子组件后就没有变，以后每次渲染父类就不用再次创建了。
  - 当 `ref` 属性用于 HTML 元素时，`ref`对象接收底层 DOM 元素作为其 `current` 属性。
  - 当 `ref` 属性用于自定义 class 组件时，`ref` 对象接收组件的实例作为其 `current` 属性。
  ```js
  class DatePicker extends React.Component {
  	constructor(props) {
  		super(props);
  		this.boxRef = React.createRef(); //,创建ref对象，生成{current:null}
  	}
  	handleOnClick = () => {
  		console.log(this.boxRef.current); //访问子组件
  	};
  	render() {
  		//在子组件使用，ref是一个对象，子组件会挂载在该对象的current属性上。
  		return (
  			<input ref={this.boxRef} type="text" onClick={this.handleOnClick} />
  		);
  	}
  }
  ```
- **不能在函数组件上使用 ref 属性**，因为它们没有实例 (函数式组件在使用时是直接调用，class 式组件是创建一个实例)，但是可以在函数组件内部的元素上使用

#### 转发 Refs

- 使用 `React.forwardRef()` 创建组件，该组件的 ref 属性不指向自己，而是转发到组件内部的元素，`React.forwardRef()` 只是让组件继续可以使用 ref 属性。

  ```js
  //被forwardRef返回的ref不是特殊属性部分
  //接受一个渲染函数作为参数，其接收 props 和 ref 参数并返回一个 React 节点
  const FancyButton = React.forwardRef((props, ref) => (
  	<button ref={ref} className="FancyButton">
  		{props.children}
  	</button>
  ));
  const ref = React.createRef();

  <FancyButton ref={ref}>Click me!</FancyButton>; //这个ref会传到里面去！
  ```

### 协调 reconciliation

React 的 diff 函数，即前后虚拟 DOM 对比方式

- 对比方式
  - 无 key 时 效率为 O(n)
    - 首先根元素进行对比，根元素类型不同直接替换为新的，根元素类型一样就对比其属性，属性不同替换为新的；
    - 子元素按照顺序对比，方法和根元素一样
  - 有 key 时
    新旧虚拟 DOM 对比时，key 值相同的进行对比，减少对此次数，效率更高

### React 的生命周期函数

- 挂载阶段(mount)

  - `constructor()`
    如果不初始化,state 或不进行方法绑定，则不需要构造函数
  - `static getDerivedStateFromProps()`
    在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 state， state 的值在任何时候都取决于 props, 如果返回 null 则不更新任何内容；不常用
  - `render()`
    class 组件中唯一必须实现的方法，会渲染出虚拟 DOM
  - `componentDidMount()`
    会在组件挂载后（渲染到 DOM 中）立即调用，依赖于 DOM 节点的初始化应该放在这里。

- 更新阶段(update)

  - `shouldComponentUpdate(nextProps, nextState)`
    根据这个函数的返回值，判断 React 组件的输出是否受当前 state 或 props 更改的影响。默认行为（返回 true）是 state 每次发生变化组件都会重新渲染。此方法仅作为性能优化的方式而存在，可以人工控制下层组件是否更新，return false 后面的 render 就不会运行，不常用
  - `render()`
    渲染虚拟 DOM
  - `getSnapshotBeforeUpdate()`
    在最近一次渲染输出（提交到 DOM 节点）之前调用，这个函数运行完真实 DOM 会被渲染。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）, 不常用.
    有返回值，会传给 didUpdate
  - `componentDidUpdate(prevProps, prevState, snapshot)`
    会在组件更新后会被立即，此时调用真实 DOM 已经完成，可以直接对 DOM 操作。首次渲染不会执行此方法

- 卸载阶段(unmount)
  - `componentWillUnmount()`
    在组件卸载及销毁之前直接调用。在此方法中执行必要的清理操作

#### 三个被标记为 unsafe 即将废弃的生命周期函数:

- `componentWillMount`
- `componentWillReceiveProps`
- `componentWillUpdate`
  不建议使用原因:

  - react 的架构或者渲染机制的改变带来的问题
  - React-Fiber 架构
    - 解决 DOM 树过深同步渲染整个 DOM 性能下降问题
    - 将 DOM 拆分渲染，分不同的时间片段异步渲染
    - 由于异步的存在，可以根据用户行为灵活的调整 DOM
  - React-Fiber 架构异步渲染使 render 之前的函数可能执行多次，**若这些函数会产生副作用，则会产生 bug。render 之前的函数都必须是纯函数或者是 static 方法函数。**

- 不要 UNSAFE_componentWillMount 在这个组件里面发生 AJAX 请求的原因

  - 这个函数后面会紧接着 render 函数，由于请求资源是一个异步过程，render 函数执行的时候资源没请求下来，没法更新 DOM
  - 所以建议这类异步请求放到 componentDidMount 里面，放到后面可以减少 DOM 挂载时间，其他的操作可以直接放到构造函数里

#### 错误处理

```js
static getDerivedStateFromError()

componentDidCatch(e){
  console.log(e)
}
```

- **错误边界**

  - 错误边界是一种 React 组件，捕获并打印发生在其子组件树任何位置的 JavaScript 错误，并且它会渲染出备用 UI
  - 如果一个 class 组件中定义了 `static getDerivedStateFromError()` 或 `componentDidCatch()` 这两个生命周期方法中的任意一个（或两个）时，那么它就变成一个错误边界，然后直接当做常规组件用，形成一个错误墙，错误组件里面子组件的错误会被错误边界捕获。
    - 类似在组件层面实现了一个 try catch 机制，让错误不会跑到外层。
    - 只有 **class 组件**才可以成为错误边界组件。大多数情况只需要声明一次错误边界组件, 并在整个应用中使用它。也可以将单独的部件包装在错误边界以保护应用其他部分不崩溃。
  - 无法捕捉:**事件处理，异步，服务端渲染，自身错误**而非子组件的错误。

    - 事件处理器不会在渲染期间触发，如果抛出异常，React 仍然知道需要在屏幕上显示什么。在事件处理器内部使用 try catch 语句。

### 高级概念

#### 组合和继承

React 里面基本不用继承，只继承 React.Component, 更多是在一个组件里面使用另外的组件的组合.
组件内部访问组件的属性：

- `props.name`: `<Foo name="miao"/>`标签里的属性，在 Foo 组件可以通过 props.name 的方式访问。
- `props.children`: `<Foo>balabala</Foo>` children 可以传递多种类型的值，会将写在 Foo 组件标签中间的元素都传入这个属性(中间可以不只一个根结点),是一个 JSX

#### Render Props 渲染属性

- Render Props 是告知组件需要渲染什么内容的函数属性。组件接收一个属性 render, 属性值是一个函数，组件会把自己的数据传给这个函数作为参数,返回一个 JSX，函数的结果会被组件中的 render() 函数接收渲染为虚拟 DOM
- 在组件内部的 render() 函数里通过 this.props.render 可以拿到这个函数，再接收自己的 state 数据就可以通过函数返回一段 JSX, 最后渲染；

  ```js
  function Repeat(props) {
  	//组件内部拿到组建的属性，通过props
  	let items = [];
  	for (let i = 0; i < props.time; i++) {
  		items.push(props.render(i));
  	}
  	return <div>{items}</div>;
  }

  ReactDOM.render(
  	<Repeat time={10} render={(i) => <div key={i}>this is {i}</div>} />,
  	document.getElementById('root')
  );
  ```

#### 合成事件

- react 的事件是对浏览器的原生事件的跨浏览器包装，兼容所有浏览器，挂载 props 上
- 事件对象会被重复使用（节约内存），事件结束之后事件对象会被清空，所以不能通过异步访问事件
- e.persist() 保留合成事件对象，事件结束之后不会清空，配合异步函数
  e.nativeEvent 访问原生浏览器对象

#### 代码分割

- `React.lazy()` 接收一个返回 promise 对象的函数，必须配合 `React.Suspense` 使用,Suspense 本身是个**错误边界**会获取到这个 promise.
  通过 React.lazy 动态加载组件，用`React.lazy()`构造普通组件的高阶组件`const SomeComponent = React.lazy(() => import('./SomeComponent'))`
- `React.Suspense`
  Suspense 本身是个**错误边界**会获取到这个 promise
  - 如果有这个资源的缓存就会同步返回数据，没有就运行 fallback 对应的组件，直到子元素资源加载完成替换为子元素
  ```js
  <React.suspense fallback={<div>loading<div>}>
    <Lazied Component />  //这个子组件可以在子树中的任何位置，也可以有多个这样的组件
  </React.suspense>
  ```
  - 这一步在 vue 中已经封装好了，在 vue 中可以直接使用`component = () => import('./OtherComponent')`作为异步组件
  - 这种用法是为了方便 webpack 做代码分割

#### Portals 门户网站 传送门

- Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案，常用于对话框、悬浮卡以及提示框
- `ReactDOM.createPortal(child, container)`
  child 是 React 子元素，container 是一个 DOM 元素，child 会渲染到容器里，而不是父类；使用在组件的 render 函数里
- 除了在 DOM 树中的位置，其他行为和普通的 react 子节点行为一致。 react 内的事件处理逻辑等还是在原来的 react 组件中(比如冒泡)

#### 与第三方库协同

- 通过 ref 属性拿到第三方库要操作的元素
- 在这个元素上面通过第三方库的事件机制触发组件本身的处理函数来更新 state

#### 类型检查 PropTypes

- 用来设定组件属性类型，有许多表达方式

- React 自带模块，直接引入 `import PropTypes from 'prop-types'`

  ```js
  componentName.propTypes = {
  	propName:
  		PropTypes.string /
  		PropTypes.bool /
  		PropTypes.func /
  		PropTypes.object.isRequired,
  };

  class Greeting extends React.Component {
  	static defaultProps = {
  		//默认 Prop 值
  		name: 'stranger',
  	};
  	render() {
  		return <div>Hello, {this.props.name}</div>;
  	}
  }
  ```

#### Context

- 实现了自上而下跨组件传递数据，提供一种在组件之间共享某些数据，而不必显式地通过组件树逐级传递 props.
  应用于在很多不同层级的组件间访问同样一些数据，但是会使组件复用性变差。慎用，有时可以用组件组合代替。
- 使用方法

  - 全局创建一个 context 实例 `var MyContext = React.createContext(defaultValue) `
    用`<MyContext.Provider value="xxx">`包裹父组件，在需要使用这个值的 class 子组件中挂载`static contextType = MyContent`，在通过`this.context`消费最近的 value，并且可以在任何生命周期中访问到。
  - 内部接收数据方法:`<MyContext.Consumer>`里接一个函数

  ```js
  <MyContext.Consumer>
    {value => /* 基于 context 值进行渲染*/}
      //value就是provider上的值
  </MyContext.Consumer>
  ```

#### 性能优化

- 结构共享，最大可能的共用已有数据，联想树状结构和指针思考，共用完全不变的子树
  - immer.js 一个实现结构共享的库 `<script src="https://unpkg.com/immer/dist/immer.umd.js"></script>`
    `const produce = immer.produce` 这个库会引入一个全局变量 immer，上面有个 produce 方法
  - 用法一
    - 先定义一个变更，等到有数据时再执行这个变更；`f = produce(draft=>{})`
    - draft 是对象代理，代理接收到的参数对象 obj，会拦截所有对 obj 的访问；读取数据时，draft 上面没有回溯到 obj 上找，设置数据时设置到 draft 上；
    - f 函数接收一个对象 obj，draft 代理这个对象，直接对 draft 操作就是对传入对象进行操作，而且是最大可能的共用已有数据；
    - `produce((draft,action)=>{})`, 函数除了代理对象还可以接收其它变更时需要的参数
  - 用法二
    `produce(obj,draft=>{})` 接收 2 个参数，第一个是原对象，第二个是代理操作，返回新的数据对象
  - ES6 通用，ES5 退化通过 getter 和 setter 代理，但是不可以添加新的属性
- 通过生命周期函数 `shouldComponentUpdate` 优化性能

### React 相关 api

- React.Component
  定义 react 组件的基类
  ```js
  class Greeting extends React.Component {
  	render() {
  		return <h1>Hello, {this.props.name}</h1>;
  	}
  }
  ```
- `React.PureComponent()`
  和 React.component 的唯一区别是，他会自动调用 `shouldComponentUpdate()` 这个周期函数，以浅层对比 prop 和 state，如果相同组件就不会刷新，可提高性能，用于 class 组件。**提高组件复用率。**

- `React.memo()`
  是高阶组件.和 `React.PureComponent()` 功能一样，是做性能优化的，不过它适用于函数组件。接收一个函数组件为参数，返回包装后的组件。**提高组件复用率。**
  ```js
  const MyComponent = React.memo(function MyComponent(props) {
  	/* 使用 props 渲染 */
  });
  ```
- `React.createElement()`
  创建并返回指定类型的新 React 元素，此时还没有实例化，是对虚拟 DOM 的描述，上面有 key,ref，props 这些属性，渲染之前会根据这些信息创造实例，实例会调用 render() 函数。使用 JSX 一般就不需要直接调用 createElement.
- `ReactDOM.render(<TodoApp />，document.getElementById('root'))`
  这个函数接收两个参数，将第一个参数虚拟 DOM 编译到第二个参数 React 根元素里面
- `React.cloneElement()`
  克隆 React 元素， 新的 props 与原始元素的 props 浅层合并。新的子元素将取代现有的子元素，而来自原始元素的 key 和 ref 将被保留。

- React.children 用来处理 this.props.children
  - `React.Children.map(children, function[(thisArg)])`
  - `React.Children.forEach(children, function[(thisArg)])`
  - `React.Children.count(children)` 返回 children 中的组件总数量
    todo:代码分割，webpack 打包

### Hook

- state hook 状态
- effect hook 作用
- context hook 上下文

<img src="https://i.loli.net/2020/09/07/NKScMLlz2WrFiqO.png" width='400' height='200'>
<img src="https://i.loli.net/2020/09/07/vHraySP85QT143f.png" width='400' height='200'>
<img src="https://i.loli.net/2020/09/07/utvLZARr28OCiDQ.png" width='400' height='200'>
<img src="https://i.loli.net/2020/09/07/ZerXYmpVUw7SREQ.png" width='400' height='200'>

- 为函数组件带来了 state 和类似生命周期函数的功能
- state 不会合并，而是完全替代之前的 state，多利用展开运算符
- 函数组件状态改变时整个组件都会重新刷新
- hook 函数在创造时，React 会根据他们在调用栈的顺序确认各自身份，所以 hook 函数的调用顺序在组件刷新时不能改变，根据调用顺序确定各个状态身份；

#### 使用方法

- 解构语法引入 hook 函数
  `var { useState, useEffect, useRef, useContext, useCallback, useMemo } = React`
- `useState()` 函数，接收的参数会设置为 state 的初始值，返回一个数组 `[state,setState]`

  ```js
  export default () => {
  	const [count, setCount] = useState(() => 0); //useState接收函数或者初始值 useState(0)
  	return (
  		<div>
  			{count}
  			<button onClick={() => setCount((x) => x + 1)}>+1</button>
  		</div>
  	);
  };
  ```

- `useEffect()` 函数，相当于一个生命周期函数 `componentDidMount()` 或 `componentDidUpdate()`，直接在函数组件内部使用
  第一个参数是一个函数，可以挂载 `componentDidMount()` 或 `componentDidUpdate()` 阶段需要的操作；这个函数可以有一个返回值函数，返回值函数会在函数组件 componentWillUnmount 阶段运行，可有挂载一些解绑操作；对于函数组件来讲，每次更新都会卸载再挂载；所以每次更新都会运行这个返回值函数。
  第二个可选参数是一个数组，当组件刷新时如果发现数组的内容和上一次一样，那么就不会运行这个 useEffect 函数，用于性能优化；要确保数组中包含了外部作用域中会随时间变化并且在 effect 中使用的变量，否则你的代码会引用到先前渲染中的旧变量，如果是空数组表示每次都是完全一样的内容，不运行。

  - 优点
    - 绑定和解绑放在一起，可读性和操作性好
    - 对于复杂的逻辑，可以写多组 useEffect() 函数，相关逻辑放到同一个 useEffect() 函数里面，逻辑分离

  ```js
  //所有的生命周期都在useEffect里面
  export default () => {
  	const [count, setCount] = useState(0);
  	useEffect(() => {
  		const I = setTimeout(() => {
  			setCount((x) => x + 1);
  		}, 1000);
  		return () => {
  			console.log('clear');
  			clearTimeout(I);
  		}; //回收
  	}, [Math.min(count, 5)]); //deps
  	console.log('render');
  	return (
  		<div>
  			<p>{count}</p>
  		</div>
  	);
  };
  ```

- useContext 函数 hook, 类似 class 组件里面的 Context 功能

  - 开始的用法和 class 组件一样，先在外部创建一个 context 实例
    `var ColorContext = React.createContext()`
    Context 实例对象上面有个 `ColorContext.Provider` 组件开始向下传递数据，用于组件内部
    `<ColorContext.Provider value={color}>`
  - 接收数据方法
    在后代组件中直接使用 `var color = useContext(ColorContext) `接收数据

- useCallback

  - 函数组件每次更新都会重新运行，每次运行都会创建一个新的作用域，作用域里面的函数都会是新建的，如果子组件中用到了这些更新的函数，子组件每次都要更新，影响性能
  - `var f = useCallback(fun(){},[])` 第一个参数接一个函数，第二个参数接一个数组，当组件刷新时如果发现数组的内容和上一次一样时，就返回上次的函数，否则返回这次的函数

- useMemo

  - 和 useCallback 功能一样，不过写法不一样
  - `var f = useMemo(()=>fun(){},[])`

- useRef
  和 class 组件里面的 React.createRef() 功能用法一样，useRef() 也会创建一个{current:null}对象；由于函数组件每次更新都会重新运行，每次运行都会创建一个新的作用域，作用域里面的函数都会是新建的；使用 React.createRef() 函数组件更新每次都会创建一个新的对象，占用内存；而 useRef 就是为了解决这个问题的，函数组件中使用 useRef() 返回的对象在函数组件刷新前后都是同一个对象

- 自定义 hook

  - 自定义 Hook 是一个函数，其名称以 “use” 开头，函数内部可以调用其他的 Hook 函数
  - 目的是将组件逻辑提取到一个函数，这个函数从而具有组件的一些功能，本质就是高阶函数
  - 自定义组件库 https://nikgraf.github.io/react-hooks/

### react 路由

安装:
`<script src = "https://unpkg.com/react-router-dom@4.3.0/umd/react-router-dom.js">`
`npm install react-router-dom`

- `import { HashRouter as Router,Switch,Route,Link,withRouter,Redirect,useParams,useHistory} from 'react-router-dom'` 引入变量

**相关变量:**

- HashRouter: 哈希路由，一个组件，包裹在所有路由的最外层，表示以 hash 模式进行地址导航,**#形式的**
- BrowserRouter: H5 模式，一般不需要
- Switch, 可选，表示按照顺序匹配内部的路由，只匹配满足条件的第一个
- Route: 导航组件 `<Route path="/users/:id" exact><Component/></Route>`
  - path 只能接完整路径，嵌套路由也是完整路径
  - exact 表示必须精确匹配路径，默认都是开头匹配就行，匹配成功就就加载中间的组件
  - 也可以通过 path 向内部组件参数
  - path 里面"\*"表示通配符，匹配所有路径
- Link: 相当于一个 a 标签 `<Link to="/about">About</Link>`, 点击就导航到对应路由组件
- 路由里的不是由 `<Route path="">`过来的组件不能直接接受 path 传递来的参数，需要 withRouter 将组件包裹一层。
  `var User = withRouter(function User(props) {})` 接受到的属性 props 是个对象，有 history，location,match 几个属性，分别有相关的方法，可以通过 `props.match.params. 参数名 (id)` 拿到传递过来的参数
  ```js
  function IRouter() {
  	return (
  		<Router>
  			<Switch>
  				<Route path="/" exact component={App}></Route>
  				<Route path="/login" exact component={Login}></Route>
  				<Route path="/home" exact component={Home}>
  					<Redirect to="/Login"></Redirect>//重定向
  				</Route>
  				<Route path="/detail/:id" component={Detail}>
  					{' '}
  				</Route>//动态路由
  				<Route path="*" component={NoMatch}></Route>
  			</Switch>
  		</Router>
  	);
  }
  //有状态组件
  class App extends React.Component {
  	handleJump = () => {
  		this.props.history.push('/login'); //有状态组件button点击跳转
  	};
  	render() {
  		return (
  			<div className="container">
  				<h1>欢迎！</h1>
  				<p>当前ID为：{this.props.match.params.id}</p>//获取id
  				<Link to="/login">点击跳转到登录页面</Link>
  				<br />
  				<Link to="/home">点击跳转到主页面</Link>
  				<br />
  				<Button onClick={this.handleJump}>点击跳转到登录</Button>
  			</div>
  		);
  	}
  }
  ```

**路由 Hooks**

- UseParams():是一个对象，包含相关参数
- UseHistory():数组，跳转
  ```js
  export default function Detail() {
  	const history = useHistory();
  	const params = useParams();
  	return (
  		<div className="container">
  			<p>this is detail.</p>
  			<p>当前参数值为：{params.id}</p>
  			<Button
  				onClick={() => {
  					history.push('/');
  				}}
  			>
  				跳转首页
  			</Button>
  		</div>
  	);
  }
  ```

### Redux

- 比较底层的封装，单项数据流，全局数据中心，实现了组件之间的数据和事件的传递

- 仅支持同步函数，异步需要使用第三方插件（Redux-thunk）

- 用法

  - 引入`<script src="https://unpkg.com/redux@4.0.4/dist/redux.js">`
  - 创造一个 store
    - `var store = Redux.createStore((state, action)=>{},state)`
    - 第一个参数是一个 reducer 函数，函数有 2 个参数，state 表示储存的数据，action 是一个对象，子组件里面通过 dispatch 函数来传递这个对象，这个 reducer 函数通过 action 的信息来触发对 state 的相关操作，返回一个新的 state
    - 创建的 store 上面有两个常用的方法，dispatch 和 subscribe 方法
      - dispatch, 传递给下层组件，下层组件利用这个方法操作 state 触发更新
      - subscribe, 用来监听 state 变更
        - `var unSubscribe = store.subscribe(fun)`
        - 数据变更时 fun 会运行，这个 fun 不接参数，并返回一个函数 unSubscribe
        - 调用 unSubscribe 就会把这次的监听函数 subscribe 解绑
  - mutations
    - 下层组件 dispatch 的 action 里面有操作类型信息，一般放到 action.type 属性上，reducer 会根据 action.type 来执行某种操作，当我们可以把这些操作集中放到全局定义的一个 mutations 属性上面，reducer 函数接收到 action 时先从 mutation 上面拿到函数，再操作 state
      ```js
      var store = Redux.createStore((state, action) => {
      	var mutation = mutations[action.type];
      	if (mutation) {
      		return mutation(state, action);
      	} else {
      		return state;
      	}
      }, state);
      ```
    - 操作数据的方法可以配合 immer.js，优化性能而且更方便

- 下层组件如何接入 store，需要第三方插件集成

  - `<script src="https://unpkg.com/react-redux@5.0.6/dist/react-redux.js">`
    `var { Provider，connect} = ReactRedux`

  - 在根组件里面的最外层用 `<Provider store={store}></Provider>`包一层，下层组件就可以访问到 store 的 state 以及相关方法

  - connect 函数的用法

    - `var NewComponent = connect(mapStateToProps,mapDispatchToProps)(Component)`
    - Component 表示一个子组件，可以是函数组件或者 class 组件
    - mapStateToProps 函数，state=>{return {}}, 对 state 进行相关操作，返回一个对象 obj1
    - mapDispatchToProps 函数，`dispatch=>{return {deleteTodo: (idx) => dispatch({type: 'deleteTodo', idx})}}`, 返回一个对象 obj2，对象属性是组件相关方法名称，属性值是一个函数，这个函数里面会 dispatch 相关 action 到 store 的 reducer 函数，触发组件更新；
      obj1 和 obj2 都会合并到组件的 props 对象里面，这样组件可以通过 props.method 来 dispatch 相关方法到达交互目的
    - NewComponent 新返回的组件，可以接受全局的 store 进行交互

  - connect 函数的实现
    ```js
    var StoreContext = React.createContext();
    function connect(mapState, mapDispatch) {
    	return function (WrapComp) {
    		return React.forwardRef(function Comp(props, ref) {
    			var store = useContext(StoreContext);
    			var [r, setR] = useState(0);
    			useEffect(() => {
    				return store.subscribe(() => {
    					setR(r + 1);
    				});
    			});
    			var state = mapState(store.getState());
    			var dispatchs = mapDispatch(store.dispatch);
    			var { children, ...props2 } = props;
    			return (
    				<WrapComp ref={ref} {...props2} {...state} {...dispatchs}>
    					{children}
    				</WrapComp>
    			);
    		});
    	};
    }
    ```

### react 全家桶

- npm i -g create-react-app/yarn add -g cra
- 创建一个项目全家桶
  npm create-react-app 项目名称
  npx 表示下载完成之后直接运行
- npm/yard run start 本地运行代码
  - 会生成一个项目文件夹，里面有以下信息
    - git 相关
    - public 网站用到的公开的文件，一般是图片和 html，基本不用动
    - src 项目的源代码
      - index.js 入口文件
      - App.js 入口组件
      - 自己写 store 以及相关组件
    - 一些配置文件
      readme.md 告诉你这么开启这个项目的命令
- 相关文件配置好后，运行 npm run build , 它会根据 src 和 public 一起构建一个 build 文件，之后把 build 文件里面的资源放到后端的 static 静态文件夹里，这样就可以用后端的端口启动项目；这个 build 文件就是上线启动文件

```js
//vote
yarn add node-sass/antd/react-router-dom -S



```

## TS

- JS 的超集。TS 是一门静态类型语言：变量的类型在书写时确定，运行时不能改变。类似的语言：java,c,c++
- 静态类型由于书写时就能确定所有变量的类型，带来的好处是编辑器及相关的工具链可以在程序编写时就给出一定的错误或者智能提示。
- **泛型**
  ```ts
  var ary: Array<number> = [1, 2, 3];
  var ary: number[];
  class People extends Array {
  	x: number;
  	constructor(name: string, age: number) {
  		super(age);
  		this.x = 1;
  	}
  	/**
  	 * 返回一个新的People对象。
  	 */
  	foo(a: string, b: number): People {
  		return new People(a, b);
  	}
  }
  ```
- 允许为一份已经存在的 **由原生 JS 编写的代码** 增加一份类型声明文件。d.ts

## node

- node 包

## webpack

- 打包 将代码从入口文件打包为一个单一文件
- 转换 将不是 js 的文件通过 loader 转换为等价的 js 文件
- 代码分割 code spliting
  一般打包为一个单一的文件。 但是所有的业务逻辑和框架等打包到一个单一文件的话会很大。更主要的是，就算把所有功能都打包到一个文件中，也不是所有功能都会被使用。
  比如网络应用，一次性下载所有功能的代码是不必要的。code spliting 用户在打开界面的时候，只加载基本功能/入口页面的功能，随着用户的交还是用户能更快打开入口页面。
- 摇树优化 tree shaking
  不需要用到的代码将不会进入到打包结果中，减少打包体积。
  此功能主要依赖 es module 语法，因为它提供静态分析（即不运行代码对代码进行分析，不会因为逻辑成立与否而引入或导出某个模块，import/export 不会存在 if 里面）的可能性。其他方式书写的模块很难去做 tree shaking 分析。
- **loader 与 plugin 的区别**
  - loader:将除 js 以外的其它资源也当成 require 的资源，如图片，css,json,svg，字体，通过把这些非 js 资源转化为等价的 js 文件来实现；这个格式转换工具在 webpack 里面称为 loader, 即使是 js 文件也会经过 babel-loader 转换
    比如对于图片而言，小资源转换为 base64，大资源转换资源地址；
    比如 `sass-loader`,`css-loader`,`style-loader`,`image-loader`
  - plugin: 在 webpack 则是对整体的打包结果进行处理的一种插件机制
    `webpack-jsuglify-plugin`：如压缩，混淆代码（安全保密）
    `common-chunks-plugin`：处理通用（vendor）模块的抽离,将第三方代码与自己写的代码分开打包，第三方代码的打包结果不容易发生变化。
    `webpack-html-plugin`：自动生成入门 html 页面
    `MiniCssExtractPlugin`：将所有 css 文件从依赖树中提取出来，放入单独的 css 文件而不打包在 js 里
    `GenerateSW`：生成 service worker
    `HotModuleReplacementPlugin`：模块热重载：页面不重新加载的情况下，模块的新代码就能在浏览器生效。但并不是对所有的模块都能这么用，一般来说组件的代码，css 的代码可以实现热重载。

## 其它框架知识

- 微信小程序 https://developers.weixin.qq.com/miniprogram/dev/framework/
- ssr 服务端渲染
  - 一次请求响应就拿到所有渲染数据,客户更快看到页面内容
  - 直接返回目标页面，不需要重新加载
  - 方便 SEO
  - 需要后端配置
- React Native 是用来开发移动应用。需要用到 React 概念

## Linux

### 服务器配置

```sh
#重启
reboot

#AWS 更改为 root 登陆:
sudo -i
vim /etc/ssh/sshd_config
PemitRootLogin #改成yes保存
cp /home/ubuntu/.ssh/authorized_keys /root/.ssh/authorized_keys

#连接ec2实例
ssh -i ec2ssh.pem ubuntu@ec2-54-180-117-236.ap-northeast-2.compute.amazonaws.com

#网络组
ssh/http/https # aws设置

#用域名访问
root: ssh -i ~/ec2ssh2.pem root@vote.brightzoe.top

#装软件
 apt install zsh/node/pm2

# zsh
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# Using Ubuntu，更新node
curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

#vim命令 修改js
vi a.js
i #insert
esc #退出insert
:q #退出
:wq #保存并退出

#任务管理器
htop

# win /linux 传文件/复制文件
scp -P 1007 xx.txt root@vote.brightzoe.top:~
     #端口


# ssl 证书
curl https://get.acme.sh | sh

#ssl证书 验证域名  acme.sh
acme.sh --issue --standalone -d vote.brightzoe.top

#设置https
const https = require('https')
const fs = require('fs')


https.createServer({
  key:fs.readFileSync('/root/.acme.sh/7.brightzoe.xyz/7.brightzoe.xyz.key'),
  cert:fs.readFileSync('/root/.acme.sh/7.brightzoe.xyz/7.brightzoe.xyz.cer'),
  app
},(req,res)=>{
  res.end('hello')
}).listen(443,()=>{
  console.log(443)
})




```

- pm2 介绍

  - nodejs 的进程管理工具

    - 其实不只可以管理 node 的程序，任何 linux 上的进程都可以

    ```bash
    pm2 start xx.js -- args for xx.js   #重启机器后就没有了
    pm2 show/stop/restart id
    pm2 save #save后,再重启机器不会丢失
    pm2 resurrect #重启进程
    pm2 startup #配置为开机自启动 pm2 unstartup 

    ```

fixme: github push 的时候总是忽略一些文件夹,注意有没有传上去;
有时忽略的文件也会意外的加入版本控制里面,都要注意.
