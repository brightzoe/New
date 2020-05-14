## 学习资料：
《JavaScript DOM 编程艺术》
《Eloquent JavaScript》

+ 待学:
<深入了解计算机系统> 大名鼎鼎的CSAPP

WebPack 编译&打包&同步  
缩写：
+ e.g.  for example（举例）
+ i.e.  that is（即）
+ etc.  et cetera（等等…）
+ P.S.  post scriptum(附言，另外)

## 数据在计算机中存储中的表示
浮点数一般使用8个字节表示,64bit
最左是符号,然后十一位为指数
  + 指数范围-1023-1024,指数部分使用原码存储,原码范围0-2047,0表示-1023
  + 指数不用补码:从左到右扫描即可比较大小.
  + 浮点数不够精确则更多用于对比大小,提高大小比较效率
  + 程序中很少判断两个浮点数相等,更多判断他们的差的绝对值是否小于某个精度.小数部分最高精度Number.EPSILON
不存储底数的整数部分,因为底数的整数部分总是1,可以让二进制状态有效位数为53位
  + 有效位数53位,可以表达的最大精确数2**53-1 为Number.MAX_SAFE_INTEGER. 大于这个范围的数是可以表示的,但不能保证精确,溢出的位会被截断
  + 整数部分使用的越多,小数部分有效位数越少.即数值越大,小数部分的精度越低.

IEEE754标准:二进制浮点顺运算标准
  + 双精度浮点数使用8字节表示,指数部分11bit,底数62bit
  + 单精度浮点数使用4字节表示,指数部分8bit,底数23bit



## 万维网是如何工作的

 ![客户端和服务器](https://cdn.jsdelivr.net/gh/brightzoe/img/img/20200105191449.png)


+ 网络连接: 允许你在互联网上发送和接受数据。基本上和你家到商店的街道差不多
+ TCP/IP: 传输控制协议和因特网互连协议是定义数据如何传输的通信协议。这就像你去商店购物所使用的交通方式，比如汽车或自行车。
+ DNS: 域名系统服务器像是一本网站通讯录。浏览器需要找到存放你想要的网页的服务器，才能发送 HTTP 请求到正确的地方。就像你要知道商店的地址才能到达那。
+ HTTP: 超文本传输协议是一个定义客户端和服务器间交流的语言的协议（protocol ）。就像你下订单时所说的话一样。
+ 组成文件: 一个网页由许多文件组成，就像商店里不同的商品一样。这些文件有两种类型：
  + 代码 : 网页大体由 HTML、CSS、JavaScript组成，不过你会在后面看到不同的技术。
  + 资源 : 这是其他组成网页的东西的集合，比如图像、音乐、视频、Word文档、PDF文件。

### 发生了什么？

当你在浏览器里输入一个网址时（在我们的例子里就是走向商店的路上时）；
1. 浏览器在域名系统（DNS）服务器上找出存放网页的服务器的实际地址（找出商店的位置）。
2. 浏览器发送 HTTP 请求信息到服务器来请拷贝一份网页到客户端（你走到商店并下订单）。所有在客户端和服务器之间传递的数据都是通过互联网使用 TCP/IP 协议传输的。
3. 服务器同意客户端的请求后，会返回一个“200 OK”信息，意味着“你可以查看这个网页，给你～”，然后开始将网页的文件以数据包的形式传输到浏览器（商店给你商品，你将商品带回家）。
4. 浏览器将数据包聚集成完整的网页然后将网页呈现给你（商品到了你的门口 —— 新东西，好棒！）。

### DNS解析

真正的网址是一串数字，比如10.230.217.105，这叫IP地址，代表互联网上一个独特的位置。但并不好记忆，DNS就是将域名与实际的IP地址相匹配的特殊服务器。
例如 IP Checker可以通过域名查找IP地址。

### 数据包是什么意思？

基本上，当数据在Web上传输时，是以成千上万的小数据块的形式传输的。大量不同的用户都可以同时下载同一个网页。如果网页以单个大的数据块形式传输，一次就只有一个用户下载，无疑会让Web非常没有效率并且失去很多乐趣。





+ js的引入最好放在html里body的最后，这样会加快页面加载速度。
+ 控制台调试：debugger；/右键行号临时断点
+ 命名：
fuzzy_little_turtle snakecase
FuzzyLittleTurtle capital case 构造函数
fuzzyLittleTurtle camel case 驼峰式

+ 任何标签都可以加id属性,他的身份识别
+ `<a href="javascript:alert('a');">link</a>`一般不在a里面加code
+ html用啥，js就用啥 //class除外，为关键字


## 值与运算符
数字number
+ 整数精确，小数是近似值，不完全准确，要小心。
+ infinty&-infinty
+ NaN  "not a number",不产生有意义的结果
  
运算符operator
+ 运算符优先级<link>https://www.ecma-international.org/ecma-262/5.1/


字符串string
+ \转义符
+ \n 回车  \t Tab
+ 反引号后可出现明文回车




typeof:  一元运算符，返回类型

自动类型转换：弱类型语言js 强类型语言（python）
变量指向的类型在程序运行时是否允许发生变化：动态类型（js）静态类型（c）

### 类型转换：
+ `parseInt()`//强制转换为数字 
+ `Number()`或`+ "3" `
+ `String()`
+ `Boolean()`
+ `x.toFixed(n)` 确定精度
+ `Math.pow(x,3)` 乘方; floor/ceil/trunc/round
+ `Math.PI` **大小写要准确，js大小写敏感**



比较comparisons
+ `==` 相等，会进行类型转换再比较（隐含强制转换）
+ 比较方式：
  + 针对原始类型，`a == 2`是比较值；
  + 针对函数，`ary == [0]`,右边会创建新的变量,判断这两个数组是不是同一个。所以不能这样判断数组，可以拆开用ary.length与ary[0]比较
  + 字符串也可以进行比较，比较的是ASCII
  + `==` 一边为字符串，则全转换为字符串比较

+ `===` 严格相等，不进行类型转换直接比较
+ `!==` 不严格相等
+ `NaN`跟自己也不相等
+ `isNaN`是否“不是一个数值”
+ `Number.isNaN`是否是NaN这个值
+ `undefined`与`null`：==可以，===不可以
  + `undefined`：已定义，未赋值，类型为undefined
  + `null`:未定义，类型为object
+ `!name` !运算符会将值转换为布尔类型再取反


复合赋值
+ +=，-=，+=，/=

### 逻辑运算 logical operators
+ && 和
+ || 或
+ _ ? _ : _  三元运算符（条件运算符），根据前面是T/F确定选择后面哪个值
  + e.g. 
    ```
    console.log(true ? 1 : 2);
    // → 1
    console.log(false ? 1 : 2);
    // → 2
    ```
+ **逻辑运算的短路特性**short-circuiting 
  + 右边的值只在必要时进行计算
  - __ && __ && __   从左到右返回第一个为false的值
  - __ || __ || __   从左到右返回第一个为true的值
`true && "hello,xiaoai" //实际开发可以用于：满足前面条件，然后执行后面的。从前向后执行`
`false || "default" //判断是使用传过来的值，还是默认值`

**原码与补码**
正数的补码与原码相同，负数的补码等于原码取反，末位加1（符号位不变）

### 位运算符（优先级低）
+ |    按位 或 每位有1则1
+ &    按位 与 都1才1
+ ~    按位 取反 0变1，1变0
+ ^    异或运算 相同为0，不同为1
+ `>>` 移位运算 向右移位，每移一位，/2向下取整. 移位后空缺部分全是0
+ `<<` 左移，加倍
+ `>>>`按位右移，不保留符号位
+ <<<
+ `~`   取反操作, 先加1 然后加上负号

位运算/逻辑运算技巧
+ 可以用if ((a & 1) == 0)代替if (a % 2 == 0)来判断a是不是偶数。
+ https://blog.csdn.net/MoreWindows/article/details/7354571
+  x | 0   取整
+  x || 2  给函数一个默认值

## 程序结构

表达式和语句 expressions and statements
+ 分号大部分情况可以省略。
+ ASI 自动分号插入
+ 当语句的第一个字符为 + - / { (这几个符号时，前面一行必须加分号。

变量 variables 
+ 变量不含空格，不以数字开头，符号只能用$和_，不能用关键字
+ 定义变量不赋值 返回undefined
+ let 绑定，类似var
+ 全局变量
+ 局部变量

常量：一般在程序顶部声明，一般为大写，_ 连接
命名方式`const Five_Secends = 5000`



`console.log(a++)`  //3,先返回a,然后a++
`console.log(a)`   //4,a已经加过了
`console.log(++a)` //5,先a++，然后返回

控制流 control flow 

+ 条件语句 if

+ 循环 loop control flow (循环控制流)
  + while
  + do while 条件后置，至少执行do一次
  + for
  + switch 每个case都要加break;只能判断严格相等；




### 函数 functions
+  `alert("Good moring!");` 弹出一个含有信息的对话框
+  `console.log()` 输出值
+  `confirm("shall we go shopping?");` 返回布尔值 T/F
+  `prompt("Enter passcode","passcode is");` 返回字符，前面是问题，后面是输入值的前缀。无法改变对话框的外观
+ 参数 / 作用域  全局/局部
+ let的声明在之前是不能使用的 TDZ 暂时性死区  temper dead zone
+ **作用域/作用域链**   let 块级作用域
+ 函数声明语句（function a （x））
+ 函数表达式/匿名函数 var a = function ()
+ 函数声明会进行声明提升（declaration hoisting），而函数表达式不会。**函数声明可以在函数使用后面** 

箭头函数 -为了以简短的方式编写小函数表达式
+ `=>`出现在参数后面，函数主体前面。
```js
var greeting = (name) => { //只有一个参数，参数的小括号可以省略；只有一行语句，后面大括号也可以省略
  console.log("hello" + name)
}
```

+ argements
```js
function (){//不指定参数的话，参数数量不固定，arguments算是不固定长度的数组
  console.log(arguments[0])
}
```
调用栈 call stack
+ 计算机存储上下文的地方（每个函数返回位置）,占内存. /函数调用时的等待关系
+ 每次调用函数时，当前上下文都存储在此栈的顶部。当函数返回时，它会从栈中删除顶部上下文，并使用该上下文继续执行。

#### **闭包**
```js
function squareSum(a,b){//求平方和
  function square(a){
    return a * a
  }
  return square(a) + square(b)
}

squareSum(3,5)
```
+ 内部函数可以作为返回值返回出去，形成高阶函数（返回函数的函数）。
  

**函数柯里化**：柯里化是将函数分解为一系列函数的过程，每个函数都只接收一个参数。
作用：1. 参数复用；2. 提前返回；3. 延迟计算/运行。

**递归**

**自执行函数**
调用自己执行，防止命名冲突。
```js
let num1 = 10;

(function(){
  let num1 = 20
  return num1
})()
// => 20
num1
// => 10
```
**回调函数** callback
参数是一个函数

>不要过早优化,先写一些正确且容易理解的东西.

### 数组array，数组属于内建对象
```js
//创建数组
  let ary = [1,2,3]  //可以创建只有一个元素的数组
  let ary = Array(4) //创建一个长度为 4 的空数组
  let ary = new Array(3,4,5)
  let ary = Array(3,4,5)
  let ary = Array.of(3,4,5)//可以创建只有一个元素的数组
  let ourArray = [["universe", 42], ["everything", 101010]];//数组也可以包含数组
//改变数组
  ary.length = 2     //随时可以被赋值,改变数组长度
  ourArray.push(4)  //在后面追加元素
  ourArray.pop()   //弹出最后一个字符并储存；只从尾部进出,形成栈
  ary.shift()     //弹出第一个元素
  ary.unshift()  //在前面添加元素
  ary.splice(index,length) //删除元素，原地操作,改变原数组
  ary.splice(index,length,new_elements)//替换，删除一些元素，并在此插入新的元素
  ary.splice(index,0,new_elements)//插入元素，删除元素的length = 0，就是在在此直接插入新元素
  ary.slice()   //两个参数，切一个片段出来，包含开头，不包含结束
  ary(10).fill(0)//全部填满XX
  ary .join()   //不传参默认为， `ary.toString()`
  ary.indexOf(x);ary.lastIndexOf(x)//寻找值为x的索引
+  `String.fromCharCode()`
+  `a.charCodeAt(2)`
+  `ary.contact(ary2)` //将数组拼接在一起，创建一个新数组
+  `a.endWith()`
+  `Array.of()` `Array.from()`
+  //数组操作，字符串操作
+  `arguments`所有的参数；可以用`.length` `arguments[i]`
+  `Math.max(...c)` //展开运算符，只能在参数列表使用

```
### 对象 object
+ 一些属性和方法组合在一起构成的一个数据实体，用.访问
+ 给对象创建实例 var zoe = new Person;
+ 用户定义对象
+ 内建对象：数组/Math对象/Date对象
+ 宿主对象：浏览器提供的预定义对象 Form/Image/Element/Document对象
  + window对象，对应浏览器窗口本身，通常统称为BOM
  + document对象，处理网页内容
+ 对象的内容是可以修改的
+ 原始类型的数据不可更改-(number,string,bool)
+ 循环： for (var prop in obj) 
+ slice 出来的数组是浅拷贝（shadllow copy),对应的有深拷贝
+ isEqual是深对比，对比的是具体的内容是否一致；浅对比对比的是否是同一对象
+ **深对比如何考虑，自己实现**


#### this的指向
调用函数时，解析器向函数内部传递的一个参数，指向函数执行的上下文对象。
* 以方法的形式调用时，函数的 this 就是调用它的对象。如 array.length
* 以纯函数形式调用时，this 是 window    f()
* 用 new 来调用 this 时，this 就是那个新建的对象。如构造函数；
修改this的指向：
* 用call 和 apply 调用时，this 是指定的那个对象。
  => fn.call(obj,xx,xx,xx) 后面是参数
  =>fn.apply(obj,[xx,xx,xx]) 参数以数组传入
* 函数可以用 bind()绑定this的指向
* this 永远不能被赋值，即 this 不能写在等号左边
* this 永远指向一个对象，如果指向了一个原始数据类型会将原始数据类型包装成对象
* 箭头函数不会创建自己的 this, 它只会继承自己的作用域链的上一层作用域的 this 对象

* this 的丢失问题
    this 指向调用的对象与函数声明的位置无关，只与调用位置有关，如果在调用位置还使用声明位置的 this，this 会丢失；
    解决方法通过 bind 绑定 this 或者通过箭头函数。箭头函数的 this，总是继承外层函数的对象，在定义时就确定，与调用无关。

#### 类数组 arguments
调用函数时，浏览器每次都会传递两个参数：
1. this 函数的上下文对象
2. arguments 封装实参的对象
+ arguments代表实参，只在函数中使用。
+ arguments.callee对应当前指向的函数对象。在使用函数递归，如果是匿名函数需要用到。ES5严格模式不支持。
+ 可以像数组一样修改arguments的值，但不能更改长度。
+ 


#### 属性 //key/property/attribute/field
+ value.x //x要是合法变量名
+ value[0] / value['joe']s
+ .后面的直接使用作为属性，[]里面的会被求值。
+ 包含函数的属性称为某个值的方法 method

### 作用域
+ 作用域：变量在某个范围内起作用，为了提高程序的可靠性，减少命名冲突
+ 全局作用域：在整个js文件起作用
+ 函数作用域：旨在函数内部起作用
  

## lodash     `_`下划线
+ 一个函数库，前身underscore




## 正则表达式 RegExp
Domain Specific Language 领域特定语言
+ 创建方法：三种方式
  + `var a = new RegExp('\\\\abc')`  //string里面需要转义
  + `var a = /\\abc/` //是啥就是啥
  + `var a = new RegExp(String.fromCharCode(92,9297,98,99))`

### 匹配方式

+ \d 数字digit  [0-9]
+ \w 字符word [a-zA-Z0-9_]字母数字加下划线
+ \s 空白字符space,tab,newline，etc.
+ \D \W \S 非...的字符
+ .  匹配任意字符(除换行符外\n \r\n)
+ [a-z] 匹配单个字符。
+ []里的东西：
  + [^2357] ^在开头：取反，非2357 
  + [^] :任意符号


重复
+ 只对前面紧挨着的一个字符或者一个组生效
  - "+" 出现至少一次  {1，}
  - "*" 出现任意次数  {0，}
  - "?" 出现0次或1次  {0，1}
  - {n} 出现n次 {2} {2,4} {4,}4次及以上

#### 方法
+ test  判断正则表达式和字符串是否匹配
  + /ab\d/.test("ab5sd")=>true   
+ exec  以数组形式返回匹配内容的信息
  + /\d+/.exec("one two 100")=>["100", index: 8,input: "one two 100", groups: undefined]
  + 无法匹配返回 null，否则返回一个表达字符串信息的对象
+ 



#### 捕获分组
+ 使用()号，里面的内容会当作一个整体，()里面匹配到内容单独添加到相关方法的返回值里的行为叫做捕获，也叫捕获分组
  + /(\d{4})-(\d{2})-(\d{2})/.exec('today is 2020-04-14')=>分组捕获
  + /(\d){4}-(\d{2})-(\d{2})/.exec('today is 2020-04-14')=>如果一个分组进行了多次匹配，只保留最后一个匹配(e.g.第一个/d)(像一个变量一样，会更新值)
  + 如果一个分组没有匹配，数组对应位置返回undefined

+ 为分组取名：(?<name>)  （在旧的浏览器无法使用）
  + /(张)(?<名字>.+)/.exec('sgdgs张韶涵')=>groups: {名字: "韶涵"}
  





## DOM  document object model
+ 文档交互类型，给文档增加交互能力，对文档内容进行抽象和概念化，类似CSS增加样式。代表着加载到浏览器窗口的当前网页。是一种API(应用编程接口，是一个标准)
+ **适用于多种环境和多种程序设计语言的通用型API**
+ 文档：节点树 node tree **文档中每个元素节点都是一个对象**
  + 元素节点 DOM的原子是元素节点  `<p class="abc"> this is a pargraph.</p>`
  + 文本节点 只包含文本的元素
  + 属性节点 总是被包含在元素节点中

BOM 浏览器对象模型，设置浏览器的属性

获取元素节点(文档中的每个元素都是一个对象)
+ document.getElementById('id') 返回一个对象
+ document.getElementByTagName('tag') 标签名,返回数组
+ document.getElementByClassName('class') 返回数组
>可以组合使用,i.e.`var shopping = document.getElementById('purchases'); var sales = shopping.getElementsByClassName('sale')`

获取和设置属性
+ object.getAttribute('attribute')
+ object.setAttribute('attr','xxxx') 设置或修改属性
>非DOM解决方案:`element.value = "the new value"`

事件处理函数  特定事件发生时调用 i.e. onclick

`element.childNotes` 获取任何一个元素的所有子元素,返回数组
nodeType 
`window.onload = function` 在页面加载时调用函数









