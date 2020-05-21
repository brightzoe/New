#### 页面结构：

```html
<!DOCTYPE html>
<!-- 让浏览器以最新的标准来解析这个页面，写在最前面 -->
<html>
  <head></head>
  <body></body>
</html>
```

#### `<head>`的内容

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
  <base href="ttps://www.baidu.com/abc/" target="页面中所有链接的打开位置" />

  <link rel="stylesheet" href="xx.css" media="print" />
  <style>
    @import 'a.css' <!--必须出现在文件头，路径是相对于这句代码所在的 css 文件
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

#### HTML5 元素分类

- flow
- pharsing
- transparent
- meta content
- section
- heading content
- embed
- intereactive
  https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories

#### `<h>`

```html
<hgroup style="border: 5px solid: red">
  <!-- 可以在标签设置一些简单样式 -->
  <h1>一级标题</h1>
  <h2>二级标题</h2>
</hgroup>
```

#### `<a>`

```html
<a href="https://jd.com/">京东</a>
<a href="#id 名称">1111</a>
<a href="http://jd.com/#footer"></a>
<a href="mailto:aaa@bbb.com?title=1&subject=2&content=3">mail me</a>
<a href="xxx/jianai.pdf" download="简爱。pdf">点我下截《简爱》完整版</a>
```

#### `<img>`

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

#### `<ul>,<ol>,<dl>`

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

#### `<form>`

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
<button type="reset/button/submit"></button>
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

#### 搜索框：

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

#### 表格

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
