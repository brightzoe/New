

# 常用命令行

## git 基础知识

### 版本库中的文件

> 所有的版本控制系统，只能跟踪文本文件的改动，比如 txt,以及所有的程序代码。版本控制系统可以告诉你每次的改动，比如在哪里添加了一个单词，在哪里删除了一个单词。而图片/视频等二进制文件，可以由版本控制系统管理，但没法跟踪文件的变化，只能知道图片大小改变，但具体改了什么是不知道的。
> Word 是二进制格式，并不是文本文件，版本控制系统没办法跟踪 Word 文件的改动。使用版本控制系统，要以纯文本方式编写文件，若没有历史遗留问题，使用标准的 UTF-8 编码。

### 配置

`git config --list` //查看当前配置
`git config --global --edit` //编辑全局配置
`git config --global alias.st status`设置别名

### 一些基本操作

`git init` 初始化仓库
`git add xx.txt` 添加工作区的文件到暂存区;`git rm xx.txt` 删除工作区文件
`git checkout -- file` 丢弃工作区的修改（用版本库的修改替换工作区版本）
`git commit -m "add a file"` 提交修改到本地版本库;`git commit -a -m"xxxx"`添加并提交

- add 后， commit 前撤销 add，使用 `git reset (<file>)`；commit 后可以使用`git reset`版本回退

`git status` 掌握工作区状态
`git diff xx.txt` Show changes between commits, commit and working tree, etc

- 一般是把文件暂存在缓冲区前查看在工作区做了哪些修改

`git log (--online/--graph)` 查看提交日志；`git relog`查看所有的命令记录

- `git reset --hard <commit—id>` 回退到某个版本。上一个版本：head^
- `git reset` 既可以回退版本，也可以把暂存区的修改回退到工作区

`git remote add origin git@github.com:brightzoe/learngit.git`本地仓库关联远程库
`git remote set-url origin URL` 修改远程地址
`git push (-u) origin master`本地库推送到远程，把本地的 master 分支和远程的 master 分支关联，可简化为 git push

### 分支

`git branch` 查看分支；
`git branch xx`创建分支
`git checkout/switch <name>`切换分支
` git checkout -b <name>``git switch -c <name> `创建并改切换分支
`git merge <name>` 合并某分支到当前分支
`git branch -d <name>`删除分支;强制删除把 d 改成 D

通常，合并分支时，如果可能，Git 会用 Fast forward 模式，但这种模式下，删除分支后，会丢掉分支信息。
如果要强制禁用 Fast forward 模式，Git 就会在 merge 时生成一个新的 commit，这样，从分支历史上就可以看出分支信息。

`git merge --no-ff -m "xxxx" <name>` 禁用 FF 的合并分支

![分支策略 来源廖雪峰的博客](https://cdn.jsdelivr.net/gh/brightzoe/img/20191229195951.png)

`git pull` 抓取远程分支的新提交
`git branch --set-upstream branch-name origin/branch-name` 建立本地分支和远程分支的关联

### 标签

`git tag <name>`打标签，默认是打在最新提交的 commit 上。`git tag -d <name>`删除标签
`git tag v0.9 f52c633` 给历史 commit 打标签
`git tag -a <tagname> -m "xxxx"`可以指定标签信息
`git show <tagname>`查看标签信息
创建的标签都只存储在本地，不会自动推送到远程。
`git push origin <tagname>` 推动标签到远程 `git push origin --tags`推动所有标签到远程
`git push origin :refs/tags/<tagname>` 先删除本地标签后，此命令删除远程标签

### Pull Request

> 在哪些情况下可以直接使用 master branch 来提交 Pull Request：
>
> - 你只想为主项目贡献某一处代码，贡献完自己的 repo 就可以扔的那种。
> - 你打算为主项目长期贡献代码，而且希望追随原项目的主线开发，不保留自己的特性。
> - 你打算为主项目长期贡献代码，默认 master branch 追随原项目主线，把自己的特性放到别的 branch 中。
>
> 在哪种情况下应该使用主题 branch 来提交 Pull Request：
>
> - 想用 master branch 完全来做自己的开发。在这种情形下：会从上游库合并更新，但是这些 merge 本身的 commits 显然不> 可能作为返还到上游库的 Pull Request 的一部分。
> - 存在自己的（未被 merge 或者不想被 merge 到上游库的）commits。
>
> 鉴于 Git 的分布式开发哲学，每一个库均可以看作是一个独立的项目，显然是后一种（为每一个新特性建立一个专门的主题 branch 来向主项目推送 Pull Request）的贡献方式更可取。

### 遇到的问题

Q：以下两个地址有什么区别？之前一直不了解，都是混着用，一个不行就用另一个试试。
`git@github.com:brightzoe/learngit.git`
`https://github.com/brightzoe/learngit.git`
A：上述两个地址却有不同，虽然指向的是同一个远程仓库，但第二个用 https 方式连接，第一个是用 SSH 方式连接。区别在于对内容的安全管理。使用 https 方式，每次需要验证用户身份信息，添加 ssh-key 后用 ssh 方式则信任当前用户不用再输用户名和密码。没有设置 ssh 前默认用 https 方式，设置了 ssh 后可以更改为 remote 地址(`git remote set-url origin [url]`)，使用 ssh 方式连接,通过 ssh 协议的传输速度最快。具体添加 ssh 的方式不再赘述。

Q：忽略特殊文件比如明文密码？
A：.gitignore 文件 [Templates in Github](https://github.com/github/gitignore)

Q：fork 后修改，如何同步源的更新？
A：`git remote add upstream <url>`配置上游仓库；
`git remote -v`查看配置是否成功；
`git fetch upstream`抓取上游仓库（所有分支）的更新；
`git checkout master`切换到本地主分支；
`git merge upstream/master`分支合并；
`git push (origin master)`推送到远程仓库

### 拓展链接

1. [Git Cheat Sheet](https://gitee.com/liaoxuefeng/learn-java/raw/master/teach/git-cheatsheet.pdf)
2. [Git 官网](https://git-scm.com/)
3. [Learn Git Branching](https://learngitbranching.js.org/)

### 暂时未理解的内容

- bug 分支
- rebase:整理 log

### Reference

1. [Git 教程，廖雪峰的官方网站](https://www.liaoxuefeng.com/wiki/896043488029600)
2. [GitHub 官方文档](https://help.github.com/cn)
3. [如何参与开源项目并贡献代码](http://www.qtcn.org/bbs/simple/?t53628.html)

## 命令行基础

- prompt 命令 提示符
- pwd 可以显示当前工作目录
- echo abc > foo.txt（可输出编辑内容到文件）
- echo def >> foo.txt 将命令的追加到文件
  创建：mkdir
  删除：rm
  删除非空目录：rm -rf file 目录
  移动：mv
  复制：cp (复制目录：cp -r )
  显示当前目录下的文件 ls
  查看文件内容 cat, con cate nate

## vscode 的常用快捷键

- 补齐 html5 模板：！ + tab 或 ! + enter
- 一列光标：alt + shift 然后点击
- 替换： CTRL + H
- 删除当前行： CTRL + shift + K
- 切换标签： CTRL + tab
- 注释快捷键 ctrl+k+c / ctrl + /
- 移动行：alt+up/down
- 代码格式化：shift + alt +f
- HOME 调转到行头
- end 调转到行尾
- 显示 / 隐藏左侧目录栏 ctrl + b
- 复制当前行：shift + alt +up/down
- 删除当前行：shift + ctrl + k
- 行增加缩进：ctrl + [
- 行减少缩进：ctrl + ]
- 删除行 ： ctrl + shift + d
- 折叠代码： ctrl + k + 0-9 (0 是完全折叠）
- 展开代码： ctrl + k + j （完全展开代码）
- 快速回到顶部 ： ctrl + home
- 快速回到底部 : ctrl + end
- 回到撤销之前：Ctrl +Y
- 控制台终端显示与隐藏：ctrl + ~
- 查找文件 / 安装 vs code 插件地址：ctrl + p
- 字体放大 / 缩小：ctrl + ( + 或 - )
- 裁剪尾随空格 : ctrl + shift + x
- 拆分编辑器 : ctrl + 1/2/3
- 关闭编辑器窗口 : ctrl + w
- 自动换行 : alt + z
- 选中文字：shift + left / right / up / down
- 快速切换主题：ctrl + k / ctrl + t
- 格式化选定代码 ：ctrl + k / ctrl +f

## windows 快捷键

- 任务视图： win + tab
- 切换程序： alt + tab
- win 截图：win + shift + S
- qq 截图：CTRL + alt + B

# JavaScript

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

- [运算符优先级](https://www.ecma-international.org/ecma-262/5.1/)
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
- `undefined`与`null`：相等但不严格相等。
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
作用：1. 参数复用；2. 提前返回；3. 延迟计算/运行。

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

- 序列化数据(e.g. yaml)，方便传输数据，或者作为配置文件。
  - 序列化：把一个东西在不损失信息量的前提下，转换为由连续字节表示的数据，比如字符串。
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

> 函数的签名：函数的名称，参数类型与顺序，返回值类型的集合．

### 继承

一个类型复用已有类型已经实现的逻辑。
当一个类型拥有另一个类型的所有或大部分特性时,可以让这一个类型通过某种方式直接获得该类型的所有属性和方法,即称为继承.被继承者被称为父类,继承者被称为子类.

### instanceof

二元运算符,某个对象是否继承自某个特定的构造函数
`[1] instanceof Array` //true

## lodash `_`下划线

- 一个函数库，前身 underscore
  _(array) //创建一个 lodash 对象，隐式链调用
  _.chain(array) //显式链调用
  - 都需要解链
  - 懒惰运算，惰性求值,减少不必要的运算

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

# 文档结构

## DOM document object model 文档对象模型

浏览器解析 HTML 时，会先将其解析为语法树（通过递归下降或者栈解析），该语法树就是 DOM 树，也就是 DOM 模型；我们通过操作 DOM 模型来操作 web 页面，是一种 API（应用编程接口，是一个标准）

- 如果浏览器遇到格式不正确的 HTML，它会在形成 DOM 时自动更正它。
- **适用于多种环境和多种程序设计语言的通用型 API**
- 文档：节点树 node tree **文档中每个元素节点都是一个对象**最外层节点是 document，不是元素节点
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
  `element.value = "the new value"`//这个与上面的一般是同步的，有些例外：value，zIndex
- `node.attributes/id/className/htmlFor/title/tabindex` 获取属性
- `node.dataset.foo = 'xxx'` //操作元素的 data- 属性
- `elem.add/remove/has`
- `elem.classList` //实时的 class 的集合,`add()/remove()/toggle()`方法

NOTE: HTML 特性：它们的名字是大小写不敏感的 getAttribute(),它们的值总是字符串类型的。DOM 属性是多类型的。 i.e. div.style,input.checked

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
  在 HTML 里面：<input type="button" id="button" onclick="sayThanks()">，读取 HTML，会创建一个处理函数，注意这个区别。
- 分配事件处理程序，调用 addEventListener 允许多次添加。有些事件无法通过 DOM 属性进行分配，必须使用 addEventListener。 `element.addEvenListener（事件名，处理函数，option)`
  - options 可选
    一个指定有关 listener 属性的可选参数对象。可用的选项如下：
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

**event** 全局事件对象，浏览器同一时刻只有一个事件运行，event 的属性：

- event.type：事件类型，这里是 "click"。
- event.currentTarget：“当前”处理事件的元素，与 this 相同，除非处理程序是一个箭头函数，或者它的 this 被绑定到了其他东西上，之后我们就可以从 event.currentTarget 获取元素了。
- event.target：是引发事件的“目标”元素，引发事件的层级最深的元素，它在冒泡过程中不会发生变化。
- event.which：针对键盘和鼠标事件，确定按的是哪个键
- event.keyCode：记录哪个键被按下，返回对应的 unicode 码（大写字母）
- event.key：记录哪个键被按下，返回对应的键（小写字母）
- event.Propagation 阻止事件传播到下一个元素（调用该元素上后面的事件处理器还是会执行）
- event.ImmediatePropagation 阻止事件传播到下一个事件处理器（调用该元素上后面的事件处理器不会会执行）
- event.deltaY 表示鼠标滚轮的滚动方向，小于 0 向上滚动
- event.clientX / event.clientY：鼠标事件的指针的窗口相对坐标。

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
有两种方式来告诉浏览器我们不希望它执行默认行为：
主流的方式是使用 event 对象。有一个 `event.preventDefault()` 方法。
如果处理程序是使用 on<event>（而不是 addEventListener）分配的，那`return false` 也同样有效。
**检查是否阻止了默认行为**：
`if (event.defaultPrevented) return;`
**不会阻止默认行为**：
`elem.addEventlistener("click",func,passive: true)`passive: true,将不会调用 e.preventDefault()，浏览器可以直接执行默认行为而不必等待函数的执行完。

**浏览器默认行为**：
mousedown —— 开始选择（移动鼠标进行选择）。
在 `<input type="checkbox">` 上的 click —— 选中/取消选中的 input。
submit —— 点击 `<input type="submit">` 或者在表单字段中按下 Enter 键会触发该事件，之后浏览器将提交表单。
keydown —— 按下一个按键会导致将字符添加到字段，或者触发其他行为。
contextmenu —— 事件发生在鼠标右键单击时，触发的行为是显示浏览器上下文菜单。

#### 捕获

事件处理的另一个阶段被称为“捕获（capturing）”。它很少被用在实际开发中，但有时是有用的。

DOM 事件标准描述了事件传播的 3 个阶段：

- 捕获阶段（Capturing phase）—— 事件（从 Window）向下走近元素,默认不触发。
- 目标阶段（Target phase）—— 事件到达目标元素。
- 冒泡阶段（Bubbling phase）—— 事件从元素上开始向外冒泡，默认触发。
  传播路径：由捕获阶段到目标阶段，目标阶段里面的处理函数按照代码顺序执行，不区分捕获和冒泡，之后是冒泡阶段；传播过程中遇到没有时间处理器的元素会跳过该元素继续执行

#### 事件委托

在外部节点添加一个事件处理器，并根据 target 属性判断事件来源，这样可以把内部共用的事件绑定到外部.

算法：
在容器（container）上放一个处理程序。
在处理程序中 —— 检查源元素 event.target。
如果事件发生在我们感兴趣的元素内，那么处理该事件。
好处：
简化初始化并节省内存：无需添加许多处理程序。
更少的代码：添加或移除元素时，无需添加/移除处理程序。
DOM 修改 ：我们可以使用 innerHTML 等，来批量添加/移除元素。

### 简单事件

mousedown/mouseup
在元素上点击/释放鼠标按钮，mousedown 的默认浏览器操作是文本选择。
mouseover/mouseout(现在用 mouseenter/mouseleave 来代替)
鼠标指针从一个元素上移入/移出。

> 快速移动鼠标可能会跳过中间元素。
> 即使我们从父元素转到子元素时，也会触发 mouseover/out 事件。浏览器假定鼠标一次只会位于一个元素上 —— 最深的那个。
> mouseenter/leave 事件在这方面不同：它们仅在鼠标进入和离开元素时才触发。并且它们不会冒泡。
> mouseover/out 和 mouseenter/leave 事件还有一个附加属性：relatedTarget。这就是我们来自/到的元素，是对 target 的补充。
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
识别复杂手势，触摸手势 框架：hammer.js
**事件属性**：
which：1/2/3 左中右键
如果在事件期间按下了相应的键，则它们为 true：
shiftKey：Shift
altKey：Alt（或对于 Mac 是 Opt）
ctrlKey：Ctrl
metaKey：对于 Mac 是 Cmd

**坐标：clientX/Y，pageX/Y**
所有的鼠标事件都有两种形式的坐标：
相对于窗口的坐标：clientX 和 clientY。
相对于文档的坐标：pageX 和 pageY。

### 鼠标移动

## BOM

BOM 浏览器对象模型，设置浏览器的属性,浏览器提供的用于处理文档之外的所有内容的对象。i.e. navigator location window screen history

- 函数 alert/confirm/prompt 是 BOM 的一部分.
- 泛指浏览器中除 js 内置和 dom 操作相关的 api.
  - DOM document 上提供的相关的 api
  - api Application Programming Interface 应用编程接口，以函数，类，方法，属性等体现出来

### 相关对象

- navigator:主要是 navigator.userAgent——格式不完全统一，不好匹配
- location：完整的 url 分解成不同的片段放在不同的属性中(包括完整的 url),可读可写入。
  - port 端口，protocol 协议，origin 域/源：协议+域名+端口
  - location.reload() 刷新，参数为 true 时一定从服务器重新获取，否则可能从缓存中加载.除了修改 hash，其余修改都会刷新页面。
  - location.assign('xxx') ===location.href ='xxx'===location ='xxx' 相当于打开了新页面并加入历史记录，可以前进后退
  - location.replace('xx') 当前地址直接换一个,无法前进后退
  - hash 指的是#号及后面的部分对应页面内 id,HTTP 请求没有这部分。hash change 事件就是监测 hash 值的变化，必须绑定至 window 对象
- **history:**实际是一个栈，前进后退会在栈中游走
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

jQuery 现在式微：
浏览器的兼容性变好了。
框架的流行，不再需要人肉操作 DOM 了。
jQuery 提供的各大方面的功能有各自专门的其他库来解决，而且解决得更好。常用函数：Lodash,ajax 封装：axios 等
目前在维护的有三个版本：
1.x 版本，为了兼容一直以来的旧浏览器
2.x 版本，不再支持 IE9 及以下的版本
3.x 版本分两个系列：

- 3.x 是 2.x 的正常升级
- 3.x-compatible 是对 1.x 的升级

# 计算机网络

## 数据在计算机中存储中的表示

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

## 万维网是如何工作的

![客户端和服务器](https://cdn.jsdelivr.net/gh/brightzoe/img/20200105191449.png)

- 网络连接：允许你在互联网上发送和接受数据。基本上和你家到商店的街道差不多
- TCP/IP: 传输控制协议和因特网互连协议是定义数据如何传输的通信协议。这就像你去商店购物所使用的交通方式，比如汽车或自行车。
- DNS: 域名系统服务器像是一本网站通讯录。浏览器需要找到存放你想要的网页的服务器，才能发送 HTTP 请求到正确的地方。就像你要知道商店的地址才能到达那。
- HTTP: 超文本传输协议是一个定义客户端和服务器间交流的语言的协议（protocol ）。就像你下订单时所说的话一样。
- 组成文件：一个网页由许多文件组成，就像商店里不同的商品一样。这些文件有两种类型：
  - 代码 : 网页大体由 HTML、CSS、JavaScript 组成，不过你会在后面看到不同的技术。
  - 资源 : 这是其他组成网页的东西的集合，比如图像、音乐、视频、Word 文档、PDF 文件。

### URL 网址

- 格式： 协议：//主机地址+目录路径+参数
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

[HTTP](##HTTP)

## DNS 解析

真正的网址是一串数字，比如 10.230.217.105，这叫 IP 地址，代表互联网上一个独特的位置。但并不好记忆，DNS 就是将域名与实际的 IP 地址相匹配的特殊服务器，达到让人使用域名，路由器使用 IP 地址的目的。
例如 IP Checker 可以通过域名查找 IP 地址。
解析器向 DNS 服务器发出查询，接收服务器返回的响应消息，响应消息包含查询到的 IP 地址。

### DNS 解析器

解析器包含在操作系统的 Socket 库(网络开发的一种标准库，其中包含的程序组件可以让其他的应用调用操作系统的网络功能)中。
`nslookup www.baidu.com 8.8.8.8` 用指定的 DNS 服务器查询 IP 地址

- 调用解析器：`gethostbyname("www.xx.xx")`
- 计算机内部：控制流程转移 ![](https://i.loli.net/2020/07/07/AJBEzOsc7MYndhD.png)

### DNS 服务器

DNS 服务器的基本工作就是根据需要查询的域名和记录类型查找相关的记录，并向客户端返回响应消息。
其中，来自客户端的查询消息包含以下 3 种信息。

- 域名
  服务器、邮件服务器（邮件地址中@后面的部分）的名称
- Class
  在最早设计 DNS 方案时，DNS 在互联网以外的其他网络中的应用也被考虑到了，而 Class 就是用来识别网络的信息。不过，如今除了互联网并没有其他的网络了，因此 Class 的值永远是代表互联网的 IN
- 记录类型
  表示域名对应何种类型的记录。例如，当类型为 A 时，表示域名对应的是 IP 地址；当类型为 MX 时，表示域名对应的是邮件服务器。对于不同的记录类型，服务器向客户端返回的信息也会不同。TXT，可以确认域名所有权。AAAA,指向 IPv6 地址
  类型：PTR,CNAME,NS,SOA...

DNS 服务器上事先保存有前面这 3 种信息对应的记录数据，一个域名可以指定多个 IP
DNS 服务器中的所有信息都是按照域名以分层次的结构来保存的。域名中右边的部分层级高。
上级 DNS 服务器保管着所有下级 DNS 服务器的信息。
com、jp：顶级域，上面还有一层：. 根域，一般省略，但真实存在，根域的 DNS 服务器信息保存在互联网所有 DNS 服务器中。
DNS 服务器的缓存功能，加快服务器的响应。 ——>host:把域名和 IP 绑定,相应的对应关系
DNS 污染：解析成错误的 IP——>可以通过修改 host 解决
DDNS：动态 DNS ——>IP 变掉了，自动指向新 IP

## IP 地址

IP 地址和现实中的地址一样，不能重复。
局域网都是基于 TCP/IP 思路设计的。TCP/IP 的结构就是由一些小的子网，通过路由器连接起来组成一个大的网络。这里的子网可以理解为用集线器连接起来的几台计算机，我们将它看作一个单位，称为子网。将子网通过路由器连接起来，就形成了一个网络。
![TCP/IP的结构](https://i.loli.net/2020/07/08/LubEBqs8cdxnMY2.png)
在 IP 地址的规则中，网络号和主机号连起来总共是 32 比特，8 比特为 1 组。利用子网掩码来区分网络号和主机号。
IP 地址的表示方法：![IP 地址的表示方法](https://i.loli.net/2020/07/07/bJ7BuNd9Om6TlWe.png)
子网掩码：转化为 2 进制，前面全 1，后面全 0,1 对应的 ip 地址部分是网络号，0 对应主机号；
同一个局域网里面的机器 IP 网络号相同；如 192.168.88.2/24 与 192.168.88.8/24
网络地址：ip 地址与子网掩码做与运算，结果就是网络地址

**IP 地址**

- 0.0.0.0 ：代表任意的 ip 地址，不能作为目的地址使用
- 127.x.x.x 以 127 开头的 ip 地址都指向本机
-

**IP 地址的主机号:**

- 全 0：表示整个子网
- 全 1：表示向子网上所有设备发送包，即“广播”

## 委托协议栈向 Web 服务器发送消息

向操作系统内部的协议栈发出委托时，需要按照指定的顺序来调用 Socket 库中的程序组件。
收发数据的操作分为若干个阶段，可以大致总结为以下 4 个。——TCP
[TCP](#tcp)

1. 调用 Socket 库中的 socket 程序组件创建套接字（创建套接字阶段）
2. 将管道连接到服务器端的套接字上（连接阶段）调用 Socket 库中的名为 connect 的程序组件,需要指定描述符、服务器 IP 地址和端口号.

- 描述符：应用程序用来识别套接字的机制
- IP 地址:识别具体是哪个网络硬件
- 端口号：用来识别具体的套接字。Web 是 80 号端口，电子邮件是 25 号端口，DNS 服务器 53 号端口，DHCP 是 67 号端口。是规定好的，默认的。

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

- 三次握手：三次成功的单向通信，才能确定双方都能收能发信息

### 收发数据

数据收发操作是从应用程序调用 write 将要发送的数据交给协议栈开始的，协议栈收到数据后执行发送操作。
协议栈收到数据会将数据存放在内部的发送缓冲区中，并等待应用程序的下一段数据。

- **如何判断发送时机？**

1. 第一个判断要素是每个网络包能容纳的数据长度，MTU。
   - MTU：一个网络包的最大长度，以太网中一般为 1500 字节。例外：vpn,ipv6 over ipv4
   - MSS：除去头部之后，一个网络包所能容纳的 TCP 数据的最大长度
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

- 返回 ACK 号的等待时间——超时时间：当网络传输繁忙时就会发生拥塞，ACK 号的返回会变慢，等待时间需要稍长一点，但等待时间过长，包的重传会出现很大的延迟，所以等待时间不能设定为一个固定的值。TCP 采用**动态调整等待时间**的方法，根据 ACK 号返回所需的时间来判断。
- 使用滑动窗口有效管理数据发送和 ACK 号。滑动窗口，就是在发送一个包之后，不等待 ACK 号返回，而是直接发送后续的一系列包。有可能出现发送报的频率超过接收方处理能力的情况， 数据将暂存到接收缓冲区中，能够接受的最大数据量称为窗口大小。
- 提高收发数据的效率：返回 ACK 号和更新窗口合并。

#### 断开连接并删除套接字

断开连接后，套接字并不会立即被删除，而是会等待一段时间之后再被删除。——为了防止误操作

## IP 与以太网的包收发操作

TCP 模块在执行连接、收发、断开等各阶段操作时，都需要委托 IP 模块将数据封装成包发送给通信对象。
发送方的网络设备会负责创建包，网络包是由头部和数据两部分构成。
![网络包的结构](https://i.loli.net/2020/07/08/clK6TsZuvfAjFdr.png)

### IP 模块如何完成包收发操作

TCP 模块委托 IP 模块发送包，TCP 模块在数据块前面加上 TCP 头部，传递给 IP 模块。还需要指定通信对象的 IP 地址。
IP 模块收到委托，添加 MAC 头部和 IP 头部，这样一个包就封装好了。

- MAC 头部：用于以太网协议，包含 MAC 地址，包含将包传输至最近的路由器的所需的控制信息。
- IP 头部：用于 IP 协议，包含 IP 地址，将包发往目的地所需的控制信息。

封装好的包会交给网络硬件，比如以太网，无线局域网，网卡。传递给网络硬件的的网络包是 01 组成的数字信息。硬件将数字信号转换为电信号或光信号，并通过网线发出去，这些信号到达集线器，路由器等转发设备再一步步地送达接收方。
接收返回的包和发送的过程正好是相反的。

- IP 模块的包收发操作都是相同的。将整个 TCP 头部和数据块看成一整块二进制数据，执行收发操作不关心其内容。

#### IP 模块具体工作过程

1. **生成 IP 头部附加在 TCP 头部前面。**
   - IP 包头：记录 ip 地址有关信息，本身储存在以太网帧负载里面
     ![IP包头](https://i.loli.net/2020/07/09/38LdRKys6xp7tJq.png)
     发送方 IP 地址:需要通过路由表来判断发送使用的网卡，填写该网卡的 IP 地址。显示路由表`route print`
   - 协议号：表示包的内容来自哪个模块。
   - IP 分片：IP 有关数据大小（IP 总长度）大于以太网帧负载，需要分开传输后再重组
   - 生存时间（TTL）: IP 包头在网络中最多可以中转的次数，每遇到路由器中转一次减一，到 0 路由器就不传播扔掉该数据（路由会返回给发送者在哪一个路由器地址被扔掉(ICMP 协议)，利用该特性可以追踪路由(tracert baidu.com)，可以防止环状循环传播；(在传播过程中 TTL 和头部校验和会变化)
   - ICMP 协议：每个路由回复数据传播状态所要用到的协议 Internet Control Message Protocol 互联网消息控制协议
2. **生成以太网用的 MAC 头部，包含接收方和发送方的 MAC 地址。**
   ![](https://i.loli.net/2020/07/09/tGrnb1akiwHWm3Y.png)
   以太类型：类似 IP 头部的协议号，表示后面内容的类型。
   接收方 MAC 地址：需要根据 IP 地址查询 MAC 地址。
   > 通过 ARP 查询目标路由器的 MAC 地址。
   > ARP 协议：address resolution protocol(地址解析协议), 通过广播获得 MAC 地址。将 ip 地址转化为 MAC 地址并记录对应关系，命令行 arp -a 可查看所有记录
   > ARP 缓存：缓存查询过的 MAC 地址 显示 ARP 缓存`arp -a` 经过一段时间缓存会被删除。如果缓存还未删除出现通信异常，可以手动删除 ARP 缓存

### 以太网的基本知识

以太网是为多台计算机能够自由且廉价地相互通信设计的通信技术(有线网)，本质就是一根网线，通过 MAC 头部进行通信，根据 MAC 地址来传输包。
性质：根据 MAC 头部的三个字段，将包发送到接收方 MAC 地址，根据发送方 MAC 地址识别发送方，根据以太类型识别报的内容。（也适用于无线局域网）

#### 以太网的包收发操作

网络硬件中将数字信息转换为电或光信号——>网卡，网卡驱动程序
网卡中的 MAC 地址是唯一的，在网卡生产时就写入了。网卡中保存的 MAC 地址由网卡驱动程序读取并分配给 MAC 模块。
网卡驱动从 IP 模块获取包，将其复制到网卡缓冲区，MAC 模块将包从缓冲区取出，在开头加上报头和起始帧分界符，末尾加上用于监测错误的帧校验序列。

![加工网络包的分工](https://i.loli.net/2020/07/09/KMGHfJSLo5yINEq.png)

### 转发设备：

路由器：根据目标地址判断下一个路由器的位置——>按照 IP 规则
集线器：在子网中将网络包传输到下一个路由——>按以太网规则
![](https://i.loli.net/2020/07/09/GY9ybRQLwhJtDrn.png)

#### 向集线器发送网络包

两种发送信号的操作：

1. 使用集线器的半双工模式
2. 使用交换机的全双工模式
   > 全双工：发送给和接收同时并行。半双工：某一时刻只能进行发送或接收一种操作
   > 半双工：(PHU 模块)先判断网线中是否有其他设备发送的信号，避免信号碰撞。MAC 模块将数字信息转换为电信号(通用信号)，接下来 PHY(MAU)模块对 MAC 模块产生的信号再进行格式转换为在网线中传输的模式，通过网线发送出去。PHU 还需要监控接收线路中有没有信号进来。
   > 发送信号的过程中，如果有其他设备同时发送信号，这些信号就会通过接收线路传进来。在使用集线器的半双工模式中，一旦发生这种情况，两组信号就会相互叠加，无法彼此区分出来，这就是所谓的信号碰撞。信号是没有意义的，因此发送操作会终止。为了通知其他设备当前线路已发生碰撞，还会发送一段时间的阻塞信号，然后所有的发送操作会全部停止。

## 计算机网络的结构

计算机网络是拓扑结构，类似快递网络，主干道是图状结构，末端类似树状结构。
计算机网络也是典型的分层结构：物理层，链路层，网络层，传输层，应用层。上层结构依赖于下层结构，其中的每一层只关注他本层和相连的两层。

### 物理层

- 设备间的物理连接，可以有线也可以无线。网线/光纤/WiFi/4G，正确地传递 01
- 解决信号的调制与解调：转换数字信号和模拟信号
- 两个设备通信之前，在链路层需要进行信号的**时钟同步**。
- 网卡：拥有 MAC 地址，使得用户可以通过网线或无线相互连接
- 曼彻斯特编码：加倍信号跳变频率；同步时钟信号

### 链路层

负责直接连接的设备间的通信，只关心直接连接的机器之间的以字节为单位的通信

- 广播域：多台直接连接的设备组成一个广播域
- 局域网：可以理解为同一交换机 / 令环牌 / 总线结构内部网络设备之间的网络
  广播域/局域网的结构：
  - 总线型结构：所有的网点和同一条总线连接 (一根总线，效率低)
    - 集线器：信号放大
    - 同一时刻只有一个设备进行数据传输
    - 防止信号碰撞：载波侦听，多路访问协议；指数退避
  - 令牌环：需要令牌，单向传输(效率低)
  - **交换机：**一台机器，多个接口连接网络设备，可以识别每台连接的网络设备的 MAC 地址(Media Access Control)
    - 典型的链路层设备
    - 三层交换机：会识别 IP 地址等数据包里的三层包头来执行相关策略
    - 网管交换机：一台网卡设置多个 ip,成为路由器的功能
    - `ipconfig /all`查看网络配置
- 以太网：有线网 以太网帧：链路层传播的数据包
  - 前导码：对码，确认传播编码方式
    帧开始符：表示帧的开始
    MAC 目标地址 /MAC 源地址：MAC 地址设备出厂时就确认了；
    负载：发送的具体数据，占有以太网帧大部分内存；MTU: 最大传输单元
    冗余校验：核对负载数据的正确性
    以太类型：协议类型（ARP/HTTP 等）
- WiFi:
  - 载波侦听，多路访问
  - 多频段 2.4G 5G 频率不同 5G 频段更宽
- VPN：
  - 外面再包一层，MTU 会变小
  - 连上 VPN 会多一个 IP 地址，建立了一个虚拟的链接(虚拟网卡)，数据是加密的
- 在这层，每个网卡拥有唯一一个 MAC 地址，只在局域网使用，但仍然是全球唯一。局域网内使用 MAC 地址，而不是 IP 地址
- ARP 协议：address resolution protocol(地址解析协议), 通过广播将 IP 地址获得 MAC 地址。将 ip 地址转化为 MAC 地址并记录对应关系，命令行 `arp -a` 可查看所有记录 ping
  ARP 缓存：缓存查询过的 MAC 地址
  ARP 欺骗：假冒广播寻找的 IP 地址
  ARP 风暴： 高频率发送 ARP 广播，占用网络资源
  ping：在命令行输入 ping ip 地址，查看和目标地址在 IP 层面是否可以通信。(ICMP 协议)
- DHCP 协议：(动态主机配置协议) 自动分配局域网里的 IP 地址

### 网络层(IP 层)

网络层负责把 IP 数据包从起始机器送达目标机器(跨网络)，只负责单次发送。

- 两台机器发送数据时，先会根据 IP 地址确认是否在同一个局域网(同一局域网内 IP 地址的网络号相同。)
  - 如果在同一个子网，直接 ARP 广播通信。
  - 如果不在同一个局域网，会发给网关，进行多个网络点之间的中转和传输
- 网关：路由器，局域网的出口，进行多个网络点之间的中转和传输。网关包成以太网帧，根据路由表传给其他网关。
- 路由器：多个接口连接不同的子局域网，每个接口的 IP 地址（网关地址）不一样；与家用路由器不一样
  - 可以利用 IP 包头的 TTL，追踪路由(tracert baidu.com) `trace ip`
  - 可以用此定位 GFW 物理位置 mongol python
- 路由表：网关发过来的 ip 地址会进入路由器内部的路由表，其指导后续的网络传播方向 ；
- 家用路由器（NAT 路由器 Network address transition）： 和上面的路由器不一样；里面是一个路由器和一个交换机，相当于具有链路层和网络层功能。
- IPv4 IPv6——迁移期间共存，采用建隧道的方式交互
  - 过河，坐船
- 瘦腰模型 通用协议，需要很稳定，类似于钱
  - 底层都实现 IP，上层都基于 IP 实现，而中间只有 IP
- 延迟：转发导致的
- 带宽

(

- SNAT: NAT 路由器发出去的局域网地址转化为广域网地址
- DNAT：发回来的广域网地址转化为 NAT 路由器的局域网地址
  根据设备端口的不同 NAT 路由器区分数据是由哪个局域网设备发送的，NAT 路由器会有一个端口映射表，每台网络设备每次都会映射得到一个独一端口；
  端口映射表有动态也有静态的，但是保证端口和内网设备的映射关系都是独一的；
- NAT 级联，NAT 路由器连接 NAT 路由器，解决了 ip 地址不够用的问题；
- ICMP 协议：每个路由回复数据传播状态所要用到的协议)

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
- 主播：加入频道，添加主播地址(224~239)
- 缺点：不保证送达，数据包很小，不能保证按照发送顺序送达
- 优点：低延迟，丢包也不重发；如游戏，电话语音
- 模型： udp 仅在 ip 上加了端口，每个 udp 端口是对等的，任何一个 udp 端口也可以向任何其它的 udp 端口发消息，不局限于只能为某个端口发；

#### TCP

- 传输控制协议（Transmission Control Protocol）是一种面向连接的、可靠的、基于字节流的传输层通信协议

  - 有序，且保证送达
  - TCP 四元组：源 ip, 目的 ip，源端口，目的端口；确定网络中独一无二的连接
  - 报错信息：ADDR_IN_USE/REFUSED/TIME_OUT

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
  TCP 半开状态：即一侧关闭了连接，不再发送数据，但可以接收数据，直至对侧也关闭了连接；另一侧没有关闭连接，仍可以发送数据。

- **滑动窗口机制**
- 拥塞控制
  - 慢启动 ：刚开始网速慢
  - 和式增加：线性增加网速
  - 积式减少：发生拥塞或者错误时网速指数减少
- TCB:TCP 服务器和客户端连接时创造的内存片段

  - bbr 算法：发送速率非常大，做到刚好不丢包的速率（传输中数据包的数量为带宽\*延迟）
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
  - DNS：Domain Name System 将域名转化为 ip 地址的协议
    - 包裹在 UDP 的数据里
    - dhcp 服务器自动分配 DNS 地址，也可以自己填写；一般填写离自己最近的 DNS 服务器地址，速度更快；114.114.114.114/114.114.115.115
    - DDNS ：动态 DNS,Dynamic Domain Name Server，动态域名服务，是把互联网域名指向可变 IP 地址的系统；DNS 只是提供了域名和 IP 地址之间的静态对应关系，当 IP 地址发生变化时，DNS 无法动态的更新域名和 IP 地址之间的对应关系，从而导致访问失败。
    - 全球只有 13 台根域名服务器
    - DNS 负载均衡：一个域名指向一组机器
  - dhcp 协议 动态主机配置协议（Dynamic host configuration protocol）
    - 局域网里面有 dhcp 服务器 ，它会告诉新来的网络设备一个配置信息（ip 地址，网关，dns 等信息），设备会自动设置这些信息然后可以访问网络
    - ip 地址租期：dhcp 分配的 ip 地址有限，每个设备的 ip 地址都有一个租用时间，网络设备长时间未访问网络 dhcp 会收回 ip 地址，不过一般网络设备都会自动续期
  - https: 由 HTTP 进行通信，但利用 SSL/TLS 来加密数据包 ,HTTP over TLS;
    - 首次通信需要一个第 3 方 CA 机构，防止有人中途冒充接对方
    - CA 其有一对密钥（公钥 RP, 私钥 RS）认证过程如下：
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
- Accept-Range：bytes 用来支持断点续传
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
  样式能够加载来自哪里的 <div style="color:red";

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
    - 以上 2 个要配合响应头 location：url 使用，表示跳转地址
  - 304 Not Modified 未更改

    - 协商缓存
      - If-Modified-Since（请求）/Last-Modified（响应）: 自上次访问以来资源未更新，返回 304
      - If-None-Match（请求 /ETag（响应）: 一个哈希值，如果这个值和服务器储存的对应值一样，表示资源未更新，返回 304
    - 强缓存 和 304 没有关系，主要是用于减轻浏览器负担
      - Expires: 日期；资源未过期都会储存在浏览器里，不用去加载
      - age ：时间；本次请求以后该资源可以强缓存在浏览器里的时间长度
      - cache-control: 现在最常用的，可以在请求头里，也可以在响应头里，可以设置各种缓存，也可以设置为协商缓存；详细见 MDN

  - 501 Not implemented 未实现；此请求方法不被服务器支持且无法被处理。
    - 只有 GET 和 HEAD 是要求服务器支持的
  - 502 Internal Server Error 服务器内部错误

### 跨域问题

合理跨域：所要跨域请求的服务端资源的服务器以某种方式配合不同域的前端，如果服务端不配合，是不可以跨域的
跨域：只要请求资源的协议，域名，端口有一个不同就叫做跨域

#### 最现代的方式：CORS

cross origin resource sharing 跨域资源共享
一般由 XMLHttpRequest 发起的跨域 HTTP 请求需要 CORS 标准

- 预检请求
  - 需预检的请求必须首先使用 OPTIONS 方法发起一个预检请求到服务器，以获知服务器是否允许该实际请求
  - 一些简单的方法不会有预检请求（get/head/post）, 因为不能破坏 Web 的兼容性。
- 常用的 CORS 头
  响应头：
  Access-Control-Allow-Origin:url/\* 服务器允许的域
  Access-Control-Allow-Methods: POST, GET, OPTIONS 服务器允许使用这些方法
  Access-Control-Allow-Headers: X-PINGOTHER, Content-Type 服务器允许使用这些请求头
  Access-Control-Allow-Credientials:允许带上的凭据(cookie 头)
  Access-Control-max-age:60000 允许的有效期，有效期内不用再发预检请求，单位秒
  请求头：
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

- async + 生成器函数 function {await ：promise 函数}
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
  读取：
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

- Function 构造器生成的 Function 对象是在函数创建时解析的，所有被传递到构造函数中的参数，都将被视为将被创建的函数的参数，并且是相同的标示符名称和传递顺序；
  这种方式比 eval 好的地方是<u>可以传递参数</u>

  ```js
  var sum = new Function("a", "b", "return a + b");
  console.log(sum(2, 6));
  ```

- 直接调用函数表达式

  ```js
  var add = (function (a, b) {
    return a + b;
  })(1, 2);
  (function add(a, b) {
    return a + b;
  })(1, 2); //加（）将函数声明语句变成表达式，然后再调用
  ```

  IIFE： immediately invoked function expression 立即执行函数表达式

- 常用的模块方案

  - CommonJS 模块的加载是同步的

    将每个文件都看作一个模块，模块内部定义的变量都是私有的，无法被其他模块使用，除非使用预定义的方法将内部的变量暴露出来（通过**exports 和 require**关键字来实现），CommonJS 最为出名的实现就是 Node.js。

  - AMD define 函数 异步方式加载模块

  - CMD Common Module Definition sea.js

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

Q: 模块化的好处？
A: 解决命名冲突,变量污染；提高代码复用性；提高代码可维护性。

Q: 实现模块化的方式？
A: 立即执行函数;IIFE
AMD 和 CMD;
CommonJS;
ES Module

Q：在 Node.js 中，require()加载模块是同步而非异步？

A：CommonJS 标准是同步加载的。另一方面作为公共依赖的模块，自然要一步加载到位。

由于模块的个数往往有限，且 Node 会自动缓存已经加载的模块，再加上访问的都是本地文件，产生的 IO 开销几乎可以忽略。另外，Node 程序运行在服务器端，很少遇到需要频繁重启服务的情况，那么就算在服务启动时在加载上花点时间（几秒）也没有什么影响。

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

  - `node xxx.js arguments` 给 xxx.js 传递参数 arguments：通过 process.argv 接收 arguments。process.argv 返回一个数组，第一项是 node 的运行路径，第二项是 xxx.js 文件路径，第三项开始是 arguments(process.argv[2])

  - process 一个全局对象，每个 Node 进程都有独立的 process 对象，存储了当前进程的环境变量，也定义了一些事件。

    - process.exit(0) 正常结束一个脚本模块
    - process.cwd() 当前工作目录
    - process.pid 当前进程 ID

  - global 全局对象

    node 里面的 this:在 Node repl 环境中控制台的全局 this 和 global 可以看作是同一对象，脚本文件中的 this 指向 module.exports.

    node 中的作用域：全局作用域，模块作用域，

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

        事件：‘data’,’close’,’end’,’error’,’readable’

      - ws = fs.createWriteStream(path) 创造向某个路径文件写入数据的可写流

        事件：‘close’,’drain’,’error’,’finish’,’pipe’

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
    应用：canvas,B 站 flv.js；直接操作二进制字节流
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
    - 进入 idle，prepare 阶段：
        这两个阶段与我们编程关系不大，暂且按下不表。
    - 进入 poll 阶段
      首先检查是否存在尚未完成的回调，如果存在，那么分两种情况。
      第一种情况：
        如果有可用回调（可用回调包含到期的定时器还有一些 IO 事件等），执行所有可用回调。
        检查是否有 process.nextTick 回调，如果有，全部执行。
        检查是否有 microtasks，如果有，全部执行。
        退出该阶段。
      第二种情况：
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
  - 宏任务：客户银行取号排队办理业务
    微任务：每个客户又可以在柜台办理一些新的业务
  - 宏任务在执行的过程中，是可以添加一些微任务的；
    在当前的微任务没有执行完成时，是不会执行下一个宏任务的。
  - 宏任务一般是：包括整体代码 script，setTimeout，setInterval、setImmediate。
    微任务：原生 Promise 相关、process.nextTick
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
- const Koa = require('koa)
  const app = new Koa() 实例需要用 new 调用
  app.use((async ctx,next)=>{
  ctx.method
  ctx.cookie.id
  await next()
  ctx.body
  ctx 是 app 的上下文，context;对象包括 req 和 res，它会自动根据上下文判断是 req 还是 res,直接代理这 2 个对象
  })
- 方便记录一个请求所需要的时间
- egg.js 基于 koa 再封装了一层的框架

## 数据库

数据库种类：

1. 关系型数据库(SQLite,MySQL)
2. 缓存型数据库(Redis,可以理解为超大型 Map)
3. 文档型数据库(Mongo DB,存储 JSON,使用 js 操作)
4. 日志数据库(HBase)

- SQL 结构化查询语言（Structured Query Language）

- sqlite 一个数据库相当于一个 excel 文件，可以有多个 sheet

  - 先下载其到项目文件
  - 命令行运行 ./sqlite3 + 数据库名

  * 基本使用方法
    命令行：
    .header on --查看时显示头行
    .mode column --每列对应排齐查看
    .mode box
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
  UPDATE foods SET status="off" WHERE id=1;

  SELECT * FROM table ORDER BY column1, column2, ... ASC|DESC;
  --表单指定列按照升序 / 降序排列
  SELECT * FROM table WHERE name IS NUll;
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
    `a join b where a.id = b.id`
    `a join b on a.id = b.id`

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

## websocked 协议

TCP 之上的协议，连接后不会断开，服务器端可以主动向客户端发送消息

- 长轮询

  - 由于基于 http 协议的服务器不能主动向客户端发送消息（响应式），如果服务器有没有指定客户端的数据要发往指定客户端，需要指定客户端发来请求才能发送，这样会造成延时
  - 长轮询是指客户端发送一个请求到服务端，这条连接会在一段时间类不会断开
    - 这段时间内服务器拿到了客户端想要的数据会基于这条连接立即把数据发送给客户端
    - 这段时间内服务器没有拿到数据，连接断开，之后客户端再次发送同样的连接

  * node 服务器不支持 ws 协议，需要安装 npm i ws,通过监听 http 的 upgrade 事件
  * 开始客户端发送 http 请求，询问服务器是否接收 websocked 协议，服务器同意就可以升级为 websocked 协议
  * 数据以消息为单位
  * TCP 传输的是二进制字节流，而 websocked 是将字节流按照需要分为一份一份的，每一份都是完整的消息片段
  * 缺点容易断线，兼容性不好，建议使用 socked.io

  * Connection:Upgrade ；Upgrade:websocket
    http 请求带上这 2 个主要的请求头告知服务器请求升级为 websocked 协议，服务器同意后 TCP 连接就不会中断

  - socked.io 对 websocked 的更高级的一层封装

    - 使用方法
      npm i socked.io
      var app = require('express')();
      var http = require('http').createServer(app);
      var io = require('socket.io')(http);/var io = require('socket.io').attach(http)
    - 前端使用安装 socked.io-client
      或者通过页面加载<script src="/socket.io/socket.io.js"></script>
    - 优点

      - 房间
        - 服务器可以给某个频道所有的客户端发送消息，常用聊天室
        - 客户端也可以给其它客户端发送消息
        - 加入和离开房间的功能
      - 解析：自动编码为字符串，自动编码为其它数据类型
      - 远程事件：客户端和服务器可以监听对方的事件，对方触发了事件，己方可以马上得到触发事件的数据，实现了无延时的双向通信
        io/socked.emit("event",{传递数据}) 服务器/客户端绑定事件
        io/socked.on("event",()=>{}) 服务器/客户端监听事件
        socket.join/leave（'some room'）加入或者离开房间
      - 发送的参数数据可以同时有字符串和二进制字节流，而 websocket 不能混合发送

    - socket.handshake.query 可以拿到 query 部分的参数

### linux 服务器知识

    * 虚拟空间：文件夹，只支持放静态文件
      虚拟服务器 ： 文件夹，支持运行服务器端程序，如 node
      vps ： 完全的机器，独立ip,0 到 65536 端口，可以重新装系统
      云服务器： 支持弹性扩容的 vps
    * https://www.digitalocean.com 购买 vps 服务器的网站
    * ssh  secure shell 是一种网络协议，用于计算机之间的加密远程登录
    * sftp 基于 ssh 协议的文件传输协议
    * apt linux 系统的应用商店，类似 npm

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

    p 标签的内容 会替换为 rawHtml 渲染的内容，直接作为html。

- 指令，以 v- 为前缀

  - v-bind
    将某个属性绑定为一个变量 `<span v-bind:title="message">`
    缩写`<span :title="message">`
    动态参数：`<span :[title]="message">` 属性名也是表达式，避免大写字母
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
    v-else 元素必须紧跟在带 v-if 或者 v-else-if 的元素的后面，否则它将不会被识别,可以配合 template 元素实现分组渲染,不会被包在别的元素里面，如div.
    可以配合设置具有唯一值的key属性，来表达“两个元素完全独立，不要复用”的情况
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
    v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
    v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
    相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
    一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。
  - v-for
  可以绑定数组的数据来渲染一个项目列表 ,需要配合使用 `(item, index) in items` 形式的特殊语法,index 不用时可以省略.
  由于vue默认是就地更新每个元素，需要每项设置唯一的`key`,以便它能跟踪每个节点的身份，从而重用和重新排序现有元素.
  ```html
  <li v-for="todo in todos" :key="todo.content">
  {{ todo.text }}
  </li>
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
  `<input>`、`<textarea>` 及 `<select>`  可以双向绑定各种数据类型的值.
  v-model 在内部为不同的输入元素使用不同的属性并抛出不同的事件：
  text 和 textarea 元素使用 value 属性和 input 事件；
  checkbox 和 radio 使用 checked 属性和 change 事件；
  select 字段将 value 作为 属性和 change 作为事件。

- 创建 vue 应用
  除了数据property,Vue实例还暴露了一些实例property与方法。如`app.$data,app.$el,app.$watch`
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
  template：//html 代码
  //当一个实例里面有 template 属性时，初始化实例时会将 template 的值作为虚拟 dom 而忽略实际的 el 元素内容
  })
  ```
  - 数组的变更检测
  数组的下标没有设置为 getter 和 setter，所以不能通过更改数组下标的方式改变页面，因为 vue 并不能监听到下标的变化，即当你利用索引直接设置一个数组项时，和当你修改数组的长度时，Vue 不能检测数组的变动；可以通过 `Vue.set(vm.items, indexOfItem, newValue)` 添加。
  vue 对一些方法进行了一层包装，这些方法会触发视图更新:`push(),pop(),shift(),unshift(),splice(),sort(),reverse() `
  - 对象的变更检测
  对象也不可以直接通过增加和删除属性来触发视图更新，因为普通属性不会变为 getter 和 setter， 可以用 `Vue.set(vm.items, key, newValue)` 添加
  }


- 修饰符
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
      对象不必定义在模板里，可以在js里面,可以写在返回对象的computed属性上。
    - 绑定一个数组传给 `v-bind:class`,以应用一个 class 列表。数组中可以套用对象语法。
      `v-bind:class="[activeClass, errorClass]"`, 判断规则和上面 2 中一样
  - style 的绑定
    - 绑定到字符串 `:style ="'color:red'"`
    - 绑定到一个对象,data里面可以写一个style对象。CSS 属性名可以用驼峰式或短横线分隔来命名
      `v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"`
    - 绑定到数组
      数组里面可以写多个样式对象。
    - 多重值
      `:style="{ display: ['-webkit-box', '-ms-flexbox', 'flex']`
      只会渲染数组中最后一个被浏览器支持的值

- key 属性的作用
  Vue 提供了一种方式来表达一个元素独一的身份,识别节点的通用机制。只需添加一个具有唯一值的 key 属性，虚拟 dom 在进行对比渲染时，key 值不相同的元素不会作对比， 保证了同一个元素渲染前后都只和自身对比；而不会因为元素位置的变化导致从头渲染；

- vue 初始化将 data 都变为 getter 和 setter 函数
```js
  function observe(obj) {
  for(let prop in obj) {
  let val = obj[prop]
  if (typeof val == 'object') {
  val = observe(val)
  }
  Object.defineProperty(obj, prop, {
  get: function() {
  return val
  },
  set: function(value) {
  if (typeof value == 'object') {
  value = observe(value)
  }
  val = value
  }
  })
  }
  return obj
  }
```
- 异步更新队列

  - Vue 在更新 DOM 时是异步执行的，每次数据变更都会次发出渲染的信号
  - vue 收到信号后会检查是否渲染任务已经在任务队列里，已经存在就忽略
  - 在本轮事件循环的最后执行渲染
  - 防止了重复渲染，提高性能

- 生命周期钩子 lifecycle hooks

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
      - 没有就暂停周期等待调用 vm.$mount(el) 函数，再执行下一步
      - 有就直接执行下一步
    - 判断是否有 template 属性
      - 有模板就将模板编译到 render() 中渲染得到虚拟 dom（一个树状结构的对象）
      - 没有模板就将 el 元素的 outerHTML 作为模板执行上面的操作
    - 执行钩子函数 beforeMount
    - 创建 vm.$el 并替换 el 属性
      - 通过虚拟 dom 创建了一个真实的 dom 元素 el
      - el 之前是选择器一个字符串，现在替换为一个真正的 dom 元素
    - 执行钩子函数 **mounted**
    - 挂载完毕
      - 当 data 被修改时，调用钩子函数 beforeUpdate
      - 虚拟 dom 重新渲染并更新页面
      - 更新完毕执行钩子函数 **updated**
    - 当调用 vm.$destroy() 时
      - 执行钩子函数 beforeDestroy
      - 解除绑定销毁组件以及事件监听器
      - 销毁完毕
      - 执行钩子函数 **destroy**

- 组件
  可**复用**的Vue实例，组件名称当html标签使用。
  与 new Vue 接收相同的选项，例如 data、computed、watch、methods 以及生命周期钩子等。仅有的例外是像 el 这样根实例特有的选项。
  组件要先注册才能使用。两种注册类型：全局注册、局部注册。
  - 创建组件
  全局注册组件：
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
    //通过 Prop 向子组件传递属性，属性值由组件标签上传递：bind 过来
    //单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行
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
    - 父组件监听子组件  @click="func"
    - 子组件在某种情况下（比如自己触发了自己的事件）触发该自定义事件
      如在点击时触发自定义事件 v-on:click="$emit('event1' ,argument)
    - emit 的第二个参数表示可以给父组件传递的参数，父组件可以通过 $event 接收这个参数.如果父组件的事件处理函数是一个方法，那么 $event 将会作为第一个参数传入这个方法
      v-on:event1='$event'
      v-on:event1='fun'   methods:{func($event){}}

  - 组件的数据传递

    - 自上而下通过 prop 传递，从父组件传到子组件，不能在子组件中修改prop。
    - 自下而上通过事件触发传递
    - 组件操作 prop 传递来的数据时，组件不要修改它，只读取，通过触发事件上级组件反馈，由上级组件操作数据；数据的拥有者是哪个组件，哪个组件才可以更改它；
      组件的层次过深时，组件树数据的传递太繁琐，建议将数据放到全局，每个组件直接修改全局数据，这样就不用传递数据
    - 两个并列的组件的交互方法：通过相同的父组件作中转操作

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

  - 子元素：标签包裹在另外一个标签里面
    子组件：一个组件里面的 template 用到了其他组件

  - 插槽 slot

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

  - 强制更新 迫使 Vue 实例重新渲染。vm.$forceUpdate()

- Vuex

  - Vuex 是一个专为 Vue.js 应用程序开发的数据管理模式。它采用集中式存储管理应用的所有组件的数据

  - 安装
    除了通过 script 标签引用，其它方式引用要确保在开头调用了 Vue.use(Vuex)

  - 使用方法

    - 对于根组件
      var app5 = new Vue({
      store:store, 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件，子组件可以通过 this.$store 访问到根组件的 store 对象
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
      computed：{
      leftCount() {
      return this.$store.getters.leftCount
            }可以通过 this.$store.getters 触发 store 实例 getters 里面的 getter 函数
      },
      })

  - 模块
    Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter const moduleA = { state: { ... }, mutations: { ... }, actions: { ... }, getters: { ... }}
    const moduleB = {state: { ... },mutations: { ... },actions: { ... }}
    const store = new Vuex.Store({modules: { a: moduleA, b: moduleB}})

- Vue Router

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
      name："112" 命名路由用的，一般用不到
      alias: '/b' 别名，用户访问 /b 时，URL 会保持为 /b，但是路由匹配则为 /a，就像用户访问 /a 一样；用得少
      },
      {
      path: "/wechat", 路由匹配到的路径
      component: wechat, 路由匹配到该路径就渲染这个组件
      children：[{
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
      访问方式：在组件内，即 this.$route；通过 watch 监控 $route ；全局 router.match(location) 的返回值
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

- Vue CLI(command line interface)

  - runtime 版本和完整版本 vue 的区别

    - render 函数 接受三个参数，render（标签名，属性，子元素），根据传入信息将其转化为虚拟 dom
    - vue.complile 是 vue 编译器，浏览器通过这个编译器将模板字符串转化为 render 函数
    - 完整版 vue 有这个编译工具，runtime 版本没有，但是 runtime 版本会提前把模板字符串编译为 render 函数，这样就少了浏览器的编译过程，提升性能和效率

  - vue 相关文件和工具
    bable：一个广泛使用的转码器，可以将 ES6 代码转为 ES5 代码，从而在现有环境执行；让旧版本的浏览器可以用最新的语法
    stylus : 一种类似 scss 的语言，现在主流是 scss
    vue-loader: web-pack 插件，编译器
    ESLint：js 代码风格检查工具，目前流行的是 Airbn/standard/prettier
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
        \*readme.md 告诉你这么开启这个项目的命令
    - 相关文件配置好后，运行 npm run build , 它会把相关文件打包到 dist 文件里，之后吧 dist 文件里面的资源放到 static 文件里

## React

- 三个引用

  - 这个文件是用来实现虚拟 dom 的，全局创建一个 react 变量，react 代码里面的每一个标签都通过 bable 转化为了 React.createElement（标签名，属性，子元素）

  <script src="https://unpkg.com/react@16/umd/react.development.js"></script>

  - 这个文件是用来实现真实 dom 的，全局创建一个 ReactDOM 变量

    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>

  - 这个 bable 文件是用来编译 react 代码的，如 JSX, 编译为 ES5 代码

    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <script type="text/babel">react代码</script>

- ReactDOM.render(react 代码实现一个虚拟 dom，document.getElementById('root'))
  这个函数接收两个参数，将第一个参数虚拟 dom 编译到第二个参数 React 根元素里面

- Source map
  Source map 就是一个信息文件，里面储存着位置信息。也就是说，转换后的代码的每一个位置，所对应的转换前的位置。有了它，出错的时候，除错工具将直接显示原始代码，而不是转换后的代码。

- 插值
  通过{}插值，里面可以是各种类型的值，可以是表达式但不能是语句

- React 组件

  - 组件名必须大写
  - 不能将通用表达式作为组件名，组件名必须是静态的，即使用组件时它是确定唯一的
  - class 组件
    class 大写组件名 extends React.Component{
    constructor(props){
    super(props) 用来引入 this，props 用来接收组件标签传来的属性，一般是一个对象{prop:value},props 只读不能更改；props.children 可以直接拿到组件的子元素或者中间的插值
    this.state={ 用来记录数据状态
    key：value
    }
    }
    render(){
    会返回一个虚拟 dom，就是组件模板
    如 return (<div>{this.state.key}</div>) React 通过{}传递动态数据
    }
    method = ()=>{
    this.setState({}) /this.setState((state)=>{return {}})
    React 只能通过 setState 设置数据状态才可以更改 dom, 相当于把新的 state 浅合并到旧的 state 里面，只更改新 state 传入的部分，其它数据保留；this.state 的指向从开始创建到更新一直没有改变，指向同一个对象，对象里面的数据发生改变
    setState 也可以接收一个函数，参数默认是 state，返回一个新的 state 对象
    } class fields 语法，相当于把这个方法传入到 construct 里面，并加上 this; 即 this.methods=()=>{}
    }
  - 函数组件
    function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
    } 创建一个简单的函数组件，函数组件没有实例，也没有 ref 属性

- State 的更新可能是异步的，出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用。

  - 在同步函数(事件处理函数里)里面调用 setState 那么 state 的更新是异步的
  - 在异步函数(自己定义的函数)里面调用 setState 那么 state 的更新是同步的
  >什么时候是同步的？什么时候是异步的？为什么有时是同步的，有时是异步的？
    批量合并，效率更高。
    

- React 的特殊事件和属性写法

  - <label htmlFor =""> label 标签里面的 for 属性，因为 for 是 js 关键字
  - className= "" 属性的类型 class 要写为 className，react 的 className 属性不能动态的添加值，可以用 npm 库的 classnames
  - style 属性只接收对象不接收字符串
  - onClick , onDoubleClick ,onChange 相关事件
  - React 里面的事件名和属性名都采用驼峰式
  - React 里面的 style 属性的值必须是一个对象 ，style ={对象{}}
  - React 里面的 onChange 事件不是光标移开后触发，而是输入的每时刻都会触发
  - key 和 ref 属性是组件的特殊属性，不在 props 上面

- 组件标签可以写作自闭和标签，React 里面的自闭和标签必须要 /，如 input 标签

- JSX

  - JavaScript 的语法扩展，一种标签语法
    const element = <h1>Hello, world!</h1>，会调用 React.createElement（标签名，属性，子元素）构建虚拟 dom
  - JSX 会移除行首尾的空格以及空行。与标签相邻的空行均会被删除，文本字符串之间的新行会被压缩为一个空格

- 条件渲染
  通过与运算符 && 和？：运算符达成条件筛选；当渲染的插值内容是{null,undefined,false,true}时不会渲染

- 表单

  - 受控组件： 表单元素有 value 属性，这个时表单无法被修改
  - 非受控组件
    - 不加上 value 属性
    - defaultValue 替代 value 属性
    - 加上 value 属性和 onChange 事件

- 组合和继承
  React 里面基本不用继承，只继承 React.Component, 更多是在一个组件里面使用另外的组件的组合

- Fragments 一个组件返回多个并列子元素的方法

  - render() {
    return (
    <React.Fragment><ChildA /><ChildB /><ChildC /></React.Fragment>
    );
    }
  - 也可以用<> </> 或者 [] 代替 Fragments 组件实现组合，但是 Fragments 支持 key 元素

- Refs

  - 提供了父组件访问子组件或者子元素的唯一方法
  - 使用方法，为子组件标签提供一个 ref 属性
    - 方法一
      - ref 属性值是一个字符串 <input ref ='box'/>，在父类方法里面通过 this.refs.box 就可以拿到 input 元素
      - 该方法不推荐，因为 react 难以实现，性能低
    - 方法二
      - ref 属性值是一个函数 <input ref ={ el => this.box = el } />, 该子组件的实例默认为参数，并且把该实例挂载到父类的某个属性上面，然后父类通过该属性访问子组件，即 this.box 即可访问到
      - 一般把 ref 的属性值函数定义为父类的一个方法，子组件引用该方法即可；如果不这样父类每次被渲染时，react 没法识别函数有没有更改，子组件都会生成一个函数，浪费性能；通过引入就可以不再重复渲染这个不变的函数
      - 如果 ref 回调函数是以内联函数的方式定义的，在更新过程中它会被执行两次，第一次传入参数 null，然后第二次会传入参数 DOM 元素。这是因为在每次渲染时会创建一个新的函数实例，所以 React 清空旧的 ref 并且设置新的。
    - 方法三
      - ref 属性值是一个对象，<input ref ={ this.boxRef }/>, 该子组件会把自己挂载在该对象的 current 属性上，然后再父类通过 this.boxRef.current 访问子组件
      - 在父类构造函数中创造一个 ref 对象； this.boxRef = React.createRef() ,React.createRef() 会生成一个对象{current：null}
      - 这种方法由于这个对象绑定子组件后就没有变，以后每次渲染父类就不用再次创建了。现在最推荐的就是这种方法

- 协调，React 的 diff 函数，即前后虚拟 dom 对比方式

  - 对比方式
    - 无 key 时 效率为 O(n)
      - 首先根元素进行对比，根元素类型不同直接替换为新的，根元素类型一样就对比其属性，属性不同替换为新的；
      - 子元素按照顺序对比，方法和根元素一样
    - 有 key 时
      新旧虚拟 dom 对比时，key 值相同的进行对比，减少对此次数，效率更高

- React 的生命周期函数

  - 挂载阶段
    - constructor()
      如果不初始化,state 或不进行方法绑定，则不需要构造函数
    - static getDerivedStateFromProps()
      在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 state， state 的值在任何时候都取决于 props, 如果返回 null 则不更新任何内容；不常用
    - render()
      class 组件中唯一必须实现的方法，会渲染出虚拟 dom
    - componentDidMount()
      会在组件挂载后（插入 DOM 树中）立即调用，依赖于 DOM 节点的初始化应该放在这里。
  - 更新阶段
    - static getDerivedStateFromProps()
    - shouldComponentUpdate(nextProps, nextState)
      根据这个函数的返回值，判断 React 组件的输出是否受当前 state 或 props 更改的影响。默认行为（返回 true）是 state 每次发生变化组件都会重新渲染。此方法仅作为性能优化的方式而存在，可以人工控制下层组件是否更新，return false 后面的 render 就不会运行，不常用
    - render()
    - getSnapshotBeforeUpdate()
      在最近一次渲染输出（提交到 DOM 节点）之前调用，这个函数运行完真实 dom 会被渲染。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）, 不常用
    - componentDidUpdate(prevProps, prevState, snapshot)
      会在组件更新后会被立即，此时调用真实 dom 已经完成，可以直接对 dom 操作。首次渲染不会执行此方法
  - 卸载阶段`
    - componentWillUnmount()
      在组件卸载及销毁之前直接调用。在此方法中执行必要的清理操作

- 生命周期中有一类 unsafe 生命周期函数不建议使用原因

  - react 的架构或者渲染机制的改变带来的问题
  - React-Fiber 架构
    - 解决 dom 树过深同步渲染整个 dom 性能下降问题
    - 将 dom 拆分渲染，分不同的时间片段异步渲染
    - 由于异步的存在，可以根据用户行为灵活的调整 dom
  - unsafe 类生命周期函数正是因为在某些情况下会和 React-Fiber 的异步机制发生冲突所以不推荐使用，可能会有 bug
  - render 之前的函数都必须是纯函数或者是 static 方法函数，render 之前的函数不能产生副作用，可能会和 React-Fiber 的异步机制发生冲突

- 不要 UNSAFE\_ componentWillMount 在这个组件里面发生 AJAX 请求的原因

  - 这个函数后面会紧接着 render 函数，由于请求资源是一个异步过程，render 函数执行的时候资源没请求下来，没法更新 dom
  - 所以建议这类异步请求放到 componentDidMount 里面，放到后面可以减少 dom 挂载时间
  - UNSAFE\_ componentWillMount 会紧接着 Construct 函数运行，官方建议不使用这个函数，里面其它的操作可以直接放到构造函数里面

- PropTypes

  - 用来设定组件属性类型，有许多表达方式

  - React 自带模块，直接引入 import PropTypes from 'prop-types'

  - 组件名.propTypes = {
    属性名：PropTypes.string/PropTypes.bool/PropTypes.func/PropTypes.object
    }
    MenuItem.propTypes = {
    food: PropTypes.object.isRequired,
    onUpdate: PropTypes.func,
    }

    MenuItem.defaultProps = {
    onUpdate: () => { },
    }

- Render Props 渲染属性

  - 其本质是一个属性是一个函数，这个函数属性以组件的数据为参数得到一个 jsx 代码，组件的 render() 接收这个 jsx 渲染为虚拟 dom；所以这个属性可以是任何名字，业界通用叫做 render

  - 组件接收一个属性 render, 属性值是一个函数，组件会把自己的数据传给这个函数作为参数，函数的结果会被组件中的 render() 函数接收渲染

  - 在组件的 render() 函数里通过 this.props.render 可以拿到这个函数，再接收自己的 state 数据就可以通过函数返回一段 JSX, 最后渲染；

  - 告知组件需要渲染什么内容的函数属性

  - <DataProvider render={data => (

    <h1>Hello {data.target}</h1>

    )}/>

- 转发 Refs

  - 使组件接收到的 ref 属性不指向自己，而是转发到组件内部的元素
  - 使用 React.forwardRef 创建组件，该组件的 ref 属性会转发到内部
  - 相当于组件换了一个名字 abc 接收 ref 值，然后内部的元素 ref 属性接收 abc 属性转发来的 ref 值，React.forwardRef 只是让组件继续可以使用 ref 属性
  - const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton">
    {props.children}
    </button>
    )); 创建了一个 FancyButton 组件
    const ref = React.createRef();
    <FancyButton ref={ref}>Click me!</FancyButton>;

- React 相关 api

  - React.PureComponent
    和 React.component 的唯一区别是，他会自动调用 shouldComponentUpdate() 这个周期函数，以浅层对比 prop 和 state，如果相同组件就不会刷新，可提高性能，用于 class 组件

  - React.memo()
    和 React.PureComponent 功能一样，不过它适用于函数组件 ，不适用于 class 组件；接收一个函数组件为参数，返回包装后的组件

  - React.createElement（标签名，属性，子元素）
    创建并返回指定类型的新 React 元素，此时还没有实例化，是对虚拟 dom 的描述，上面有 key,ref，props 这些属性，渲染之前会根据这些信息创造实例，实例会调用 render() 函数

  - cloneElement( element,[props],[...children]) 克隆 React 元素， props 与原始元素的 props 浅层合并后的结果。新的子元素将取代现有的子元素，而来自原始元素的 key 和 ref 将被保留

  - React.children 用来处理 this.props.children

    - React.Children.map(children, function[(thisArg)])
    - React.Children.forEach(children, function[(thisArg)])
    - React.Children.count(children) 返回 children 中的组件总数量

  - React.lazy 代码分割，优化性能 , 需要返回一个 promise，必须配合 React.Suspense 使用
    const SomeComponent = React.lazy(() => import('./SomeComponent'))

  - React.Suspense

    - 内部异步加载的函数会抛出一个 promise（这个异步函数会被包一层），Suspense 本身是个错误边界会获取到这个 promise
    - 如果有这个资源的缓存就会同步返回数据，没有就运行 fallback 对应的组件，直到子元素资源加载完成替换为子元素
      <React.Suspense fallback={<div>loading</div>}>

    <div>
      <SomeComponent />
    </div>

    </React.Suspense>

- Portals 门户网站

  - Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案，常用于对话框、悬浮卡以及提示框
  - ReactDOM.createPortal(child, container)
    child 是 React 子元素，container 是一个 DOM 元素，child 会渲染到容器里，而不是父类；使用在组件的 render 函数里
  - 子元素冒泡时按照实际 dom 结构冒泡而不是直接冒泡到容器

- 高阶组件

  - 和高阶函数类似，高阶组件是参数为组件，返回值为新组件的函数

- 错误边界

  - 错误边界是一种 React 组件，捕获并打印发生在其子组件树任何位置的 JavaScript 错误，并且它会渲染出备用 UI
  - 类似在组件层面实现了一个 try catch 机制，让错误不会跑到外层
  - 事件处理，异步，自身错误而非子组件的错误无法捕捉
  - 如果一个 class 组件中定义了 static getDerivedStateFromError() 或 componentDidCatch() 这两个生命周期方法中的任意一个（或两个）时，那么它就变成一个错误边界，然后直接当做常规组件用，形成一个错误墙，错误组件里面子组件的错误会被错误边界捕获

- 与第三方库协同

  - 通过 ref 属性拿到第三方库要操作的元素
  - 在这个元素上面通过第三方库的事件机制触发组件本身的处理函数来更新 state

- 合成事件

  - react 的事件是对浏览器的原生事件的跨浏览器包装，兼容所有浏览器，挂载 props 上
  - 事件对象会被重复使用（节约内存），事件结束之后事件对象会被清空，所以不能通过异步访问事件
  - e.persist() 保留合成事件对象，事件结束之后不会清空，配合异步函数
    e.nativeEvent 访问原生浏览器对象

- Context

  - 实现了自上而下跨组件传递数据，跨组件层级共享数据
  - 使用方法
    - 全局创建一个 context 实例
      var MyUserContext = React.createContext(null) 里面的参数是默认值，一般填 null
    - Context 实例对象上面有个 MyUserContext.Provider 组件开始向下传递数据，MyUserContext.Provider 组件内部可以接收数据，如果没有 value 属性就会传递默认值
      <MyUserContext.Provider value={this.state.user}></MyUserContext.Provider>
    - 内部接收数据方法
      - 通过<MyUserContext.Consumer>接收，其内部是一个函数，参数为接收的 value, 返回需要渲染的 JSX 代码，而且可以多层嵌套
        <MyUserContext.Consumer>{value=>{return JSX 代码}}</MyUserContext.Consumer>
      - 通过子组件的静态属性把 context 实例赋值到 contextType 属性，然后再 JSX 中可以使用 this.context 访问到 value
        static contextType = MyUserContext
        this.context

- 性能优化

  - 结构共享，最大可能的共用已有数据，联想树状结构和指针思考，共用完全不变的子树
    - immer.js 一个实现结构共享的库 <script src="https://unpkg.com/immer/dist/immer.umd.js"></script>
      const produce = immer.produce 这个库会引入一个全局变量 immer，上面有个 produce 方法
    - 用法一
      - 先定义一个变更，等到有数据时再执行这个变更；f = produce(draft=>{})
      - draft 是对象代理，代理接收到的参数对象 obj，会拦截所有对 obj 的访问；读取数据时，draft 上面没有回溯到 obj 上找，设置数据时设置到 draft 上；
      - f 函数接收一个对象 obj，draft 代理这个对象，直接对 draft 操作就是对传入对象进行操作，而且是最大可能的共用已有数据；
      - produce((draft,action)=>{}), 函数除了代理对象还可以接收其它变更时需要的参数
    - 用法二
      produce(obj,draft=>{}) 接收 2 个参数，第一个是原对象，第二个是代理操作，返回新的数据对象
    - ES6 通用，ES5 退化通过 getter 和 setter 代理，但是不可以添加新的属性
  - 通过生命周期函数 shouldComponentUpdate 优化性能

- hook

  - 为函数组件带来了 state 和类似生命周期函数的功能
  - state 不会合并，而是完全替代之前的 state，多利用展开运算符
  - 函数组件状态改变时整个组件都会重新刷新
  - hook 函数在创造时，React 会根据他们在调用栈的顺序确认各自身份，所以 hook 函数的调用顺序在组件刷新时不能改变，根据调用顺序确定各个状态身份；
  - 使用方法

    - 解构语法引入 hook 函数
      var { useState, useEffect, useRef, useContext, useCallback, useMemo } = React
    - useState 函数，接收的参数会设置为 state 的初始值，返回一个数组 [state, 操作 state 的函数 setState]
      setState(value){state = value} setState 的函数大概是这样
      如 var [count, setCount] = useState(0)
    - useEffect 函数，相当于一个生命周期函数 componentDidMount 或 componentDidUpdate，直接在函数组件内部使用 \*用法
      useEffect(
      ()=>{
      第一个参数是一个函数，可以挂载 componentDidMount 或 componentDidUpdate 阶段需要的操作；
      这个函数可以有一个返回值函数，返回值函数会在函数组件 componentWillUnmount 阶段运行，可有挂载一些解绑操作；
      对于函数组件来讲，每次更新都会卸载再挂载；所以每次更新都会运行这个返回值函数
      },【第二个可选参数是一个数组，当组件刷新时如果发现数组的内容和上一次一样，那么就不会运行这个 useEffect 函数，用于性能优化；要确保数组中包含了外部作用域中会随时间变化并且在 effect 中使用的变量，否则你的代码会引用到先前渲染中的旧变量，如果是空数组表示每次都是完全一样的内容，不运行】
      )

      - 优点
        - 绑定和解绑放在一起，可读性和操作性好
        - 对于复杂的逻辑，可以写多组 useEffect() 函数，相关逻辑放到同一个 useEffect() 函数里面，逻辑分离

    - useContext 函数 hook, 类似 class 组件里面的 Context 功能
      - 开始的用法和 class 组件一样，先在外部创建一个 context 实例
        var ColorContext = React.createContext()
        Context 实例对象上面有个 ColorContext.Provider 组件开始向下传递数据，用于组件内部
        <ColorContext.Provider value={color}>
      - 接收数据方法
        在后代组件中直接使用 useContext(Context 实例对象）接收数据
        var color = useContext(ColorContext) 接收数据

  - useCallback

    - 函数组件每次更新都会重新运行，每次运行都会创建一个新的作用域，作用域里面的函数都会是新建的，如果子组件中用到了这些更新的函数，子组件每次都要更新，影响性能
    - var f = useCallback(fun(){},[]) 第一个参数接一个函数，第二个参数接一个数组，当组件刷新时如果发现数组的内容和上一次一样时，就返回上次的函数，否则返回这次的函数

  - useMemo

    - 和 useCallback 功能一样，不过写法不一样
    - var f = useMemo(()=>fun(){},[])

  - useRef
    和 class 组件里面的 React.createRef() 功能用法一样，useRef() 也会创建一个{current：null}对象；由于函数组件每次更新都会重新运行，每次运行都会创建一个新的作用域，作用域里面的函数都会是新建的；使用 React.createRef() 函数组件更新每次都会创建一个新的对象，占用内存；而 useRef 就是为了解决这个问题的，函数组件中使用 useRef() 返回的对象在函数组件刷新前后都是同一个对象

- 自定义 hook

  - 自定义 Hook 是一个函数，其名称以 “use” 开头，函数内部可以调用其他的 Hook 函数
  - 目的是将组件逻辑提取到一个函数，这个函数从而具有组件的一些功能，本质就是高阶函数
  - 自定义组件库 https://nikgraf.github.io/react-hooks/

- react 路由

  - 安装

    <script src = "https://unpkg.com/react-router-dom@4.3.0/umd/react-router-dom.js"> / npm install react-router-dom

* var { BrowserRouter,HashRouter,Switch,Route,Link,withRouter} = ReactRouterDOM 引入变量

* 相关变量

  - HashRouter：一个组件，包裹在所有路由的最外层，表示以 hash 模式进行地址导航
  - BrowserRouter: H5 模式，一般不需要
  - Switch, 可选，表示按照顺序匹配内部的路由，只匹配满足条件的第一个
  - Route： 导航组件 <Route path="/users/:id" exact><Component/></Route>
    - path 只能接完整路径，嵌套路由也是完整路径
    - exact 表示必须精确匹配路径，默认都是开头匹配就行，匹配成功就就加载中间的组件
    - 也可以通过 path 向内部组件参数
    - path 里面"\*"表示通配符，匹配所有路径
  - link： 相当于一个 a 标签 <Link to="/about">About</Link>, 点击就导航到对应路由组件
  - 路由里的不是由 <Route path="">过来的组件不能直接接受 path 传递来的参数，需要 withRouter 将组件包裹一层
    var User = withRouter(function User(props) {})
    接受到的属性 props 是个对象，有 history，location,match 几个属性，分别有相关的方法，可以通过 props.match.params. 参数名 (id) 拿到传递过来的参数

* react 是按照业务逻辑书写，符合用法即可。
  function App() {
  return (
  <HashRouter>

  <div>
  <nav>
  <Link to="/users">Users</Link>
  </nav>
  <Switch>
  <Route path="/users">
  <Users />
  </Route>
  <Route path="/users" component={组件名Users}/>
  </Switch>
  </div>

  </HashRouter>
  )
  }

* Redux

  - 比较底层的封装，单项数据流，全局数据中心，实现了组件之间的数据和事件的传递

  - 仅支持同步函数，异步需要使用第三方插件（Redux-thunk）

  - 用法

    - 引入<script src="https://unpkg.com/redux@4.0.4/dist/redux.js">
    - 创造一个 store
      - var store = Redux.createStore((state, action)=>{},state)
      - 第一个参数是一个 reducer 函数，函数有 2 个参数，state 表示储存的数据，action 是一个对象，子组件里面通过 dispatch 函数来传递这个对象，这个 reducer 函数通过 action 的信息来触发对 state 的相关操作，返回一个新的 state
      - 创建的 store 上面有两个常用的方法，dispatch 和 subscribe 方法
        - dispatch, 传递给下层组件，下层组件利用这个方法操作 state 触发更新
        - subscribe, 用来监听 state 变更
          - var unSubscribe = store.subscribe(fun)
          - 数据变更时 fun 会运行，这个 fun 不接参数，并返回一个函数 unSubscribe
          - 调用 unSubscribe 就会把这次的监听函数 subscribe 解绑
    - mutations
      - 下层组件 dispatch 的 action 里面有操作类型信息，一般放到 action.type 属性上，reducer 会根据 action.type 来执行某种操作，当我们可以把这些操作集中放到全局定义的一个 mutations 属性上面，reducer 函数接收到 action 时先从 mutation 上面拿到函数，再操作 state
        var store = Redux.createStore((state, action) => {
        var mutation = mutations[action.type]
        if (mutation) {
        return mutation(state, action)
        } else {
        return state
        }
        }, state)
      - 操作数据的方法可以配合 immer.js，优化性能而且更方便

  - 下层组件如何接入 store，需要第三方插件集成

    - <script src="https://unpkg.com/react-redux@5.0.6/dist/react-redux.js">
      var { Provider，connect} = ReactRedux


    - 在根组件里面的最外层用 <Provider store={store}></Provider>包一层，下层组件就可以访问到 store 的 state 以及相关方法

    - connect 函数的用法

      - var NewComponent = connect(mapStateToProps,mapDispatchToProps)(Component)
      - Component 表示一个子组件，可以是函数组件或者 class 组件
      - mapStateToProps 函数，state=>{return {}}, 对 state 进行相关操作，返回一个对象 obj1
      - mapDispatchToProps 函数，dispatch=>{return {deleteTodo: (idx) => dispatch({type: 'deleteTodo', idx})}}, 返回一个对象 obj2，对象属性是组件相关方法名称，属性值是一个函数，这个函数里面会 dispatch 相关 action 到 store 的 reducer 函数，触发组件更新；
        obj1 和 obj2 都会合并到组件的 props 对象里面，这样组件可以通过 props.method 来 dispatch 相关方法到达交互目的
      - NewComponent 新返回的组件，可以接受全局的 store 进行交互

    - connect 函数的实现
      var StoreContext = React.createContext()
      function connect(mapState, mapDispatch) {
      return function(WrapComp) {
      return React.forwardRef(function Comp(props, ref) {
      var store = useContext(StoreContext)
      var [r, setR] = useState(0)
      useEffect(() => {
      return store.subscribe(() => {
      setR(r + 1)
      })
      })
      var state = mapState(store.getState())
      var dispatchs = mapDispatch(store.dispatch)
      var {children, ...props2} = props
      return <WrapComp ref={ref} {...props2} {...state} {...dispatchs}>{children}</WrapComp>
      })
      }
      }

- react 全家桶

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
      \*readme.md 告诉你这么开启这个项目的命令
  - 相关文件配置好后，运行 npm run build , 它会根据 src 和 public 一起构建一个 build 文件，之后把 build 文件里面的资源放到后端的 static 静态文件夹里，这样就可以用后端的端口启动项目；这个 build 文件就是上线启动文件

## webpack

- 打包
- 将除 js 以外的其它资源也当成 require 的资源，如图片，css,json,svg，字体，他通过把这些非 js 资源转化为等价的 js 文件来实现；这个格式转换工具在 webpack 里面称为 loader, 即使是 js 文件也会经过 bable-loader 转换
  比如对于图片而言，小资源转换为 base64，大资源转换资源地址；
  比如 sass-loader,css-loader,style-loader
- plugin 在 webpack 则是对整体的打包结果进行处理的一种插件机制
  如压缩，混淆代码（安全保密），（webpack-jsuglify-plugin）
  处理通用（vendor）模块的抽离（common-chunks-plugin）
  自动生成入门 html 页面（webpack-html-plugin）
- 代码分割 code spliting
  将一开始不需要用到的模块打包到另一个或多个文件中，在需要的时候（代码执行到对应的位置时）再加载
- 摇树优化 tree shaking
  不需要用到的代码将不会进入到打包结果中，减少打包体积
  此功能主要依赖 es module 语法，因为它提供静态分析（即不运行代码对代码进行分析）的可能性

## 其它框架知识

- 微信小程序 https://developers.weixin.qq.com/miniprogram/dev/framework/
- ssr 服务端渲染
  - 一次请求响应就拿到所有渲染数据,客户更快看到页面内容
  - 直接返回目标页面，不需要重新加载
  - 方便 SEQ
  - 需要后端配置
- React Native 是用来开发移动应用。需要用到 React 概念
