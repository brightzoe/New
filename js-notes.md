
## 命令行基础

- prompt 命令 提示符
- pwd 可以显示当前工作目录
- echo abc > foo.txt（可输出编辑内容到文件）
- echo def >> foo.txt 将命令的追加到文件
  创建:mkdir
  删除:rm
  删除非空目录:rm -rf file 目录
  移动:mv
  查看文件内容 cat, con cate nate

- touch a.txt 创建（空）文件
- time command 计算某命令的运行时间
- date 显示时间和日期
- //scp
- //ping ip 测试与目标 ip 的连通性 (ping baidu.com)
### vi 编辑器

- esc 从编辑模式返回常规模式
- i 常规模式下进入编辑模式
- :wq 常规模式下输入
## vscode 的常用快捷键

- 补齐 html5 模板:！ + tab 或 ! + enter
- 一列光标:alt + shift 然后点击
- 替换: CTRL + H
- 删除当前行: CTRL + shift + K
- 切换标签: CTRL + tab
- 注释快捷键 ctrl+k+c / ctrl + /
- 移动行:alt+up/down
- 代码格式化:shift + alt +f
- HOME 调转到行头
- end 调转到行尾
- 显示 / 隐藏左侧目录栏 ctrl + b
- 复制当前行:shift + alt +up/down
- 删除当前行:shift + ctrl + k
- 行增加缩进:ctrl + [
- 行减少缩进:ctrl + ]
- 删除行 : ctrl + shift + d
- 折叠代码: ctrl + k + 0-9 (0 是完全折叠）
- 展开代码: ctrl + k + j （完全展开代码）
- 快速回到顶部 : ctrl + home
- 快速回到底部 : ctrl + end
- 回到撤销之前:Ctrl +Y
- 控制台终端显示与隐藏:ctrl + ~
- 查找文件 / 安装 vs code 插件地址:ctrl + p
- 字体放大 / 缩小:ctrl + ( + 或 - )
- 裁剪尾随空格 : ctrl + shift + x
- 自动换行 : alt + z
- 选中文字:shift + left / right / up / down
- 在单词之间移动光标: Ctrl + 左右方向键
- 全局搜索代码: Ctrl + Shift + F
- 全局搜索文件名: Ctrl + P
- 查看组件/方法都在哪里调用了：Shift + Alt +F12

## windows 快捷键

- 任务视图: win + tab
- 切换程序: alt + tab
- win 截图:win + shift + S
- qq 截图:CTRL + alt + B
- wx 截图: ALT + A

# JavaScript

- 待学:
  <深入了解计算机系统> 大名鼎鼎的 CSAPP

WebPack 编译&打包&同步
缩写:

- e.g. for example（举例）
- i.e. that is（即）
- etc. et cetera（等等…）
- P.S. postscript（附言，另外）

### 数据在计算机中存储中的表示

浮点数一般使用 8 个字节表示，64bit
最左是符号，然后十一位为指数

- 指数范围-1023-1024, 指数部分使用原码存储，原码范围 0-2047,0 表示-1023
- 指数不用补码:从左到右扫描即可比较大小。
- 浮点数不够精确则更多用于对比大小，提高大小比较效率
- 程序中很少判断两个浮点数相等，更多判断他们的差的绝对值是否小于某个精度。小数部分最高精度 Number.EPSILON
  不存储底数的整数部分，因为底数的整数部分总是 1, 可以让二进制状态有效位数为 53 位
- 有效位数 53 位，可以表达的最大精确数 2\*\*53-1 为 `Number.MAX_SAFE_INTEGER`. 大于这个范围的数是可以表示的，但不能保证精确，溢出的位会被截断
- 整数部分使用的越多，小数部分有效位数越少。即数值越大，小数部分的精度越低。

IEEE754 标准:二进制浮点顺运算标准

- 双精度浮点数使用 8 字节表示，指数部分 11bit, 底数 62bit
- 单精度浮点数使用 4 字节表示，指数部分 8bit, 底数 23bit

### JS 的使用

- js 的引入最好放在 html 里 body 的最后，这样会加快页面加载速度。
- 控制台调试:debugger；/右键行号临时断点
- 命名:
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

- [运算符优先级](https://www.ecma-international.org/ecma-262/5.1/)
- void 运算符的作用是执行一个表达式，然后不返回任何值，或者说返回 undefined。
- void(xxx) 优先级超级高.
- delete 删除属性
- 逗号运算符用于对两个表达式求值，并返回后一个表达式的值。

大多数运算符是“左结合”.少数运算符是“右结合”，其中最主要的是赋值运算符（=）和三元条件运算符（?:）和指数运算符(\*\*)。

字符串 string

- \转义符
- \n 回车 \t Tab
- 反引号后可出现明文回车

自动类型转换:弱类型语言 js 强类型语言（python）
变量指向的类型在程序运行时是否允许发生变化:动态类型（js）静态类型（c）

### 类型转换:

- `parseInt()`//强制转换为数字
- `Number()`或`+ "3"`
- `String()`
- `Boolean()`
- `x.toFixed(n)` 确定精度
- `Math.pow(x,3)` 乘方；floor/ceil/trunc/round
- `Math.PI` **大小写要准确，js 大小写敏感**

比较 comparisons

- `==` 相等，会进行类型转换再比较（隐含强制转换）
- 比较方式:

  - 针对原始类型，`a == 2`是比较值；
  - 针对函数，`ary == [0]`, 右边会创建新的变量，判断这两个数组是不是同一个。所以不能这样判断数组，可以拆开用 ary.length 与 ary[0] 比较
  - 字符串也可以进行比较，比较的是 ASCII
  - `==` 一边为字符串，则全转换为字符串比较

- `===` 严格相等，不进行类型转换直接比较
- `!==` 不严格相等
- `NaN`跟自己也不相等
- `isNaN`是否“不是一个数值”
- `Number.isNaN`是否是 NaN 这个值
- `undefined`与`null`:相等但不严格相等。
  - `undefined`:已定义，未赋值，类型为 undefined
  - `null`: 未定义，类型为 object
- `!name` ! 运算符会将值转换为布尔类型再取反

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
    实际开发可以用于:满足前面条件，然后执行后面的。从前向后执行`
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

### let var const

- var 声明的变量处于函数级作用域，声明会被提前.
- var 定义的全局变量存在 window 的属性上，let 定义的全局变量不在 window 的属性上。
- let 声明的变量在块级作用域(最近的语句块{})变量声明不会提前，出现 TDZ
  - 暂时性死区 temper dead zone->变量作用域内声明完成前不能使用
- const 声明的变量的指向不能改变。变量指向的对象可以改变。
  - 命名方式`const Five_Seconds = 5000`

`console.log(a++)` //3, 先返回 a, 然后 a++
`console.log(a)` //4,a 已经加过了
`console.log(++a)` //5, 先 a++，然后返回

### 控制流 control flow

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
  } catch(err){ //catch 一定要检测抛出错误的类型，能处理再处理。
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

- 作用域:变量在某个范围内起作用，为了提高程序的可靠性，减少命名冲突
- 全局作用域:在整个 js 文件起作用
- 函数作用域:旨在函数内部起作用

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

- 函数声明语句`function a (x)`
- 函数表达式/匿名函数 `var a = function ()`
- 函数声明会进行声明提升（declaration hoisting），而函数表达式不会。

箭头函数 -为了以简短的方式编写小函数表达式

```js
var greeting = (name) => {
  //只有一个参数，参数的小括号可以省略；只有一行语句，后面大括号和“return”也可以省略
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

### 函数柯里化

柯里化是将函数分解为一系列函数的过程，每个函数都只接收一个参数。
作用:1. 参数复用；2. 提前返回；3. 延迟计算/运行。

### 自执行函数

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

### **回调函数**

主要思想是我们传递一个函数，并期望在稍后必要时将其“回调”。callback

> 不要过早优化，先写一些正确且容易理解的东西。

### 高阶函数



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
  ary.splice(start_index,length,...new_elements)//删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。
  ary(10).fill(0)//全部填满 XX
  ary.join()/ary.contact()
  ary.indexOf(x)/ary.lastIndexOf(x)//寻找值为 x 的索引
  ary.endWith()/ary.sort()/ary.toString()
  Array.of() Array.from()
```

## 对象 object

#### 属性 //key/property/attribute/field

- `value.x`
  x 要是合法变量名
- `value[0]`
  value['joe'] //[]用于有空格的字符串或者变量
- . 后面的直接使用作为属性，[] 里面的会被求值。
- `delete obj.attr`
- 包含函数的属性称为某个值的方法 method


### 对象

- 一些属性和方法组合在一起构成的一个数据实体，用.访问
- 给对象创建实例 `var zoe = new Person`;
- 用户定义对象
- 内建对象:数组/Math 对象/Date 对象
- 宿主对象:浏览器提供的预定义对象 Form/Image/Element/Document 对象
  - `window` 对象，对应浏览器窗口本身，通常统称为 BOM
  - `document` 对象，处理网页内容
- 对象的内容是可以修改的
- 原始类型的数据不可更改-(number,string,bool)
- 循环: `for (var prop in obj)`
- `slice` 出来的数组是浅拷贝（shadow copy), 对应的有深拷贝
- `isEqual` 是深对比，对比的是具体的内容是否一致；浅对比对比的是否是同一对象



### 构造函数
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

调用函数时，浏览器每次都会传递两个参数:

1. `this` 函数的上下文对象
2. `arguments` 封装实参的对象

- `arguments` 代表实参，只在函数中使用。
- `arguments.callee` 对应当前指向的函数对象。在使用函数递归，如果是匿名函数需要用到。ES5 严格模式不支持。
- 可以像数组一样修改 `arguments` 的值，但不能更改长度。
-

### JSON

- 序列化数据(e.g. yaml)，方便传输数据，或者作为配置文件。
  - 序列化:把一个东西在不损失信息量的前提下，转换为由连续字节表示的数据，比如字符串。
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

NOTE:面向对象

### 封装

封装:把数据,和处理数据的函数放在一起包装成对象,用对象这个整体来表达。
封装(另一个意思):将复杂的操作或计算写成函数,调用时只需要考虑高层概念,而无需关注运作细节.

###　多态
多个不同类型的对象拥有相同的一组接口（方法及方法的签名及属性）
多态的代码:某段代码只期望对象们拥有这组接口即可正常工作,不期待对象的具体类型(什么构造函数构造出来的)

> 函数的签名:函数的名称，参数类型与顺序，返回值类型的集合．

### 继承

一个类型复用已有类型已经实现的逻辑。
当一个类型拥有另一个类型的所有或大部分特性时,可以让这一个类型通过某种方式直接获得该类型的所有属性和方法,即称为继承.被继承者被称为父类,继承者被称为子类.


## lodash `_`下划线

- 一个函数库，前身 underscore
  _(array) //创建一个 lodash 对象，隐式链调用
  _.chain(array) //显式链调用
  - 都需要解链
  - 懒惰运算，惰性求值,减少不必要的运算

## 正则表达式 RegExp

Domain Specific Language 领域特定语言

- 创建方法:三种方式
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
- [] 里的东西:
  - [^2357] ^在开头:取反，非 2357
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

- 为分组取名:`(?<name>)` （在旧的浏览器无法使用）

  - `/（张）(?<名字>.+)/.exec('foo 张韶涵')`=> `groups: {名字:"韶涵"}`

#### 常用的

- `var mobileRe = /^1[3-9]\d{9}/g`
- `var emailRe = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g`
-

# 文档结构

## DOM document object model 文档对象模型

浏览器解析 HTML 时，会先将其解析为语法树（通过递归下降或者栈解析），该语法树就是 DOM 树，也就是 DOM 模型；我们通过操作 DOM 模型来操作 web 页面，是一种 API（应用编程接口，是一个标准）

- 如果浏览器遇到格式不正确的 HTML，它会在形成 DOM 时自动更正它。
- **适用于多种环境和多种程序设计语言的通用型 API**
- 文档:节点树 node tree **文档中每个元素节点都是一个对象**最外层节点是 document，不是元素节点
- DOM 节点是常规的 JavaScript 对象。它们使用基于原型的类进行继承。
  - 元素节点 DOM 的原子是元素节点
  - 文本节点 只包含文本的元素
  - 属性节点 总是被包含在元素节点中
  - 每个节点的属性:nodeType/nodeValue/nodeName/data
    DOM 的根节点:document.documentElement => <html>
  - 节点的 tagName/nodeName 属性，是标签名，始终是大写的

* Object.preventExtension 阻止增加属性
* Object.seal 阻止增删属性
* Object.freeze 阻止增删与修改属性

### 获取元素节点（文档中的每个元素都是一个对象）

- 所有类型的节点:`node.firstChild/lastChild/childNodes/nextSibling/previousSibling/parentNode`
- 只是元素节点`node.firstElementChild/Children/previousElementSibling/parentElement`

- `element.closest(css)` //查找与 CSS 选择器匹配的最近的祖先。elem 自己也会被搜索。
- `table.rows/table.caption/tHead/tFoot/table.tBodies` -tbody 是一定会有的
- `tbody.rows/tr.cells/tr.rowIndex/td.cellIndex` etc.
- `document.getElementById('id')` id 是唯一的,返回一个对象；`document.all.id`;`document.getElementsByTagName('tag')` `document.getElementsByClassName('class')` 返回数组

* 所有的 "getElementsBy xx" 方法都会返回一个 实时的（live） 集合,会自动更新，而"querySelector"则是静态的。
  **查询选择器**
  `document/element.querySelectorAll()`
  `document/element.querySelector()`

- 在全局范围查询,可以使用任何 CSS 选择器
- 可以选择一部分伪类,不能选择伪元素
- 返回静态集合,不能动态更新

匹配

- `element.matches(css)` //返回 true/false
- `elemA.contains(elemB)` //检查子级与父代，自己也自己也返回 true

### 修改文档

- `parentnode.removeChild(node)`
- `parentnode.appendChild(node)`//放在子节点末尾
- `parentnode.prepend/append(...nodes)`//在所有子节点前面/后面增加一个节点.//同一个节点在文档中只能出现一次
- `parentnode.insertBefore(node1,node2)`//把第一个节点放在第二个节点前面
- `parentnode.replaceChild(newnode,oldnode)`
- `document.createElement('xx')createTextNode('xxxx')`//创建节点
- document.write('<span></span>')
  // 往解析流里写入字符串。在解析结束(</html>)以后再写就没有意义了。如果解析完成以后再 write 就会重新开启一个解析流，相当于把 DOM 树中的所有内容全部“冲”掉。

- document.createElement('span')
  // 创建出 DOM 对象。创建之初是不在 DOM 树里的，需要添加进 DOM 树里才能显示出来。不会因为创建或添加而影响 DOM 树的其它部分。

##### innerHTML,outerHTML,innerText,textContent

- `elem.innerHTML`
- **`innerHTML+=` 会进行完全重写**页面会重新加载，所有的图片和其他资源都重新加载
  - 使用 innerHTML，我们将其“作为 HTML”插入，带有所有 HTML 标签。
- `elem.outerHTML` 属性包含了元素的完整 HTML。就像 innerHTML 加上元素本身一样。
  - 可以向 elem.outerHTML 写入内容，但是要记住，它不会改变我们所写的元素（‘elem’）。而是将新的 HTML 放在其位置上。我们可以通过查询 DOM 来获取对新元素的引用。
- `elem.textContent` 只返回里面的所有文本,保留回车位，不受 CSS 影响
  - 使用 textContent，我们将其“作为文本”插入，所有符号（symbol）均按字面意义处理。
- `element.insertAdjacentHTML(position, text);`//将指定的文本解析为 Element 元素,插入指定的位置
  NOTE: 写入 textContent 要有用得多，因为它允许以“安全方式”写入文本。
  假设我们有一个用户输入的任意字符串，我们希望将其显示出来。

获取和设置属性(实际是操作的 html 特性)

- `object.getAttribute('attribute')`
- `object.setAttribute('attr','xxxx')` 设置或修改属性
  `element.value = "the new value"`//这个与上面的一般是同步的，有些例外:value，zIndex
- `node.attributes/id/className/htmlFor/title/tabindex` 获取属性
- `node.dataset.foo = 'xxx'` //操作元素的 data- 属性
- `elem.add/remove/has`
- `elem.classList` //实时的 class 的集合,`add()/remove()/toggle()`方法

NOTE: HTML 特性:它们的名字是大小写不敏感的 getAttribute(),它们的值总是字符串类型的。DOM 属性是多类型的。 i.e. div.style,input.checked

> 在这个语境下，Attribute:指 HTML 标签特性，Property:指 DOM 对象的属性
> obj.setAttribute('xx','xxx')
> obj.xx
> 这两个不一定完全同步

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

- 浏览器的 re-layout（回流）不是 DOM 文档修改后立即执行，而是等所有的 js 代码执行完毕后再执行回流
  因为浏览器每个时刻都只能做一件事情
  1 执行 js 代码
  2 计算布局
  3 绘制页面（现代浏览器每 16.66 毫秒都会重新绘制一遍，即 60 帧每秒）

- requestAnimationFrame(function)
  告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行
  回调函数 function 会被传入调用时间作为参数
- 虚拟 dom
  - 用一个对象或者字符串表示真实 dom 结构信息
  - 每次操作真实 dom 会拿到变更后的虚拟 dom
  - 虚拟 dom 和上一次的虚拟 dom 作对比，得到差异
  - 直接在真实 dom 上变更差异部分
  - 现代框架都是这个原理，通过操作数据来操作虚拟 dom，从而更改真实 dom，性能比直接操作 dom 更好，操作也更方便

## 浏览器事件

事件处理函数 特定事件发生时调用.

- 通过 DOM 属性分配，onclick 不能多次调用，新的调用会覆盖旧的 DOM 属性。
  i.e. button.onclick = sayThanks;
  在 HTML 里面:<input type="button" id="button" onclick="sayThanks()">，读取 HTML，会创建一个处理函数，注意这个区别。
- 分配事件处理程序，调用 addEventListener 允许多次添加。有些事件无法通过 DOM 属性进行分配，必须使用 addEventListener。 `element.addEvenListener（事件名，处理函数，option)`
  - options 可选
    一个指定有关 listener 属性的可选参数对象。可用的选项如下:
    capture: Boolean，表示 listener 会在该类型的事件捕获阶段传播到该 EventTarget 时触发。
    once: Boolean，表示 listener 在添加之后最多只调用一次。如果是 true， listener 会在其被调用之后自动移除。
    passive: Boolean，设置为 true 时，表示 listener 永远不会调用 preventDefault()。如果 listener 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告。
    不仅可以分配函数，还可以使用 addEventListener 将一个对象分配为事件处理程序。当事件发生时，就会调用该对象的 handleEvent 方法。
- element.removeElementListener（事件名，处理函数） 移除处理器，注意移除的处理函数和之前添加的处理函数是同一个才可以移除，所有需要用一个变量记录函数指向.
  ```js
  function handler() {
    alert("Thanks!");
  }
  input.addEventListener("click", handler);
  input.removeEventListener("click", handler); //移除，需要添加同一个函数
  ```

**event** 全局事件对象，浏览器同一时刻只有一个事件运行，event 的属性:

- event.type:事件类型，这里是 "click"。
- event.currentTarget:“当前”处理事件的元素，与 this 相同，除非处理程序是一个箭头函数，或者它的 this 被绑定到了其他东西上，之后我们就可以从 event.currentTarget 获取元素了。
- event.target:是引发事件的“目标”元素，引发事件的层级最深的元素，它在冒泡过程中不会发生变化。
- event.which:针对键盘和鼠标事件，确定按的是哪个键
- event.keyCode:记录哪个键被按下，返回对应的 unicode 码（大写字母）
- event.key:记录哪个键被按下，返回对应的键（小写字母）
- event.Propagation 阻止事件传播到下一个元素（调用该元素上后面的事件处理器还是会执行）
- event.ImmediatePropagation 阻止事件传播到下一个事件处理器（调用该元素上后面的事件处理器不会会执行）
- event.deltaY 表示鼠标滚轮的滚动方向，小于 0 向上滚动
- event.clientX / event.clientY:鼠标事件的指针的窗口相对坐标。

### 冒泡和捕获

#### 冒泡

当一个事件发生在一个元素上，它会首先运行在该元素上的处理程序，然后运行其父元素上的处理程序，然后一直向上到其他祖先上的处理程序。几乎所有事件都会冒泡，p.s. focus 事件不会冒泡,是例外。

`event.stopPropagation()` 停止冒泡,停止向上移动，但是当前元素上的其他处理程序都会继续运行。
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
有两种方式来告诉浏览器我们不希望它执行默认行为:
主流的方式是使用 event 对象。有一个 `event.preventDefault()` 方法。
如果处理程序是使用 on<event>（而不是 addEventListener）分配的，那`return false` 也同样有效。
**检查是否阻止了默认行为**:
`if (event.defaultPrevented) return;`
**不会阻止默认行为**:
`elem.addEventlistener("click",func,passive: true)`passive: true,将不会调用 e.preventDefault()，浏览器可以直接执行默认行为而不必等待函数的执行完。

**浏览器默认行为**:
mousedown —— 开始选择（移动鼠标进行选择）。
在 `<input type="checkbox">` 上的 click —— 选中/取消选中的 input。
submit —— 点击 `<input type="submit">` 或者在表单字段中按下 Enter 键会触发该事件，之后浏览器将提交表单。
keydown —— 按下一个按键会导致将字符添加到字段，或者触发其他行为。
contextmenu —— 事件发生在鼠标右键单击时，触发的行为是显示浏览器上下文菜单。

#### 捕获

事件处理的另一个阶段被称为“捕获（capturing）”。它很少被用在实际开发中，但有时是有用的。

DOM 事件标准描述了事件传播的 3 个阶段:

- 捕获阶段（Capturing phase）—— 事件（从 Window）向下走近元素,默认不触发。
- 目标阶段（Target phase）—— 事件到达目标元素。
- 冒泡阶段（Bubbling phase）—— 事件从元素上开始向外冒泡，默认触发。
  传播路径:由捕获阶段到目标阶段，目标阶段里面的处理函数按照代码顺序执行，不区分捕获和冒泡，之后是冒泡阶段；传播过程中遇到没有时间处理器的元素会跳过该元素继续执行

#### 事件委托

在外部节点添加一个事件处理器，并根据 target 属性判断事件来源，这样可以把内部共用的事件绑定到外部.

算法:
在容器（container）上放一个处理程序。
在处理程序中 —— 检查源元素 event.target。
如果事件发生在我们感兴趣的元素内，那么处理该事件。
好处:
简化初始化并节省内存:无需添加许多处理程序。
更少的代码:添加或移除元素时，无需添加/移除处理程序。
DOM 修改 :我们可以使用 innerHTML 等，来批量添加/移除元素。

### 简单事件

mousedown/mouseup
在元素上点击/释放鼠标按钮，mousedown 的默认浏览器操作是文本选择。
mouseover/mouseout(现在用 mouseenter/mouseleave 来代替)
鼠标指针从一个元素上移入/移出。

> 快速移动鼠标可能会跳过中间元素。
> 即使我们从父元素转到子元素时，也会触发 mouseover/out 事件。浏览器假定鼠标一次只会位于一个元素上 —— 最深的那个。
> mouseenter/leave 事件在这方面不同:它们仅在鼠标进入和离开元素时才触发。并且它们不会冒泡。
> mouseover/out 和 mouseenter/leave 事件还有一个附加属性:relatedTarget。这就是我们来自/到的元素，是对 target 的补充。
> contextmenu（右击）
> 尝试打开上下文菜单时触发。在最常见的情况下，此事件发生在鼠标右键被按下时。虽然，还有其他打开上下文菜单的方式，例如使用特殊的键盘键，所以它不完全是一个鼠标事件。
> oncopy="alert('Copying forbidden!');return false"
> 禁止复制
> keydown,keyup,keypress
> 按键事件只能在有焦点的元素上触发，没有焦点的元素可以通过 tabindex 获取焦点

### 复杂事件

click
如果使用的是鼠标左键，则在同一个元素上的 mousedown 及 mouseup 相继触发后，触发该事件。
dblclick
双击一个元素后触发。

> 复杂事件是由简单事件组成的，因此，从理论上讲，如果没有这些复杂事件，我们也能实现相应的功能。但它们的存在却给我们提供了极大的便利。

在单个动作触发多个事件时，事件的顺序是固定的。
mousedown → mouseup → click
mousedown → mouseup → contextmenu
识别复杂手势，触摸手势 框架:hammer.js
**事件属性**:
which:1/2/3 左中右键
如果在事件期间按下了相应的键，则它们为 true:
shiftKey:Shift
altKey:Alt（或对于 Mac 是 Opt）
ctrlKey:Ctrl
metaKey:对于 Mac 是 Cmd

**坐标:clientX/Y，pageX/Y**
所有的鼠标事件都有两种形式的坐标:
相对于窗口的坐标:clientX 和 clientY。
相对于文档的坐标:pageX 和 pageY。

### 鼠标移动

## BOM

BOM 浏览器对象模型，设置浏览器的属性,浏览器提供的用于处理文档之外的所有内容的对象。i.e. navigator location window screen history

- 函数 alert/confirm/prompt 是 BOM 的一部分.
- 泛指浏览器中除 js 内置和 dom 操作相关的 api.
  - DOM document 上提供的相关的 api
  - api Application Programming Interface 应用编程接口，以函数，类，方法，属性等体现出来

### 相关对象

- navigator:主要是 navigator.userAgent——格式不完全统一，不好匹配
- location:完整的 url 分解成不同的片段放在不同的属性中(包括完整的 url),可读可写入。
  - port 端口，protocol 协议，origin 域/源:协议+域名+端口
  - location.reload() 刷新，参数为 true 时一定从服务器重新获取，否则可能从缓存中加载.除了修改 hash，其余修改都会刷新页面。
  - location.assign('xxx') ===location.href ='xxx'===location ='xxx' 相当于打开了新页面并加入历史记录，可以前进后退
  - location.replace('xx') 当前地址直接换一个,无法前进后退
  - hash 指的是#号及后面的部分对应页面内 id,HTTP 请求没有这部分。hash change 事件就是监测 hash 值的变化，必须绑定至 window 对象
- **history:** 实际是一个栈，前进后退会在栈中游走
  - history.go() history.forward()/back()——>popstate 事件
  - history.state 储存当前页面的 state 对象
  - pushState(data,title,url)
    - data 会绑定为 history.state 对象
    - 页面不会刷新，但记录 url 的改变，可以前进后退，点击前进后退会触发**popstate**事件，事件包含 history 中的 state 对象
    - 因为并不会刷新页面，所以设置了新的 hash 值(锚点)也不会触发 hashchange 事件
    - 通过 Ajax 请求数据更新并更新页面内容，通过 window.onpopstate 事件在浏览器前进后退时，将页面改变位对应 url 的内容。现代浏览器中以此实现 url 改变但不刷新页面 pjax——>ajax+pushState
  - replaceState(data,title,url)，功能同上，替换掉当前网页
- window

  - close() 只能关掉由他开启的页面，不能关自己。
  - **open(url,location)**

    - 返回一个对象指向新窗口，其中有一个 opener 属性指向原窗口，可以用这个返回的对象(这个对象并不是指向对应的 window，只有几个简单的属性和方法)的`postMessage`方法传递一个字符串给打开的窗口，在新窗口中也可以通过`opener.postMessage()`向原窗口传递字符串(将`message`事件绑定处理机来接收)，来实现跨域通信

  - opener() 可以访问到打开者(open)的部分对象。同一个域内可以相互通信。
  - name 一定是字符串类型，不随页面的导航而清空(除非 js 主动更改)，可以实现跨域
  - status 状态栏 window.document.title 网页标题
  - atob/btoa() base64 编解码

    > base64 编码 以文本的形式表达一份二进制原始信息

  - blur/focus() 让窗口获取或失去焦点 onblur/onfocus 事件
  - getComputedStyle(element,['before']) 第二个参数可选为伪元素字符串，这个对象的属性是**只读且动态更新**的，包含当前元素的所有计算样式，应为伪元素不是 dom 节点，不能直接通过 dom 操作获取，所以多用此方法获取伪元素的样式
  - stop() 停止加载页面

## 表单和表单域

- 表单域中的内容更改时会触发 change 事件，但只有在光标移出输入框（失去焦点）才会触发，并且通过 js 修改文本不会触发该事件；
  如果在输入过程中就触发其改变，就可以使用 keydown/keyup/keypress/input 事件
- paste/cut/copy 事件
  compositionstart/compositionend 输入法输入时触发 / 输入完成时触发 可以用于汉字
- focus/blur 事件 获取焦点/失去焦点 autofocus
- document.forms 文档中所有的表单元素
  document.all 文档中所有的元素以及 id 映射
  document.images 文档中所有的图片元素
  document.links 文档在所以的链接元素
  document.activeElement 执向当前获得焦点的元素（默认指向 body 元素）
- draggable = "true" 设置标签是否可以拖拽
- 表单的 elements 属性指向其所有的内部元素 form.elements
  表单的内部元素的 form 属性指向表单元素 element.form
- selectionStart/selectEnd 光标选择文字范围，返回下标
  selectionStart = selectEnd =length 指定光标在某个位置
  document.getSelection() 拿到选中的内容
- input 标签和 textarea 标签里面内容是 text 时，这两个标签都有一个 value 属性（在其 set 方法里），可以通过修改 value 属性的值更改文本内容
- select 标签有个 options 属性可以访问其内部所有的 option 标签
  每个 option 标签都有一个 selected 属性表示自身是否被选中（true/false）, 也可以通过这个属性操作 option 是否被选中
  select.value 表示当前选择的 option 元素的 value/textContent
  select 标签上面加上 multiple 属性表示可以多选（要配合 ctrl 使用 ）

```js
// 实现表单元素的序列化; jQuery('form').serialize

function serialize(formNode) {
  var res = "";
  for (let i = 0; i < formNode.elements.length; i++) {
    let element = formNode.elements[i];
    if (element.name) {
      let name = element.name;
      let nodeName = element.nodeName;
      if (nodeName == "INPUT") {
        switch (element.type) {
          case "radio":
          case "checkbox":
            if (element.checked) {
              res += name + "=" + (element.value || "on");
              if (i < formNode.elements.length - 1) {
                res += "&";
              }
            }
            break;
          default:
            res += name + "=" + (element.value || "on");
            if (i < formNode.elements.length - 1) {
              res += "&";
            }
        }
      } else if (nodeName == "TEXTAREA") {
        res += name + "=" + element.value;
      } else if (nodeName == "SELECT") {
        if (element.multiple) {
          Array.from(element.options).forEach((option) => {
            if (option.selected) {
              res += name + "=" + element.value;
              if (i < formNode.elements.length - 1) {
                res += "&";
              }
            }
          });
        } else {
          res += name + "=" + element.value;
          if (i < form.elements.length - 1) {
            res += "&";
          }
        }
      }
    }
  }
  return res;
}
```

- `<input type = "file">` input.value=>文件路径
  input.files 表示所有选中的文件类数组对象，其中每一个文件 file（ input.files[0]）都有 name，size，type 等等属性
  FileReader 构造函数接口，配合 load 事件，调用实例的 readAsText 方法，实例的 result 属性会接受读取结果

  ```js
  function getFileContent(file, done) {
    var reader = new FileReader();
    reader.addEventListener("load", function () {
      done(reader.result); //只有全部内容，没有名字
    });
    reader.readAsText(file);
  }

  function readFileAsText(file) {
    return new Promise((resolve, reject) => {
      var reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = (e) => {
        reject(new Error(e));
      };
      reader.readAsText(file);
    });
  }
  ```

  读取大文件 form=>enctype ='xxxx' 分段
  img.src = URL.createObjectURL(file) 为文件创建一个地址，可以被其它元素访问的地址

- localStorage 保存数据的对象，使用方法类似 Map, 里面的值会保存直到其被重写或者清除掉；每个域名都有自己的 localStorage 属性，大小一般最大 5 M，相同的域名 localStorage 属性通用
  localStorage.setItem(item,value)
  localStorage.getItem(item)
  localStorage.removeItem(item)
  sessionStorage 和 localStorage 用法一样，但是它只保存数据到浏览器关闭，不会触发 onstorage 事件
- window.onstorage 会在 localStorage 发生变化时触发
  window.hashchange 会在 location.hash 发生变化时触发
  window.onresize 会在窗口大小发生变化时触发
- FormData 接口提供了一种表示表 location 单数据的键值对的构造方式，经过它的数据可以使用 XMLHttpRequest.send 方法送出
  ```js
  var formData = new FormData();
  formData.append("username", "Groucho");
  formData.append("accountnum", 123456);
  var request = new XMLHttpRequest();
  request.open("POST", "http://foo.com/submitform.php");
  request.send(formData);
  ```

## jQuery

jQuery 现在式微:
浏览器的兼容性变好了。
框架的流行，不再需要人肉操作 DOM 了。
jQuery 提供的各大方面的功能有各自专门的其他库来解决，而且解决得更好。常用函数:Lodash,ajax 封装:axios 等
目前在维护的有三个版本:
1.x 版本，为了兼容一直以来的旧浏览器
2.x 版本，不再支持 IE9 及以下的版本
3.x 版本分两个系列:

- 3.x 是 2.x 的正常升级
- 3.x-compatible 是对 1.x 的升级

# 计算机网络

## 数据在计算机中存储中的表示

浮点数一般使用 8 个字节表示，64bit
最左是符号，然后十一位为指数

- 指数范围-1023-1024, 指数部分使用原码存储，原码范围 0-2047,0 表示-1023
- 指数不用补码:从左到右扫描即可比较大小。
- 浮点数不够精确则更多用于对比大小，提高大小比较效率
- 程序中很少判断两个浮点数相等，更多判断他们的差的绝对值是否小于某个精度。小数部分最高精度 Number.EPSILON
  不存储底数的整数部分，因为底数的整数部分总是 1, 可以让二进制状态有效位数为 53 位
- 有效位数 53 位，可以表达的最大精确数 2\*\*53-1 为 `Number.MAX_SAFE_INTEGER`. 大于这个范围的数是可以表示的，但不能保证精确，溢出的位会被截断
- 整数部分使用的越多，小数部分有效位数越少。即数值越大，小数部分的精度越低。

IEEE754 标准:二进制浮点顺运算标准

- 双精度浮点数使用 8 字节表示，指数部分 11bit, 底数 62bit
- 单精度浮点数使用 4 字节表示，指数部分 8bit, 底数 23bit

## 万维网是如何工作的

![客户端和服务器](https://cdn.jsdelivr.net/gh/brightzoe/img/20200105191449.png)

- 网络连接:允许你在互联网上发送和接受数据。基本上和你家到商店的街道差不多
- TCP/IP: 传输控制协议和因特网互连协议是定义数据如何传输的通信协议。这就像你去商店购物所使用的交通方式，比如汽车或自行车。
- DNS: 域名系统服务器像是一本网站通讯录。浏览器需要找到存放你想要的网页的服务器，才能发送 HTTP 请求到正确的地方。就像你要知道商店的地址才能到达那。
- HTTP: 超文本传输协议是一个定义客户端和服务器间交流的语言的协议（protocol ）。就像你下订单时所说的话一样。
- 组成文件:一个网页由许多文件组成，就像商店里不同的商品一样。这些文件有两种类型:
  - 代码 : 网页大体由 HTML、CSS、JavaScript 组成，不过你会在后面看到不同的技术。
  - 资源 : 这是其他组成网页的东西的集合，比如图像、音乐、视频、Word 文档、PDF 文件。

### URL 网址

- 格式: 协议://主机地址+目录路径+参数
- 常用协议
  ![常用协议](https://cdn.jsdelivr.net/gh/brightzoe/img/xieyi.png)

### 浏览器及其内核

![](https://cdn.jsdelivr.net/gh/brightzoe/img/browser.png)

### 发生了什么？

当你在浏览器里输入一个网址时（在我们的例子里就是走向商店的路上时）；

1. 浏览器在域名系统（DNS）服务器上找出存放网页的服务器的实际地址（找出商店的位置）。
2. 浏览器发送 HTTP 请求信息到服务器来请拷贝一份网页到客户端（你走到商店并下订单）。所有在客户端和服务器之间传递的数据都是通过互联网使用 TCP/IP 协议传输的。
3. 服务器同意客户端的请求后，会返回一个“200 OK”信息，意味着“你可以查看这个网页，给你～”，然后开始将网页的文件以网络包的形式传输到浏览器（商店给你商品，你将商品带回家）。
4. 浏览器将数据包聚集成完整的网页然后将网页呈现给你（商品到了你的门口 —— 新东西，好棒！）。

- 打开页面,网络层面的操作
  读缓存 =>hosts 文件的读取 =>dns 解析器 =>网络层数据包的转发 =>tcp 连接 =>证书交换，建立 tls 连接 =>发送 http 请求 =>接收响应 =>构建 DOM 树 =>渲染页面

## HTTP 协议

[HTTP](#HTTP)

## DNS 解析

真正的网址是一串数字，比如 10.230.217.105，这叫 IP 地址，代表互联网上一个独特的位置。但并不好记忆，DNS 就是将域名与实际的 IP 地址相匹配的特殊服务器，达到让人使用域名，路由器使用 IP 地址的目的。
例如 IP Checker 可以通过域名查找 IP 地址。
解析器向 DNS 服务器发出查询，接收服务器返回的响应消息，响应消息包含查询到的 IP 地址。

### DNS 解析器

解析器包含在操作系统的 Socket 库(网络开发的一种标准库，其中包含的程序组件可以让其他的应用调用操作系统的网络功能)中。
`nslookup www.baidu.com 8.8.8.8` 用指定的 DNS 服务器查询 IP 地址

- 调用解析器:`gethostbyname("www.xx.xx")`
- 计算机内部:控制流程转移 ![](https://i.loli.net/2020/07/07/AJBEzOsc7MYndhD.png)

### DNS 服务器

DNS 服务器的基本工作就是根据需要查询的域名和记录类型查找相关的记录，并向客户端返回响应消息。
其中，来自客户端的查询消息包含以下 3 种信息。

- 域名
  服务器、邮件服务器（邮件地址中@后面的部分）的名称
- Class
  在最早设计 DNS 方案时，DNS 在互联网以外的其他网络中的应用也被考虑到了，而 Class 就是用来识别网络的信息。不过，如今除了互联网并没有其他的网络了，因此 Class 的值永远是代表互联网的 IN
- 记录类型
  表示域名对应何种类型的记录。例如，当类型为 A 时，表示域名对应的是 IP 地址；当类型为 MX 时，表示域名对应的是邮件服务器。对于不同的记录类型，服务器向客户端返回的信息也会不同。TXT，可以确认域名所有权。AAAA,指向 IPv6 地址
  类型:PTR,CNAME,NS,SOA...

DNS 服务器上事先保存有前面这 3 种信息对应的记录数据，一个域名可以指定多个 IP
DNS 服务器中的所有信息都是按照域名以分层次的结构来保存的。域名中右边的部分层级高。
上级 DNS 服务器保管着所有下级 DNS 服务器的信息。
com、jp:顶级域，上面还有一层:. 根域，一般省略，但真实存在，根域的 DNS 服务器信息保存在互联网所有 DNS 服务器中。
DNS 服务器的缓存功能，加快服务器的响应。 ——>host:把域名和 IP 绑定,相应的对应关系
DNS 污染:解析成错误的 IP——>可以通过修改 host 解决
DDNS:动态 DNS ——>IP 变掉了，自动指向新 IP

## IP 地址

IP 地址和现实中的地址一样，不能重复。
局域网都是基于 TCP/IP 思路设计的。TCP/IP 的结构就是由一些小的子网，通过路由器连接起来组成一个大的网络。这里的子网可以理解为用集线器连接起来的几台计算机，我们将它看作一个单位，称为子网。将子网通过路由器连接起来，就形成了一个网络。
![TCP/IP的结构](https://i.loli.net/2020/07/08/LubEBqs8cdxnMY2.png)
在 IP 地址的规则中，网络号和主机号连起来总共是 32 比特，8 比特为 1 组。利用子网掩码来区分网络号和主机号。
IP 地址的表示方法:![IP 地址的表示方法](https://i.loli.net/2020/07/07/bJ7BuNd9Om6TlWe.png)
子网掩码:转化为 2 进制，前面全 1，后面全 0,1 对应的 ip 地址部分是网络号，0 对应主机号；
同一个局域网里面的机器 IP 网络号相同；如 192.168.88.2/24 与 192.168.88.8/24
网络地址:ip 地址与子网掩码做与运算，结果就是网络地址

**IP 地址**

- 0.0.0.0 :代表任意的 ip 地址，不能作为目的地址使用
- 127.x.x.x 以 127 开头的 ip 地址都指向本机
- **IP 地址的主机号:**

- 全 0:表示整个子网
- 全 1:表示向子网上所有设备发送包，即“广播”

## 委托协议栈向 Web 服务器发送消息

向操作系统内部的协议栈发出委托时，需要按照指定的顺序来调用 Socket 库中的程序组件。
收发数据的操作分为若干个阶段，可以大致总结为以下 4 个。——TCP
[TCP](#tcp)

1. 调用 Socket 库中的 socket 程序组件创建套接字（创建套接字阶段）
2. 将管道连接到服务器端的套接字上（连接阶段）调用 Socket 库中的名为 connect 的程序组件,需要指定描述符、服务器 IP 地址和端口号.

- 描述符:应用程序用来识别套接字的机制
- IP 地址:识别具体是哪个网络硬件
- 端口号:用来识别具体的套接字。Web 是 80 号端口，电子邮件是 25 号端口，DNS 服务器 53 号端口，DHCP 是 67 号端口。是规定好的，默认的。

3. 收发数据（通信阶段）
4. 断开管道并删除套接字（断开阶段）
   ![](https://i.loli.net/2020/07/08/iJ4X3E72PwaYUCo.png)

### 协议栈和网卡

![协议栈的内部结构](https://i.loli.net/2020/07/08/6vmGZkOwjTzItJn.png)
浏览器、邮件等一般应用程序收发数据时用 TCP;DNS 查询等收发较短的控制数据时用 UDP。
**套接字具体是啥？**
套接字中记录了用于控制通信操作的各种控制信息，协议栈则需要根据这些信息判断下一步的行动。例如通信对象的 IP 地址、端口号、通信操作的进行状态等。就是接口的相关信息。
显示套接字 `netstat -ano` 目前连接上的端口

- 通信操作中使用的控制信息分为两类。
  （1）头部中记录的信息，在 TCP 协议的规格中进行了定义。头部是用来记录和交换控制信息的。
  （2）套接字（协议栈中的内存空间）中记录的信息，用来控制协议栈操作。

### 连接

实际上是通信双方交换控制信息，在套接字中记录这些必要信息并准备数据收发的一连串操作，像上面提到的客户端将 IP 地址和端口号告知服务器这样的过程就属于交换控制信息的一个具体的例子。
连接操作的第一步是在 TCP 模块处创建表示连接控制信息的头部.通过 TCP 头部中的发送方和接收方端口号可以找到要连接的套接字。
SYN 比特表示连接，和 ACK 比特确认响应

- 三次握手:三次成功的单向通信，才能确定双方都能收能发信息

### 收发数据

数据收发操作是从应用程序调用 write 将要发送的数据交给协议栈开始的，协议栈收到数据后执行发送操作。
协议栈收到数据会将数据存放在内部的发送缓冲区中，并等待应用程序的下一段数据。

- **如何判断发送时机？**

1. 第一个判断要素是每个网络包能容纳的数据长度，MTU。
   - MTU:一个网络包的最大长度，以太网中一般为 1500 字节。例外:vpn,ipv6 over ipv4
   - MSS:除去头部之后，一个网络包所能容纳的 TCP 数据的最大长度
     ![](https://i.loli.net/2020/07/08/xyjnfm2w34Tp5SJ.png)
2. 时间。协议栈内部有个计时器，当应用程序发送数据的频率不高的时候，如果每次都等到长度接近 MSS 时再发送，可能会因为等待时间太长而造成发送延迟。

- 网络包已经装好数据并发往服务器了，但数据发送操作还没有结束。TCP 具备确认对方是否成功收到网络包，以及当对方没收到时进行重发的功能，因此在发送网络包之后，接下来还需要进行确认操作。
- 接收方返回 ACK 号给发送方——确认响应。
- TCP 采用这样的方式确认对方是否收到了数据，在得到对方确认之前，发送过的包都会保存在发送缓冲区中。如果对方没有返回某些包对应的 ACK 号，那么就重新发送这些包。

  > 因此，网卡、集线器、路由器都没有错误补偿机制，一旦检测到错误就直接丢弃相应的包。应用程序也是一样，因为采用 TCP 传输，即便发生一些错误对方最终也能够收到正确的数据，所以应用程序只管自顾自地发送这些数据就好了.

**TCP 为什么设置得如此复杂？** 需要将数据高效且可靠的发送给对方。为了实现可靠性，我们需要确认对方是否收到了我们发送给的数据，如果没有还需要再发一遍。为了实现高效的传输，需要避免重发已经送达的包，只重发出错的或未送达的包。
如果只有一个包就可以解决的短数据，适合使用**UDP**。UDP 只需要在应用程序获得的数据前面加上 UDP 头部，然后交给 IP 进行发送。接收就是根据 IP 头部中的接收方和发送方 IP 地址，以及 UDP 头部中的接收方和发送方端口号，找到相应的套接字并将数据交给相应的应用程序。
还有另一个场景会使用 UDP，就是发送音频和视频数据的时候。音频和视频数据必须在规定的时间内送达，一旦送达晚了，就会错过播放时机，导致声音和图像卡顿。

#### 错误补偿机制

- 返回 ACK 号的等待时间——超时时间:当网络传输繁忙时就会发生拥塞，ACK 号的返回会变慢，等待时间需要稍长一点，但等待时间过长，包的重传会出现很大的延迟，所以等待时间不能设定为一个固定的值。TCP 采用**动态调整等待时间**的方法，根据 ACK 号返回所需的时间来判断。
- 使用滑动窗口有效管理数据发送和 ACK 号。滑动窗口，就是在发送一个包之后，不等待 ACK 号返回，而是直接发送后续的一系列包。有可能出现发送报的频率超过接收方处理能力的情况， 数据将暂存到接收缓冲区中，能够接受的最大数据量称为窗口大小。
- 提高收发数据的效率:返回 ACK 号和更新窗口合并。

#### 断开连接并删除套接字

断开连接后，套接字并不会立即被删除，而是会等待一段时间之后再被删除。——为了防止误操作

## IP 与以太网的包收发操作

TCP 模块在执行连接、收发、断开等各阶段操作时，都需要委托 IP 模块将数据封装成包发送给通信对象。
发送方的网络设备会负责创建包，网络包是由头部和数据两部分构成。
![网络包的结构](https://i.loli.net/2020/07/08/clK6TsZuvfAjFdr.png)

### IP 模块如何完成包收发操作

TCP 模块委托 IP 模块发送包，TCP 模块在数据块前面加上 TCP 头部，传递给 IP 模块。还需要指定通信对象的 IP 地址。
IP 模块收到委托，添加 MAC 头部和 IP 头部，这样一个包就封装好了。

- MAC 头部:用于以太网协议，包含 MAC 地址，包含将包传输至最近的路由器的所需的控制信息。
- IP 头部:用于 IP 协议，包含 IP 地址，将包发往目的地所需的控制信息。

封装好的包会交给网络硬件，比如以太网，无线局域网，网卡。传递给网络硬件的的网络包是 01 组成的数字信息。硬件将数字信号转换为电信号或光信号，并通过网线发出去，这些信号到达集线器，路由器等转发设备再一步步地送达接收方。
接收返回的包和发送的过程正好是相反的。

- IP 模块的包收发操作都是相同的。将整个 TCP 头部和数据块看成一整块二进制数据，执行收发操作不关心其内容。

#### IP 模块具体工作过程

1. **生成 IP 头部附加在 TCP 头部前面。**
   - IP 包头:记录 ip 地址有关信息，本身储存在以太网帧负载里面
     ![IP包头](https://i.loli.net/2020/07/09/38LdRKys6xp7tJq.png)
     发送方 IP 地址:需要通过路由表来判断发送使用的网卡，填写该网卡的 IP 地址。显示路由表`route print`
   - 协议号:表示包的内容来自哪个模块。
   - IP 分片:IP 有关数据大小（IP 总长度）大于以太网帧负载，需要分开传输后再重组
   - 生存时间（TTL）: IP 包头在网络中最多可以中转的次数，每遇到路由器中转一次减一，到 0 路由器就不传播扔掉该数据（路由会返回给发送者在哪一个路由器地址被扔掉(ICMP 协议)，利用该特性可以追踪路由(tracert baidu.com)，可以防止环状循环传播；(在传播过程中 TTL 和头部校验和会变化)
   - ICMP 协议:每个路由回复数据传播状态所要用到的协议 Internet Control Message Protocol 互联网消息控制协议
2. **生成以太网用的 MAC 头部，包含接收方和发送方的 MAC 地址。**
   ![](https://i.loli.net/2020/07/09/tGrnb1akiwHWm3Y.png)
   以太类型:类似 IP 头部的协议号，表示后面内容的类型。
   接收方 MAC 地址:需要根据 IP 地址查询 MAC 地址。
   > 通过 ARP 查询目标路由器的 MAC 地址。
   > ARP 协议:address resolution protocol(地址解析协议), 通过广播获得 MAC 地址。将 ip 地址转化为 MAC 地址并记录对应关系，命令行 arp -a 可查看所有记录
   > ARP 缓存:缓存查询过的 MAC 地址 显示 ARP 缓存`arp -a` 经过一段时间缓存会被删除。如果缓存还未删除出现通信异常，可以手动删除 ARP 缓存

### 以太网的基本知识

以太网是为多台计算机能够自由且廉价地相互通信设计的通信技术(有线网)，本质就是一根网线，通过 MAC 头部进行通信，根据 MAC 地址来传输包。
性质:根据 MAC 头部的三个字段，将包发送到接收方 MAC 地址，根据发送方 MAC 地址识别发送方，根据以太类型识别报的内容。（也适用于无线局域网）

#### 以太网的包收发操作

网络硬件中将数字信息转换为电或光信号——>网卡，网卡驱动程序
网卡中的 MAC 地址是唯一的，在网卡生产时就写入了。网卡中保存的 MAC 地址由网卡驱动程序读取并分配给 MAC 模块。
网卡驱动从 IP 模块获取包，将其复制到网卡缓冲区，MAC 模块将包从缓冲区取出，在开头加上报头和起始帧分界符，末尾加上用于监测错误的帧校验序列。

![加工网络包的分工](https://i.loli.net/2020/07/09/KMGHfJSLo5yINEq.png)

### 转发设备:

路由器:根据目标地址判断下一个路由器的位置——>按照 IP 规则
集线器:在子网中将网络包传输到下一个路由——>按以太网规则
![](https://i.loli.net/2020/07/09/GY9ybRQLwhJtDrn.png)

#### 向集线器发送网络包

两种发送信号的操作:

1. 使用集线器的半双工模式
2. 使用交换机的全双工模式
   > 全双工:发送给和接收同时并行。半双工:某一时刻只能进行发送或接收一种操作
   > 半双工:(PHU 模块)先判断网线中是否有其他设备发送的信号，避免信号碰撞。MAC 模块将数字信息转换为电信号(通用信号)，接下来 PHY(MAU)模块对 MAC 模块产生的信号再进行格式转换为在网线中传输的模式，通过网线发送出去。PHU 还需要监控接收线路中有没有信号进来。
   > 发送信号的过程中，如果有其他设备同时发送信号，这些信号就会通过接收线路传进来。在使用集线器的半双工模式中，一旦发生这种情况，两组信号就会相互叠加，无法彼此区分出来，这就是所谓的信号碰撞。信号是没有意义的，因此发送操作会终止。为了通知其他设备当前线路已发生碰撞，还会发送一段时间的阻塞信号，然后所有的发送操作会全部停止。

## 计算机网络的结构

计算机网络是拓扑结构，类似快递网络，主干道是图状结构，末端类似树状结构。
计算机网络也是典型的分层结构:物理层，链路层，网络层，传输层，应用层。上层结构依赖于下层结构，其中的每一层只关注他本层和相连的两层。

### 物理层

- 设备间的物理连接，可以有线也可以无线。网线/光纤/WiFi/4G，正确地传递 01
- 解决信号的调制与解调:转换数字信号和模拟信号
- 两个设备通信之前，在链路层需要进行信号的**时钟同步**。
- 网卡:拥有 MAC 地址，使得用户可以通过网线或无线相互连接
- 曼彻斯特编码:加倍信号跳变频率；同步时钟信号

### 链路层

负责直接连接的设备间的通信，只关心直接连接的机器之间的以字节为单位的通信

- 广播域:多台直接连接的设备组成一个广播域
- 局域网:可以理解为同一交换机 / 令环牌 / 总线结构内部网络设备之间的网络
  广播域/局域网的结构:
  - 总线型结构:所有的网点和同一条总线连接 (一根总线，效率低)
    - 集线器:信号放大
    - 同一时刻只有一个设备进行数据传输
    - 防止信号碰撞:载波侦听，多路访问协议；指数退避
  - 令牌环:需要令牌，单向传输(效率低)
  - **交换机:**一台机器，多个接口连接网络设备，可以识别每台连接的网络设备的 MAC 地址(Media Access Control)
    - 典型的链路层设备
    - 三层交换机:会识别 IP 地址等数据包里的三层包头来执行相关策略
    - 网管交换机:一台网卡设置多个 ip,成为路由器的功能
    - `ipconfig /all`查看网络配置
- 以太网:有线网 以太网帧:链路层传播的数据包
  - 前导码:对码，确认传播编码方式
    帧开始符:表示帧的开始
    MAC 目标地址 /MAC 源地址:MAC 地址设备出厂时就确认了；
    负载:发送的具体数据，占有以太网帧大部分内存；MTU: 最大传输单元
    冗余校验:核对负载数据的正确性
    以太类型:协议类型（ARP/HTTP 等）
- WiFi:
  - 载波侦听，多路访问
  - 多频段 2.4G 5G 频率不同 5G 频段更宽
- VPN:
  - 外面再包一层，MTU 会变小
  - 连上 VPN 会多一个 IP 地址，建立了一个虚拟的链接(虚拟网卡)，数据是加密的
- 在这层，每个网卡拥有唯一一个 MAC 地址，只在局域网使用，但仍然是全球唯一。局域网内使用 MAC 地址，而不是 IP 地址
- ARP 协议:address resolution protocol(地址解析协议), 通过广播将 IP 地址获得 MAC 地址。将 ip 地址转化为 MAC 地址并记录对应关系，命令行 `arp -a` 可查看所有记录 ping
  ARP 缓存:缓存查询过的 MAC 地址
  ARP 欺骗:假冒广播寻找的 IP 地址
  ARP 风暴: 高频率发送 ARP 广播，占用网络资源
  ping:在命令行输入 ping ip 地址，查看和目标地址在 IP 层面是否可以通信。(ICMP 协议)
- DHCP 协议:(动态主机配置协议) 自动分配局域网里的 IP 地址

### 网络层(IP 层)

网络层负责把 IP 数据包从起始机器送达目标机器(跨网络)，只负责单次发送。

- 两台机器发送数据时，先会根据 IP 地址确认是否在同一个局域网(同一局域网内 IP 地址的网络号相同。)
  - 如果在同一个子网，直接 ARP 广播通信。
  - 如果不在同一个局域网，会发给网关，进行多个网络点之间的中转和传输
- 网关:路由器，局域网的出口，进行多个网络点之间的中转和传输。网关包成以太网帧，根据路由表传给其他网关。
- 路由器:多个接口连接不同的子局域网，每个接口的 IP 地址（网关地址）不一样；与家用路由器不一样
  - 可以利用 IP 包头的 TTL，追踪路由(tracert baidu.com) `trace ip`
  - 可以用此定位 GFW 物理位置 mongol python
- 路由表:网关发过来的 ip 地址会进入路由器内部的路由表，其指导后续的网络传播方向 ；
- 家用路由器（NAT 路由器 Network address transition）: 和上面的路由器不一样；里面是一个路由器和一个交换机，相当于具有链路层和网络层功能。
- IPv4 IPv6——迁移期间共存，采用建隧道的方式交互
  - 过河，坐船
- 瘦腰模型 通用协议，需要很稳定，类似于钱
  - 底层都实现 IP，上层都基于 IP 实现，而中间只有 IP
- 延迟:转发导致的
- 带宽

(

- SNAT: NAT 路由器发出去的局域网地址转化为广域网地址
- DNAT:发回来的广域网地址转化为 NAT 路由器的局域网地址
  根据设备端口的不同 NAT 路由器区分数据是由哪个局域网设备发送的，NAT 路由器会有一个端口映射表，每台网络设备每次都会映射得到一个独一端口；
  端口映射表有动态也有静态的，但是保证端口和内网设备的映射关系都是独一的；
- NAT 级联，NAT 路由器连接 NAT 路由器，解决了 ip 地址不够用的问题；
- ICMP 协议:每个路由回复数据传播状态所要用到的协议)

### 传输层

网络数据的传输 (UDP/TCP 协议），端口到端口（应用程序到应用程序）。

- UDP 数据的 MSS 最大 1472 字节,1500-20-8,ip 头部，udp 头部。
- TCP 数据的 MSS 最大 1460 字节，1500-20-20，ip 头部，tcp 头部。

#### UDP

- 用户数据报协议（UDP，User Datagram Protocol），非连接型

```js
//发送一个udp请求
sock = dgram.createSocket("udp4"); //创建udp套接字
sock.bind(55555); //绑定一个特定端口
sock.addMembership("224.3.3.3"); //加入频道，添加主播地址(224~239)
sock.on("message", () => console.log(1));
0;
```

- 不存在服务器 / 客户端一说，没有连接的概念。
- 包裹在 ip 包 的数据里面；包括源端口 / 目的端口 / 长度 / 校验和 / 数据
- 广播地址 255.255.255.255
- 主播:加入频道，添加主播地址(224~239)
- 缺点:不保证送达，数据包很小，不能保证按照发送顺序送达
- 优点:低延迟，丢包也不重发；如游戏，电话语音
- 模型: udp 仅在 ip 上加了端口，每个 udp 端口是对等的，任何一个 udp 端口也可以向任何其它的 udp 端口发消息，不局限于只能为某个端口发；

#### TCP

- 传输控制协议（Transmission Control Protocol）是一种面向连接的、可靠的、基于字节流的传输层通信协议

  - 有序，且保证送达
  - TCP 四元组:源 ip, 目的 ip，源端口，目的端口；确定网络中独一无二的连接
  - 报错信息:ADDR_IN_USE/REFUSED/TIME_OUT

  ```js
  //TCP 链接 -node运行
  var net = require("net"); //加载tcp模块
  var server = net.createServer(); //创建tcp服务对象
  var port = 5555;
  server.listen(port, () => {
    //服务套接字监听port
    console.log("listening on port", port); //监听成功后运行
  });
  server.on("connection", (conn) => {
    //有客户端连接成功时运行，conn表示该连接的对象
    //server触发多次connection事件，conn触发多次data事件
    console.log(conn.address(), "comes in");
    conn.write("hello"); //向客户端发送数据
    conn.on("data", (data) => {
      //该连接发送上来数据时触发的事件
      console.log(conn.address(), "says", data.toString());
    });
  });

  conn = net.connect(5555, "10.3.3.3"); //客户端尝试建立tcp连接,连接特定IP的特定端口
  connect.write("foo");
  conn.on("data", (data) => {
    //该连接发送上来数据时触发的事件
    console.log(data.toString());
  });
  conn.end(); //单边结束连接，可以收，不可以发。
  ```

  ![TCP 的头部格式](https://i.loli.net/2020/07/13/xSyqpjkKBiwU5as.png)
  TCP 半开状态:即一侧关闭了连接，不再发送数据，但可以接收数据，直至对侧也关闭了连接；另一侧没有关闭连接，仍可以发送数据。

- **滑动窗口机制**
- 拥塞控制
  - 慢启动 :刚开始网速慢
  - 和式增加:线性增加网速
  - 积式减少:发生拥塞或者错误时网速指数减少
- TCB:TCP 服务器和客户端连接时创造的内存片段

  - bbr 算法:发送速率非常大，做到刚好不丢包的速率（传输中数据包的数量为带宽\*延迟）
    时间戳
    TCP 时间戳用于“防止序列号回绕算法”，即防止序列号重复，时间戳不会重复，永远都是递增的
    选择确认（selective acknowledgment，SACK）
  - 允许接收的不连续的 TCP 流，只需要重发丢包的部分 TCP 流·，而不用所有 TCP 流重发
  - SACK 选项并不是强制的，仅当双端都支持时才会被使用。

  **TCP 连接的模型**

  - 服务器启动时创建套接字，端口处于监听状态。客户端创建套接字。
  - 客户端向服务器发送连接请求，经过三次握手建立连接，两边都有一个对象表示连接。
    - 三次握手，至少三次成功的单向通信，（客户端请求连接，服务器同意连接，客户端表示收到服务器的消息），保证双方连接的正确性；
  - 传输数据（确认，重传，编号）
    - 确认数据是否正确
    - 数据错误时重新传
    - 每个字节都有一个顺序号和确认号，每完成一次数据传输更新编号
  - 相互挥手，数据传输结束，连接断开
    - 一般情况 4 次挥手（客户端请求断开，服务器表示收到，服务器请求断开，客户端表示收到）
    - 3 次挥手（客户端请求断开，服务器表示收到并同时请求请求断开，客户端表示收到）只有刚好双方都没有该数据流任务时才有 3 次挥手
      ![TCP模型](https://i.loli.net/2020/07/14/ipW1aTYRJcryvnH.png)
      ![TCP状态图](https://i.loli.net/2020/07/14/PlaVbGHJF8XsvQk.jpg)

- TLS/SSL 基于 TCP 上的传输加密层，使数据在传输过程中不被中途的路由器获取内部所有信息

  - 非对称加密
  - 发送方的一对密钥（公钥 p1, 私钥 s1）；接收方的一对密钥（公钥 p2, 私钥 s2）
    - 公钥是公开的，双方都有彼此公钥
    - 发送方发送 P2(S1(M)), 接收方通过 P1(S2(P2(S1(M))) 解码出 M
      S2 解码 P2,P1 解码 S1，实现秘密通信

### 应用层

- 在传输层的数据协议之上的另一种协议（软件以应用层的协议解析其它软件发来的数据）
  - DNS:Domain Name System 将域名转化为 ip 地址的协议
    - 包裹在 UDP 的数据里
    - dhcp 服务器自动分配 DNS 地址，也可以自己填写；一般填写离自己最近的 DNS 服务器地址，速度更快；114.114.114.114/114.114.115.115
    - DDNS :动态 DNS,Dynamic Domain Name Server，动态域名服务，是把互联网域名指向可变 IP 地址的系统；DNS 只是提供了域名和 IP 地址之间的静态对应关系，当 IP 地址发生变化时，DNS 无法动态的更新域名和 IP 地址之间的对应关系，从而导致访问失败。
    - 全球只有 13 台根域名服务器
    - DNS 负载均衡:一个域名指向一组机器
  - dhcp 协议 动态主机配置协议（Dynamic host configuration protocol）
    - 局域网里面有 dhcp 服务器 ，它会告诉新来的网络设备一个配置信息（ip 地址，网关，dns 等信息），设备会自动设置这些信息然后可以访问网络
    - ip 地址租期:dhcp 分配的 ip 地址有限，每个设备的 ip 地址都有一个租用时间，网络设备长时间未访问网络 dhcp 会收回 ip 地址，不过一般网络设备都会自动续期
  - https: 由 HTTP 进行通信，但利用 SSL/TLS 来加密数据包 ,HTTP over TLS;
    - 首次通信需要一个第 3 方 CA 机构，防止有人中途冒充接对方
    - CA 其有一对密钥（公钥 RP, 私钥 RS）认证过程如下:
      - 其拿到发送方域名，公钥 P1, 再用自己的私钥 RS 对发送方数据进行电子签名，再将整个信息进行哈希处理，得到一个类型 MD5 值，电子证书发给接收方
      - 接收方确认 MD5 值无误后用 CA 机构的公钥解码得到发送方的域名和公钥，核对无误后即可以同意连接，后续双方就可以进行 TLS 加密通信

## HTTP

- Hypertext Transfer Protocol 超文本传输协议

  - 建立在 TCP 之上的请求响应模型，定义客户端和服务器之间交互的消息内容和步骤,数据以字符串的形式传递，包括协议的首部和头，所以 HTTP 协议是文件协议；
  - 其它协议是二进制协议，协议的包头中的数据都是以二进制形式编码的

  ![HTTP的基本思路](https://i.loli.net/2020/07/08/qY4hsfryb6PpAaF.png)
  URI 统一资源标识符:代表访问目标 Uniform Resource Identifier
  ![HTTP主要方法](https://i.loli.net/2020/07/08/JdW7esh3c2GQlwk.png)
  协议自身的头部都是文本。

```js
//请求消息
METHOD /foo/bar HTTP/1.1  //请求行
Host:www.bing.com   //浏览器用的什么域名访问的
User-Agent:Chrome Windows/10.3.2.4 //浏览器的标识字符串
Accept-Encoding:gzip，deflate
Referrer:url；//是哪个页面发来的请求，服务器可以根据这个信息防盗链
Accept-Language:zh-CN //消息头

request body  //消息体

//响应消息
HTTP/1.1 200 OK //状态行
Content-Type:text/html//url编码 application/json
Location:http://www.jd.com/
Date:Tue Jul 14 2020 14:57:31 GMT+0800 (中国标准时间)//消息头

message body//消息体
```

![HTTP消息的格式](https://i.loli.net/2020/07/08/4Gu5YTNeUvSJl8H.png)
![响应消息的状态码](https://i.loli.net/2020/07/08/eqmHZIw81uyJB53.png)

### HTTP 常见头部

HTTP 请求头:

- User-Agent 用户代理字符串，可以读到浏览器的内核，版本，操作系统版本等信息
- Host 浏览器使用什么域名进行的该次 http 请求

  > 一个服务器上可能有多个网站，不同的网站域名不同，但此种情况下 ip 相同。对于客户端来说，连接的 ip 是相同的，而 ip 在连接之前已经解析好的，在 tcp/ip 层服务器是不知道对方用什么域名连接的

- Referer 当前请求的资源的使用者是谁
  > 可以实现防盗链，如果服务器发现 referer 属于别的域名，可以返回空内容，或者返回一个版权声明的图片
  > 由于会把当前用户地址栏的完全地址发给资源所在服务器，有一定隐私风险，现在可以通过一定方式禁止浏览器发 referer 头
- Accept 可接受的媒体类型，q 代表期望值大小
- Accept-Encoding 可以接收的资源的响应体的压缩算法
- Accept-Language 期望接收的自然语言
- Content-Type 请求体/响应体的媒体类型及编码方式
- Content-length 请求体长度
- If-Modified-Since（请求）/Last-Modified（响应） 协商缓存，基于时间
- If-None-Match（请求） /ETag（响应）协商缓存，基于内容
- Connection:keep-alive 协商承载该 http 的 TCP 连接的状态。如果在同一个 tcp 上执行多个 http 请求/响应，需要配合 content-length 使用

  > Pipeline 管线化请求/响应 即无需等待响应收到后再在同一个连接上发下一个请求，而是可以一次性把所有请求都发过去，等待所有响应按序收到

- URL 编码
  - URL 会对一些特殊的字符进行转义编码，使用 %16 进制编码方式
  - encodeURLComponent() 通过 URL 编码方式编码特殊字符
    decodeURLComponent() 通过 URL 编码方式解码特殊字符

HTTP 响应头:

- Date 日期，响应时间，GMT
- Content-Encoding 响应体的压缩算法
- Content-Length 响应体的长度（如果压缩则是压缩之后的长度）
- Content-Type 响应体的媒体类型及编码方式
- ETag 响应体的哈希值
- Last-Modified 本资源的最后修改时间
- Server 服务器所使用的软件，一般服务器是不会响应这个头的

  > 因为如果某个服务器软件有漏洞，这么做相当于告诉别人服务器有漏洞

- Expires 本资源的过期时间，在这个过期时间之前，浏览器重新使用这个资源时可以不发请求
- Accept-Range:bytes 用来支持断点续传
- Referrer-Policy: origin-when-cross-origin, strict-origin-when-cross-origin 设置浏览器发送 Referer 策略,只需要在 html（即页面）的响应头里设置
- Transfer-Encoding: chunked 响应数据的传输方式，一段一段的发。
  > 当服务器无法预测响应体长度时使用。
  > 当使用这个功能时，一个 tcp 上就只能走这一个 http 请求了。tcp 连接断开时响应结束。
  > 有这个头时就没有 Content-Length 了
- content-disposition: attachment; filename="index.html" 该响应头触发浏览器弹出下载对话框，并在对话框里填写默认文件名为 filename
- X-Frame-Options 设置本页面能否被放入其它页面的 iframe

  deny 完全不允许被放入任何 iframe
  same-origin 可以被放入同源页面的 iframe 里

- Content-Security-Policy CSP 内容安全策略，只对 html 页面响应，设置本页面的各项安全相关的配置

  default-src 'none';
  base-uri 'self';

  block-all-mixed-content;
  禁用所有混合内容（即 https 页面里的 http 内容）

  connect-src 'self' uploads.github.com www.google-analytics.com github-cloud.s3.amazonaws.com wss://alive.github.com;
  页面里的 js 能够连接的目标服务器（ajax，其它方式的连接如 websocket）

  font-src github.githubassets.com;
  页面能够加载的字体来源

  form-action 'self' github.com gist.github.com;
  表单能够提交到的目标服务器

  frame-ancestors 'none';
  谁能做为本页面的 frame 祖先,能放在谁的 iframe 里

  frame-src render.githubusercontent.com;
  本页面的 iframe 可以加载来自哪里的页面

  img-src 'self' data: customer-stories-feed.github.com spotlights-feed.github.com;
  图片能够加载来自哪里的页面

  manifest-src 'self';
  manifest 能够加载来自哪里的

  media-src 'none';
  media 能够加载来自哪里的视频/音频等

  script-src github.githubassets.com;
  脚本能够加载来自哪里的

  > unsafe-inline 内联的，没写就不能加载`<div onclick="alert(2)"></div>`

  style-src github.githubassets.com;
  样式能够加载来自哪里的 `<div style="color:red">`

  worker-src github.com/socket-worker.js gist.github.com/socket-worker.js
  worker 的代码能够加载来自哪里的

  **Cache-Control** 缓存控制。可以做为请求头，也可以做为响应头
  提供对缓存策略的精细控制，内容可以是给浏览器看的，也可以是给服务器看的，还可以是给中间服务器看的。（面试重要）

* 常见响应状态码

  - 401 UnAuthorized 未授权，当前请求需要用户验证
  - 403 Forbidden 隐藏，服务器已经理解请求，但是拒绝执行它
  - 404 Not found 未找到，请求所希望得到的资源未被在服务器上发现
  - 406 Not Acceptable 不能返回符合要求的数据，请求头的 Accept 有问题
  - 452 Unavailable For Legal Reasons 非法资源，政治原因不可展示
  - 301 Move Permanently 永久移动到新的地址，以后访问请求新地址；
  - 302 Moved Temporarily 暂时移动到新的地址，以后访问还是请求旧地址
    - 以上 2 个要配合响应头 location:url 使用，表示跳转地址
  - 304 Not Modified 未更改

    - 协商缓存
      - If-Modified-Since（请求）/Last-Modified（响应）: 自上次访问以来资源未更新，返回 304
      - If-None-Match（请求 /ETag（响应）: 一个哈希值，如果这个值和服务器储存的对应值一样，表示资源未更新，返回 304
    - 强缓存 和 304 没有关系，主要是用于减轻浏览器负担
      - Expires: 日期；资源未过期都会储存在浏览器里，不用去加载
      - age :时间；本次请求以后该资源可以强缓存在浏览器里的时间长度
      - cache-control: 现在最常用的，可以在请求头里，也可以在响应头里，可以设置各种缓存，也可以设置为协商缓存；详细见 MDN

  - 501 Not implemented 未实现；此请求方法不被服务器支持且无法被处理。
    - 只有 GET 和 HEAD 是要求服务器支持的
  - 502 Internal Server Error 服务器内部错误

### 跨域问题

合理跨域:所要跨域请求的服务端资源的服务器以某种方式配合不同域的前端，如果服务端不配合，是不可以跨域的
跨域:只要请求资源的协议，域名，端口有一个不同就叫做跨域

#### 最现代的方式:CORS

cross origin resource sharing 跨域资源共享
一般由 XMLHttpRequest 发起的跨域 HTTP 请求需要 CORS 标准

- 预检请求
  - 需预检的请求必须首先使用 OPTIONS 方法发起一个预检请求到服务器，以获知服务器是否允许该实际请求
  - 一些简单的方法不会有预检请求（get/head/post）, 因为不能破坏 Web 的兼容性。
- 常用的 CORS 头
  响应头:
  Access-Control-Allow-Origin:url/\* 服务器允许的域
  Access-Control-Allow-Methods: POST, GET, OPTIONS 服务器允许使用这些方法
  Access-Control-Allow-Headers: X-PINGOTHER, Content-Type 服务器允许使用这些请求头
  Access-Control-Allow-Credientials:允许带上的凭据(cookie 头)
  Access-Control-max-age:60000 允许的有效期，有效期内不用再发预检请求，单位秒
  请求头:
  Access-Control-Request-Methods 请求期望带上的额外的头
  Access-Control-Request-Headers 请求期望使用的请求方法
  Origin:
  Referer:

#### 以前的方式

- 通过 html 的标签(img, video, script)的 src 属性引入的外域资源是不受限制的
  - 原理可能是因为早期设计的时候没有考虑周全，并且这样是拿不到源码的，script 标签通过 src 引入的内容是自动执行的
- JSONP
  - 通过 script 标签请求其他域的 js 文件，js 文件运行时为页面带来了所需的信息和数据。需要服务器的配合，只能用于 get 请求
  - 处理出错的情况？
  - 处理超时的情况？

```js
//jsonp的简单实现
function jsonp(url, callback) {
  var functionName = "JSONP_CALLBACK_" + Math.random().toString(16).slice(2);
  url = url + "&callback=" + functionName;
  var script = document.createElement("script");
  script.src = url;
  document.body.append(script);
  window[functionName] = callback;
  script.onload = function () {
    //执行完后把副作用删除
    document.body.removeChild(script);
    delete window[functionName];
  };
}

jsonp("http://wthrcdn.etouch.cn/weather_mini?city=杭州", function (info) {
  console.log(info);
});
```

- window.name window.name 这个值在页面跨域跳转时也不会改变，配合 iframe
- 服务器代理 服务器之间的通信没有跨域问题，让服务器去请求相关资源并返回给前端
- 两个不同的域的页面的通信
  - postMessage 可以实现跨域

### XMLHttpRequest //AJAX

浏览器端的 JavaScript 发送 HTTP 请求所用的接口.虽然它的名字里面有 “XML” 一词，但它可以操作任何数据，我们可以用它来上传/下载文件，跟踪进度等。

- 一般用于请求文本内容
- 发送请求
  - var xhr = new XMLHttpRequest() 构造一个请求对象
  - xhr.open（方法，请求的资源地址，是否异步（默认异步）) 配置请求，相当于设置请求模型起始行
    - 请求的资源地址以“/”开头，直接替换当前域名后的路径
    - 请求的资源地址不以“/”开头，替换当前路径最后一个 / 后面的内容
  - xhr.send（请求体） 发送请求，相当于设置请求体
    - 当为同步请求时（false）,xhr.send 函数只有在浏览器收到了响应才返回，才算执行完。send 在运行时，页面在发呆，不能和页面交互，不能选中文字，不能右键。如果请求资源过大会卡住（相当于浏览器在循环接收服务器发来的每一个字节，没法再进行其他操作）
    - 当为异步请求时（默认），xhr.send 函数触发请求的发送就返回，会立刻执行完，不会等着收完响应
  - xhr.responseText 当 send 返回时得到来自服务器的响应体；同步时会得到完整的响应体，**异步时要配合 load 事件，否则返回""，短时间拿不到返回**
  - xhr.status/xhr.statusText 得到请求的响应状态号和状态描述文字（200/Ok）

```js
//请求解析一个json
var xhr = new XMLHttpRequest(); //构建一个请求对象
xhr.open("GET", "https://xieranmaya.github.io/images/cats/cats.json");
xhr.send();
xhr.addEventListener('load'，console.log(xhr.responseText))
var cats = JSON.parse(xhr.responseText); //拿到请求数据，json解析出来的一个对象
xhr.getAllResponseHeaders(); //拿到请求头

```

- HTTP 沙箱
  - 同源策略，跨域限制（针对浏览器）
    浏览器禁止 js 对其它域名发送请求
    `Access-Control-Allow-Origin:*` //允许其他服务器访问
    js 只能操作协议，域名，端口都相同的服务器；
    cookie 是个例外，只有协议，域名相同，端口不同也会共享 cookie
- 抽象请求 AJAX

```js
function post(url, data, success) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  xhr.addEventListener("load", (e) => {
    success(JSON.parse(xhr.responseText));
  });
  xhr.send(data);
}

function get(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("get", url);
  xhr.onload = function () {
    if (xhr.status < 400) {
      //请求，响应正常结束
      callback(JSON.parse(xhr.responseText));
    } else {
      // 网络 ok，响应为 4xx 或 5xx
      callback(null, xhr);
    }
  };
  xhr.onerror = function () {
    // 请求没有发出去，连接都没有建立
    callback(null, new Error("Network break"));
  };
}
xhr.send();

get("http://www.xxx.com/a/b", function (data, error) {
  if ((data = null)) {
    //出错
  } else {
    //成功
  }
});
```

### 异步 async 任务队列 jQuery TaskQueue

```js
function parallel(tasks, cb) {
  //多个任务并行，全执行完调用callback
  var count = 0;
  for (let task of tasks) {
    task(() => {
      count++;
      if (count == tasks.length) {
        cb();
      }
    });
  }
}

function series(tasks, cb) {
  //一个任务执行完才能执行下一个,全执行完执行callback
  var i = 0;
  startOneTask();
  function startOneTask() {
    if (i < tasks.length) {
      tasks[i++](() => {
        startOneTask();
      });
    } else {
      cb();
    }
  }
}

function parallel(tasks, cb) {
  parallelLimit(tasks, tasks.length, cb);
}
function series(tasks, cb) {
  parallelLimit(tasks, 1, cb);
}
function parallelLimit(tasks, limit, cb) {
  //最多limit个任务同时运行
  var i = 0;
  var completedCount = 0;
  for (var j = 0; j < limit; j++) {
    one();
  }
  function one() {
    if (i < tasks.length) {
      //只能判断所有任务都启动了，不能判断都结束了，还得计数
      tasks[i++](() => {
        completedCount++;
        if (completedCount == tasks.length) {
          cb();
        } else {
          one();
        }
      });
    }
  }
}

asyncMap(
  [1, 2, 3, 4],
  function mapper(it, cb) {
    setTimeout(() => cb(null, it * it));
  }, //异步具有传染性
  function (err, mapped) {
    console.log(mapped);
  }
);
function asyncMap(ary, mapper, cb) {
  //任务队列，但是必须提前准备好任务，不能临时加任务
  var result = [];
  var count = 0;
  for (let i = 0; i < ary.length; i++) {
    mapper(ary[i], function (err, value) {
      result[i] = value;
      count++;
      if (count == ary.length) {
        cb(null, result);
      }
    });
  }
}

asyncFilter(
  [1, 2, 3, 4],
  function test(it, cb) {
    setTimeout(() => {
      cb(null, it % 2 == 1);
    }, 200);
  },
  function (err, filtered) {
    console.log(filtered);
  }
);

function asyncFilter(ary, test, cb) {
  var result = new Array(ary.length).fill(false);
  var count = 0;
  for (let i = 0; i < ary.length; i++) {
    test(ary[i], function (err, pass) {
      if (pass) {
        result[i] = true; //通过测试的
      }
      count++;
      if (count == ary.length) {
        //调用完了
        var filtered = ary.filter((_, idx) => result[idx]); //用result来过滤数组，相同坐标为true，是通过测试的
        cb(null, filtered);
      }
    });
  }
}

class TaskQueue {
  //jQuery任务队列实现，可以临时加任务
  constructor() {
    this.tasks = [];
    this.hasTaskRunning = false;
  }
  next = () => {
    //用箭头函数,这个this永远指向实例
    if (this.tasks.length) {
      let task = this.tasks.shift();
      task(this.next);
    } else {
      this.hasTaskRunning = false;
    }
  };
  addTask(task) {
    if (this.hasTaskRunning) {
      this.tasks.push(task);
    } else {
      this.hasTaskRunning = true;
      task(this.next);
    }
    return this;
  }
}

//jQuery的promise实现
var dfd = $dererred();
dfd.promise;
dfd.resolve;
dfd.reject;

function dererred() {
  var dfd = {};
  dfd.promise = new Promise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
}
```

### Promise

- var promise = new Promise((resolve,reject)=>{})

  - 构造器里面传递一个异步函数 executor，该函数有两个类型为函数的参数 resolve,reject，该异步函数有错误时执行 reject 函数，没有错误时执行 resolve 函数。executor 会马上运行，里面的 resolve/reject 函数会异步运行。
  - 1 个 promise 对象代表一个异步操作的结果
    ![](https://i.loli.net/2020/07/22/PNoOaEzvhdpmFr6.png)
  - [[PromiseStatus]] 表示 promise 的状态，有 rejected（已拒绝）和 resolved（已解决）和 pending（待定，初始状态）,settled（包括 rejected 和 resolved)
  - [[PromiseValue]] 表示 reject 或者 reject 状态的返回值，这个值一旦确定就无法变更，以第一次的值为准。executor 完成的工作只能有一个 result 或一个 error
  - 异步函数永远比调用栈后面的同步函数后执行，即使延迟时间为 0

- promise.then(f1,f2)
  如果异步函数状态为 resolved 执行 f1，状态为 rejected 执行 f2;
  f1 或者 f2 的参数是 promise 的 [[PromiseValue]]
  f1 和 f2 函数都要有返回值
  promise.then 的返回值是一个新的 promise 对象
- promise1 = promise.then(f1,f2)
  如果 f1 或者 f2 正常执行，那么 promise1 的状态就是 resolve，promise1.then(f3,f4) 会执行 f3
  如果 f1 或者 f2 抛出了一个错误（throw），那么 promise1 的状态就是 reject，promise1.then(f3,f4) 会执行 f4
  如果 f1 或者 f2 返回了一个新的 promise，那么 promise1 就是返回的新的 promise 对象，promise1.then(f3,f4) 的执行方式取决于新 promise 对象的状态
- 如果 promise.then() 里面没有传递参数或参数不是函数,会跳过这个.then 称为 promise 穿透
  p2 = p1.then() 相当于下面
  p2 = p1.then(val=>val,reason=>{throw reason})
- 如果 promise.then() 里面没有传递第一个参数，可以用 catch 代替 then
  p2 = p1.then(null,f1) 相当于下面
  p2 = p1.catch(f1)
- promise 的链式跳转
  p1.then(f1).catch(f2).then(f3).catch(f4)
  promise 状态为 resolve 直接可以跳转执行 then，为 reject 可以跳转执行 catch
- promise.finally(f)
- Promise.resolve(val)
  创建一个 [[PromiseStatus]]: "resolved"，[[PromiseValue]]: val 的 promise
- Promise.reject(val)
  创建一个 [[PromiseStatus]]: "rejected"，[[PromiseValue]]: val 的 promise
- Promise.race(promises) 返回一个在迭代器中遇到的第一个状态确定（settled）的 promise
- Promise.all(promises) 返回一个 promise 实例，
  如果迭代器中所有的 promise 参数状态都是 resolved, 则 promise 实例的状态为 resolved，其 [[PromiseValue]] 为每个参数的 [[PromiseValue]] 组成的数组；
  如果参数中的 promise 有一个失败（rejected），此实例的状态为 rejected，其 [[PromiseValue]] 为是第一个失败 promise 的 [[PromiseValue]]
- Promise.allSettled (promises) 返回一个 promise，该 promise 在迭代器所有给定的 promise 已被解析或被拒绝后解析，返回的 promise 的 [[PromiseValue]] 值是一个对象数组，每个对象都描述迭代器里每个 promise 的结果（状态和返回值）

```js
//相关方法的实现及例子
function getJSON(url) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.open("get", url);
    xhr.onload = () => {
      if (xhr.status < 400) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(JSON.parse(xhr.responseText));
      }
    };
    xhr.onerror = (e) => reject(e);
    xhr.send();
  });
}

Promise.resolve = function (value) {
  return new Promise((resolve) => {
    resolve(value);
  });
};

function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

Promise.resolve()
  .then(() => {
    console.log(1);
    return sleep(1000);
  })
  .then(() => {
    console.log(1);
    return sleep(1000);
  })
  .then(() => {
    console.log(1);
    return sleep(1000);
  })
  .then(() => {
    console.log(1);
    return sleep(1000);
  })
  .then(() => {
    console.log(1);
    return sleep(1000);
  });

Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    let result = new Array(promises.length);
    if (promises.length) {
      let count = 0;
      for (let i = 0; i < promises.length; i++) {
        let promise = promises[i];
        Promise.resolve(promise).then(
          //确保promise一定是promise，如果不是，把它转换成promise
          (value) => {
            result[i] = value;
            count++;
            if (count == promises.length) {
              resolve(result);
            }
          },
          (reason) => {
            reject(reason);
          }
        );
      }
    } else {
      resolve(result);
    }
  });
};

Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then(resolve, reject);
    }
  });
};

Promise.allSettled = function (promises) {
  return new Promise((resolve) => {
    let result = [];
    let count = 0;
    if (promises.length) {
      for (let i = 0; i < promises.length; i++) {
        let promise = Promise.resolve(promises[i]);
        promise.then(
          (value) => {
            result[i] = {
              status: "fulfilled",
              value,
            };
            count++;
            if (count == promises.length) {
              //确定resolve执行完毕
              resolve(result);
            }
          },
          (reason) => {
            result[i] = {
              status: "rejected",
              reason,
            };
            count++;
            if (count == promises.length) {
              //确定rejected执行完毕
              resolve(result);
            }
          }
        );
      }
    } else {
      resolve(result);
    }
  });
};
```

- [promise 经典错误](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html?tdsourcetag=s_pctim_aiomsg)
- [并行加载，串行显示](https://developers.google.com/web/fundamentals/primers/promises?hl=zh-cn&tdsourcetag=s_pctim_aiomsg)

```js
//并行加载，串行显示
story.chapterUrls
  .map((url) => getJson(url)) //先创建所有的promise,同时开始加载
  .reduce((seq, chapterPromise) => {
    return seq
      .then(() => chapterPromise)
      .then((chapter) => {
        //确保显示顺序，前面的加载完才能显示后面的
        addHtmlToPage(chapter.html);
      });
  }, Promise.resolve())
  .then(() => {
    removeLoading();
  });
```

## ES6

### generator 生成器函数

调用生成器函数，返回生成器。

- 必要构成，1 个'\*'号和 yield 运算符
  ```js
  function* gen() {
    a = yield 1;
    b = yield 2;
    c = yield 3;
    d = yield 4;
  }
  var g1 = gen(); //gen 是生成器，g1 是迭代器
  g1.next(); //=>{value: 1, done: false} 此时函数暂停在第一个 = 号右边
  g1.next(88); //=>{value: 2, done: false} 此时函数暂停在第二个 = 号右边，完成上一个 = 号赋值，a=88
  g1.next(99); //=>{value: 3, done: false} 此时函数暂停在第三个 = 号右边，完成上一个 = 号赋值，b=99
  g1.next(77); //=>{value: 4, done: false} 此时函数暂停在第四个 = 号右边，完成上一个 = 号赋值，c=77
  g1.next(55); //=>{value: undefined, done: true} 此时函数运行完毕，完成上一个 = 号赋值，d=55
  ```
- next 属性返回一个对象，里面 value 是当前 yield 后面的值，done 表示当前生成器有没有运行完
- 生成器 next() 里面的参数，会赋值给上一个 yield 左边
- return()；结束函数
  `g1.return(8)=>{value: 8, done: true}` 此时函数从上一个暂停的地方立即停止，返回一个值
- throw() 此时函数从上一个暂停的地方抛出一个错误，需要一个 try{}catch{}语句配合使用，try{}catch{}语句里面的函数没有运行，try{}catch{}语句结束后下面的代码继续执行
- 生成器的嵌套
  还是按照顺序执行，遇到嵌套的生成器会进入生成器执行其代码，一步一步执行完该生成器后接着执行外面的代码，直到整个代码执行完毕
  ```js
  function* gen() {
    a = yield 1;
    b = yield* g2;
    c = yield* g3;
    d = yield 4;
  }
  ```
- ... 展开预算符可以展开生成器得到一个迭代器 value 属性值的数组集合
  [...g1] = [1,2,3,4]

- for of 可以直接拿到迭代器里面的 value 属性值
  for( let nums of g1){} => nums 依次为 1,2,3,4,
  实现 forOf

  ```js
  function forOf(generator, action) {
    var iterator = generator.next();
    while (!iterator.done) {
      action(iterator.value);
      if (!action(iterator.value)) {
        generator.return;
        break;
      }
      iterator = generator.next();
    }
  }
  ```

- 异步回调函数和 promise 函数的转化

```js
//将基于callback的函数转换为返回promise的函数
function promisify(cbFunc) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      cbFunction(...args, (err, data) => {
        // data异步调用args后得到的结果
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  };
}
//将基于promise的函数转换为一个基于回调的函数
function callbackify(promiseFunc) {
  return function (...args) {
    var cb = args.pop(); //取出回调函数
    promiseFunc(...args).then(
      (val) => {
        cb(null, val);
      },
      (reason) => {
        cb(reason);
      }
    );
  };
}
```

- 生成器函数和 promise 结合替代异步调用 (async await 的原理）

```js
function run(generatorFunction) {
  return new Promise((resolve, reject) => {
    var generator = generatorFunction();
    var generated;
    try {
      generated = generator.next();
      step();
    } catch (e) {
      reject(e);
    }
    function step() {
      if (!generated.done) {
        generated.value.then(
          (val) => {
            try {
              generated = generator.next(val);
              step();
              // generated.value是一个promise, val 在生成器函数中完成赋值，从而可以在生成器函数中操作 val ，这个val可以赋值到=号右边，这样就可以拿到异步结果
            } catch (e) {
              reject(e);
            }
          },
          (reason) => {
            try {
              generated = generator.throw(reason);
              step();
            } catch (e) {
              reject(e);
            }
          }
        );
      } else {
        resolve(generated.value);
      }
    }
  });
}

//核心
function run(generatorFunction, ...args) {
  var generator = generatorFunction(...args);
  var generated = generator.next();
  tick();
  function tick() {
    generated.value.then((val) => {
      generated = generator.next();
      tick();
    });
  }
}

//实例
function loadStory() {
  var story = await getJSON('story.json')
  var chapterPromises = story.chapters.map(getJSON)//同时加载了
  for (var chapterPromise of chapterPromises) {
    var chapter = await chapterPromise
    addToPage(chapter)
  }
}
```

[async+await](https://medium.com/@bluepnume/even-with-async-await-you-probably-still-need-promises-9b259854c161)

- async + 生成器函数 function {await :promise 函数}
  async 函数就是将 Generator 函数的星号（\*）替换成 async，将 yield 替换成 await；async 函数对 Generator 函数的改进，配合 promise 使用，包装原理如上；并且 function() 返回一个 promise

```js
    async function showStory(storyUrl) {
    var story = await getJSON(storyUrl)
    //story 会接收 promise 函数返回的结果
    for(var chapterUrl of story.chapterUrls) {
      var chapter = await getJSON(chapterUrl)
      addContentToPage(chapter)//串形加载，串形调用
    }
    }
    async function showStory(storyUrl) {
    var story = await getJSON(storyUrl)
    var chapterPromises = story.chapterUrls.map(getJSON)
    for(var chapterPromise of chapterPromises) {
      var chapter = await chapterPromise
      addContentToPage(chapter)//并行加载，串形调用
    }
```

### Symbol

- ES6 里添加得到一种原始数据类型，不能用 new 调用，可以用 type of 检测类型——>symbol。
- 表示是一个唯一的标识符（符号）, Symbol() 可以作为对象的属性名，目前这个也是其主要作用；
- `var a = Symbol() ,b = Symbol(); a === b =>false` 唯一的
- Symbol 也无法进行隐式类型转换，会报错——>a + 2 会报错.可以用 toString()进行类型转换
- Symbol.for（可以理解位为 Symbol 取名）可共享的 Symbol,可以用来让不同的对象使用同一个 Symbol 属性
  `a = Symbol.for("aa");b = Symbol.for("aa")；a === b =>true`
  读取:
- Symbol.iterator
  Symbol.iterator 为每一个对象定义了默认的迭代器。该迭代器可以被 for...of 循环使用。
  ```js
  var myIterable = {};
  myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
  };
  [...myIterable]; // [1, 2, 3]
  ```
- 一些内置类型拥有默认的迭代器行为（有 Symbol.iterator 的方法），如 Array，String，Map，Set，TypeArray，可以直接使用 for of 循环调用
- Symbol 实现私有属性
  ```js
  unction () {
  var age = Symbol();
  window.People = class People {
  constructor(name, gender, theAge) {
  this.name = name;
  this.gender = gender;
  this[age] = theAge;
  }
  getAge() {
  if ((this.gender = "f")) {
  return 18;
  } else {
  return this[age];
  }
  }
  };
  ();
  ```

## 模块
commonjs
- require 函数

```js
(function () {
  function readFile(filename) {
    var xhr = new XMLHttpRequest();
    xhr.open("get", filename, false);//同步，不行，要卡
    xhr.send();
    return xhr.responseText;
  }
  require.cache = {};
  function require(filename) {
    //路径问题？base自己
    if (require.cache.hasOwnProperty(filename)) {
      return require.cache[filename].exports;
    }
    var modFunc = new Function(
      "require",
      "module",
      "exports",
      readFile(filename)
    );
    var module = { exports: {} };
    require.cache[filename] = module; //最终导出的是module.exports;引用类型，先放在缓存上，解决循环依赖的问题，可以防止爆栈；但是后续只能异步访问
    modFunc(require, module, module.exports, readFile(filename));
    return module.exports;
  }
})();
}
```

- 模块加载性能问题
  - 模块的相互依赖会形成树状结构，模块过多会导致加载时间慢
  - 解决方法
    - 方法 1
      找到所有路径的 require 调用，加载入口模块并递归解析其所有的依赖，并收集所有的源代码，映射在一起 Map(path:sourceCode), 再正常运行 require 函数；
    - 方法 2
      通过 define 函数；将路径放到 script 中加载，同时触发路径里面 define 函数（拿到模块函数），建立模块函数的缓存 Map(path:modFuncCache)，再正常运行 require 函数（这种情况都可以不用函数构造器，已经有模块函数的缓存；而且可以跨域请求资源，利用了 scrip 标签的跨域性能）
    - 方法 3
      通过 webpack 实现自动生成模块函数，其本质和上面是一样的，找到所有的缓存，然后通过 node.js 里面的 fs 模块自动生成一个新的模块函数 js 文件
  - 为什么 ajax 请求不能跨域而 link script img 标签可以
    link script img 引用外部文件拿不到外部文件的源代码，而是直接信任该资源直接执行，所有这些标签可以跨域引用资源
    ajax 请求是直接拿到外部文件的源代码信息，浏览器的同源策略认为服务器不信任非同源的客户端，所有会阻止源代码信息的传递，这个是 ajax 不能异步跨域的原因
- 接口设计
<hr>



```js
//模块化
var xx = require("chosen-js");
import xxx, { funcName, funcName } from "url"; //前面是默认导出的，后面是有名字的
import * as xx from "url";
//默认导入import name(随便起),以及非默认func from "xxx"
//默认导出export default func;
//具名导出 export func abc(){} /let/var/const
//可以在js末尾统一导出 export{funcName,funcName...}
//export * from xxx;
//导入的script 的 type:module

(function () {
  function readFile(filename) {
    var xhr = new XMLHttpRequest();
    xhr.open("get", filename, false); //同步，不行，要卡
    xhr.send();
    return xhr.responseText;
  }
  require.cache = {};
  function require(filename) {
    //路径问题？base自己
    if (require.cache.hasOwnProperty(filename)) {
      return require.cache[filename].exports;
    }
    var modFunc = new Function("require", "module", "exports", readFile(filename));
    var module = { exports: {} };
    require.cache[filename] = module; //最终导出的是module.exports;引用类型，先放在缓存上，解决循环依赖的问题，可以防止爆栈；但是后续只能异步访问
    modFunc(require, module, module.exports, readFile(filename));
    return module.exports;
  }
})();
//异步
(function () {
  function readFile(filename) {
    var xhr = new XMLHttpRequest();
    xhr.open("get", filename);
    xhr.send();
    return xhr.responseText;
  }
  require.cache = {};
  window.require = require;
  function require(filename) {
    //路径问题？base自己
    if (require.cache.hasOwnProperty(filename)) {
      return require.cache[filename].exports;
    }
    var fileContent = readFile(filename);
    var modFunc = new Function("require", "module", "exports", fileContent);
    var module = { exports: {} };
    require.cache[filename] = module; //最终导出的是module.exports;引用类型，先放在缓存上，解决循环依赖的问题，可以防止爆栈；但是后续只能异步访问
    modFunc(require, module, module.exports, readFile(filename));
    return module.exports;
  }
})();
function readFile(filename) {
  return new Promise((resolve) => {
    var xhr = new XMLHttpRequest();
    xhr.open("get", filename);
    xhr.onload = () => {
      fileCache[filename] = xhr.responseText;
      resolve(xhr.responseText);
    };
    xhr.send();
  });
}
//三个异步版本，async+promise+callback
async function loadAllDeps(entryFile) {
  var entryCode = await readFile(entryFile);
  var deps = getAllDeps(entryCode);
  await Promise.all(deps.map(loadAllDeps));
  return;
}

function loadAllDeps(entryFile) {
  readFile(entryFile).then((entryCode) => {
    var deps = getAllDeps(entryCode);
    return Promise.all(deps.map(loadAllDeps));
  });
}

function loadAllDeps(entryFile, cb) {
  readFile(entryFile, (entryCode) => {
    var deps = getAllDeps(entryCode);
    if (deps.length) {
      var count = 0;
      for (var dep of deps) {
        loadAllDeps(dep, () => {
          count++;
          if (count == deps.length) {
            cb();
          }
        });
      }
    } else {
      cb();
    }
  });
}

function loadAllDeps(entryFile) {
  //同步版本
  var entryCode = readFile(entryFile);
  var deps = getAllDeps(entryCode);
  deps.map(loadAllDeps);
}
```

# Node.js

- 在操作系统的环境下运行，可以访问操作系统提供的一系列功能

- 没有同源策略限制

- 用偶数版本，最好用 LTS 版本,long term support

- Node.js 是一个 JS 的运行环境（RunTime）

- Node.js 是事件驱动的

- 用途

  - 高性能 web 服务器（异步实现）
  - 前端工程化 即全端系统化、模块化、规范化的一个过程
    - 打包（webpack）
    - Electron （融合了浏览器的 dom 功能和 node.js 的相关模块功能，做一个桌面软件，如 Vscode）
    - 转义（es6=>es5,less/sass=>css）, 浏览器的兼容性
    - 源代码的压缩混淆，把源代码转化为不可读，改变形参的名字
    - 爬虫，命令行程序的编写等

- 适合处理 I/O 密集型任务 // CPU 密集型及 I/O 密集型

  > IO 输入输出操作是指内存和外部设备（如磁盘、终端和网络）之间复制数据的过程。node 希望把异步 IO 做的简单且方便。

  同步与异步指的是进程/线程的调用方式。而阻塞与非阻塞的概念是针对 IO 状态而言，关注的是程序在等待 IO 调用返回这段时间的状态。

  > 同步调用会造成调用进程的 IO 阻塞，异步调用不会造成调用进程的 IO 阻塞。 ——《Unix 网络编程》第三版 6.2

  **IO 编程模型:**

  1. blocking I/O 阻塞 IO

  2. non-blocking I/O 非阻塞 IO

  3. I/O multiplexing（select and poll）事件驱动 IO

  4. signal driven I/O（SIGIO）不常用

  5. asynchronous I/O（the POSIX aio_functions） 异步 IO

- 并行与并发

  - 并发是假设有两对人排队，但只有一个取票机，为了公平起见，先由队列一排头的人上前取票，再由队列二的一个人上前取票，两个队列都在向前移动。
  - 并行同样是两队人排队取票，不同的是开放了两个取票机，那么两个队列可以同时向前移动，速度是一个窗口的两倍以上（避免了一个窗口在两个队列间切换）。
  - 并发和并行对应了两种需求，一个是希望计算机做更多的事（处理多个队列），另一个是希望计算机能更快地完成任务（让队列以更快的速度向前移动）。
  - **node 中的并发**
    - <u>单线程支持高并发</u>，通常都是依靠异步+事件驱动（循环）来实现的，异步使得代码在面临多个请求时不会发生阻塞，事件循环提供了 IO 调用结束后调用回调函数的能力。

- 进程和线程

  - 语言能否开启多线程，取决于环境的是否提供这样的能力。
    说 JS 是单线程的，指的是在浏览器中的 JS 都在一个单独的线程里执行，同时这个线程还执行布局，绘制等操作。并不是说浏览器是单线程的。
    我们执行的很多异步的操作都是在浏览器的其他线程内执行的，执行完成后的回调依然在主线程执行。也就是说，异步必然由多线程实现。
  - 进程是资源分配的最小单位，线程是 CPU 调度的最小单位
  - 进程就是包括上下文切换的程序执行时间总和 = CPU 加载上下文 +CPU 执行 +CPU 保存上下文
  - 一个进程里面可以有多个线程，线程是共享了进程的上下文环境，的更为细小的 CPU 时间段
  - 进程和线程都是一个时间段的描述，是 CPU 工作时间段的描述，不过是颗粒大小不同
  - CPU 运行一个软件相当于打开一个了进程，执行该软件里面的 1 个功能相当于打开一个线程
  - [进程与线程的区别](https://www.zhihu.com/question/25532384/answer/81152571)

- 常用命令

  - nodemon xxx.js 以 nodemon 启动某 js 文件，文件修改时客户端同步更新

  - `node xxx.js arguments` 给 xxx.js 传递参数 arguments:通过 process.argv 接收 arguments。process.argv 返回一个数组，第一项是 node 的运行路径，第二项是 xxx.js 文件路径，第三项开始是 arguments(process.argv[2])

  - process 一个全局对象，每个 Node 进程都有独立的 process 对象，存储了当前进程的环境变量，也定义了一些事件。

    - process.exit(0) 正常结束一个脚本模块
    - process.cwd() 当前工作目录
    - process.pid 当前进程 ID

  - global 全局对象

    node 里面的 this:在 Node repl 环境中控制台的全局 this 和 global 可以看作是同一对象，脚本文件中的 this 指向 module.exports.

    node 中的作用域:全局作用域，模块作用域，

  - node.js 的调试
    `node --inspect[-brk][=ip端口号] script.js arguments node.js` 在指定地址端口调试
    `ndb node --inspect-brk script.js arguments` `ndb node --inspect-brk=ip 地址端口号 script.js arguments node.js` 调试功能在指定地址端口

  - http server 开启网络服务
    npm install http-server -g 通过 npm 安装
    http-server 使用命令

  - npm 的初始化
    npm init 在某个地址初始化 npm 后会创建 node_modules 文件夹，之后安装的模块都在里面

  - dirname 模块所在文件夹的绝对路径，全局变量
    filename 模块本身目录的绝对路径 ，全局变量

## node 模块

- 路径分析 require(X) require 是如何找到需要的文件的？

  - 如果 X 是路径，直接加载对应路径的文件
  - 如果 X 是内置模块，直接返回内置模块
  - 在当前文件夹的 node_modules 文件夹里面找到名为 X 的文件
    如果此文件夹里面有 package.json, 则加载 main 字段指向的文件
    如果此文件夹里面没有 package.json，则加载此文件夹里面的 index.js 文件
    在当前文件夹的 node_modules 文件夹里面找不到名为 X 的文件
    则往其父文件夹找 node_modules, 顺着往上找，像原型链的查找
  - 路径
    '/' 系统根目录
    './' ，'.' 当前目录
    '../'父目录

### 文件模块

    - 主要方法
      fs.readFile（path，'utf8',（error，data）=>{}) 读取当前路径文件
      fs.writeFile（path，'text'，(error)=>{}) 为当前路径的文件写入内容，没有该文件会创造一个文件

      ```js
      fs.writeFile('08.js', 'hello', error => {//一次性写入
        if (error) {
          console.log(error)
        } else {
          console.log('ok')
        }
      })
      function writeFileP() {//返回promise
        return new Promise((resolve, reject) => {
          fs.writeFile(...args, (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          });
        });
      }
      ```



    - fs.readdirSync（path) 读取路径上的文件夹所有文件名，返回一个数组；加上Sync，是对应的同步方法
      {withFileTypes:true} 存在的话，数组的每一项都有 isFile() 和 isDirectory() 方法
      fs.stat（path，（error,data)=>{}) 获取文件信息，里面有 isFile() 和 isDirectory() 方法判断文件类型
      fs.rename（path，newname,()=>{}) 重命名,相当于剪切
      fs.unlink（path，(error)=>{}) 删除一个文件(remove)
      fs.openSync（path） 返回文件描述符

    - 同步函数只需要加一个 Sync ，fs.readFileSync

    - fs =fs.require('fs').promises 将模块所有异步函数转化为返回一个 promise 的函数

    - fd file descriptor 文件描述符 用一个整数表示（可读可写等）

### HTTP 模块

    - const server = http.createServer((request,response)=>{}) 创造 http 服务器，当服务器收到客户端 http 请求时触发，相当于绑定了一个 request 帧听事件

      server.on(‘connection’,{res,req}=>{})

      server.on(‘request’,{res,req}=>{})

      - request 是一个对象，是IncomingMessage的实例，里面有客户端请求的各种信息（method,url,header 等）

        req.on(‘data’,func)

        req.on(‘end’,func)

      - response 是一个对象，是ServerResponse的实例，也是一个writableStream实例，里面编辑发送给客户端的信息（响应体，响应头等），发完之后调用 response.end()

        ```js
        res.statusCode = 200/404

        res.setHeader(‘Content-Type’,’application/json’)//只能设置单个属性
        res.writeHead(200,{//一次性设置状态码和所有响应头
        xx:xxxxx,
        xx:ooooo
        })
        res.write('<html>')//res可以直接写入response body
        res.write('<body>')
        res.write('<p>hhhhhhh</p>')
        res.write('</body>')
        res.write('</html>')
        res.end()//写入完成后调用end将stream发往客户端
        //也可以直接把request body 作为end的参数返回
        res.end('<html><body><p>gewgaw</p></body></html>')
        ```

​

    - 两个服务器之间也可以通过 http 模块建立 http 连接，利用 http.request() 函数充当客户端
      http.request({请求的网络配置}，f(response){收到对方的响应对象})

      http模块也可以作为客户端向服务器发起请求，例如http.get(url,cb)

    - index.html 导航页 每个网站首页基本都是这个文件，储存在网站服务器里面

### Stream 模块

    - 一种数据传输的模型

      - 一片一片的传输数据
      - 传输速度是可控的，不同类型的流速度不一样
      - 减少 CPU 内存占用（超过 CPU 的最大缓存内存可以暂停接收）

    - 流的类型

      - 可读流 类似将数据读取到 CPU Readable
      - 可写流 类似将数据写入到硬盘 Writable
      - 既可读又可写，如 TCP/net.Socket Duplex
      - 转化流 如 zip 压缩 Transform
      - const { Readable，Writable} = require('stream')

    - 主要的方法和事件

      - rs = fs.createReadStream(path) 创造从某个路径文件读取数据的可读流

        事件:‘data’,’close’,’end’,’error’,’readable’

      - ws = fs.createWriteStream(path) 创造向某个路径文件写入数据的可写流

        事件:‘close’,’drain’,’error’,’finish’,’pipe’

      - ws.write(data) 可写流都有 write 方法，向目标 path 写入数据；可写流的 finish 事件，end 之后缓冲区里面的数据全部处理完了之后触发

      - rs 可读流通过监听 data 事件，end 事件，readable 事件（自身缓冲区有准备好的数据）来操作数据传输

      - pause() 方法，暂停流的传输； resume() 方法 ，恢复流的传输；end() 方法，告知已经没有数据传递给该流了；destory() 销毁该流；以上都是所有流的通用方法

      - drain 事件，表示流的缓存区数据都已经传输到了下一级，一般通过该事件让上一级恢复流的传输

      - pipe 连接两个流的管道，可链式调用；rs.pipe(ws) 从可读流出来的数据进入到可写流

    - process 相关的 3 个标准流对象
      process.stdout 当前进程标准输出流，本进程输出的东西，默认情况下是输出到控制台；

      - 对于自己是一个可写流，可以 pipe 到一个可读流里面
        process.stderr 当前进程标准错误流，本进程输出的错误，默认情况下是输出到控制台
        process.stdin 当前进程的标准输入流，别的进程给本进程输入的东西
      - 对于自己是一个可读流，可以 pipe 到一个可写流里面

- net 模块

  - socket.write() 服务器向客户端发送数据
  - socket.end() 服务器向客户端发送 FIN 包中断连接，注意 end 后不能再 write，会报错
  - socket.on('data',callback) 服务器接收到客户端发送数据时触发
  - socket.on("end",callback) 服务器接收到客户端发送 fin 包时触发

- Buffer 数据类型，十六进制字符串；提供一段储存数据的原始字节流，是一个表示内存片段的类数组

  - b = Buffer.alloc(16 ) 构造 10 个字节的 buffer, 数据已清空
    c = Buffer.allocUnsafe(10) 构造 10 个字节的 buffer，数据未清空
    d = Buffer.from(value，[utf8/base64]) 返回一个新的 buffer，通过相关协议解析处理的 buffer

    Buffer.concat(list,[totalLength]) 把数组里的 buffer 全部拼接在一起

    buffer.toString([encoding],[start],[end])把一个 buffer 对象转成字符串形式，默认采用 utf-8 编码并转换整个对象

  - TypedArray 描述一个底层的二进制数据缓存区的一个类似数组 (array-like) 视图，可以直接操作内存，性能非常快；
    应用:canvas,B 站 flv.js；直接操作二进制字节流
    https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

- Child Process 子进程 require('child_process')

  - 主要用来运行计算机已经装好的其它程序
  - child_process.exec（命令，(err,stdout)=>{})

- mime 模块 判断媒体类型，需要安装
  mime = require('mime')
  mime.getType(path) 得到媒体类型 如'text/html'
  mime.getExtension(path) 得到扩展名

- Path 模块 path = require('path')
  path.resolve([path1],path2) path1 和 path2 合并得到的路径;基于当前工作目录

  path.join(path1,path2)，直接连接两个路径

  path.relative(path1,path2) path1 怎样操作到 path2

  path.basename(path) 拿到文件的名字
  Path.dirname(path) 拿到文件夹的名字
  path.extname(path) 拿到扩展名
  path.normalize(path) 化简路径
  path.sep 判断系统路径用、还是 /

- qs 模块 var queryParse = require('querystring') 调用 node 上面的'querystring'模块，可以解析 http 协议的 query 字符串数据
  queryParse.parse(query)

- DNS 模块
  封装了 DNS 协议，node 自己解析域名，自己不用发 UDP 数据包

- readline 模块
  从标准输入流中按行读入数据

- OS 模块 读取当前操作系统的相关信息

- VM 模块
  虚拟机，创建一个可以运行 js 代码的虚拟机，并定义一个全局作用域，js 代码不会影响到虚拟机全局作用域外面的内容

- cluster 集群
  多个进程都启动 node，对于复杂的运算可以分配任务到多个进程

- Worker Thread 和 js 中的 worker 功能一样

### Events

- EventEmitier 类，所有能触发事件的对象都是他的实例

  ```js
  var e = new EventEmitter();
  e.on("eventName", hander); //绑定事件
  e.off("eventName", hander); //解绑事件
  e.emit("eventName"); //触发事件
  console.log(e.eventNames()); //输出包含全部事件名称的数组
  ```

  函数实现:

  ```js
    class EventEmitter {
      constructor() {
      this._events = {}
      }

      on(type, handler) {
      if (type in this._events) {
      this._events[type].push(handler)
      } else {
      this._events[type] = [handler]
      }
      return this
      }

      off(type, handler) {
      var listeners = this._events[type]
      this._events[type] = listeners.filter(it => it != handler)
      return this
      }

      emit(type, ...args) {
      var listeners = this._events[type]
      if (listeners) {
      for (var i = 0; i < listeners.length; i++) {
      var handler = listeners[i]
      handler.call(this, ...args)
      }
      }
      }
      }

  - node send email
    npm install nodemailer
    var nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
    }
    });
    var mailOptions = {
    from: 'youremail@gmail.com',
    to: 'myfriend@yahoo.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
    };
    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
    console.log(error);
    } else {
    console.log('Email sent: ' + info.response);
    }
    });

  -
  ```

  - node 其它常用 npm 包

  - multer 文件上传 https://www.jianshu.com/p/93151c777caf
  - sharp 图像处理库
  - svg-captcha 生成验证码
  - express-session 会话，存储你通过请求获取到的数据的地方。每一个访问你网站的用户都有一个唯一的 session，包括多次通信，保存到服务器
    cookie 会储存 sessionId，由 sessionId 确认是不是同一个会话
  - md5 加密算法
  - Jimp 图像处理库
    - pixelData = await Jimp.read('./pixelData.png') 得到这个位置的初始图片对象，图片对象是一个描述这个图片的数据对象
    - pngBuffer = await pixelData.getBufferAsync(Jimp.MIME_PNG) 将图片对象转化为二进制字节流，储存在一段 buffer 里面
    - var hexColor = Jimp.cssColorToHex(color) 将颜色解析为 16 进制，如 converts #FF00FF to 0xFF00FFFF
    - pixelData.setPixelColor(hexColor, col, row) 设置图片对象某个像素点的颜色

### 事件循环

- nodejs 是单线程执行的，同时它又是基于事件驱动的非阻塞 IO 编程模型，事件循环机制是实现这一特性的原理
- 异步操作时，将任务给到另外的线程（CPU 的其它核），异步事件触发之后，就会通知主线程，主线程执行相应事件的回调。
- 事件循环原理
  ┌───────────────────────────┐
  ┌─>│ timers │
  │ └─────────────┬─────────────┘
  │ ┌─────────────┴─────────────┐
  │ │ pending callbacks │
  │ └─────────────┬─────────────┘
  │ ┌─────────────┴─────────────┐
  │ │ idle, prepare │
  │ └─────────────┬─────────────┘ ┌───────────────┐
  │ ┌─────────────┴─────────────┐ │ incoming: │
  │ │ poll │<─────┤ connections, │
  │ └─────────────┬─────────────┘ │ data, etc. │
  │ ┌─────────────┴─────────────┐ └───────────────┘
  │ │ check │
  │ └─────────────┬─────────────┘
  │ ┌─────────────┴─────────────┐
  └──┤ close callbacks │
  └───────────────────────────┘

  - 进入 timers 阶段
    检查 timer 队列是否有到期的 timer 回调，如果有，将到期的 timer 回调按照 timerId 升序执行。
    检查是否有 process.nextTick 任务，如果有，全部执行。
    检查是否有 microtask，如果有，全部执行。
    退出该阶段。
  - 进入 IO callbacks 阶段。
    检查是否有 pending 的 I/O 回调。如果有，执行回调。如果没有，退出该阶段。
    检查是否有 process.nextTick 任务，如果有，全部执行。
    检查是否有 microtask，如果有，全部执行。
    退出该阶段。
  - 进入 idle，prepare 阶段:
    这两个阶段与我们编程关系不大，暂且按下不表。
  - 进入 poll 阶段
    首先检查是否存在尚未完成的回调，如果存在，那么分两种情况。
    第一种情况:
    如果有可用回调（可用回调包含到期的定时器还有一些 IO 事件等），执行所有可用回调。
    检查是否有 process.nextTick 回调，如果有，全部执行。
    检查是否有 microtasks，如果有，全部执行。
    退出该阶段。
    第二种情况:
    如果没有可用回调。
    检查是否有 immediate 回调，如果有，退出 poll 阶段。如果没有，阻塞在此阶段，等待新的事件通知。
    如果不存在尚未完成的回调，退出 poll 阶段。
  - 进入 check 阶段。
    如果有 immediate 回调，则执行所有 immediate 回调。
    检查是否有 process.nextTick 回调，如果有，全部执行。
    检查是否有 microtasks，如果有，全部执行。
    退出 check 阶段
  - 进入 closing 阶段。
    如果有 immediate 回调，则执行所有 immediate 回调。
    检查是否有 process.nextTick 回调，如果有，全部执行。
    检查是否有 microtasks，如果有，全部执行。
    退出 closing 阶段

- 宏任务和微任务
  - 宏任务:客户银行取号排队办理业务
    微任务:每个客户又可以在柜台办理一些新的业务
  - 宏任务在执行的过程中，是可以添加一些微任务的；
    在当前的微任务没有执行完成时，是不会执行下一个宏任务的。
  - 宏任务一般是:包括整体代码 script，setTimeout，setInterval、setImmediate。
    微任务:原生 Promise 相关、process.nextTick
  - 微任务的递归调用会死循环，浏览器无法执行其它任务

## express

```js
// 引入依赖
let express = require("express");
let utility = require("utility");

// 建立 express 实例
let app = express();
// app 本身有很多方法，其中包括最常用的 get、post、put/patch、delete
// request 中包含了浏览器传来的各种信息，比如 query 啊，body 啊，headers 啊之类的，都可以通过 req 对象访问到。
// res 对象，我们一般不从里面取信息，而是通过它来定制我们向浏览器输出的信息，比如 header 信息，比如想要向浏览器输出的内容。这里我们调用了它的 #send 方法，向浏览器输出一个字符串。
app.get("/", (req, res) => {
  //get的数据，从req.query中的q参数
  //post的数据，从req.body里面。不过 express 默认不处理 body 中的信息，需要引入 https://github.com/expressjs/body-parser 这个中间件才会处理。
  let q = req.query.q;
  // 调用 utility.md5 方法，得到 md5 之后的值
  let md5Value = utility.md5(q);
  res.send(md5Value);
});
app.listen(3000, () => {
  console.log("app is listening at port 3000");
});

app.use((req,res,next)=>{}) //中间件，对所有请求做一种方式的处理
//use第一个参数，只要以这个开头，而get必须完全是这个路径，不包含子路径
//app.get/app.post
//req,res对象和http模块的对象不一样，是express.req/express.req
app.use(path,()=>{}) //以该路径开头走这个中间件，也可以接多个中间件
httpServer = app.listen(port,()=>{}) //listen方法会返回一个http服务器

//创建一个模块化的路由处理程序，完整的路由系统的中间件,为项目分流。配合module.exports = wendaRouter使用
wendaRouter = express.Router
app.use('/wanda',wendaRouter)

//基本路由
  app.METHOD(PATH, HANDLER)
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->
    * app 是 express 的实例。
    * METHOD 是 HTTP 请求方法。
    * PATH 是服务器上的路径。
    * HANDLER 是在路由匹配时执行的函数。
  app.route(path) //为路由路径创建可链接的路由处理程序
  app.route(path)//对这个路径的不同请求做不同处理
    .get((req,res,next)=>{})
    .post((req,res,next)=>{})
//创建静态文件
app.use(express.static('./public')); //创建了位于 public 目录中的静态文件作为服务器器
//调试   $ DEBUG=express:* node index.js
//req 相关
req.body  //请求体通过一些中间键解析后的数据会储存在 req.body 里面
req.query //?后面的内容，不需要自己解析了
req.params //这是一个对象，储存了路径中的变量，如"token = 12344",当对'/password/:token'这个路径发出请求时，可以通过 req.params.token 拿到 12344
//res 相关
res.cookie() 一//个验证身份的字符串，网站在用户验证成功之后都会设置一个 cookie，只要 cookie 没有过期，用户就可以自由浏览这个网站的任意页面不需要再次登录
	- const cookieParse = require('cookie-parser') //要安装
	- app.use(cookieParse("secret")) //解析 cookie，加参数表示自己签名
	- res.cookie('user',loginUser.name,{signed:true})
  -  res.signedcookies //签名的 cookie 只能在这个上面读到，req.signedCookies.user
	- res.clearCookie('user') //清除 cookie
res.status(404) 响应一个状态码
res.json()	// 响应一个json并end
res.jsonp()
res.download()
res.redirect()	//重定向请求并end
res.render(path,local)	//呈现指定路径视图模板，第二个参数是一个对象，可以为模板文件传递数据，参数
res.set("Content-Type","text/html;charset=UTF-8") //设置响应头
res.send() //发送响应
//app相关 app = express()
app.locals//存储一些信息
//内置中间件
express.json() //解析json请求体
express.urlencoded([{extended:true}]) //请求体为 url 编码时解析
express.query() //解析请求体 query 部分
express.static(path) //将某个文件夹暴露为一个静态文件服务器
express generator //应用程序生成器
$ npm install express-generator
```

**cookie**

- 可以理解为一个 key/val 映射,但 api 是字符串形式
- 设置/增加 cookie:`document.cookie="key=val;Expires=Date.toGMTString()"`
- 删除一个 cookie:`document.cookie="key=;Expires=过去的一个时间"`
- 获取 cookie(只能一次性获取所有 cookie):`document.cookie`

### express 默认的模板引擎 Pug

格式要求比较奇怪。

p= post.id 等号前面不能有空格

span 登录 与文字之间只能有一个空格

- https://pug.bootcss.com/api/getting-started.html
- include path //把另外的文件引入到模板文件里面，方便将一份代码重复使用 ；如 include head.pug includes foot.pug
- 继承与扩展；
  - 一个父文件 layout.pug ，里面有一个 block 语句，block + 标识名，后面的代码可以继承修改，其它地方不可以
  - extends layout.pug extends 语句，子文件用该语句继承父文件的内容，然后 block + 标识名 + 修改内容 ，实现继承与扩展
- 嵌入
  - {代码} 这种写法代码会被求值，可以对变量进行操作
- 迭代 Iteration; 通过 each 和 while 实现内容为 1 到 5 的 5 个 li 标签
  - ul
    each val in [1, 2, 3, 4, 5]
    li= val
  - - var n = 1;
      ul
      while n < 6
      li= n++

## Koa

- https://koajs.com
- 另一种 node 框架，express 团队开发的，下一代 node 框架
- 只接受异步函数，next 函数也是异步函数，express 里面的 next 是同步函数
  express 里面的 next 放到最后，而 koa 可以放到中间
- 没有任何中间件，全部需要第三方库加载进来，基本只有 use 方法
- 洋葱模型，如果涉及到互相调用，后进先出,因为 next 函数的异步机制，后面的中间键执行完后执行前面 next 函数后面的内容
- ```js
  const Koa = require('koa)
  const app = new Koa() //实例需要用 new 调用
  app.use((async ctx,next)=>{ //必须异步
    ctx.method
    ctx.cookie.id
    await next()
    ctx.body
    //ctx 是 app 的上下文，context;对象包括 req 和 res，它会自动根据上下文判断是 req 还是 res,直接代理这 2 个对象
  })
  ```
- 方便记录一个请求所需要的时间
- egg.js 基于 koa 再封装了一层的框架

## 数据库

数据库种类:

1. 关系型数据库(SQLite,MySQL)
2. 缓存型数据库(Redis,可以理解为超大型 Map)
3. 文档型数据库(Mongo DB,存储 JSON,使用 js 操作)
4. 日志数据库(HBase)

- SQL 结构化查询语言（Structured Query Language）
  sqlite 一个数据库相当于一个 excel 文件，可以有多个 sheet

  - 先下载其到项目文件
  - 命令行运行 ./sqlite3 + 数据库名

  * 基本使用方法
    命令行:
    .header on --查看时显示头行
    .mode column --每列对应排齐查看
    .mode box --表格形式显示
    .schema --查看所有表
    .table --查看所有已创建的表单

```sql
--create table 表名字（列名 1，列名 2，列名 3） 如
CREATE TABLE users (name,email,password);
CREATE TABLE users(
	id INTEGER PRIMARY KEY autoincrement,
  name STRING NOT NULL,
  email STRING UNIQUE,
  password STRING NOT NULL)
  --primary key 表示既不空，也不重复;
  --autoincrement表示id不会重复,即使把最后一个id删除，也不会重复使用
  INSERT INTO users VALUES('jim',"123@77.com","12341")
  INSERT INTO users(name,password,email,title)
  VALUES("a","a","a@qq.com","御膳房");
  INSERT INTO users VALUES(1,"a","a","a@qq.com","御膳房");
  INSERT INTO users SELECT * from table --通过选择的直接插入到表中
  SELECT * FROM table --查看指定表单所有列
  SELECT column1, column2, FROM table  --查看指定表单指定列
  SELECT DISTINCT column, FROM table;
  --为指定列去重复,DISTINCT是后面的组合唯一
  --WHERE 后面接有条件的查找数据，可以有多个条件，用 AND,OR，NOT 连接
  SELECT * FROM table WHERE condition;
  --更新记录时要小心。如果省略 WHERE 子句，所有记录都将被更新！
  UPDATE table_name SET column1 = value1,... WHERE condition;
  UPDATE foods SET status = "off" WHERE id = 1;

  SELECT * FROM table ORDER BY column1, column2, ... ASC|DESC;
  --表单指定列按照升序 / 降序排列
  SELECT * FROM table WHERE name IS NULL;
  --NULL 在数据库里面表示该位置是空值
  SELECT * FROM table HAVING COUNT(user)<5
  --与where的区别:对聚合结果进行筛选
  SELECT * FROM table LIMIT 3;  LIMIT 表示选择前几行
  LIMIT 5,2 --从第六条开始选择两条，跳过前五条
  LIMIT 2 OFFSET 5 --去除5行,选择第6，7行，与上一致
  SELECT COUNT(column_name) --所选列一共多少行
  SELECT AVG(column_name)  --所选数值列的平均值
  SELECT SUM(column_name) --所选数值列的总和
  SELECT MIN(column_name) --所选列的最小值
  SELECT MAX(column_name) --所选列的最大值
  SELECT MIN(salary), * FROM orders --拿到这一行

  DELETE FROM table_name WHERE condition;
  --DELETE 语句用于在表中删除现有记录。
  DROP TABLE users    --删除users表
  ALTER TABLE orders add totalPrice INTEGER;
  --为orders表增加一列totalPrice，为整数
```

- LIKE 运算符在 WHERE 子句用于搜索在一列中指定的模式。
  `%` 表示任意个字符，`_`表示单个字符
  `SELECT * FROM ORDERS WHERE name LIKE 'a_____'` 筛选以 a 开头 6 个字符长度
- in 运算符，`WHERE name IN ('jim', 'bob', 'merry')` 筛选 name 列满足任意一个
- BETWEEN...AND.. `WHERE price BETWEEN 10 AND 20` 筛选 10 到 20 的价格
- 别名，可以为列或者表起一个别名
  `SELECT column_name AS alias_name FROM table_name;`
- SQL 的多表连接

  - 种类
    `[INNER] JOIN` 返回两个表中的匹配值的记录，取交集
    `LEFT JOIN` 返回左表的所有记录，以及匹配的记录
    `RIGHT JOIN` 返回右表的所有记录，以及匹配的记录
    `FULL JOIN` 全连接，返回所有的排列组合记录
    `a JOIN b WHERE a.id = b.id`
    `a JOIN b ON a.id = b.id`

- 项目使用 sqlite 的方法

  - `npm i sqlite` sqlite 是基于 promise 对 sqlite3API 的封装
    `sqlite = require('sqlite')`
    `db = sqlite.open(数据库实例地址path)` 创建一个 promise
    `db = await db` 拿到 promise 的结果
  - 相关方法
    db 里面的相关方法进行 ('SQL 操作') 时，可以用？代码后面出现的参数，如`db.run('insert into users VALUES(?,?,?),jim',"123@77.com","12341")`
    `var data = await db.all('select * from data')` 可以拿到数据库里的所有的数据,一个对象集合的数组
    `db.run('SQL 操作')` 操作数据库
    `db.get('SQL 操作')` 返回从数据库查找到的数据，只能拿一条,得到一个对象

## 客户端和服务器端常用的通信方式

### HTTP 的轮询

Web 客户端与服务器之间基于 Ajax（http）的常用通信方式，分为短连接与长轮询。

- 短连接：客户端和服务器每进行一次 HTTP 操作，就建立一次连接，任务结束就中断连接。AJAX 轮询

- 长轮询：客户端像传统轮询一样从服务器请求数据。然而，如果服务器没有可以立即返回给客户端的数据，则不会立刻返回一个空结果，而是保持这个请求等待数据到来（或者恰当的超时：小于 ajax 的超时时间），之后将数据作为结果返回给客户端。

### webSocket 通信协议

TCP 之上的协议，连接后不会断开，服务器端可以主动向客户端发送消息
ws 协议使用 http 协议进行握手,tcp 连接建立之后先发 http 报文进行协议升级的协商,服务器同意就可以升级为 websocked 协议
ws 服务一般集成在 http 服务器上,接管 node http server 的 upgrade 事件

- 只能发字符串或二进制数据,要发对象的话,只能自行序列化后发送,收到数据后也要自行反序列化
- 容易断线,不支持断线重连,兼容性不好
- TCP 传输的是二进制字节流，而 websocket 是将字节流按照需要分为一份一份的，每一份都是完整的消息片段

- `Connection:Upgrade;Upgrade:websocket`
  http 请求带上这 2 个主要的请求头告知服务器请求升级为 websocked 协议，服务器同意后 TCP 连接就不会中断

#### socked.io 对 websocked 的更高级的一层封装

可以支持自动降级,在低版本浏览器上降级为长轮询
自动帮你序列化与反序列化
断线自动重连
将 ws 抽象成了基于事件

- 使用方法
  ```js
    npm i socked.io
    var app = require('express')();
    var server = require('http').createServer(app);
    var io = require('socket.io')(server);
    var io = require('socket.io').attach(server)
  ```
- 前端使用安装 socked.io-client
  或者通过页面加载<script src="/socket.io/socket.io.js"></script>
- 优点

  - 房间
    - 服务器可以给某个频道所有的客户端发送消息，常用聊天室
    - 客户端也可以给其它客户端发送消息
    - 加入和离开房间的功能
  - 解析:自动编码为字符串，自动编码为其它数据类型
  - 远程事件:客户端和服务器可以监听对方的事件，对方触发了事件，己方可以马上得到触发事件的数据，实现了无延时的双向通信
    io/socked.emit("event",{传递数据}) 服务器/客户端绑定事件
    io/socked.on("event",()=>{}) 服务器/客户端监听事件
    socket.join/leave（'some room'）加入或者离开房间
  - 发送的参数数据可以同时有字符串和二进制字节流，而 websocket 不能混合发送

  - socket.handshake.query 可以拿到 query 部分的参数

### linux 服务器知识

    * 虚拟空间:文件夹，只支持放静态文件
      虚拟服务器 : 文件夹，支持运行服务器端程序，如 node
      vps : 完全的机器，独立ip,0 到 65536 端口，可以重新装系统
      云服务器: 支持弹性扩容的 vps
    * https://www.digitalocean.com 购买 vps 服务器的网站
    * ssh  secure shell 是一种网络协议，用于计算机之间的加密远程登录
    * sftp 基于 ssh 协议的文件传输协议
    * apt linux 系统的应用商店，类似 npm
