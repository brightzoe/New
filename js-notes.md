缩写：
+ e.g.  for example（举例）
+ i.e   that is（即）
+ etc.  et cetera（等等…）
+ P.S.  post scriptum(附言，另外)


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

自动类型转换：弱类型语言js

比较comparisons
+ == 相等，会进行类型转换再比较
+ === 严格相等，不进行类型转换直接比较
+ !== 不严格相等
+ == 一边为字符串，则全转换为字符串比较
+ 字符串也可以进行比较，比较的是ASCII
+ NaN跟自己也不相等
+ null/undefined 空值
  
逻辑运算 logical operators
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
+ 逻辑运算的短路特性short-circuiting 
  + 右边的值只在必要时进行计算
  - __ && __ && __   从左到右返回第一个为false的值
  - __ || __ || __   从左到右返回第一个为true的值

## 程序结构

表达式和语句 expressions and statements
+ 分号大部分情况可以省略。
+ ASI 自动分号插入
+ 当语句的第一个字符为 + - / { (这几个符号时，前面一行必须加分号。

变量 variables 
+ 变量不含空格，不以数字开头，符号只能用$和_，不能用关键字
+ 定义变量不赋值 返回undefined
+ let 绑定，类似var
+ const 常量，定义一个不变的绑定


函数 functions
+  `aleret("Good moring!");` 弹出一个含有信息的对话框
+  `console.log()` 输出值
+  `confirm("shall we go shopping?");` 返回布尔值 T/F
+  `prompt("Enter passcode","passcode is");` 返回字符，前面是问题，后面是输入值的前缀。无法改变对话框的外观

控制流 control flow ：类似CSS的正常流

转换类型 
+ `Number()`
+ `String()`
+ `Boolean()`
+ `x.toFixed(n)` 确定精度
+ `Math.pow(x,3)` 乘方
+ `Math.PI` **大小写要准确，js大小写敏感**