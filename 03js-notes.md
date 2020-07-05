### 学习资料：

《JavaScript DOM 编程艺术》
《Eloquent JavaScript》

- 待学：
  <深入了解计算机系统> 大名鼎鼎的 CSAPP

WebPack 编译&打包&同步  
缩写：

- e.g. for example（举例）
- i.e. that is（即）
- etc. et cetera（等等…）
- P.S. postscript（附言，另外）

### 数据在计算机中存储中的表示

浮点数一般使用 8 个字节表示，64bit
最左是符号，然后十一位为指数

- 指数范围-1023-1024, 指数部分使用原码存储，原码范围 0-2047,0 表示-1023
- 指数不用补码：从左到右扫描即可比较大小。
- 浮点数不够精确则更多用于对比大小，提高大小比较效率
- 程序中很少判断两个浮点数相等，更多判断他们的差的绝对值是否小于某个精度。小数部分最高精度 Number.EPSILON
  不存储底数的整数部分，因为底数的整数部分总是 1, 可以让二进制状态有效位数为 53 位
- 有效位数 53 位，可以表达的最大精确数 2\*\*53-1 为 `Number.MAX_SAFE_INTEGER`. 大于这个范围的数是可以表示的，但不能保证精确，溢出的位会被截断
- 整数部分使用的越多，小数部分有效位数越少。即数值越大，小数部分的精度越低。

IEEE754 标准：二进制浮点顺运算标准

- 双精度浮点数使用 8 字节表示，指数部分 11bit, 底数 62bit
- 单精度浮点数使用 4 字节表示，指数部分 8bit, 底数 23bit

### URL 网址

- 格式： 协议：//主机地址+目录路径+参数
- 常用协议
  ![常用协议](https://cdn.jsdelivr.net/gh/brightzoe/img/xieyi.png)

### 浏览器及其内核

![](https://cdn.jsdelivr.net/gh/brightzoe/img/browser.png)

## 万维网是如何工作的

![客户端和服务器](https://cdn.jsdelivr.net/gh/brightzoe/img/20200105191449.png)

- 网络连接：允许你在互联网上发送和接受数据。基本上和你家到商店的街道差不多
- TCP/IP: 传输控制协议和因特网互连协议是定义数据如何传输的通信协议。这就像你去商店购物所使用的交通方式，比如汽车或自行车。
- DNS: 域名系统服务器像是一本网站通讯录。浏览器需要找到存放你想要的网页的服务器，才能发送 HTTP 请求到正确的地方。就像你要知道商店的地址才能到达那。
- HTTP: 超文本传输协议是一个定义客户端和服务器间交流的语言的协议（protocol ）。就像你下订单时所说的话一样。
- 组成文件：一个网页由许多文件组成，就像商店里不同的商品一样。这些文件有两种类型：
  - 代码 : 网页大体由 HTML、CSS、JavaScript 组成，不过你会在后面看到不同的技术。
  - 资源 : 这是其他组成网页的东西的集合，比如图像、音乐、视频、Word 文档、PDF 文件。

### 发生了什么？

当你在浏览器里输入一个网址时（在我们的例子里就是走向商店的路上时）；

1. 浏览器在域名系统（DNS）服务器上找出存放网页的服务器的实际地址（找出商店的位置）。
2. 浏览器发送 HTTP 请求信息到服务器来请拷贝一份网页到客户端（你走到商店并下订单）。所有在客户端和服务器之间传递的数据都是通过互联网使用 TCP/IP 协议传输的。
3. 服务器同意客户端的请求后，会返回一个“200 OK”信息，意味着“你可以查看这个网页，给你～”，然后开始将网页的文件以数据包的形式传输到浏览器（商店给你商品，你将商品带回家）。
4. 浏览器将数据包聚集成完整的网页然后将网页呈现给你（商品到了你的门口 —— 新东西，好棒！）。

### DNS 解析

真正的网址是一串数字，比如 10.230.217.105，这叫 IP 地址，代表互联网上一个独特的位置。但并不好记忆，DNS 就是将域名与实际的 IP 地址相匹配的特殊服务器。
例如 IP Checker 可以通过域名查找 IP 地址。

### 数据包是什么意思？

基本上，当数据在 Web 上传输时，是以成千上万的小数据块的形式传输的。大量不同的用户都可以同时下载同一个网页。如果网页以单个大的数据块形式传输，一次就只有一个用户下载，无疑会让 Web 非常没有效率并且失去很多乐趣。

### JS 的使用

- js 的引入最好放在 html 里 body 的最后，这样会加快页面加载速度。
- 控制台调试：debugger；/右键行号临时断点
- 命名：
  fuzzy_little_turtle snake case
  FuzzyLittleTurtle capital case 构造函数
  fuzzyLittleTurtle camel case 驼峰式

- 任何标签都可以加 id 属性，他的身份识别
- `<a href="javascript:alert('a');">link</a>`一般不在 a 里面加 code
- html 用啥，js 就用啥 //class 除外，为关键字

## 值与运算符

数字 number

- 整数精确，小数是近似值，不完全准确，要小心。
- infinity&-infinity
- NaN "not a number", 不产生有意义的结果

运算符 operator

- 运算符优先级<link>https://www.ecma-international.org/ecma-262/5.1/
- void 运算符的作用是执行一个表达式，然后不返回任何值，或者说返回 undefined。
- void(xxx) 优先级超级高.
- typeof: 一元运算符，返回类型
- delete 删除属性
- 逗号运算符用于对两个表达式求值，并返回后一个表达式的值。

大多数运算符是“左结合”.少数运算符是“右结合”，其中最主要的是赋值运算符（=）和三元条件运算符（?:）和指数运算符(\*\*)。

字符串 string

- \转义符
- \n 回车 \t Tab
- 反引号后可出现明文回车

自动类型转换：弱类型语言 js 强类型语言（python）
变量指向的类型在程序运行时是否允许发生变化：动态类型（js）静态类型（c）

### 类型转换：

- `parseInt()`//强制转换为数字
- `Number()`或`+ "3"`
- `String()`
- `Boolean()`
- `x.toFixed(n)` 确定精度
- `Math.pow(x,3)` 乘方；floor/ceil/trunc/round
- `Math.PI` **大小写要准确，js 大小写敏感**

比较 comparisons

- `==` 相等，会进行类型转换再比较（隐含强制转换）
- 比较方式：

  - 针对原始类型，`a == 2`是比较值；
  - 针对函数，`ary == [0]`, 右边会创建新的变量，判断这两个数组是不是同一个。所以不能这样判断数组，可以拆开用 ary.length 与 ary[0] 比较
  - 字符串也可以进行比较，比较的是 ASCII
  - `==` 一边为字符串，则全转换为字符串比较

- `===` 严格相等，不进行类型转换直接比较
- `!==` 不严格相等
- `NaN`跟自己也不相等
- `isNaN`是否“不是一个数值”
- `Number.isNaN`是否是 NaN 这个值
- `undefined`与`null`：==可以，===不可以
  - `undefined`：已定义，未赋值，类型为 undefined
  - `null`: 未定义，类型为 object
- `!name` ! 运算符会将值转换为布尔类型再取反

复合赋值

- +=，-=，+=，/=

### 逻辑运算 logical operators

- && 和
- || 或
- _ ? _ : \_ 三元运算符（条件运算符），根据前面是 T/F 确定选择后面哪个值
  - e.g.
    ```
    console.log(true ? 1 : 2);
    // → 1
    console.log(false ? 1 : 2);
    // → 2
    ```
- **逻辑运算的短路特性** short-circuiting
  - 右边的值只在必要时进行计算
  - `** && ** && **`
    从左到右返回第一个为 false 的值
  - `** || ** || **`
    从左到右返回第一个为 true 的值
  - `true && "hello,foo"`
    实际开发可以用于：满足前面条件，然后执行后面的。从前向后执行`
  - `false || "default"`
    判断是使用传过来的值，还是默认值`

**原码与补码**
正数的补码与原码相同，负数的补码等于原码取反，末位加 1（符号位不变）

### 位运算符（优先级低）只对整数起作用

https://wangdoc.com/javascript/operators/bit.html

- | 按位 或 有 1 则 1
- & 按位 与 都 1 才 1
- ~ 按位 取反 0 变 1，1 变 0
- ^ 异或运算 相同为 0，不同为 1
- `>>` 移位运算 向右移位，每移一位，/2 向下取整(整除)。移位后空缺部分全是 0
- `<<` 左移，加倍
- `>>>`按位右移，不保留符号位
- <<<
- `~` 按位取反操作，先加 1 然后加上负号 /一个数与自身的取反值相加，等于-1。

位运算/逻辑运算技巧

- 可以用 if ((a & 1) == 0) 代替 if (a % 2 == 0) 来判断 a 是不是偶数。
- https://blog.csdn.net/MoreWindows/article/details/7354571
- x | 0 / x ^ 0 / x << 0 //取整
- ~~X //取整最快
- x || 2 给函数一个默认值
- a ^= b, b ^= a, a ^= b //互换两个变量的值的最快方法

## 程序结构

表达式和语句 expressions and statements

- 分号大部分情况可以省略。
- ASI 自动分号插入
- 当语句的第一个字符为 + - / { （这几个符号时，前面一行必须加分号。

变量 variables

- 变量不含空格，不以数字开头，符号只能用、\$和、\_，不能用关键字
- 定义变量不赋值 返回 undefined
- let 绑定，类似 var
- 全局变量
- 局部变量
### let  var const
- var 声明的变量处于函数级作用域，声明会被提前
- let 声明的变量在块级作用域(最近的语句块{})在之前是不能使用的，TDZ 暂时性死区 temper dead zone
- **作用域/作用域链** let 
-const 常量：一般在程序顶部声明，一般为大写，\_ 连接
命名方式`const Five_Seconds = 5000`


`console.log(a++)` //3, 先返回 a, 然后 a++
`console.log(a)` //4,a 已经加过了
`console.log(++a)` //5, 先 a++，然后返回

控制流 control flow

- 条件语句 if

- 循环 loop control flow （循环控制流）
  - while
  - do while 条件后置，至少执行 do 一次
  - for
  - switch 每个 case 都要加 break; 只能判断严格相等；

* 异常
  js 一行一行地运行,遇到错误会停止运行

* 捕获异常,捕获后不会影响后面运行.
  try{
  //要监控的代码
  } catch(err){
  //处理异常 throw
  console.error(err);
  } finally{
  //无论如何都会执行
  }

* 抛出异常
  - throw new Error("404")
  - 可以把 throw 放在 try 里面,然后根据 throw 的类型 catch 处理
  - Error 对象,可以根据需要继承 Error 定义函数

### 作用域

- 作用域：变量在某个范围内起作用，为了提高程序的可靠性，减少命名冲突
- 全局作用域：在整个 js 文件起作用
- 函数作用域：旨在函数内部起作用

### 异步

代码一般同步执行,遇到花费时间的代码需要持续等待,异步,把花费时间长的代码放到另一个地方执行,执行完成之后把结果返回到同步执行的代码中来

- setTimeout
  Eventloop 控制

## 函数 functions

- `alert("Good morning!");` 弹出一个含有信息的对话框
- `console.log()` 输出值
- `confirm("shall we go shopping?");` 返回布尔值 T/F
- `prompt("Enter passwords","passwords is");` 返回字符，前面是问题，后面是输入值的前缀。无法改变对话框的外观
- 参数 / 作用域 全局/局部
- let 的声明在之前是不能使用的 TDZ 暂时性死区 temper dead zone
- **作用域/作用域链** let 块级作用域
- 函数声明语句`function a (x)`
- 函数表达式/匿名函数 `var a = function ()`
- 函数声明会进行声明提升（declaration hoisting），而函数表达式不会。**函数声明可以在函数使用后面**

箭头函数 -为了以简短的方式编写小函数表达式

- `=>`出现在参数后面，函数主体前面。

```js
var greeting = (name) => {
  //只有一个参数，参数的小括号可以省略；只有一行语句，后面大括号也可以省略
  console.log("hello" + name);
};
```

- arguments

```js
function (){//不指定参数的话，参数数量不固定，arguments 算是不固定长度的数组
  console.log(arguments[0])
}
```

调用栈 call stack

- 计算机存储上下文的地方（每个函数返回位置）, 占内存。/函数调用时的等待关系
- 每次调用函数时，当前上下文都存储在此栈的顶部。当函数返回时，它会从栈中删除顶部上下文，并使用该上下文继续执行。

### **闭包**

```js
function squareSum(a, b) {
  //求平方和
  function square(a) {
    return a * a;
  }
  return square(a) + square(b);
}

squareSum(3, 5);
```

- 内部函数可以作为返回值返回出去，形成高阶函数（返回函数的函数）。

**函数柯里化**：柯里化是将函数分解为一系列函数的过程，每个函数都只接收一个参数。
作用：1. 参数复用；2. 提前返回；3. 延迟计算/运行。

**递归**

**自执行函数**
调用自己执行，防止命名冲突。

```js
let num1 = 10;

(function () {
  let num1 = 20;
  return num1;
})();
// => 20
num1;
// => 10
```

**回调函数** callback
参数是一个函数

> 不要过早优化，先写一些正确且容易理解的东西。

### 高阶函数

操作其他函数，将其他函数作为参数或返回值。
特点：
可以对某种特定的动作进行抽象。
可以提高代码可读性/可维护性，容易避免错误。 


- 函数就是一个普通的值
- 纯函数：一个函数的返回结果只依赖于它的参数，并且在执行过程里面没有副作用，我们就把这个函数叫做纯函数。 i.e. 靠谱的函数

```js
function transparentWrapping(f) {
  return function () {
    return f.apply(null, arguments); //模拟调用，访问f()的所有参数
  };
}
```

- `ary.filter(test)` //过滤，test 是条件函数
- `ary.forEach(action)`
  对数组的每个元素执行一次给定的函数。除了抛出异常以外，没有办法中止或跳出 forEach() 循环。

```js
//自己实现一个foreach,可以模拟 break&&continue:
function forEach(ary, action) {
  for (var i = 0; i < ary.length; i++) {
    var x = action(ary[i], i);
    if (x === false) {
      break;
    }
  }
  return ary;
}

var target = 3;
var targetIndex = -1;
debugger;
forEach([1, 2, 3, 4], function (aryItem, idx) {
  if (xx) {
    return; //相当于continue
  }
  if (aryItem == target) {
    targetIndex = idx;
    return false; //相当于break
  }
});
```

- `ary.map(mapper)` //mapper
- `ary.reduce(reducer,[initialValue])` //归纳函数，折叠数组，根据整个数组计算一个值(提供初始值比较安全)
  用 reduce 计算数组中去掉一个最大值和最小值后的平均值。

  ```js
  [3, 5, 2, 7, 8, 1, 4, 9].reduce(function (memo, value, index, array) {
    //reduce 的本质,就是一个遍历,每次返回值存储到 memo
    //根据每次里面的index值来分情况讨论
    if (index == 1) {
      return {
        sum: memo + value,
        max: Math.max(memo, value),
        min: Math.min(memo, value),
      };
    }
    memo.sum += value;
    memo.max = Math.max(memo.max, value);
    memo.min = Math.min(memo.min, value);
    if (index == array.length - 1) {
      //最后一次
      return (memo.sum - memo.max - memo.min) / (array.length - 2);
    }
    return memo;
  }); //4.83
  ```

### 函数对象

函数也是对象,可以拥有方法.
函数的与众不同之处在于可以被调用,可以理解为被设置了一个调用属性
函数对象的原型是 Function.prototype:`func.__proto__ == Func.prototype`
函数在创建时附加两个隐藏属性:

1. 函数的上下文
2. 实现函数行为的代码
3. prototype 属性,值为 {constructor:f}

### 函数的四种调用模式

1. **方法调用**
   方法可以使 this 访问自己所属的对象,所以它能够从对象中取值或对对象进行修改.this 的绑定发生在调用的时候,使得函数可以对 this 高度复用.
   公共方法:this 可以取得他们所属对象的上下文
2. **纯函数调用**
   纯函数调用,this 被绑定为全局对象,可以看作是设计错误.
3. **构造器调用**
   new func()
   会创建一个链接到该函数的 prototype 成员的新对象,this 会被绑定到新对象.
4. **Apply 调用**
   显式设置 this

### 异常处理

throw:中断函数执行,抛出 exception 对象,exception 被传递到 try 语句的 catch 从句.

### 扩充类型的功能

利用原型继承的动态性,给 Function.prototype 添加方法,给 Number.prototype 添加方法...
要确定没有该方法时才添加.

## 数组 ，属于内建对象

```js
//创建数组
  let ary = [1,2,3]  //可以创建只有一个元素的数组
  let ary = Array(4) //创建一个长度为 4 的空数组
  let ary = new Array(3,4,5)
  let ary = Array.of(3,4,5)//可以创建只有一个元素的数组
//改变数组
  ary.length = 2     //随时可以被赋值，改变数组长度
  ourArray.push(4)  //在后面追加元素
  ourArray.pop()   //弹出最后一个字符并储存；只从尾部进出，形成栈
  ary.shift()     //弹出第一个元素
  ary.unshift()  //在前面添加元素
  ary.splice(start_index,length,...new_elements)//删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。
  ary(10).fill(0)//全部填满 XX
  ary.join()/ary.contact()
  ary.indexOf(x)/ary.lastIndexOf(x)//寻找值为 x 的索引
  ary.endWith()/ary.sort()/ary.toString()
  ary.every()/ary.some()
  ary.filter()/ary.map()/ary.reduce()/ary.forEach()
  Array.of() Array.from()
```

## 对象 object

#### 属性 //key/property/attribute/field

- `value.x`
  x 要是合法变量名
- `value[0]`
  value['joe'] //[]用于有空格的字符串或者变量
- . 后面的直接使用作为属性，[] 里面的会被求值。
- delete obj.attr
- 包含函数的属性称为某个值的方法 method

### 方法

方法调用:`obj.func` this 是调用它的函数

**this**可以看作是以不同方式传递的 arguments 参数,每个函数都有它的 this,值依赖它的调用方式
call 方法:`func.call(this,...arguments)`//传入一个特定的 this,然后再传正常的参数
apply 方法:`func.apply(this,[arguments])`//传入一个特定的 this,然后再传正常的参数的数组

对象里写函数,f 属性指向这个函数,函数并不属于这个对象,相对独立.
这个函数是全局的,对象不是语句块,不会产生作用域.

```js
var obj = {
  val: 3,
  f: function () {
    return this.val;
  },
};
```

### 内置对象

**Set**
不重复的集合,可以包含数字,字符,对象等.
内置方法:
var set = new Set

- set.has(val)
- set.delete(val)
- set.clear()

**Map**
键值对的数组类型,键和值都可以是任意的数据类型.
内置方法:
var map = new Map

- map.set(key,val)
- map.get(key)
- map.has(key)
- map.delete(key)

### this 的指向

调用函数时，解析器向函数内部传递的一个参数，指向函数执行的上下文对象。<u>**this 取决于函数的调用形式,**</u>与在哪调用,在哪定义没有关系

> 注意:与作用域不同,函数内部访问到的非形参变量,作用域取决于函数在哪定义,作用域在哪

- 以方法的形式调用时，函数的 `this` 就是调用它的对象。如 `array.length`
- 以纯函数形式调用时，`this` 是 `window f()`
- 用 `new` 来调用 `this` 时，`this` 就是那个新建的对象。如构造函数；
  修改 `this` 的指向：
- 用 `call` 和 `apply` 调用时，`this` 是指定的那个对象。
  => `fn.call(obj,xx,xx,xx)` 后面是参数
  => `fn.apply(obj,[xx,xx,xx])` 参数以数组传入
- 函数可以用 `bind()` 绑定 `this` 的指向
- `this` 永远不能被赋值，即 `this` 不能写在等号左边
- `this` 永远指向一个对象，如果指向了一个原始数据类型会将原始数据类型包装成对象
- 箭头函数不会创建自己的 `this`, 它只会继承自己的作用域链的上一层作用域的 `this` 对象

- this 的丢失问题
  `this` 指向调用的对象与函数声明的位置无关，只与调用位置有关，如果在调用位置还使用声明位置的 `this`，`this` 会丢失；
  解决方法通过 `bind` 绑定 `this` 或者通过箭头函数。箭头函数的 `this` ，总是继承外层函数的对象，在定义时就确定，与调用无关。

### dom 对象

- 一些属性和方法组合在一起构成的一个数据实体，用.访问
- 给对象创建实例 `var zoe = new Person`;
- 用户定义对象
- 内建对象：数组/Math 对象/Date 对象
- 宿主对象：浏览器提供的预定义对象 Form/Image/Element/Document 对象
  - `window` 对象，对应浏览器窗口本身，通常统称为 BOM
  - `document` 对象，处理网页内容
- 对象的内容是可以修改的
- 原始类型的数据不可更改-(number,string,bool)
- 循环： `for (var prop in obj)`
- `slice` 出来的数组是浅拷贝（shadow copy), 对应的有深拷贝
- `isEqual` 是深对比，对比的是具体的内容是否一致；浅对比对比的是否是同一对象

### 原型 prototype

- 在访问对象不包含的属性时,会从对象原型中搜索属性.
  每个对象除了拥有自己的属性外,都包含一个原型.原型是另一个对象,是对象的属性来源.
  获取一个对象的原型:`Object.getPrototypeOf(obj)` or `obj.__proto__`
  所有对象中原型的父原型,是 Object.prototype
  可以设置一个对象的原型为 null:`obj.__proto__ = null`
  创建一个具有特定原型的对象: `let obj = Object.create(obj,{xxxx})`

JavaScript 对象原型的关系是一种树形结构，整个树形结构的根部就是`Object.prototype`。`Object.prototype`提供了一些可以在所有对象中使用的方法。

许多对象并不直接将`Object.prototype`作为其原型，而会使用另一个原型对象，用于提供一系列不同的默认属性。函数继承自`Function.prototype`，而数组继承自`Array.prototype`。

### 构造函数

- 调用一个函数的构造函数,用来创建新对象:`new Func(xx)`

  - 大写开头,创建的对象的原型指向构造函数的 prototype 属性;
  - 包含指向新对象的变量 this,返回新创建的对象(构造函数的实例).除非构造函数显式返回另一个对象的值.
  - 函数都有`prototype`属性;构造函数的 prototype 属性 默认指向一个空对象

- `"foo".__proto__ === String.prototype` 一个字符串的原型,是 String 的 prototype 属性;一个函数的原型,是 Function 的 prototype 属性.(只有`Function.__proto__ === Function.prototype`)
- 构造一个函数:`g = new Function("a,b,c,d","return a+b+c+d")`
- 可以用来进行类型判断
  - Object.prototype.toString.call([1,2,3]) ==='[object Array]'
  - Object.prototype.toString.call("foo") ==='[object String]'
- Object.prototype 的标准属性都不可枚举
- 定义一个属性:Object.defineProperty(obj,{val:xx,writable:true,enumerable:false,configurable:false})//属性描述符,控制属性类型:可以设置属性是否可枚举,是否可更改
  - `prop in obj`
  - `obj.hasOwnProperty(prop)`判断是否是自有属性,可以连接 in 设置遍历范围
  ```js
  for(let prop in obj){
    if(obj.hasOwnProperty(prop)){
      ...
    }
  }
  ```

### getter && setter

在对象中,用于指定属性的读取函数和修改函数.
由于一些原因,把一些值的属性在 get 后面写成函数获取.

```js
var pile = {
  elements: ["eggshell", "orange peel", "worm"],
  get height() {
    return this.elements.length;
  },
  set height(value) {
    console.log("Ignoring set height to", value);
  },
};

var o = { a: 0 };
//现有对象上添加getter
Object.defineProperty(o, "b", {
  get: function () {
    return this.a + 1;
  },
});
```

### 类数组 arguments

调用函数时，浏览器每次都会传递两个参数：

1. `this` 函数的上下文对象
2. `arguments` 封装实参的对象

- `arguments` 代表实参，只在函数中使用。
- `arguments.callee` 对应当前指向的函数对象。在使用函数递归，如果是匿名函数需要用到。ES5 严格模式不支持。
- 可以像数组一样修改 `arguments` 的值，但不能更改长度。
-

### JSON

- 序列化数据(e.g. yaml)
- 看起来很像 JS 的数组和对象的表示方式，但有一些限制。
  所有 key 都要有双引号
  只允许使用简单的数据格式，不能有函数调用/绑定或涉及实际计算
  只支持数组、对象、字符串、数值、bool、null
  支持转义，不支持明文空格
  不能有多余的逗号
- `JSON.stringify()`//序列化
  - 接受 JavaScript 值并返回 JSON 编码的字符串
- `JSON.parse()`//反序列化

## 面向对象

### 封装

封装:把数据,和操作数据的函数放在对象里,这个打包的过程.
封装(另一个意思):将复杂的操作或计算写成函数,调用时只需要考虑高层概念,而无需关注运作细节.

###　多态
多个不同类型的对象拥有相同的一组接口（方法及方法的签名及属性）
多态的代码:某段代码只期望对象们拥有这组接口即可正常工作,不期待对象的具体类型(什么构造函数构造出来的)

> 函数的签名：函数的名称，参数类型与顺序，返回值类型的集合．

### 继承

当一个类型拥有另一个类型的所有或大部分特性时,可以让这一个类型通过某种方式直接获得该类型的所有属性和方法,即称为继承.被继承者被称为父类,继承者被称为子类.

### instanceof

二元运算符,某个对象是否继承自某个特定的构造函数
`[1] instanceof Array` //true

## lodash `_`下划线

- 一个函数库，前身 underscore

## 正则表达式 RegExp

Domain Specific Language 领域特定语言

- 创建方法：三种方式
  - `var a = new RegExp('abc')` //string 里面需要转义
  - `var a = /abc/` //是啥就是啥 +g 全局匹配
  - `var a = new RegExp(String.fromCharCode(92,9297,98,99))`

### 匹配方式

- \d 数字 digit [0-9]
- \w 字符 word [a-zA-Z0-9_] 字母数字加下划线
- \s 空白字符 space,tab,newline，etc.
- \D \W \S 非。.. 的字符
- . 匹配任意字符（除换行符外、n \r\n)
- \u4f60 匹配 Unicode 码,如中文
- [a-z] 匹配单个字符。
- [] 里的东西：
  - [^2357] ^在开头：取反，非 2357
  - [^] : 任意符号
- 可以用 | 分隔表示或:`str.match(/this|cons/g)`
- ^在开头,表示匹配以什么开头的;\$在最后,表示匹配以什么结束的.
- /b 包起来/b,表示匹配单词.

#### 重复

- 只对前面紧挨着的一个字符或者一个组生效
  - "+" 出现至少一次 {1，}
  - "\*" 出现任意次数 {0，}
  - "?" 出现 0 次或 1 次 {0，1}
  - {n} 出现 n 次 {2} {2,4} {4,}4 次及以上

#### 方法

- test 判断正则表达式和字符串是否匹配
  - `/ab\d/.test("ab5sd")`=> `true`
- exec 以数组形式返回第一个匹配内容的信息
  - `/\d+/.exec("one two 100")`=> `["100", index: 8,input: "one two 100", groups: undefined]`
  - 无法匹配返回 `null` ，否则返回一个表达字符串信息的对象
- `str.match(regexp)` //数组输出所有符合的项

#### 捕获分组

- 使用 () 号，里面的内容会当作一个整体，() 里面匹配到内容单独添加到相关方法的返回值里的行为叫做捕获，也叫捕获分组

  - `/(\d{4})-(\d{2})-(\d{2})/.exec('today is 2020-04-14')`=> 分组捕获
  - `/(\d){4}-(\d{2})-(\d{2})/.exec('today is 2020-04-14')`=> 如果一个分组进行了多次匹配，只保留最后一个匹配 (e.g. 第一个/d)（像一个变量一样，会更新值）
  - 如果一个分组没有匹配，数组对应位置返回 `undefined`

- 为分组取名：`(?<name>)` （在旧的浏览器无法使用）

  - `/（张）(?<名字>.+)/.exec('foo 张韶涵')`=> `groups: {名字："韶涵"}`

#### 常用的

- `var mobileRe = /^1[3-9]\d{9}/g`
- `var emailRe = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g`
-

## 文档结构

### DOM document object model 文档对象模型

- 文档结构:盒子套盒子,每个盒子都是一个对象,我们和这些对象交互,找出其中包含的盒子和文本.给文档增加交互能力，对文档内容进行抽象和概念化，类似 CSS 增加样式。代表着加载到浏览器窗口的当前网页。是一种 API（应用编程接口，是一个标准）
- 如果浏览器遇到格式不正确的 HTML，它会在形成 DOM 时自动更正它。
- **适用于多种环境和多种程序设计语言的通用型 API**
- 文档：节点树 node tree **文档中每个元素节点都是一个对象**最外层节点是 document，不是元素节点
- DOM 节点是常规的 JavaScript 对象。它们使用基于原型的类进行继承。
  - 元素节点 DOM 的原子是元素节点 `document.body`
  - 文本节点 只包含文本的元素
  - 属性节点 总是被包含在元素节点中
  - 每个节点的属性:nodeType/nodeValue/nodeName/data
    DOM 的根节点:document.documentElement => <html>
    文本片段或注释是一定是叶子节点 comment node
  - 在 HTML 模式下，tagName/nodeName 始终是大写的

```js
document.body.style.background = "red"; // 将背景设置为红色

setTimeout(() => (document.body.style.background = ""), 3000); // 恢复回去
```

- Object.preventExtension 阻止增加属性
- Object.seal 阻止增删属性
- Object.freeze 阻止增删与修改属性

BOM 浏览器对象模型，设置浏览器的属性,浏览器提供的用于处理文档之外的所有内容的对象。i.e. navigator location

#### 获取元素节点（文档中的每个元素都是一个对象）

close

- `node.firstChild/lastChild/childNodes/nextSibling/previousSibling/parentNode`
  - 所有类型的节点
- `node.firstElementChild/Children/previousElementSibling/parentElement`
  - 只是元素节点
- `elem.closest(css)` //查找与 CSS 选择器匹配的最近的祖先。elem 自己也会被搜索。
- `table.rows/table.caption/tHead/tFoot/table.tBodies` -tbody 是一定会有的
- `tbody.rows/tr.cells/tr.rowIndex/td.cellIndex` etc.
- `document.getElementById('id')` id 是唯一的,返回一个对象；`document.all.id`;`document.getElementsByTagName('tag')` `document.getElementsByClassName('class')` 返回数组

* 所有的 "getElementsBy\*" 方法都会返回一个 实时的（live） 集合,会自动更新，而"querySelector"则是静态的。
  **查询选择器**
  `document.querySelectorAll()`
  `document.querySelector()`

- 在全局范围查询,可以使用任何 CSS 选择器
- 可以选择一部分伪类,不能选择伪元素
- 返回静态集合,不能动态更新

匹配

- `elem.matches(css)` //返回 true/false
- `elemA.contains(elemB)` //检查子级与父代，自己也自己也返回 true

#### 修改文档

- `parentnode.removeChild(node)`
- `parentnode.appendChild(node)`//放在子节点末尾
- `parentnode.prepend/append(...nodes)`//在所有子节点前面/后面增加一个节点.//同一个节点在文档中只能出现一次
- `parentnode.insertBefore(node1,node2)`//把第一个节点放在第二个节点前面
- `parentnode.replaceChild(newnode,oldnode)`
- `document.createElement('xx')`//创建元素节点
- `document.createTextNode('xxxx')`//创建文本节点
- `elem.innerHTML`
- **`innerHTML+=` 会进行完全重写**页面会重新加载，所有的图片和其他资源都重新加载
- `elem.outerHTML` 属性包含了元素的完整 HTML。就像 innerHTML 加上元素本身一样。
- 可以向 elem.outerHTML 写入内容，但是要记住，它不会改变我们所写的元素（‘elem’）。而是将新的 HTML 放在其位置上。我们可以通过查询 DOM 来获取对新元素的引用。
- `elem.textContent` 只返回里面的所有文本
- `element.insertAdjacentHTML(position, text);`//将指定的文本解析为 Element 元素,插入指定的位置
  NOTE: 写入 textContent 要有用得多，因为它允许以“安全方式”写入文本。
  假设我们有一个用户输入的任意字符串，我们希望将其显示出来。

- 使用 innerHTML，我们将其“作为 HTML”插入，带有所有 HTML 标签。
- 使用 textContent，我们将其“作为文本”插入，所有符号（symbol）均按字面意义处理。

获取和设置属性(实际是操作的 html 特性)

- `object.getAttribute('attribute')`
- `object.setAttribute('attr','xxxx')` 设置或修改属性
  ：`element.value = "the new value"`//这个与上面的一般是同步的，有些例外：value，zIndex
- `node.attributes/id/className/htmlFor/title/tabindex` 获取属性
- `node.dataset.foo = 'xxx'` //非标准的特性
- `elem.add/remove/has`
- `elem.classList` //实时的 class 的集合,`add()/remove()/toggle()`方法

NOTE: HTML 特性：它们的名字是大小写不敏感的 getAttribute(),它们的值总是字符串类型的。DOM 属性是多类型的。 i.e. div.style,input.checked

尺寸和位置
node.offsetWidth/Height //节点宽度（以像素度量）
node.clientWidth/Height
node.getBoundingClientRect()//包裹着的最小矩形
node.getClientRects()//元素布局生成的所有矩形
window.pageX/YOffset 页面滚动位置
el.scrollTop/Left 元素的滚动位置
el.scrollTop/Left = num 设定元素的滚动位置
el.scrollTo(x, y)
el.scrollBy(x, y)
window.scrollTo(x, y)
window.scrollBy(x, y)
window.innerWidth/Height 窗口内部宽高（css 像素）

- document.write('<span></span>')
  // 往解析流里写入字符串。在解析结束(</html>)以后再写就没有意义了。如果解析完成以后再 write 就会重新开启一个解析流，相当于把 DOM 树中的所有内容全部“冲”掉。

- document.createElement('span')
  // 创建出 DOM 对象。创建之初是不在 DOM 树里的，需要添加进 DOM 树里才能显示出来。不会因为创建或添加而影响 DOM 树的其它部分。

### 浏览器事件

`window.onload = function` 在页面加载时调用函数

事件处理函数 特定事件发生时调用.

- 通过 DOM 属性分配，onclick 不能多次调用，新的调用会覆盖旧的 DOM 属性。
  i.e. button.onclick = sayThanks;
  在 HTML 里面：<input type="button" id="button" onclick="sayThanks()">，读取 HTML，会创建一个处理函数，注意这个区别。

- 分配事件处理程序，调用 addEventListener 允许多次添加。有些事件无法通过 DOM 属性进行分配，必须使用 addEventListener。

```js
function handler() {
  alert("Thanks!");
}
input.addEventListener("click", handler);
input.removeEventListener("click", handler); //移除，需要添加同一个函数
```

event 对象的属性：

- event.type
  事件类型，这里是 "click"。
- event.currentTarget
  处理事件的元素。这与 this 相同，除非处理程序是一个箭头函数，或者它的 this 被绑定到了其他东西上，之后我们就可以从 event.currentTarget 获取元素了。
- event.clientX / event.clientY
  鼠标事件的指针的窗口相对坐标。

不仅可以分配函数，还可以使用 addEventListener 将一个对象分配为事件处理程序。当事件发生时，就会调用该对象的 handleEvent 方法。

### 冒泡和捕获

#### 冒泡

当一个事件发生在一个元素上，它会首先运行在该元素上的处理程序，然后运行其父元素上的处理程序，然后一直向上到其他祖先上的处理程序。几乎所有事件都会冒泡，p.s. focus 事件不会冒泡,是例外。

**event.target 与 this 的区别：**

- event.target 是引发事件的“目标”元素，引发事件的层级最深的元素，它在冒泡过程中不会发生变化。
- this —— 是“当前”元素，其中有一个当前正在运行的处理程序。与`event.currentTarget`一致

```js
var form = document.querySelector("form");
form.addEventListener("click", function (e) {
  if (e.target.tagName === "INPUT") {
    //e.target拿到被点击的元素
    console.log("input in me is clicked");
  }
});
```

`event.stopPropagation()`//停止冒泡
`event.stopPropagation()` 停止向上移动，但是当前元素上的其他处理程序都会继续运行。
`event.stopImmediatePropagation()` 方法，可以用于停止冒泡，并阻止当前元素上的处理程序运行。使用该方法之后，其他处理程序就不会被执行。阻止事件向外扩散，但阻止当前元素对当前事件的后续函数的调用。

```js
var btn = document.querySelector(".btn-in-a");
var a = document.querySelector("a");
btn.addEventListener("click", function (e) {
  console.log("btn click");
  e.stopPropagation(); //clg事件没有冒泡到a，但a仍然感觉到了被点击,仍然会触发a的行为(click)
  e.preventDefault(); //阻止外面a的默认行为，跳转地址
});
a.addEventListener("click", function (e) {
  console.log("a click");
});
```

不要轻易阻止冒泡，否则可能出现负作用。
**阻止浏览器行为**
有两种方式来告诉浏览器我们不希望它执行默认行为：
主流的方式是使用 event 对象。有一个 `event.preventDefault()` 方法。
如果处理程序是使用 on<event>（而不是 addEventListener）分配的，那`return false` 也同样有效。
**检查是否阻止了默认行为**：
`if (event.defaultPrevented) return;`
**不会阻止默认行为**：
`elem.addEventlistener("click",func,passive: true)`passive: true,将不会调用 e.preventDefault()，浏览器可以直接执行默认行为而不必等待函数的执行完。

**浏览器默认行为**：
mousedown —— 开始选择（移动鼠标进行选择）。
在 <input type="checkbox"> 上的 click —— 选中/取消选中的 input。
submit —— 点击 <input type="submit"> 或者在表单字段中按下 Enter 键会触发该事件，之后浏览器将提交表单。
keydown —— 按下一个按键会导致将字符添加到字段，或者触发其他行为。
contextmenu —— 事件发生在鼠标右键单击时，触发的行为是显示浏览器上下文菜单。

#### 捕获

事件处理的另一个阶段被称为“捕获（capturing）”。它很少被用在实际开发中，但有时是有用的。

DOM 事件标准描述了事件传播的 3 个阶段：

- 捕获阶段（Capturing phase）—— 事件（从 Window）向下走近元素。
- 目标阶段（Target phase）—— 事件到达目标元素。
- 冒泡阶段（Bubbling phase）—— 事件从元素上开始冒泡。

### 事件委托

事件委托真的很酷！这是 DOM 事件最有用的模式之一。它通常用于为许多相似的元素添加相同的处理，但不仅限于此。

算法：
在容器（container）上放一个处理程序。
在处理程序中 —— 检查源元素 event.target。
如果事件发生在我们感兴趣的元素内，那么处理该事件。
好处：
简化初始化并节省内存：无需添加许多处理程序。
更少的代码：添加或移除元素时，无需添加/移除处理程序。
DOM 修改 ：我们可以使用 innerHTML 等，来批量添加/移除元素。

### 鼠标事件

#### 简单事件

mousedown/mouseup
在元素上点击/释放鼠标按钮，mousedown 的默认浏览器操作是文本选择。
mouseover/mouseout
鼠标指针从一个元素上移入/移出。
mouseover
鼠标在元素上的每个移动都会触发此事件。
contextmenu（右击）
尝试打开上下文菜单时触发。在最常见的情况下，此事件发生在鼠标右键被按下时。虽然，还有其他打开上下文菜单的方式，例如使用特殊的键盘键，所以它不完全是一个鼠标事件。
oncopy="alert('Copying forbidden!');return false"
禁止复制

#### 复杂事件

click
如果使用的是鼠标左键，则在同一个元素上的 mousedown 及 mouseup 相继触发后，触发该事件。
dblclick
双击一个元素后触发。

> 复杂事件是由简单事件组成的，因此，从理论上讲，如果没有这些复杂事件，我们也能实现相应的功能。但它们的存在却给我们提供了极大的便利。

在单个动作触发多个事件时，事件的顺序是固定的。
mousedown → mouseup → click
mousedown → mouseup → contextmenu
-BNV50--7
**事件属性**：
Witch：1/2/3 左中右键
如果在事件期间按下了相应的键，则它们为 true：
shiftKey：Shift
altKey：Alt（或对于 Mac 是 Opt）
ctrlKey：Ctrl
metaKey：对于 Mac 是 Cmd

**坐标：clientX/Y，pageX/Y**
所有的鼠标事件都有两种形式的坐标：
相对于窗口的坐标：clientX 和 clientY。
相对于文档的坐标：pageX 和 pageY。

#### 鼠标移动

mouseover，mouseout，mousemove，mouseenter 和 mouseleave 事件。

- 快速移动鼠标可能会跳过中间元素。
- mouseover/out 和 mouseenter/leave 事件还有一个附加属性：relatedTarget。这就是我们来自/到的元素，是对 target 的补充。
- 即使我们从父元素转到子元素时，也会触发 mouseover/out 事件。浏览器假定鼠标一次只会位于一个元素上 —— 最深的那个。mouseenter/leave 事件在这方面不同：它们仅在鼠标进入和离开元素时才触发。并且它们不会冒泡。
