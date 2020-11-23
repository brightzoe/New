## HTML

- doctype 的作用
  声明文档类型。如果没有，文档将在怪异模式渲染。
  `<!doctype html>`
- label 标签
  给表单域增加可交互范围

## CSS

- 选择器，选择器优先级

- display:none 与 visible:hidden
  1. 空间占据,none 完全不占据空间，hidden 仍然占据空间
  2. 渲染，none 触发回流与重绘，hidden 只触发重绘
  3. 继承上，none 会使他以及后代在页面都不能出现，而 hidden 再未设置 visible 的子代继承，设置了则可以显示。
- CSS 里面，哪些属性可以继承，哪些属性不可以继承？
  与排版有关的都会继承，与布局有关的都会继承。
- ::伪元素标识符，:伪类标识符
  伪元素：不存在的元素，div::first-letter
  伪类：实际上存在的元素的状态
- ::before,::after 什么时候会用到？
  实现一些装饰性的效果或交互的时候会用到
- 盒模型
- 实现一个固定宽高都为 200px 的 div 在页面中水平垂直居中（至少 3 种方式）
- css 垂直，水平居中、
  flex
  定位
  定位＋ transform
  表格
  行内加行高
- absolute 是以什么为准进行位移？
- **单行文本溢出（多的部分显示省略号）**
  ```css
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ```
- 实现一个左右布局：左边定宽 200px，右边自适应（至少 2 种方式）
- css 实现一个圆，一个三角形，一个四分之一圆，一个扇形
- 实现一个按钮，有两层边框（看上去是两层的 border）——除了伪元素以外的方案
  border:8px double red;
  outline
  box-shadow + 零偏移 + 扩散半径
- 实现一个自适应布局，一个页面始终展示一个圆形（直径是页面的 50%），圆形根据屏幕变化而变化，当屏幕变宽时，圆也变大
  ```css
  div {
  	width: 50 vmin;
  	height: 50 vmin;
  	border: 8px solid;
  	border-radius: 99999px;
  }
  ```
- 响应式布局实现原理
  rem 等比例布局 还是 手机电脑等都正常显示(media query)。
- z-index 用法
- BFC 定义，触发条件
- 响应式布局实现原理
- src 和 href 有什么区别
  一般 src 指向的资源一般会被加载到页面里使用的，如 img,iframe。href 属性指向的只是一个地址，一般不会加载,如 a 标签。
  例外:link 引用 css
- css 为啥放前面，script 放后面
  css 的加载过程不阻塞页面 dom 的解析，script 的加载和运行都是会阻塞 dom 的解析的。
  所以如果 script 放前面，加载的时候页面就会暂停解析，只能展示解析出来的部分。
  另外，script 放后面，等他运行时，dom 也差不多了，不用 onload 或 ready 事件。

- css 会阻塞页面的渲染嘛？
  嵌入在页面的 css 会，外部加载的不会

- margin 合并
  相邻的两个常规流兄弟元素的垂直外边距会被折叠。
  父子元素也会合并，但必须都是块元素，如果父元素触发了 BFC 则不会。
  浮动元素和绝对顶外元素外边距不会折叠

- MIME Type 常见的媒体类型
  application/json
  multipart/form-data
  text/css
  text/html
  img/png
  media/video
  TODO:色彩空间/rgb 色域？CMYK

回流与重绘

bootstrap 再熟悉一下

## git

- 平时用到哪些？
  merge
  rebase
  push/pull
  stash:
  cherry-pick
- git 删除上上一条 commit
  rebase ：把当前分支拿下来，挂到别的地方去

## JS

- map 跟 forEach
  map 有 return，forEach 没有
  map 会新建数组，forEach 没有，只是迭代
- 在 html 里面,js 一般要写在 body 后面，因为 html 读取一行执行一行.遇到`<script>`先确认没有语法错误,然后执行 js。如果在前面引入 js , 浏览器会等待 js 加载完成才继续运行. 如果写在前面，可以加 `window.onload`, 代表页面加载完成再执行.
- 对象里 Object.keys(obj) //拿到自有属性
- var array = Array.prototype.slice.call(arrayLike,0) //把数组的方法添加到类数组上
- 全局有的一些变量是不可改变类型 i.e.window.name 一定是字符串 ，var name = 0,window.name =="0"
- window.top 不可改变值，不能 var top = XX
- 异步：异步函数至少要等到调用栈中的函数全运行完才会运行，晚于调用它的函数运行完才运行，只是先把他安排上，先不运行。
- 基本包装类型，是一种引用类型，包含 Boolean,Number,String.基本包装类型是对基本数据的封装，封装后具有基本类型的功能，也有相应的方法。在读取基本类型的值，或者用相关的方法时，会自动创建一个对应的基本包装类型的对象，执行后立即销毁。
  //基本包装类型与原始类型
  String.prototype.foo = function () {
  this
  }
  "abc".foo()//里面的 this 是 String{abc},是"abc"的包装类型
  this.value0f() =>"abc"//拿到他的原始类型
- 可选链 optional chaining a.?foo.?baz
- 严格模式与非严格模式
  开启严格模式：`"use strict";`
  严格模式下无法再意外创建全局变量。
  严格模式下会引起静默失败，非严格模式静默不抛错，严格模式会抛错。
  禁止 with
  eval 不一样。
- **传递参数**
  js 中的变量分为原始类型和引用类型。调用变量，复制，原始类型按值调用，引用类型按引用调用。
  在函数中传递参数，所有参数都是按值传递的。
  ```js
  //原始类型按值传递
  function addTen(num) {
  	num += 10;
  	return num;
  }
  let count = 20;
  let result = addTen(count);
  console.log(count); // 20，没有变化
  console.log(result); // 30
  ```
  ```js
  //对象也是按值传递的
  function setName(obj) {
  	obj.name = 'Nicholas';
  	obj = new Object(); //obj指向了新对象，已经不指向person了
  	obj.name = 'Greg';
  }
  let person = new Object();
  setName(person);
  console.log(person.name); // "Nicholas"
  ```

### 数组和字符串的常用操作

**哪些操作会改变原数组，哪些不改变？是值调用还是引用调用？**

- 字符串
  `s.substring(start_index,end_index)` 截取字符串
  `s.slice(start_index,end_index)` 截取字符串。slice 允许负数作为参数。若未指定 end, 默认为末尾。返回新的，不改变原来的
  s.fromCharCode()
  s.charCodeAt(2)
  字符串引用变量:`str = "xx,${name}"` //要加反引号 (模板字符串)

- 数组
  `ary.splice(start_index,length,...newValues)` 截取数组,相当于在原数组删除元素
  splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。
  `arr.slice([begin[, end]])` 创建一份浅拷贝，不改变原数组
- 判断是不是数组？
  Array.isArray()
  Object.prototype.toString.call(array)==='[object Array]'
  array.instanceof Array
- 数组去重？
  set 时间复杂度 O(n), 原理 hash

### for in 循环与 for of 循环的区别是什么？for in 循环有什么需要注意的问题？in 运算符有什么需要注意的问题？

- for in 用来遍历对象中的 key,或者数组的下标。
- for of 用来遍历数组中的元素。实际上 for of 可以以任何形式遍历任何的值。
- for in 遍历所有的可枚举属性.除了会遍历对象自己拥有的属性,还会读取到它原型链上的属性。遍历顺序:先 0 以上的数字,然后字符串,字符串按声明的顺序
- in 原型上的属性也会被判定为真。不区分是否可枚举。

### 如何判断一个函数当前是否被当做构造函数调用？

1. instance of //检查是否通过 new 调用，this 是否是构造函数的实例。
   //但不完全可靠，用 Person.call()/apply()也可以得到 Person 的实例。
2. 当调用函数的 Construct 方法时，new.target 被赋值给构造函数名(===Person).不是通过构造函数调用，new.target===undefined。
   //很可靠。在函数外使用 new.target 是语法错误。
3. 用 class 声明的函数必须被 new 调用，不然会报错，就规定了这一种方法。

### 逻辑操作符 || &&

- `true && "hello,miao"`
  实际开发可以用于：满足前面条件，然后执行后面的。从前向后执行`
  Javascript uses short-circuit evaluation for logical operators || and &&. However, it's different to other languages in that it returns the result of the last value that halted the execution, instead of a true, or false value.

```js
//The following values are considered falsy in JavaScript.
false
null
"" (empty string)
0
NaN
undefined

//Ignoring the operator precedence rules, and keeping things simple, the following examples show which value halted the evaluation, and gets returned as a result.

false || null || "" || 0 || NaN || "Hello" || undefined // "Hello"
//前面都为false,才向后执行
//The first 5 values up to NaN are falsy so they are all evaluated from left to right, until it meets the first truthy value - "Hello" which makes the entire expression true, so anything further up will not be evaluated, and "Hello" gets returned as a result of the expression. Similarly, in this case:

1 && [] && {} && true && "World" && null && 2010 // null
//前面都为true,才向后执行
//The first 5 values are all truthy and get evaluated until it meets the first falsy value (null) which makes the expression false, so 2010 isn't evaluated anymore, and null gets returned as a result of the expression.

```

### 闭包

- 对闭包的理解。

- 什么情况主动用闭包？
  非常多情况，到处都在用。比如深克隆，promise,throttle

### 原型与原型链

- 对原型与原型链的概念以及理解。
  原型链，对对象属性的访问。
  构造函数构造出来的实例以构造函数的原型属性为原型。
  函数才有 prototype,任何对象都有**proto**

  ```js
  //原型链
  fixme: Function.prototype.a = () => alert('a');
  Object.prototype.b = () => alert('b');
  function A() {}
  const a = new A();

  a.a(); //a.a is undefined
  //a.a();a.__proto__.a();a.__proto__.__proto__.a()
  a.b(); //b
  ```

  ```js
  //原型链
  var foo = {};
  var F = function () {};
  Object.prototype.a = 'value a';
  Function.prototype.b = 'value b';

  console.log(foo.a); //value a
  console.log(foo.b); //undefined
  console.log(F.a); //value a
  console.log(F.b); //value b
  ```

### 作用域与作用域链的理解

作用域本身会存在嵌套，一个作用域可能存在在另一个作用域的里面。函数如果存在在一个作用域里面，他对变量的访问会一层一层向外找对应的变量，找得到就使用，找不到就报错。

### question 0701 宇宙条 0715-14.36

框架：

- webpack 打包机制
  ？？？
- 有没有了解过脚手架(create-react-app,vue-cli)实现原理
  生成模板，项目名称都替换掉，装上依赖
- vue2 和 vue3 的区别
  eve.you 演讲
  vue2:defineProperty
  vue3: Proxy
  Vue-Composition-API
  内部用 ts 实现
  对模板的处理不一样，vue3 更快。

- vue 原理、双向绑定原理、 虚拟 DOM、
  getter，setter 监听虚拟 dom 的变化，随时修改,app.\_vnode

- koa 原理、中间件原理、co 原理（generator 如何实现自动执行）
  中间件，next,await
  co 原理：由 generator 模拟 promise

- 是否了解过 element ui 栅格化布局实现原理
  grid
  bootstratp 的栅格化布局：flex/浮动加定位。

### QUESTION 网络

- 0707
  查询计算机网络配置信息的命令是什么？
  ping 命令做了什么？抓包查验证。
  什么是 mac 地址？
  交换机于集线器有什么区别？
  交换机的接口有 mac 地址吗？为什么？
  什么叫网管交换机？
  何为载波帧听多路访问？
  为何要使用曼彻斯特编码？
  为何要做时钟同步？
  网络与快递的相似之处体现在什么地方？
  为什么 ip 地址是按地区划分的？
  实验两台电脑直接使用网线连接，设置合适的 ip 地址后相互 ping 通。
  实验连接在同一交换机的电脑设置不同网络的 ip 地址是无法相互 ping 通。
  抓包查看并验证 tracert 的原理。
- 0708
  TCP 端口的监听状态是什么意思？
  TCP 基于连接是什么意思？
  TCP 的协议模型是什么？
  TCP 协议如何保证数据的按序送达？
  TCP 与 UDP 有什么区别？为什么需要 TCP？
  为什么 DNS，DHCP 等协议是基于 UDP 而不是基于 TCP 的？
  为什么 TCP 服务端可以用同一个端口与无数其它机器建立 TCP 连接？
  如何探测某 TCP 端口是否处于监听状态？
  TCP 协议有哪些状态？状态之间是如何迁移的？
  如何查看电脑上有哪些程序正在监听哪些 TCP 端口？
  为什么 Inletex Easy Meeting Classic 软件画面从来不会花但是人多时会比较卡？
  为什么 TCP 建立链接需要 3 次握手？所谓的握手是什么意思？
  为什么 TCP 断开连接需要 4 次挥手？
  TCP 协议的滑动窗口是什么？
  TCP 的序列号是什么？其代表什么？
  确认号又是什么？其代表什么？
  序列号与确认号为什么是随机的？
  什么是 TCP 四元组？
  抓包查看 TCP 连接的握手，数据传输，ACK 及挥手的的数据包。
  在自己电脑上建立 TCP 服务端口并让多于两个客户端连接进来以理解 TCP 的协议模型。

- 0709
  TCP 端口的监听状态是什么意思？
  TCP 基于连接是什么意思？
  TCP 的协议模型是什么？
  TCP 协议如何保证数据的按序送达？
  TCP 与 UDP 有什么区别？为什么需要 TCP？
  为什么 DNS，DHCP 等协议是基于 UDP 而不是基于 TCP 的？
  为什么 TCP 服务端可以用同一个端口与无数其它机器建立 TCP 连接？
  如何探测某 TCP 端口是否处于监听状态？
  TCP 协议有哪些状态？状态之间是如何迁移的？
  如何查看电脑上有哪些程序正在监听哪些 TCP 端口？
  为什么 Inletex Easy Meeting Classic 软件画面从来不会花但是人多时会比较卡？
  为什么 TCP 建立链接需要 3 次握手？所谓的握手是什么意思？
  为什么 TCP 断开连接需要 4 次挥手？
  TCP 协议的滑动窗口是什么？
  TCP 的序列号是什么？其代表什么？
  确认号又是什么？其代表什么？
  序列号与确认号为什么是随机的？
  什么是 TCP 四元组？
  抓包查看 TCP 连接的握手，数据传输，ACK 及挥手的的数据包。
  在自己电脑上建立 TCP 服务端口并让多于两个客户端连接进来以理解 TCP 的协议模型。
  常见网络攻击手段：

- 0710
  局域网：
  ping 攻击（网管交换机限制流量）
  ARP 欺骗（网管交换机）
  广播风暴（禁止广播）
  广域网：
  伪造 IP 数据包。
  TCP SYN Flood
  TCP DoS
  NTP 时间服务器攻击
  写出以下协议的全称及用途：ARP，ICMP，TCP，UDP，DNS，DHCP，NAT,IP。
  查询并了解证书是如何被签名的。
  查询并了解 tls 的握手过程。
  家用路由器是 NAT 路由器是什么意思？
  DNAT 与 SNAT 分别是什么意思？
  NAT 路由是如何区别收到的包该发给内网的哪个机器的？
  什么是端口转发？
  什么是动态端口转发？什么是静态端口转发？
  如何知道自己的电脑是否在 NAT 路由的背后？
  在 NAT 背后有什么好处与坏处？
  TLS 协议保证了通信哪两个方面的安全？
  对称加密与非对称加密的区别是？
  TLS 是固若金汤的吗？
  CA 机构是为什么事情签发证书？
  查询 RSA 加密演算法的过程并尝试自行演算。

### QUESTION 0714

TODO: 0714 实现猫图片的按序加载，即一张 onload 以后才开始加载第二张，依此类推
//两张一起加载，在加载两张；可以很容易改变张数，比如三张一起拍摄
//最多两张可以同时下载

### 进程，线程

单个 CPU 一次只能运行一个任务（进程），其他进程处于非运行状态。
一个进程可以包含多个线程。一个进程的内存空间是共享的，每个线程都可以使用这些共享内存。一个线程使用某些共享内存时，其他线程必须等他结束，才能使用这块内存。（像上厕所，有些里面只能容纳一个人，其他人就要排队）用这块内存（小内存）的人加上**互斥锁** mutex，防止多个线程同时读写某一块内存区域。
某些内存区域，只能供给固定数目的线程使用，（门口放 n 把钥匙，拿一把钥匙进去一个，钥匙架空了，在门口排队），**信号量** semaphore，用来保证多线程不会相互冲突。
操作系统的设计，因此可以归结为三点：
（1）以多进程形式，允许多个任务同时运行；
（2）以多线程形式，允许单个任务分成不同的部分运行；
（3）提供协调机制，一方面防止进程之间和线程之间产生冲突，另一方面允许进程之间和线程之间共享资源。

### 浏览器渲染

[渲染](https://juejin.im/post/5a8e242c5188257a6b060000#comment)
[浏览器渲染页面的工作原理](https://developer.mozilla.org/zh-CN/docs/Web/Performance/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%B8%B2%E6%9F%93%E9%A1%B5%E9%9D%A2%E7%9A%84%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86)
整体渲染？逐步渲染？

### 前端常见的设计模式

- 单例模式：某种东西只有一份，不像其他类型一样有很多实例。如 Math 对象。
- 观察者模式：由一方专门观察另一方的活动，在特定活动发生时通知第三方。如事件的监听与触发。
- MVC Model View Controller 三层分离模式
  |MVC|Model|View|Controller|
  |:-:|:-:|:-:|:-:|
  |原生前端|html|css|js|
  |整个网站|数据库及对数据的定义|网站的模板|网站的后端逻辑|
  |VUE(不完全遵循)|data 字段|模板|事件|
- 单向数据流：数据的流向是单一方向的。
  React/Vue：由数据得到视图，由视图的交互得到具体的操作，由操作来改变数据，数据变化又重新得到新的视图
- 发布/订阅模式：事件监听与触发
- MVVM Model→View→Model

### es6

- 有哪些新特性？
  箭头函数，class,解构,symbol

- 箭头函数与普通函数的区别？
  不能 new,this 来自词法作用域,不能用 call 设定 this
- 解构，要注意些什么？
  数组解构时前面要加分号
  `;[a,b]=[1,2]`
- class
  本质上还是原型链，只是为了更贴近面向对象的语言的语法
- class 里面有没有私有变量？
  没有，但是可以通过各种手段来实现。
  symbol
  WeakMap
  在现在的 stage 4 里面有#可以实现。
- 继承写法，es5、es6 继承区别
  写法：class 的一种，还有构造函数的一种。（书上）
  es6 的继承，super 之前不能访问 this

### 跨域

请求的协议，域名，端口不同就算跨域。

- 对跨域的理解
- 跨域怎么解决？
  cors,jsonp,iframe,服务器代理
  document.domain 子域名可以改到更高一级的域名，上层域名
- 如何探测 jsonp 请求
  jsonp:创建了一个 script 标签，有 src

  ```js
  let script = document.createElement('script');
  script.src = 'xxx';
  document.body.appendChild(script);
  ```

  1. 拦截 script:

  ```js
  let _createElement = document.createElement; //存起来换个名
  document.createElement = function (name) {
  	if (name === 'script') {
  		let script = _createElement(name);
  		script.addEventListener(); //探测到的script，绑事件
  		return script;
  	} else {
  		return _createElement(name); //其他情况按原来的
  	}
  };
  ```

  2. 如果页面用了 jsonp 的库，直接改库的源代码
  3. 如果用了 axios，axios 是有拦截器的，可以直接 设置拦截器
     `axios.interceptors`

- jsonp 如何实现跨域
  通过 script 加载一个 js 文件，但我们并不能知道 js 文件里实际运行的内容。
- es6 中的 proxy 应用
  proxy 可以拦截对一个对象的所有操作(读写，调用，判断)

### 网络
- http为什么是无状态的?
  协议自身只有一个来回,来不及记录状态.
- https 加密原理？是对称加密还是非对称加密?
  对称加密：加密与解密使用相同的密码。
  非对称加密：用公钥加密，需要使用对应的私钥解密。
  握手的时非对称加密，握手完成以后是对称加密，非对称加密解密时间较久。
  TLS 协议：证书链，即信任链。
- http 和 https 区别
  https:走在安全连接上的 http,传输过程是加密的。
- **浏览器缓存。那些是强缓存，哪些是协商缓存？具体字段？**
  强缓存：
  Expires
  Cache-Control
  Pragma
  协商缓存：
  Last-Modify/If-Modified-Since
  ETag/If-None-Match
- ip 网络层，机器到机器
- tcp 传输层，客户端与服务器模式的可靠通信信道，一个服务器可以接受多个客户端的连接。
- tcp 和 udp
  - tcp 对头阻塞
  - udp 快
- tcp 三次握手，四次挥手
  一次信息交换至少要建立三次成功的通信。
  四次挥手，在特定情况下可以是三次。

- 前端攻击有哪些？
  csrf,sql 注入,xss
- 网络安全 xss、csrf（为什么 token 可以预防），怎么防范？
  - XSS:用户的输入被发到页面上，成为页面的代码并执行（留言留了 script 并可以执行了，数据被发往另一个站点。
    - 防范：让他不能把数据发往其他服务器。使用CSP(内容安全策略),在HTTP请求头里设置，样式只能从哪里加载，图片只能来源于哪里，限制页面加载js的来源。
  - SQL注入：用户的输入被拼接在了sql语句
    - 数据库使用占位符，sql不使用拼接方式
  - CSRF：跨站脚本攻击，一个页面借用了已经登陆的页面的 cookie 向该页面的服务器发送请求。伪造一些操作
    - 防范：验证请求由哪个页面发出，验证referrer；使用 CSRF token;cookie的SameSite属性
- http304 Not Modified
  304：协商缓存成功的状态码
  Not Modified：两方版本相同，不需要再发送了
- HTTP 模型
  请求，响应模型
- http get post 区别
  语义：获取，发送
  get 一般没有请求体，post 一般有请求体
- post 请求请求字段和对应的值
  POST /foo/bar HTTP/1.1
  Content-Type:application/json
  Content-Length:28
- HTTP2

- 强缓存与协商缓存
  强缓存：后续使用这个资源的时候就不发请求。
  协商缓存是会发请求的。
  IF-Modified-Since/Last-Modify
  If-None-Match/ETag

- 浏览器主动建立请求的方法
- 聊聊 fetch
- 聊聊的浏览器存储方法
- 如果请求数据成功，但数据未返回该怎么办？
- 如何保证多次请求的顺序？
  记录请求发起的时间点
- **从输入 url 之后发生了什么？**

### DOM

- 常用的 dom 方法
  createElement()/appendChild()/getElement/removeChild()
- 获取 DOM 的方法
  querySelector()/getElementById()/name/tagName/className
- 都有哪些事件？
- 如何获取页面元素坐标？
  element.getBoundingClientRect()
  element.getClientsRects()//行内元素折行时可能有多个方块

- normalize 将连续的文本节点合并成一个
  ```js
  function normalize(node) {
  	if (node.nodeType === document.ELEMENT_NODE) {
  		var children = Array.from(node.childNodes);
  		let text = '';
  		for (let i = 0; i < children.length; i++) {
  			if (children[i].nodeType === document.TEXT_NODE) {
  				text += children[i].nodeValue;
  				node.removeChild(children[i]);
  			} else if (text) {
  				var textNode = document.createTextNode(text);
  				node.insertbefore(textNode, children[i]);
  				text = '';
  			}
  		}
  		if (text) {
  			var textNode = document.createTextNode(text);
  			node.append(textNode);
  		}
  	}
  }
  ```

### BOM/浏览器

- 浏览器的本地存储有哪些方式？
  sessionStorage cookie localStorage
- 浏览器多个页面如何进行通信？
  一般指同域:
  localStorage:一个页面改了 localStorage 的话，其他页面会收到 onStorage 事件
  postMessage
  不同域：
  postMessage

### jquery

- jquery 常用的事件
  jquery.ready 指 DOMContentLoaded 事件，早于 window.onload 触发，在 dom 解析完成时触发。
  在旧的浏览器没有 DOMContentLoaded 事件，使用 readystate 事件实现。现在更多把启动代码放在页面末尾，因为页面末尾的代码执行的时候,dom 已经解析到了 html 源代码的末尾，往往需要的 dom 元素也已经构建了出来。

### node

- 浏览器、nodejs 的事件循环
- 在 Node 层如何并行请求
  异步的，都是并行的
- stream 的 pipe
  水位线为了控制内存占用
  一点点处理
  pipe:根据一串流中每个流对象的处理速度来协调
- node exec/spawn,fork 的区别？
  exec 是执行一个命令
  spawn 是启动一个子进程
  fork 是再启动一个 nodejs
- 用 node 做过什么？
  爬虫，爬虫框架：...
  定时任务。

---

重点

### promise

- promise 的状态一共三种
  resolve,reject,pending
- promise 实现
- promise.all,promise.race 的实现
- promise 是如何解决回调嵌套的?如一个 promise 里嵌套另一个 promise

  ```js
  p.then((val) => {
  	doSth().then((val) => {
  		doSth().then((val) => {
  			doSth();
  		});
  	});
  });
  //改写成
  p.then((val) => {
  	doSth();
  })
  	.then((val) => {
  		doSth();
  	})
  	.then((val) => {});
  ```

- promise 在 es6 里有 finally 方法吗？
  没有。es9 里才有的，不接参数

  ```js
  Promise.prototype.finally = function (f) {
  	return this.then(
  		(val) => {
  			return Promise.resolve(f()).then(() => {
  				return val;
  			});
  		},
  		(reason) => {
  			return Promise.resolve(f()).then(() => {
  				throw reason;
  			});
  		}
  	);
  };
  ```

- async await,写一个 sleep 函数，让两个函数执行间隔相差一秒

  ```js
  function sleep(time) {
  	return new Promise((resolve) => {
  		setTimeout(resolve, time);
  	});
  }

  f1();
  await sleep(1000);
  f2();
  ```

- **async await 实现原理。为什么说 async await 是一个生成器函数？generator 怎么实现异步？**
  Promise 和 generator,如何实现 async await
  run 函数，生成一个 promise，等这个 promise 完成再调用 next 生成下一个并传入前一个 promise 的结果。

### this

- **this 的指向**
  看是否是箭头函数
  this 处于哪个 function 声明的函数里面
  看这个函数是如何被调用的

### 🍳web 性能优化

- 怎么解决内存泄漏？内存回收有哪几种方式？
  内存泄漏：对象已经没有用了，但是还占用着内存，没有被销毁。
  内存回收：标记清除，引用计数。
- 加载快：优化网络
  运行快：优化 xx
- **加载页面时，有那些方案可以使页面加载快一点？**
  code spliting 代码分割，只加载页面需要的东西
  在 http 上启用 gzip。
  资源压缩 minify(去掉空白，回车等)，混淆（将变量名都用一两个字母代替）
  启用 http2
- 图片如何压缩？
  使用 jpg/png 格式。
- 判断图片格式？
  读取文件头（可以用 winhex 软件打开）
- 哪些情况用 jpg,哪些情况用 png
  现实照片用 jpg,纯色比较多的用 png,比如截图。
- 合并 JS 文件？如何合并?为什么合并？
  合并：把 script 标签的 js 文件按照 script 的顺序合并成一个。
  为什么：合并后可以有更好的压缩率，且传输的时候只需要一个 http 的请求，节省流量，更快，更省钱。

### 模块

- 模块化和组件化的区别
  模块化：代码拆到不同文件
  组件化：自定义标签

### Vue

- 组件之间的传值方式
- SPA,MPA,单页应用，多页应用

### React

- react propTypes 线上会移除吗
  import PropType from 'prop-types'。会的，开发阶段的验证。
- react 组件，class,function 声明，React.createClass 的区别
  **class 的声明方式**
  需要继承。
  组件将创建组件实例。
  可以有生命周期函数。
  可以有状态。
  **function 声明**
  无需继承，
  组件不是 new 出来的，没有实例。但 react 内部还是有表示该组件的对象。
  没有生命周期函数，但有 hooks 来实现类似的功能。
  以前没有状态，现在有状态，通过 useState 的 hook 实现。
  可以用 hooks 函数，但 class 不行。
  **React.createClass**
  类似于 class 的形式，但不必过多关心 this 的问题.

- 如果不在 react 中使用 constructor，组件的生命周期中可以调用到 props 吗
  可以。不写等于默认以下：
  ```js
  class Foo extends React.Component {
  	constructor(props) {
  		super(props);
  	}
  }
  ```
- diff 算法

- react 有哪些生命周期？生命周期的调用过程

- unsafe,为什么 unsafe
  Fiber 架构，有副作用，可能没有清除，在 render 之前有副作用。换成了静态方法

- setState 的同步异步问题。setState 之后发生了什么
  事件处理函数中是异步的，在 timer 里面是同步的。
- 子组件怎么向父组件传信息
  通过调用父组件传来的函数
- 组件之间相互传值——父传子，子传父，兄弟之间
  直接传属性或事件
  触发事件
  Context
  全局事件中心
  - 兄弟之间：
    全局事件中心
    状态提升，将数据提到公共祖先上，借由公共组件传递
    redux
- 子传父时 refs 如何使用
  ref 拿到子组件的实例，然后调用其方法

- react 里面函数为什么要进行 this 绑定？
  class 声明的 react 组件，读取其中的方法时，this 会丢失。
- context 和 ref
- react 原生事件和普通事件的区别？
  react 里面事件对象是合成对象。
  处理了一定的兼容性问题。
  合成事件对象为了节省内存，不同事件也都是用的同一个对象，除非调用 e.persist(),他才能异步读到数据，否则异步是读不到数据的。
- 受控组件和非受控组件的区别??
  fixme:
  受控组件有 value/checked 属性，一般需要 onChange 事件
  非受控组件没有 value
- 高阶组件什么时候会用到
  封装逻辑复用
  redux connect
- 组件的封装
  接收什么属性，有什么状态，渲染出什么结构
- react 对真实 DOM 有哪些优化操作？
  状态改变以后只会修改 dom 需要变化的部分。-diff 算法
- react 性能优化
  shouldComponentUpdate
  不可变数据结构
  结构共享
  immer
  对属性做浅对比，如果不变，就不刷新
  PureComponent,React.memo
- react 的坑点
  hooks 的闭包陷阱/陈旧闭包，
  副作用
  不可变数据结构
- **hash 路由和浏览器路由（history)的区别**
  history 需要后端配置，使用 pushState/onpopstate 来实现
  hash 路由不需要后端配置，使用 onhashchange 事件来实现

#### **hooks**

- hooks 和类组件的区别？

- hooks 对函数组件带来了什么优势？
  state，副作用
  不同组件间的逻辑复用变得很容易。
  将逻辑抽象成新的 hooks。
  让相关的代码放在一起。

- useEffect
  什么时候运行，
  清理函数

#### **redux**

- reducer-combine connect
  Redux.combineReducers 把多个 reducer 函数合并成一个。
- redux 原理和用法？使用方式，工作流程，如何用 redux 处理异步代码，如何阻止子元素渲染
  使用 redux 中间件
  redux-thunk,redux-saga
  阻止子元素渲染
  shouldComponentUpdate
  阻止子组件更新
  被 redux connect 过的组件自动会在属性浅对比不变时不更新组件
- 状态管理库，redux 的数据传输过程？从页面触发事件开始
- react-router 跳转跟普通 a 链接有什么区别？
  一个是前端路由，一个是后端路由。
  前端路由只是切换组件树，而 a 链接加载新的页面。

- 对 react 的理解？
  跟什么组合成 react 全家桶
- 对 redux 的理解？
  redux 如果发异步请求，如何让数据流停在某个地方？
- 遇到过的难搞的问题
  hooks 的闭包陷阱
  react-router 的 history 模式配置
  副作用写错地方

### antd

- 用过哪些组件？form 表单怎么对数据进行验证？
  form,input,button

### webpack

- 是否了解？ 什么作用?
  核心作用：打包
  打包，转换，代码分割，摇树优化
- 有没有配置过 webpack
  具体的配置
- 常见的 loader 和 plugin
  loader:sass-loader,css-loader,style-loader,image-loader
  plugin:common-chunks-plugin,webpack-html-plugin
- loader 和 plugin 的区别
  loader:把其他非 js 的资源也能通过 require 加载，比如 css，json，把这些非 js 的资源转化为等价的 js
  plugin:对整体的打包结果进行处理的机制

### babel

- 作用和核心概念

### TS

- type 和 interface 的区别
- 泛型是什么以及对应的应用场景
  泛型:结构是有什么组成的 `Array<number> Array<string> Array<People>`
- 一个对象的 name 属性为泛型该如何写

### 输出结果：

```js
//作用域
//①
function foo() {
	a = 5;
	console.log(window.a); //undefined,外面读不到
	console.log(a); //5
	var a = 10; //声明提前
	console.log(a); //10
}
foo();

//②
function foo() {
	a = 5;
	console.log(window.a); //can't access
	console.log(a); //can't access
	let a = 10; //TDZ,声明前不能访问
	console.log(a);
}
foo();

//③
function foo() {
	let a = 5;
	console.log(window.a);
	console.log(a);
	var a = 10; //不能重复声明
	console.log(a);
}
foo();
//④
var name = 'a';
function outter() {
	var name = 'b';
	function inner() {
		console.log(name);
		console.log(this.name);
	}
	inner();
}
outter();
```

```js
console.log(['1', '2', '3'].map(parseInt)); //[1, NaN, NaN]
```

```js
function func(a = {}) {
	console.log(a);
}
func(null); //null
func(undefined); //{}
func(false); //false
//
```

```js
//promise
document.body.addEventListener('click', () => {
	Promise.resolve().then(() => console.log(1));
	console.log(2);
});
document.body.addEventListener('click', () => {
	Promise.resolve().then(() => console.log(3));
	console.log(4);
});
```

```js
function test() {
	console.count('Promise Resolve');
	ret = Promise.resolve().then(test);
	return ret;
}
console.log(1);
test();
```

```js
//作用域问题
function fun(n, o) {
	console.log(o);
	return {
		fun: function (m) {
			return fun(m, n);
		},
	};
}

let a = fun(0);
a.fun(1);
a.fun(2);
a.fun(3);

let b = fun(0).fun(1).fun(2).fun(3);
let c = fun(0).fun(1);
c.fun(2);
c.fun(3);
```

### 手写代码

- 下面这个 ul，如何点击每一列的时候 alert 其 index?

  ```html
  <ul id="”test”">
  	<li>这是第一条</li>
  	<li>这是第二条</li>
  	<li>这是第三条</li>
  </ul>
  <script>
  	var ul = document.querySelector('#test');
  	ul.onclick = function (e) {
  		for (let i = 0; i < ul.children.length; i++)
  			if (e.target === ul.children[i]) {
  				alert(i + 1);
  			}
  	};
  </script>
  ```

- 实现对象属性不能更改
  Object.freeze() //浅层次冻结。递归遍历，如果属性是对象，继续冻结，实现深层次冻结。
- promise 实现
- promise.all,promise.race 的实现
- 编写 parseQueryString,把 url 参数解析为一个对象
  const url ='http://miao.com/index.html?studentId=111&classId=111'
- 将数组扁平化，flattern
- 点击排序，点击按照该行升序或降序排列
  ![](https://i.loli.net/2020/09/11/paRyC5imf3sKIXb.png)

  先识别当前处于什么状态，map 的思想，用数字做标识（群里有）

- call、apply、bind 区别
- 你会用哪种数据结构实现 Map 类？key 和 value 分别存在哪
  - 数组,链表,哈希表
  - 对象也可以，但对象本身就是映射，但不把他当映射使用
- **节流防抖使用场景和原理。**
- 描述一下防抖和节流，实现一下防抖函数，节流函数。

- es5 实现继承
- 实现 JSON.stringify，有缩进
- 实现 requests 函数，要求可以对多个 url 同时请求，可以设定最大并发数。 -请求猫猫图片
  回调：onebyone() 请求
  async.parellelLimit()

- 实现 addFactory = function,函数柯里化

  ```js
  //函数柯里化
  //add(1)(2)(3)无限都可以得到结果
  function argsSum(args) {
  	return args.reduce((pre, cur) => {
  		return pre + cur;
  	});
  }
  function add(...args1) {
  	let sum1 = argsSum(args1);
  	let fn = function (...args2) {
  		let sum2 = argsSum(args2);
  		return add(sum1 + sum2);
  	};
  	fn.toString = function () {
  		return sum1;
  	};
  	return fn;
  }
  ```

- 实现一个函数 sum，运算结果可以满足如下预期结果：

  ```js
  sum(1, 2, 3).valueOf(); //6
  sum(2, 3)(2).valueOf(); //7
  sum(1)(2)(3)(4).valueOf(); //10
  sum(2)(4, 1)(2).valueOf(); //9
  ```

  ```js
  function sum(...args) {
  	let s = sum.bind(null, ...args);
  	s.valueOf = function () {
  		return args.reduce((a, b) => a + b);
  	};
  	return s;
  }
  ```

- 深克隆 deepclone
  正则类，Date 类单独处理。
  对象/原始数据类型：递归复制一份。
  带环/不带环，用 map 防止循环引用
  如果不用 map 用数组也可以，重点是建立映射。
  或者给已经复制过的对象创建一个特殊的属性，做标记。

  ```js
  //如果带环，需要缓存，确认当前对象是否复制过，如果复制过，就直接指向它。用map防止循环引用

  function cloneDeep(obj) {
  	let cache = new Map(); //由原对象映射到其复制品
  	return clone(obj);
  	function clone(obj) {
  		if (cache.has(obj)) {
  			return cache.get(obj);
  		}
  		if (obj && typeof obj === 'object') {
  			let res = {};
  			cache.set(obj, res);
  			for (let key in obj) {
  				res[key] = clone(obj);
  			}
  			return res;
  		} else {
  			return obj;
  		}
  	}
  }
  ```

- 给一棵二叉树 和 一个值，检查二叉树中的是否存在一条路径，这条路径上所有节点的值加起来等于给的那个初始值。例如，对于下面的二叉树，如果初始值是 22，那么存在一条路径 5->4->11->2，打印出该路径。
  5
  / \
   4 8
  / / \
   11 13 4
  / \ \
   7 2 1
  请实现如下这个函数:

  ```js
  //leecode112
  function hasPathSum(root, sum) {
  	// 请输入答案
  }
  ```

- 手写遍历，层序遍历
- 手写一个设计模式

## 算法：

- 1000 杯水，一杯毒药，小白鼠试毒？（信息论）
- 两个链表最近公共节点（leetcode160）相交链表
- 深度优先与广度优先。
  遍历方式

- JS bridge 通信原理
  登录了 app,网页上就出来点击登录。app 为网页提供的一系列接口。
- 两个 script，第一个报错，第二个是否会继续解析。
  会的。
- 实现数组乱序/洗牌算法
  真随机算法。fisher-yates 算法的思路
  lodash.shuffle

- ajax 301 是否会重定向
  会的，请求到最终跳到的资源。

- TS

- eslint：rules,plugin,extends 区别
  rules:设定每一条规则
  plugin:增加其他的插件
  extends:规则扩展自已有的规则集合
- nginx
  通过不同域名监听同一个端口，通过域名进行转发到不同的服务器。反向代理

一面

css 居中
事件代理
生成器函数
...运算符
对 babel 的理解

- 用户输入登录信息发生了什么

- Vue 和 react 的理解
  基于组件化的框架。
  原理上：getter/setter ,不可变数据结构

boss 面

- 一个有 n 个数的数组，请不用乘法算出其中 n-1 个数乘积的最大值

- 不用除法算出 m / n (循环)
  减法
- 哈希表时间复杂度，哈希算法实现思路
  On
  随机返回
- 我的特斯拉忘记锁门了，在十公里外，我可以通过手机远程一键锁门，请问特斯拉通过 http 要怎么收到信息 (轮询，websocket)
  服务器在线。
- 在阿里云的服务器上写一个自动收集好友能量的外挂要怎么写
  蚂蚁森林。
  **获得支付宝内部页面发的什么请求：**
  手机走代理服务器，为自己电脑的 fiddler。通过 Fildder 中间人攻击获取页面发了什么请求 Fildder
  模拟，每天一次自动发请求：
  身份：cookie
  地址：url
  请求头:req head

- typeof,

- 数组去重，
- 数组中最大值，
- math.max 怎么传入数组参数，
- call,apply,bind 用法与区别，
- vue key 作用和使用场景，
- vue-router 几种模式，
- hash 和 history 的区别，
  hash:前端
  history:pushState+onpopstate ＋后端配置
- keep-alive 组件的原理
  隐藏显示保持之前状态。
  保持组件实例对象，不销毁。
  - keep-alive 里面有 iframe 能不能保持不刷新
    ？？？？不确定。不能，会刷新。保存的是组件实例，没有保存 dom 对象实例。
- websocket 使用
- vue 模板是怎么工作的
- vue 的插槽用法和实现原理
- 数组的 splice，reduce,filter 等方法的使用
- vue 响应式原理，
- 依赖处理流程，
- dom diff 过程，
- 数组和 object 处理差异，
- 数据通信方式，
- 插件系统，
- vue-router 原理，
- router 钩子函数使用，
- vue 如何处理鉴权
  鉴定权限。
- 按钮级别鉴权处理
  vif 没权限就不显示按钮。
- nexttick 使用场景，实现细节
  nexttick 的回调里可以读到 dom 更新以后的结果。
- vue 事件系统实现
- 插槽使用场景
  组件有子元素需要显示到组件内部，用 slot
- 移动端适配处理

- MVVM 的理解
  双向绑定
- 布局，一个满屏的品字布局

## 其他

- 堆内存、栈内存
  堆内存：占用空间不确定：对象，长度不确定的数组
  栈内存：变量占用的空间。 函数调用的时候形成的调用栈，存储函数内部的局部变量。
- 接口 c nodejs

  TODO:

- md5 计算器
- leetcode 2sum,4sum
- 回溯，dp,
- 正则 贪婪与非贪婪
- 网络是怎么连接的？
- 各种排序，快排，堆排序，各种排序算法的原理以及实现，手写
- 多级排序，优先级最高的最后排。/lodash.sort
- 浮点数不精确
- 0716 路径化简，栈 url 里的. ..
- 数据库 sql 查询的优化？

- 项目实现的细节？遇到过的困难如何解决？
  遇到的问题:
  fixme:bbs项目,做登陆之后跳转,为提升用户体验,登陆后跳转到登陆前浏览的页面,否则跳转到首页.结果总是跳转到注册的页面.在做好功能后没有进行测试,找问题所在找了好久.在network里面找到问题了吗?

NOTE:

- 相等性判断，还是判断 true/false
  ```js
  [] == 0; //true
  '' == 0; //true
  if (0) {
  	console.log('yes');
  } //yes
  ```

## COMMUNICATION

- 函数参数传递
  js 中所有的参数传递都是值传递。
  无论是原始数据类型还是引用数据类型。
- **var,let,const 的区别**
  var:es5 之前提出，用来做变量声明。有变量提升，作用域。
  let:es6 提出，没有变量提升。在生命前使用，出现 TDZ。不能重复声明。
  const:es5,声明常量。const 的指向不能变，但指向的东西可以变，可以增删属性。

-
