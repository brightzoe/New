# HTML

```html
<!DOCTYPE html>
<!-- 让浏览器以最新的标准来解析这个页面，写在最前面 -->
<html>
  <head></head>
  <body></body>
</html>
```

## `<head>`的内容

```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />
  <title>html-notes</title>
  <!-- 标题 -->
  <link rel="icon" href="https://pbihub.cn/assets/images/logo.png" />
  <!--页面图标-->

  <meta name="viewport" content="width=500" />
  <!-- 页面以多宽尺寸渲染 -->
  <base href="https://www.baidu.com/abc/" target="页面中所有链接的打开位置" />

  <link rel="stylesheet" href="xx.css" media="print" />
  <style>
    @import "a.css" <!--必须出现在文件头，路径是相对于这句代码所在的 css 文件
        --> p, a {
      border: 3px dotted greenyellow;
    }
  </style>
</head>
```

```html
<body
  link="aqua"
  alink="grey"
  vlink="red"
  bgcolor="yellow"
  background="http://www.baidu.com/logo.png"
  leftmargin="10%"
></body>
<!-- 内联样式，设置一些简单的格式 -->
```

## HTML5 元素分类

- flow
- pharsing
- transparent
- meta content
- section
- heading content
- embed
- intereactive
  https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories

## `<h>`

```html
<hgroup style="border: 5px solid: red">
  <!-- 可以在标签设置一些简单样式 -->
  <h1>一级标题</h1>
  <h2>二级标题</h2>
</hgroup>
```

## `<a>`

```html
<a href="https://jd.com/">京东</a>
<a href="#id 名称">1111</a>
<a href="http://jd.com/#footer"></a>
<a href="mailto:aaa@bbb.com?title=1&subject=2&content=3">mail me</a>
<a href="xxx/jianai.pdf" download="简爱。pdf">点我下截《简爱》完整版</a>
```

## `<img>`

```html
<img src="http://www.baidu.com/logo.png" alt="" title="tooltip" />
<img srcset="a.jpg 1x, b.jpg 2x, c.jpg 3x" />
<!-- 不同大小屏幕分辨率不同，考虑适配问题 -->
<!-- 可以使用 width 和 height 属性定义图片的宽和高 -->
```

图片不同区域的指示：`<map>`
应用场景：演唱会选座位

```html
<img
  title="一个标题"
  src="https://drscdn.500px.org/photo/174778125/m%3D1170_k%3D1/2841ccf2a3720e8e794a6a6930f6ff2c"
  width="400"
  usemap="#imgmap"
  alt=""
/>
<map name="imgmap" id="imgmap">
  <area
    shape="cirlce"
    coords="0,0,400"
    href="https://www.mi.com/"
    target="_blank"
    alt=""
    title="111"
  />
  <area
    shape="rect"
    coords="0,0,110,260"
    href="https://www.mi.com/"
    target="_blank"
    alt=""
    title="11"
  />
  <area shape="poly" coords="" href="" alt="" />
</map>
```

`<marquee> foo </marquee>`

- 从右向左飘的文字

```html
<strong>12</strong>
<em>12</em>
<b>12</b>
<i>12</i>
<u>12</u>
<del>12</del>
```

`<pre>,<code>`

```html
<pre>
  <code class="">

  </code>
</pre>
```

### 图片格式

- jpg，jpeg

  - 有损压缩，压缩率高
  - 照片

- png (portable network graphic)

  - 无损压缩
  - 适合有大块相同颜色区域的图像，不适合照片
  - 支持透明(Alpha 通道)

- gif

  - 只有 256 色(原图小于 256 色时是无损压缩)
  - 支持透明，但只支持全透明和不透明

- bmp

  - 无压缩，无损
  - 多种颜色数量的格式
  - 体积大，不适合网页

- psd

  Photoshop 专用格式

- webp

  - google 开发的格式
  - 有损压缩
  - 各方面强过 jpg
  - 适合移动端

## `<ul>,<ol>,<dl>`

```html
<ul>
  <li>西瓜</li>
  <li>苹果</li>
</ul>

<ol>
  <li>西瓜</li>
  <li>苹果</li>
</ol>

<dl>
  <dt>老师</dt>
  <dd>谢然</dd>

  <dt>学生</dt>
  <dd>张三</dd>
  <dd>李四</dd>
  <dd>王五</dd>
</dl>
```

## `<form>`

```html
<form action="" target="" method=""></form>
```

`<input>,<button>`

```html
<input type="text" />
<input type="password" />
<input type="checkbox" />
<input type="radio" />
<input type="button" value="按钮" />
<input type="submit" value="提交" />
<input type="reset" value="重置" />
<!-- 为按钮时，value 设置显示的文字，为输入框时，value 为里面的默认内容 -->
<input type="file" name="" id="" accept="image/*,text/*" multiple hidden />
<input type="range" min="1" max="500" step="20" />
<!-- 默认 0-100, 但可以通过下面设置范围，范围随意设置，和跨度 -->
<input
  type="radio"
  disabled
  required
  maxlength
  minlength
  placeholder
  autofocus
  tabindex
  checked
  name=""
/>
<!-- name 很重要，表单提交时为这个域 formcontrol 的名字 -->
<!-- 在 radio 和 checkbox 阵列里，name 相同的元素被分在一组里 -->
<button type="reset/button/submit" disabled></button>
```
设置禁用button的属性：
```css
[disabled],:disabled{
  curso r:not-allowed
}
```
`<button type="reset/button/submit"></button>`与`<input type="button" >`的区别：

- input 的 button 只能在按钮上显示纯文字，非闭合标签无法嵌套
- 而 button 标签可以在按钮上显示其它内容比如图片（即嵌套其它标签），文字也可以设置不同颜色等

`<input>与<label>`

- 用`<label>`扩大选择区域，提升用户体验，以下两种方式：

```html
<input type="radio" id="id1" />
<label for="id1">苹果</label>
<!-- label 的 for 与 input 进行绑定 -->
<label> <input type="file" />选择一个文件 </label>
```

下拉框`<select>,<option>`

```html
<select name="city">
  <option selected hidden disabled>请选择</option>
  <option value="0571">一个三</option>
  <option value="0571">四个六</option>
  <optgroup label="一线">
    <option value="0571">杭州</option>
    <option value="0571">湖州</option>
  </optgroup>
  <optgroup label="十八线">
    <option value="0571">马家沟</option>
    <option value="0571">曼哈屯</option>
  </optgroup>
</select>
```

框起来：`<fieldset>` 文本框：`<textarea>`

```html
<fieldset>
  <legend>Title</legend>
  <input type="radio" id="radio" /> <label for="radio">Click me</label>
  <textarea name="" id="" cols="30" rows="10"></textarea>
</fieldset>
```

## 搜索框：

```html
<form action="http://www.baidu.com/s" target="_blank">
  请输入：<input type="text" name="wd" value="" /> <br />
  <!-- name: 文本框的名字 -->
  <input type="submit" value="百度一下" />
</form>

<form action="http://www.www.google.com/search" target="_blank">
  请输入：<input type="text" name="q" value="" /> <br />
  <input type="submit" value="google 一下" />
</form>
```

## 表格

`<table>`包含`<thead>,<tfoot>,<tbody>`

```html
<table border="1" cellspacing="0" width="300px" height="150px">
  <!-- 不考虑打印可以省略 thead,tfoot,tbody -->
  <!-- 可以有多个 tbody -->
  <caption>
    成绩单
  </caption>
  <col bgcolor="magenta" width="120px" />
  <colgroup bgcolor="green">
    <col bgcolor="red" />
    <col />
  </colgroup>
  <!--第几个 col 就是第几列，还有 colgroup-->
  <!--回想：group:hgroup,optgroup,colgroup,fieldgroup,ul,ol-->
  <thead>
    <tr>
      <!--行，table row-->
      <th>name</th>
      <th>number</th>
      <th id="score">score</th>
      <!--id, 后面的 headers 与其形成对应关系-->
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>皮蛋</th>
      <td>2</td>
      <!--支持跨行及跨列，但不能跨过 thead,tbody,tfoot-->
      <td>20</td>
      <td headers="score stu1">100</td>
    </tr>
    <tr>
      <th>小米</th>
      <td>222</td>
      <td>333</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <th>豆豆</th>
      <th>222</th>
      <th>333</th>
      <th>555</th>
    </tr>
  </tfoot>
</table>
```

跨行跨列表格的实现：`rowspan` `colspan`

```html
<table border="1">
  <tr>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    <td>4</td>
    <td>5</td>
  </tr>
  <tr>
    <td>1</td>
    <td rowspan="3">2</td>
    <td colspan="2">3</td>
    <td>4</td>
  </tr>
  <tr>
    <td>1</td>
    <td>2</td>
    <td rowspan="3">3</td>
  </tr>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>3</td>
  </tr>
  <tr>
    <td colspan="3">1</td>
    <td>2</td>
  </tr>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    <td>4</td>
    <td>5</td>
  </tr>
</table>
```

`<iframe>`框架嵌套

- 安全原因，有些网页拒绝被嵌入其他页面
- iframe 可以套 iframe
- 它内部的跳转记录也会存在于浏览器的前进后退的记录里面

```html
<iframe src="https://www.baidu.com/" name="百度" frameborder="1">
  <p>您的浏览器不支持 iframe, 请升级浏览器</p>
  <!--fallback: 不支持此标签的退化内容-->
</iframe>
```

## feedback

- 有的 feedback 放里面，有的 feedback 放外面，取决于正常使用里面是否有元素。
- 正常使用里面没有东西，feedback 写里面，如果可用则会被忽略，不可用就会显示。

```html
<canvas>
  <p>no supported</p>
</canvas>

<script>
  var a = 8;
</script>
<noscript>your browser dont support javascript!</noscript>

<iframe src="" frameborder="0">
  <p>no supported</p>
</iframe>
```

## html5 语义标签

```html
<header>
  <nav></nav>
</header>

<template></template>
<table></table>

<article>
  <section></section>
  <aside></aside>
  <textarea></textarea>
</article>
```

## 一些常见标签

- 上标：`A <sub>2</sub>` 下标：`A <sup>2</sup>`
- 多媒体标签：

```html
<video src="a.mp4" controls></video>

<video autoplay loop preload controls>
  <source src="a.mp4" />
  <source src="a.m3u8" />
  <source src="a.webm" />
  您的浏览器不支持 video
</video>

<audio src=""></audio>

<object data="" type=""></object>
<!-- 东西，对象，是一个容器 -->

<progress value="36" min="" max=""></progress>

<i class="fa fa-angle-right" aria-hidden="true"></i>
```

## 补充

### SVG 可缩放矢量图（Scalable Vector Graphics）

- SVG 是一种基于 XML 语法的图像格式。其他图像格式都是基于像素处理的，SVG 则是属于对图像的形状描述，所以它本质上是文本文件，体积较小，且不管放大多少倍都不会失真。
- SVG 文件可以直接插入网页，成为 DOM 的一部分，然后用 JavaScript 和 CSS 进行操作。
  SVG 文件还可以转为 BASE64 编码，然后作为 Data URI 写入网页。

### canvas

- HTML5 <canvas> 元素用于图形的绘制，<canvas> 标签只是图形容器，通过 JavaScript 来完成绘制；该元素有多种 API 接口，可以绘制路径，盒、圆、字符以及添加图像等。
- 对像素 pixel 进行操作， PNG 格式 1 个像素为 3 或 4 个字节（rgba）
- 拿到 canvas 元素
  ctx = canvas.getContext('2d') 创建 2d 画布框架实例，
  ctx.fillStyle = 'red' 设置填充色
  ctx.fillRect(20,30,1,1) 从（20，30）坐标开始画一个宽 1 高 1 的实心矩形，填充色为红色；左上角为原点
  ctx.drawImage(image, dx, dy);将图片绘制到 canvas 元素上，dx 和 dy 表示到左上角的偏移量
  ctx.getImageData(20,30,1,1).data=>[255,0,0,255] 取（20，30）坐标开始画一个宽 1 高 1 的矩形颜色，用类数组表示颜色，表示 RGBA,也可以取多个颜色；数组每 4 项表示一个像素颜色
  canvas.toDataURL()拿到 canvas 图片对应的地址，点击地址可以直接看到图片

## 其他

- name 只有一些标签可以使用，可重复。可配合 target 使用，使新网页的地址为 name 的父标签（eg `<iframe name="sfds"> <a target="sfds">`)

- 无 `doctype` 声明的页面元素的盒子模型是 border box

- 给 html 元素设置宽高百分比，是相对于视口而言的。如 900*1080 的视口，height:100% 时高度就是 1080，视口大小改变，html 宽高随之改变
- body 是一个特殊的元素，不能通过 overflow：hidden 达到 BFC 效果。
- html 或 body 如果设置了背景颜色，那么这个颜色会覆盖整个窗口（无论设置的 html 或 body 元素的区域有多大），区域外的颜色优先和 html 的一致，如果 html 没有设置背景颜色，则区域外的颜色和 body 一致
- <template> 模板元素 浏览器会加载其内容但不会显示，我们可以读取其 innerHtml 和 content 属性，也能配合框架使用
- document-fragment 文档片段 可以包括多个元素
- web-component 组件 ，可以自定义标签。现代框架都有类似功能

# CSS

**为啥用 CSS:**
HTML 可以控制的样式太少
样式不能跨页面复用，跟上一条类似
各种度量单位不能选，只能以像素和百分比为单位
无法灵活实现布局 可维护性很差

**CSS Cascading Style Sheet 层叠样式表**
选择器：
声明与关键词
声明中的属性和属性中的值必须是 css 及对应属性所支持的，否则无效
颜色属性会继承

```css
/*元素选择器*/
p {
  font: 16px;
}
/* 选择器名大小写敏感 */

/*属性选择器*/
[title] {
  color: red;
}

[title="hello"] {
  color: red;
}

/* 属性以指定内容开头 */
[title^="woo"] {
  color: red;
}

/* 属性以指定内容结束 */
[title$="ooo"] {
  color: red;
}

/* 属性包含指定元素 */
[title*="ooq"] {
  color: red;
}

/* 包含一个完整单词 */
[title~="our"] {
  color: red;
}

/* 以下相同 */
[class~="bar"] {
}

.bar {
}

/* 类名以特定内容开头 */
[class^="fa-"],
[class*=" fa-"] {
  text-decoration: underline;
}

/* 类名以特定内容结尾 */
[class$="-ui"],
[class*="-ui "] {
  text-decoration: line-through;
}

/* 属性前缀选择器（选择 lang 为 zh 或以 zh 开头的元素） */
[lang|="zh"] {
}

/* 忽略大小写，后面加个 i, ignore */
[href$=".pdf"i] {
}

/* 复合选择器 */
/* <p class="class1 class2 lsdkfj lksdfj" id="abc"></p> */
p.class1.class2 {
}

.class1 .class2 #abc {
}

/* 子元素选择器：选择子元素，但里面的元素会继承 */
a > span {
  border: 2px solid;
}

/* 选择 a 里面的所有 span 元素 */
a span {
  border: 1px solid;
}

/* a 里面的 span 的里面的 span */
a span span {
  border: 1px solid;
}

/* 邻接选择器；只能向后选*/
/* 同级，相邻的一个 p */
h1 + p {
}

/* 后面的所有 p */
h1 ~ p {
}

div ul > li ~ li {
}

.a.b.c {
  /* 同时有 a,
  b,
  c 类名的元素 */
}

.a .b .c {
  /* 类名为 a 的元素里面的类名为 b 的元素里面的类名为 c 的元素 */
}

.a,
.b,
.c {
  /* 类名为 a 或 b 或 c 的元素 */
}

/* 伪类选择器 */
/* 状态伪类 */
:link {
  /* 未被访问过的有 href 属性的 a 标签 */
}

:visited {
  /* 访问过的标签；
  只能设置颜色，
  隐私安全原因 */
}

:active {
  /* 被激活的元素，
  鼠标按下的 */
}

:hover {
  /* 鼠标放上去的元素 */
}

/* 书写顺序：LV HA */

:focus {
  /* 光标放上去，
  被聚焦的元素 */
}

:first-child {
  /* 匹配所有某父元素的第一个子元素 */
}

p:first-child {
  /* 选择作为第一个子节点的 p 元素，
  而不是 p 的第一个子节点 */
}

:last-child {
}

:nth-child(2n + 1) {
  /* 选中第奇数个元素，
  可以设置一些规则 */
}

ul li:nth-child(n + 3):nth-last-child(n + 2) {
  /* ul 里面的 li 且正数第三个到倒数第二个 加了空格就是里面的，
  注意空格 */
}

:nth-child(odd/even) {
  /* 选择奇偶数 */
}

:nth-of-type(2) {
}
/* 给类型分类，匹配所有类型的第二个 */

/* 选择器取反 */
ul :not(p) {
  /* ul 里面不是 p 的元素 */
}

ul :not(.foo) {
  /* 里面只能用单个选择器，
  不能用层级 */
}

ul :not(p):not(.foo) {
  /* 可以用多个：not() 组成复合选择器 */
}

:root {
  /* 选择文件的根元素 */
}

:empty {
  /* 选择空元素，
  包括自闭合标签 */
}

:target {
  /* 选中当前 id 值为#后面的元素的内容；
  也就是目标元素的内容 */
}

:required {
}

:optional {
}

:valid {
}

:invalid {
}

<input > :enabled {
}

:disabled {
}

:checked {
}
```

## 选择器的优先级

- 1,1,1,1
  （内联样式/行内样式/行间样式，id 选择器，类选择器/属性选择器/伪类选择器，元素选择器）
- 连接符如 > + ~ 等不参与优先级的计算
- 最优先：!important
- 0.0.0.0 通配符：\*
- 继承：没有优先级，比 [\*] 的有限级还要小
- 优先级一样的话，按出现的顺序排列，后出现的优先级更高
  - 所以是 link visited focus hover active
  - :link:hover /0 0 2 0/
  - 不过在这几个伪类上分别写完全不同的属性时，顺序就不重要了
  - 重要的是写相同的属性，这时就要考虑优先级的问题了
  - LV HA VL HA 没有太大区别，因为很明显，V 和 L 不会同时匹配

- 层叠样式从高到低
  双方选择器优先级排序一样时，看 important 的来源

  - 第一：最终用户 important 样式
  - 第二：网站作者 important 样式 authored style
    双方选择器优先级排序一样时，没有 important 时，看样式来源

    - 第三：作者普通样式
    - 第四：用户普通样式 Custom.css

    - 第五 默认样式，浏览器内置样式，User Agent Style（最低）

  - 不来自 CSS 的样式
    - 如 font 标签 <font size color face></font>
    - 可以想象它的优先级为 0000 并且出现在作者样式的开头
    - 会被作者样式和读者样式覆盖，但不会被默认样式覆盖
    - p75 页
    ```css
    <font color="red">aa</font>
    <style> {
    color: green;
    }
    </style>
    ```

## 值与单位

**数字**：
line-height:2 200%, 倍数
column-count: 2;
zoom: 2.5;

**百分比**：
width/height: 60%; 基准是其父元素的宽度或高度
top/left/right/bottom: 50%;
line-height: 150%; 基准是文字的大小
vertical-align: 40%;
color: rgb(40%, 50%, 70%)

**颜色**：R G B
color:red/silver/grey;

#(0-255)(0-255)(0-255) ->16700000 hex color
#abc ->#aabbcc
#abcd - #aabbccdd
#456 ->#445566
#XYZ ->#XXYYZZ
#XYZA ->#XXYYZZAA

rgb(0-255,0-255,0-255);
rgb(30%,30%,30%) 相对于 255 来说
rgba(r,g,b,0-1);

色域

色彩空间
RGB
CMYK (Cany Manganta Yellow BlacK)
hsla（色相，饱和度，明度，0-1）

**长度**
绝对长度：in(ch) cm mm
相对长度：

- px,CSS 像素，在设计中大多数被认为是绝对长度
- em: 基准是当前元素字号的大小，当前没有的话就继承父元素 1 em=100%
- rem, 基准是 html 元素字号，做到灵活缩放整个网页
- vw/vh, 视觉窗口的宽度/长度
  1vw 视口宽度 1/100
  vmax=max(vw, vh) 视口宽或者高较大的那一个的 100 之一
  vmin=min(vw, vh) 视口宽或者高较小的那一个的 100 之一

  width: calc(2 \* 30em - 40%)

**角度**
degree 45deg 90deg
radian 弧度 3.14rad=180deg

**时间** s ms

**URL** background-image: url(a.png); 指定背景图片/字体
相对路径 绝对路径

## 视口

**设备像素与 CSS 像素**
现代浏览器上实现的缩放，仅仅是拉伸像素。元素的宽度并没有变化，而是实际像素在尺寸上增加。
**窗口尺寸**
浏览器窗口内部尺寸：还有多少可用空间用于 CSS 布局，用 css 像素度量。

window.innerWidth/Height
表示浏览器窗口的总尺寸，包括滚动条。
代表视觉视口的尺寸，以 CSS 像素来度量。

window.pageX/YOffset
表示页面的滚动偏移，以 CSS 像素度量。

document. documentElement.clientWidth/Height
代表布局视口的尺寸，以 CSS 像素度量。

移动端浏览器的视口太窄，导致不能满足 CSS 布局。最显而易见的解决方案就是，让视口更宽一些，因此，这就要求将视口一分为二：视觉视口（visual viewport）和布局视口（layout viewport）。

- 视觉视口是页面当前显示在屏幕上的一部分，用户可以通过滚动来改变他所看到的页面部分，或通过缩放来改变视觉视口的大小。
- html 元素初始时的宽度是布局视口的宽度，且 CSS 是按照在明显比手机屏幕要宽的屏幕上的设定来诠释的。

**媒体查询**

<meta name="viewport" content="width=320">，为了调整布局视口。

**移动端视口效果**

- 无 viewport 标签：手机用 1000 左右的视口来渲染页面，即当成传统网站
- 有 viewport 标签：
  - android4.4.4 以及下浏览器仅支持 width=device-width，该值随手机屏幕大小变化。一般来讲，手机屏幕越大，device-width 值越大。
  - android5.0 及以上浏览器支持 width=number，手机浏览器以特定视口宽度渲染页面
- 期望的效果：
  - 视觉稿的宽度 (X) 总是占满任意大小手机的屏幕宽度，即始觉稿显示在不同手机上总是等比缩放的。
    - 在 5.0 以上的系统上，直接将 width=视觉稿宽度，直接使用视觉稿量出来的值并用 px 单位开发。
    - 由于 5.0 以下的系统不支持此功能，只能利用 rem 单位灵活缩放，实现页面正好缩放到屏幕宽度。
      - Xrem=屏幕宽度=100vw=JS 测量出的视口宽度，即 1rem=100vw/x=JS 测量出的视口宽度/X
      ```css
      html{
       font-size:calc(100vw/X);
       or
       font-size: 视口宽度/X;（需要 JS 测量）
      }
      ```
      - 但是浏览器限制最小字号为 12px，而上述公式计算的字号通常小于 12px，会被重置为 12px。为了防止字号被重置，一般将公式再乘 100 计算字号。导致从视觉稿测量的值除以 100 再加上 rem 单位才能应用在代码。考虑到兼容性，更多采用这种方式。参考 https://m.mi.com
  - 屏幕越大文字越多。
    - 采用流式布局，即不为块元素设置宽度，而让它自动占满窗口或父元素宽度，参考 github 移动端。
    - width=device-width
  - 布局保持比例，但物理面积越大显示的字越多。
    - width=device-width
    - 布局采用 rem 方案，排版使用正常的字号大小如 px。

## 字体

- 字体族
  - serif 衬线字体，不等宽
  - sans-serif 非衬线字体，成比例
  - monospace 字体，等宽字体

字体名中间有空格、尾部有# \$等符号，建议使用引号

- 另外，通用字体族必须不能加引号，它们算是关键字而不是字体值（字符串）

- 但是，有时候用户的浏览器并不一定安装了这个字体
- 这时可以指定退化（fallback）方案
  h1 {
  font-family: "Helvetica", "微软雅黑", sans-serif;
  }
- 一般来说，最好提供一个字体族名称做为最后的退化方案

- google-fonts, 可以直接引用

```html
<link
  href="https://fonts.googleapis.com/css?family=Lobster"
  rel="stylesheet"
  type="text/css"
/>
```

字重 font-weight 100-900
normal=400
bold=700
bolder lighter

字号 font-size
绝对尺寸：
xx-small,
x-small,
small,
medium,
large,
x-large,
and xx-large

百分比大小：
一般是相对于父元素的大小，也即继承过来的值；旦 line-height 相对于元素的 font-size

font-size 继承是继承父级的计算值，而不是百分比

font-style
normal italic oblique

font-variant
normal small-caps: 小型的大写字母
text-transform：uppercase/captialize +把小写字母显示成小号的大写字母 +有些字体专门为小写字母设计了这种样式，而不是单纯的把大写字母显示的小一点。

**font**:
[font-style || font-variant || font-weight] font-size[ / line-height] font-family

- font: small-caps bold 20px / 1.2em 宋体，serif;
- 前三个的顺序不重要
- font 属性值的覆盖，整个是一个属性，值会一起被新值覆盖

使用系统字体：（只能整体设置）
caption: 用于有标题的控件，如按钮。
icon: 用于对图标加标签。
menu: 用于菜单，及下拉菜单和菜单列表。
message-box: 用于对话框。
small-caption: 用于小空间加标签。
status-bar: 用于窗口状态条。
例：button {font:caption;}

text-indent:文字缩进 (用于块级元素), 用负值可以隐藏文字

text-align:文字水平对齐 left,right,center,justify

line-height

vertical-align:行内元素/替换元素垂直对齐 sub/supper baseline/bottom/top

word-spacing: 其值是添加到本身空格间的值

Text Decoration
none | [ underline ‖ overline ‖ line-through ‖ blink]
可联合使用：h2 {
text-decoration: underline overline;
}
元素非继承，但子元素无法使用 none 清除父元素的 underline 等，决定于用户代理
text-transform: uppercase/lowercase/capitalize/
Text Shadows
none | [<length>‖<length><length>?] color
两个 length，表示水平和垂直偏移，第三个可省略：模糊半径：从阴影外边缘到模糊范围边缘，具体的模糊方法由用户代理决定
每组中间，分隔
text-shadow:
1px 1px #2d343a,
2px 2px #2d343a,
3px 3px #2d343a;
特大范围阴影可能造成性能问题

box-shadow 与 text-shadow 类似:水平偏移 垂直偏移 模糊半径 扩散半径 颜色，下一组；

- 两个半径都可以不写，默认都为 0
  e.g. `box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);`

white-space 指定如何处理空格与换行，以及自动换行
word-break 指定单词如何折行
overflow-wrap
direction: ltr | rtl 文字阅读方式

## 元素（即 html 标签）的层级关系

嵌套/层叠/树形/递归/自相似/分形结构

- 子元素 child
- 父元素 parent
- 兄弟 siblings
- 后代 descendants
- 祖先 ancestor

* 替换元素与非替换元素
  替换元素是没有后代元素/标签/结点的
* 替换元素是指其内容被其它不在文档里的内容替换了的元素，如：
* img
* radio
* checkbox
* input
* iframe
* canvas
* object
  其它大部分元素都是非替换元素

元素的显示角色
**块级元素**：占满父元素的宽度，不会让其它元素在它的旁边。如：p,h1-6,div,nav,header
display 属性可以改变元素的显示角色
**行内/内联/行间**：在一行文字内产生的元素框。如 a，em，strong,i,b,u,span. 它们不会打断所在行的文字

html5 中元素并不只区分为块级与内联，而是分为如下几个大类:

- flow
- pharsing
- transparent
- meta content
- section+heading content
- embed
- intereactive

## **盒模型**

margin 可以为负值，padding 不能为负值。
background-color 会充满 content,padding,border.

从外到内：margin-box,border-box,padding-box,content-box
默认情况：width,height 设置为 content-box, 可以用 box-sizing 可改变为 border-box

包含块：一个元素的布局上下文。由最近的块级祖先框/表单元格/行内块元素框的内容边界content-box构成。

正常流：从上到下/从左到右显示。没有定位，没有浮动，不是 flex 元素，这个元素就在正常流里面。

一个盒模型的**水平格式化**有七个属性，其中只有三个属性可以设置为 auto: 左右 margin 和 width

- 两个 auto:
  两个 margin 为 auto: 两边 auto 计算成一样的正值；如无法都为正，则左为 0, 右为负值
  一个 margin 为 auto,width 为 auto: 相当于为 auto 的 margin 为 0

- 三个 auto: 相当于左右 margin 为 0,width为auto.

- 零个 auto: 过分受限，重置右 margin

**块元素垂直格式化**：(date:11-26)
如果一个块级元素的高度是百分数，这个值是包含块高度的百分数。如果没有显式声明包含块的高度，子元素的百分比高度无效；如果用百分数表示 margin 或 padding, 值是包含块宽度的百分数。
- content box（文本盒子，没有文本时其尺寸为 0）

- 一个块元素没有内容时，默认 margin padding border content 都为 0。width 的默认值为 auto，margin 和 padding 一般默认为 0；
  标题，列表，表格等元素一般有默认的 margin 或者 padding
- background-color 说的是 border box 的背景颜色
- background-image 默认从 padding box 的左上方开始平铺背景图片
- outline 属性，位于 border 外围，紧贴着外边框，可起到突出元素的作用，不影响网页布局。
- 边框的其它样式设置了但是颜色没有设置，这时边框颜色默认为元素内容的前景色（即字体颜色颜色，不是背景色）

- 如果 border-left 足够粗，是一个梯形，内容区为 0 时变成了一个三角形。
- 边框合并：如果一个包含块高度为 auto, 没有 border,padding, 且只有块级子元素，其默认高度为最高块级子元素的外边框边界到最低块级子元素外边框，也就是说不包含子元素上下的 margin, 子元素 margin 会成为包含块 margin

- 边框不合并：但是如果包含块有 padding 或 border, 则包含子元素上下的 margin, 是从最高子元素的上外边距边界到最低子元素下外边距边界的距离。如果子元素 margin 为负，包含块高度越来越小，但最低为 0, 不会为负值。

- 在 CSS 中，两个或多个毗邻（父子元素或兄弟元素）的普通流中的块元素垂直方向上的 margin 会发生叠加。这种方式形成的外边距即可称为外边距叠加 (collapsed margin)。
  两个盒子相邻，两个正 margin 重合，取其中最大的 margin 为合并后共用的 margin.
  两个盒子相邻，两个负 margin 重合，取其中绝对值最大的 margin 为合并后共用的 margin.
  两个盒子相邻，两个正负 margin 重合，取正负相加的值为合并后共用的 margin.
  创建 BFC 和通过对父元素建立 border，padding，或者间隔可以使外边距不合并；
  水平方向 margin 不会合并，左右 margin 会紧挨着排列；
## **行内布局**

匿名文本：未包含在行内元素的字符串，在块内，不在行内，继承父元素line-height。空格的大小和字体一致，字体为 0 时没有空格。
em 框：字符框，字号确定了 em 框高度。
内容区：在非替换元素中，就是 em 框串起来的框。替换元素中，是元素固有高度加上外边距，边框，内边距。
行间距：line-height - font-size, 只用于非替换元素。
行内框：对于非替换元素，就是行高，line-height框。替换元素，是 margin-box。仅与行高有关。
行框：包裹住该行出现的行内框的最高点和最低点的最小框。上下行框紧紧挨着形成布局，如果父元素是块元素，行框撑起了父元素的高度。行框和 line-height 和 vertical-align 有关。
line height 框：假想概念，高度为行高，内容区和其共用一条居中线。
  - 包含块行高等于其高度，其内部文本和 inline 元素垂直居中；
  - 当 line-height 的值为数字或者百分比时，表示用字体的大小乘以数字或者百分比
  - 行高默认继承，行高有可能小于 font-size, 导致文本超出行框，两行字重叠。行高确定了行框的最小值。



**行内格式化**：
vertical-align:指定行内元素（inline）或表格单元格（table-cell）元素的垂直对齐方式。
top/bottom: 元素行内框顶端对着行框顶端。
text-top/text-bottom
middle: 元素行内框中点对着基线上 ex 的中点。
super/sub: 上标/下标，不精确。
<percentage>: 上移或下移 line-height 的百分数。
行内元素的边框边界由字体和字号决定，与 line-height 无关。
为行内元素设置外边距，在非替换元素顶端和底端没有任何效果。只应用于开始和末尾。

display:（改变元素显示）
inline-block: 看他自身位置认为是行内元素；看里面的布局，内容认为自己在块元素里。里面有内容时，基线是内容最后一行的基线；无内容时，将 margin-box 底部作为基线。
inline-block 元素触发 BFC

## BFC
Block Format Context 块级格式化上下文
自身形成一个布局单元：布局此元素内部时不用考虑其外部，可以理解为完全隔离的独立容器，容器里面的元素不会在布局上影响到外面的元素
- 在常规流和 float 里面有效，不能包着脱离常规流的定位元素
- 常规流块元素没有边框和内边距时，包裹着子元素的 border-box，父子元素的 margin 会合并。而触发了 BFC 的元素，父元素无论如何都会包裹着其子元素的 margin-box，父子元素的 margin 也不会合并
- 下列方式会触发 BFC：
  浮动元素（元素的 float 不是 none）
  绝对定位元素（元素的 position 为 absolute 或 fixed）
  行内块元素（元素的 display 为 inline-block）
  弹性元素（display 为 flex 或 inline-flex 元素的直接子元素）
  表格单元格（元素的 display 为 table-cell，HTML 表格单元格默认为该值）
  display 值为 flow-root 的元素
  overflow 值不为 visible 的块元素
  表格标题（元素的 display 为 table-caption，HTML 表格标题默认为该值）
  匿名表格单元格元素（元素的 display 为 table、table-row、 table-row-group、table-header-group、table-footer-group（分别是 HTML table、row、tbody、thead、tfoot 的默认属性）或 inline-table）
  contain 值为 layout、content 或 strict 的元素
  网格元素（display 为 grid 或 inline-grid 元素的直接子元素）
  多列容器（元素的 column-count 或 column-width 不为 auto，包括 column-count 为 1）
  column-span 为 all 的元素始终会创建一个新的 BFC，即使该元素没有包裹在一个多列容器中（标准变更，Chrome bug）。
## 定位布局
定位指的是 margin box 定位到对象的 padding box
position:

static: 不定位，常规流

fixed: 固定定位，相对于视口定位，不随滚动条滚动；元素脱离常规流。当不指定位置时，定位元素以原来的起点开始绘制。

- 脱离常规流：他后续的元素及其包含块完全当他不存在。

relative: 相对定位，相对自身原来位置，不脱离常规流，本来的位置也会保留。宽高是否生效取决于 display。

absolute: 绝对定位，相对于最近定了位的祖先的 padding-box 定位。

- 如果找不到定位祖先，则相对于页面的首屏定位，会随着第一屏的滚动而滚动。完全脱离常规流。

sticky: 粘连定位。粘性定位可以被认为是相对定位和固定定位的混合。元素在跨越特定值前为相对定位，之后为固定定位,固定定位相对于他的包含块。

非常规流块元素（定位，浮动）的宽度，首先是尽量窄到正好包裹内容，当内容足够多的时候，会把它撑大到不溢出包含块为止。但如果强行让文本不折行，则可以被撑到更宽。

z-index: 元素覆盖关系设置

伪元素：相当于所属元素的第一个和最后一个子元素；通过 xxx::before/xxx::after 选中，通过 content 激活；伪元素选择器与普通选择器不需要对比优先级，选中的一定是不同的元素；伪元素无法交互，只能在父元素发生交互时，切换对应伪元素的样式。

## 浮动

常规流块级元素会当浮动元素不存在，行内元素会围绕浮动元素渲染。

**清除浮动：**
闭合浮动：某个块框通过增加自己的高度使其能够包含其浮动的后代元素（通过自己变大，包住所有后代浮动元素）
BFC（会创建一个独立的布局单元）

**具体行为：**

1. 从高度上包裹住自己内部的浮动元素
2. margin 不会与子元素重叠
3. 内外布局不相关：内部元素内容改变不影响元素自己的位置，行内块元素加 overflow:hidden 后以 margin-box 底边作为其基线
4. 在宽度上，如果 BFC 元素与浮动元素有重叠，他会变窄以避开浮动元素

**触发条件：**
overflow 不为 visible;
inline-block;
定位;
浮动;
HTML 元素永远 BFC;
display:flow/flow-root;

## 分列布局

---

## flex 布局

**主轴方向上：**

- flex-shrink: 收缩系数，需要与宽度/高度相乘

- flex-grow: 扩展系数，直接使用，按比例分剩余的部分

**一些属性：**

- justify-content: space-between; 主轴方向额外空间的分配，不能跟 flex-grow 一起用。
  - flex-start | flex-end | center | space-between | space-around | space-evenly
- align-content: space-around; 侧轴方向的空间如何分给每一个 flex 行，只适用于多行的 flex-box。
  - flex-start | flex-end | center | space-between | space-around | space-evenly | stretch
- align-items: 侧轴方向元素在行中的摆放，stretch 仅子元素高度为 auto 时生效。
  - flex-start | flex-end | center | baseline（每一行文本基线对齐） | stretch
- align-self: flex 子元素自身在行的垂直方向的摆放；用于覆盖 align-items
  - auto | flex-start | flex-end | center | baseline | stretch
- flex-basis: 指定主轴方向上初始大小。相当于宽度或者高度：主轴水平，相当于宽度，主轴垂直，相当于高度。只要它不为 auto，就是它生效而不是宽高属性生效。
- flex-wrap: 是否折行。nowarp/warp/warp-reverse（控制折行的方向，或者说交叉轴的方向）
- flex-flow:column wrap; 按什么方向；是否折行，是 flex-direction 和 flex-wrap 的简写
- margin 比较强势。

---

- flex 中匿名文本不能直接被 css 选中，只能继承 flex-container 的样式。
- 浮动对于 flex-items 无效，但绝对定位对于 flex-items 有效，也会形成 BFC。

**bootstrap 中 grid 很重要**

回流与重绘
relayout repaint

---

通过后面的元素改变前面元素的样式：

- input+label label 会将自己的 hover/active 转发给 input
- focus-within 伪类
- 后面的元素通过定位来模拟实现改变前面的元素的样式
- 比如微信朋友圈图片排布方式：
  1. li:first-child:last-child{}
  2. li:first-child:nth-last-child(2),li:first-child:nth-last-child(2)~li
  3. li:first-child:nth-last-child(3),li:first-child:nth-last-child(3)~li
  4. https://jsbin.com/celaqeb/1/edit?html,css,output

pointer-events:auto/none;

background: var(--penguin-skin, black);
//可以设置一个变量给 css 属性，后面的值若找不到变量，可以使用颜色

background: black;
background: var(--penguin-skin);
//设置 fallback 可以提高兼容性

background: linear-gradient(35deg, #CCFFFF,#FFCCCC);
//渐变色，粉蓝色，好看

```css
div:hover {
  transform: scale(1.1) skewX(24deg);
}
```

## @font-face

- @font-face 本质上可以看作是一个声明字体的变量
- 可以用来简写字体

  ```css
  @font-face {
    font-family: YH;
    src: local("Microsoft Yahei"), url("xxx.ttf");
  }
  ```
