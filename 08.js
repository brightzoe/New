//@ts-check








//TODO 快速排序
function qSort(ary, start = 0, end = ary.length - 1) {
  var pivotIndex = Math.floor((end - start + 1) * Math.random()) + start;
  var pivot = ary[pivotIndex];
  swap(ary, pivotIndex, end);
  var i = start - 1;
  for (var j = start; j < end; j++) {
    if (ary[j] < pivot) {
      i++;
      swap(ary, i, j);
    }
  }
}
function swap(ary, i, j) {
  if (i !== j) {
    var temp = ary[i];
    ary[i] = ary[j];
    ary[j] = temp;
  }
}



//从 0 开始实现一个 Ary 类，要求能够通过 ary[n]直接访问到编号为 n 的元素，读取 length 属性可以得到数组的实时长度，修改 length 属性会让数组长度发生变化，让其支持 for of 及 for in 循环。同时实现原生数组上的如下方法：slice，splice，reduce，reduceRight，map，filter，join，indexOf，lastIndexOf，concat，pop，push，shift，unshift，reverse，includes，forEach，every，some，filter。

function Ary(...val) {
  for (let key = 0; key < val.length; key++) {
    this[key] = val[key];
  }
}
Ary.prototype.length = function () {
  let length = 0;
  for (let key in this) {
    if (+key > length) {
      length = +key;
    }
  }

  return length++;
};
var ary = new Ary(1, 2);
// ary[ n ]
// ary.length
// ary.length = 3
// for (item of ary)
//   for (item in ary)
//     ary.slice() / splice() / reduce() /...

class Person {
  constructor(fullName) {
    this.fullName = fullName;
  }
  get firstName() {
    return this.fullName.match(/(\S+)/g)[0];
  }
  get lastName() {
    return this.fullName.match(/(\S+)/g)[1];
  }
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
  set firstName(name) {
    this.firstName = name;
  }
  set lastName(name) {
    this.lastName = name;
  }
  set fullName(name) {
    this.fullName = name;
  }
}
//传入表示fullName的字符串，包含两个单词
// var damiao = new Person('Xie Ran')
// console.log(damiao.firstName) //Xie
// console.log(damiao.lastName) //Ran
// damiao.fullName = 'Da Miao'
// console.log(damiao.firstName) //Da
// console.log(damiao.lastName) //Miao

//damiao.firstName = 'Xiao'
//console.log(damiao.fullName) // Xiao Miao

let field = document.getElementById("field");
let ball = document.getElementById("ball"); //40*40px

field.addEventListener("click", (e) => {
  if (e.clientX && e.clientY) {
    //鼠标的点击范围包括border
    let left = e.clientX - field.offsetLeft - 10 - ball.offsetWidth / 2;
    //鼠标x-场地X-场地border-ball的一半
    let top = e.clientY - field.offsetTop - 10 - ball.offsetHeight / 2;
    left = left < 0 ? 0 : left;
    left =
      left > field.clientWidth - ball.clientWidth
        ? field.clientWidth - 40
        : left;
    top = top < 0 ? 0 : top;
    top =
      top > field.clientHeight - ball.clientHeight
        ? field.clientHeight - 40
        : top;
    //处理好边界，不能盖过border
    ball.style.left = left + "px";
    ball.style.top = top + "px";
  } else {
    return;
  }
});

let menu = document.querySelector(".menu");
let title = document.querySelector(".title");
title.onclick = function (e) {
  menu.classList.toggle("open"); //改变状态，如果没则添加，如果有则删除
};

let tree = document.getElementById("tree");
let li = tree.querySelectorAll("li");
for (let item of li) {
  let span = document.createElement("span");
  item.prepend(span); //把span插入li当作第一个子元素
  span.append(span.nextSibling); //把它后面的兄弟当作它儿子
}
tree.addEventListener("click", function (e) {
  //li>span点击，li ul：hidden
  if (e.target.tagName !== "SPAN") {
    return;
  }
  let ul = e.target.parentNode.querySelector("ul");
  ul.hidden = !ul.hidden;
});

//选择文件
let ul2 = document.getElementById("ul");
ul2.onmousedown = () => false; //取消选中行为
ul2.addEventListener("click", function (e) {
  if (e.target.tagName != "LI") {
    return;
  }
  if (!e.ctrlKey && !e.metaKey) {
    for (let item of ul2.querySelectorAll("li")) {
      item.classList.remove("selected");
      e.target.classList.add("selected");
    }
  } else {
    e.target.classList.toggle("selected");
  }
});

//mouseover / mouseout 显示最深的有注解的元素
let tooltip;
let house = document.getElementById("house")
house.addEventListener("mouseover", function (e) {
  let anchor = e.target.closest("[data-tooltip]"); //用最近的符合条件的祖先，保证每次显示的都是最深度的
  if (!anchor) {
    return;
  }
  tooltip = showTip(anchor, anchor.dataset.tooltip); //记录出现的这个，以便移除
});
house.addEventListener("mouseout", function (e) {
  if (tooltip) {
    tooltip.remove(); //删除这个元素本身
    //tooltip = false
  }
});

function showTip(anchor, html) {
  let tip = document.createElement("div");
  anchor.prepend(tip);
  tip.className = "tooltip";
  tip.innerHTML = html;
  //设置tip位置
  let coords = anchor.getBoundingClientRect();
  let left = coords.left + (anchor.offsetWidth - tip.offsetWidth) / 2;
  if (left < 0) {
    left = 0;
  }
  let top = coords.top + (anchor.offsetHeight - tip.offsetHeight) / 2;
  if (top < 0) {
    top = 0;
  }
  tip.style.left = left + "px";
  tip.style.top = top + "px";
  return tip;
}
