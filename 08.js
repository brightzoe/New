

//@ts-nocheck
function keyBy(array, key) {
  var result = {};
  array.forEach((ary) => (result[ary[key]] = key));
  return result;
}

function groupBy(array, prop) {
  var result = {};
  array.forEach((ary) => {
    var key = ary[prop];
    if (!(key in result)) {
      result[key] = [];
    }

    result[key].push(ary);
  });
  return result;
}
// console.log(grouped);
function groupBy3(ary, by) {
  var f = by;
  if (typeof by == "string") {
    f = (item) => item[by];
  }
  var result = {};
  ary.forEach((item) => {
    var key = f(item);

    if (!(key in result)) {
      result[key] = [];
    }
    result[key].push(item);
  });
  return result;
}

function bind(f, ...fixedArgs) {
  return function (...args) {
    return f(...fixedArgs, ...args);
  };
}

function bind(f) {
  var fixedArgs = Array.from(arguments).slice(1);
  return function () {
    var args = Array.from(arguments);
    return f.apply(null, fixedArgs.concat(args));
  };
}
function add(a, b, c) {
  return a + b + c;
}
f2 = bind(add, 1);

function map(ary, mapper) {
  //reduce实现map
  return ary.reduce((acc, cur) => {
    acc.push(mapper(cur));
    return acc;
  }, []);
}

function filter(ary, test) {
  return ary.reduce((acc, cur, idx, ary) => {
    if (test(cur, idx, ary)) {
      acc.push(cur);
    }
    return acc;
  }, []);
}

function forEach(ary, action) {
  ary.reduce((_, cur, idx, ary) => action(cur, idx, ary));
}

//数组降维
function flatten(ary) {
  return ary.reduce((acc, cur) => acc.concat(cur), []);
}

//reduce 实现groupby
function groupby(ary, prec) {}

//every,测试是否每一项都满足条件,像&&；
//一旦一个为假，返回false，提前结束，不一定需要处理所有元素
FIXME: function every(array, test) {
  for (let i = 0; i < array.length; i++) {
    if (!test(array(i))) {
      return false;
    }
  }
  return true;
}

function every(array, con) {
  array.reduce((acc, cur, idx, array) => {
    return acc && con(cur, idx, ary); //也是短路特性
  }, true);
}
//some,测试是否至少有一项满足条件
//一旦一个为真，返回true，提前结束，不需要处理所有元素

function every(array, test) {
  return some(array, test);
}
//every与some互相实现

function bind(f, ...fixedArgs) {
  //null表示跳过,[1,null,2,null,3]
  return function (...args) {
    var temp = fixedArgs.slice();
    let j = 0;
    for (let i = 0; i < temp.length; i++) {
      if (temp[i] === null) {
        temp[i] = args[j++];
      }
    }
    while (j < args.length) {
      temp.push(args[j++]);
    }

    return f(...temp);
  };
}

function curry(func, n) {
  return function (...args) {
    if (args.length < n) {
      return curry(func, n - args.length);
    }
    return func.bind(null, args);
  };
}

function identity(...args) {
  return args[0];
}

function createTreeNode(val) {
  //创建一个值为val的节点
  return {
    val: val,
    left: null,
    right: null,
  };
}

function array2Tree(ary, i = 0) {
  //将用数组表示的二叉树转换为链式表达的二叉树
  //将数组中根节点为 i 位置的树转换为链式表达
  // if(i >= ary.length){
  //   return null
  // }
  if (ary[i] == null) {
    return null;
  }
  var root = createTreeNode(ary[i]);
  root.left = array2Tree(ary, 2 * i + 1);
  root.right = array2Tree(ary, 2 * i + 2);
  return root;
}

function tree2Arraytest(root, array = [], idx = 0) {
  //链式表达二叉树转换为数组表达
  //FIXME:
  if (root == null) {
    return array;
  }
  array.push(root.val);
  var left = root.left;
  var right = root.right;
  left = tree2Array(left);
  right = tree2Array(right);
  array.push(left);
  array.push(right);
  return array;
}

function tree2Array(root, ary = [], idx = 0) {
  if (root == null) {
    return;
  }
  ary[idx] = root.val;
  tree2Array(root.left, ary, idx * 2 + 1);
  tree2Array(root.right, ary, idx * 2 + 2);
  return ary;
}

function tree2CondArray(root) {
  //将二叉树转换为紧凑型表示的数组
  //不理解哇
  if (!root) {
    return [];
  }
  var res = [];
  var nodes = [root];
  var nextRow = [];
  while (nodes.length) {
    for (let i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if (node == null) {
        res.push(null);
      } else {
        res.push(node.val);
        nextRow.push(node.left);
        nextRow.push(node.right);
      }
    }
    nodes = nextRow;
    nextRow = [];
  }

  return res;
}

function tree2CondArray1(root) {
  //将二叉树转换为紧凑型表示的数组
  if (!root) {
    return [];
  }
  var res = [];
  var nodes = [root];
  var i = 0;
  while (i < nodes.length) {
    var node = nodes[i++];
    if (node == null) {
      res.push(null);
    } else {
      res.push(node.val);
      nodes.push(node.left);
      nodes.push(node.right);
    }
  }

  return res;
}

function tree2CondArray2(root) {
  //将二叉树转换为紧凑型表示的数组
  if (!root) {
    return [];
  }
  var res = [];
  var nodes = [root];

  while (nodes.length) {
    var node = nodes.shift();
    if (node == null) {
      res.push(null);
    } else {
      res.push(node.val);
      nodes.push(node.left);
      nodes.push(node.right);
    }
  }

  return res;
}

function tree2CondArray3(root) {
  //层次遍历
  FIXME: if (!root) {
    return [];
  }
  var res = [root.val];
  var nodes = [root];

  while (nodes.length) {
    var node = nodes.shift();
    if (node == null) {
      res.push(null);
    } else {
      res.push(node.val);
      nodes.push(node.left);
      nodes.push(node.right);
    }
  }

  return res;
}

function conArray2Tree(array) {
  //紧凑型数组二叉树转化为链式结构
  if (array.length == 0) {
    return null;
  }
  var root = createTreeNode(ary[0]);
  var queue = [root];
  for (let i = 0; i < array.length; i++) {
    var node = queue.shift();
    if (array[i] !== null) {
      node.left = createTreeNode(array[i]);
      queue.push(node.left);
    }
    i++;
    if (i > array.length) {
      break;
    }
    if (array[i] !== null) {
      node.right = createTreeNode(array[i]);
      queue.push(node.right);
    }
  }

  return root;
}
var a = array2Tree([0, 1, 2, 3, 4, 5, 6, undefined, 9, 8, undefined]);
var b = {
  val: 0,
  left: {
    val: 1,
    left: { val: 3, left: null, right: { val: 9, left: null, right: null } },
    right: { val: 4, left: { val: 8, left: null, right: null }, right: null },
  },
  right: {
    val: 2,
    left: { val: 5, left: 7, right: null },
    right: { val: 6, left: null, right: null },
  },
};

//断点
function preorderTraverseLoop(root, action = console.log) {
  //循环实现前序遍历
  //空间复杂度：树的深度
  var stack = [];
  while (true) {
    if (root) {
      action(root.val);
      stack.push(root);
      root = root.left;
    } else if (stack.length) {
      root = stack.pop();
      root = root.right;
    } else {
      break;
    }
  }
}

//TODO:不使用栈，如何实现一个前序遍历，通过一个指针
function inorderTraversal(root) {
  var stack = [];
  while (true) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else if (stack.length) {
      root = stack.pop();
      console.log(root.val);
      root = root.right;
    } else {
      break;
    }
  }
}

function inorder(tree) {
  //①：先沿左侧全部入栈；root定位到最左侧的小树，pop->res,
  //②：root变为栈里面pop的右子树(左边第一颗小树的right)，right存在，right进栈；重复①
  //③：重复②
  var res = [];
  var stack = [];
  var node = tree;
  while (node) {
    stack.push(node);
    node = node.left;
  }
  while (stack.length > 0) {
    var spop = stack.pop();
    res.push(spop.val);

    node = spop.right; //向右移一个node

    while (node) {
      stack.push(node);
      node = node.left;
    }
  }
  return res;
}

function postorderTraversal(root) {}

function bstSort(ary) {
  //乱序数组，用BST排序
  //时间复杂度：n*log(n)
  //空间复杂度：n(构造出来的BST占用的空间)
  var tree = null;
  for (let i = 0; i < ary.length; i++) {
    tree = insertIntoBST(tree, ary[i]);
  }

  return inorderTraverse(tree);
}

function bstSort2(ary) {
  //乱序数组，构建BST
  //简化 reduce
  var tree = ary.reduce((tree, val) => {
    return insertIntoBST(tree, val);
  }, null);
  return inorderTraverse(tree);
}

function swap(ary, i, j) {
  if (i !== j) {
    var temp = ary[i];
    ary[i] = ary[j];
    ary[j] = temp;
  }
}
function qsort(ary, start = 0, end = ary.length - 1) {
  var pivotindex = Math.floor((end - start + 1) * Math.random()) + start;
  var pivot = ary[pivotindex];
  swap(ary, pivotindex, end);
  var i = start - 1;

  for (var j = start; j < end; j++) {
    if (ary[j] < pivot) {
      i++;
      swap(ary, i, j);
    }
  }
}

//给前序, 中序遍历, 还原二叉树
function restore(preorder, inorder) {
  if (preorder.length == 0) {
    return 0;
  }
  var rootVal = preorder[0];
  var root = new createTreeNode(rootVal);
  var idx = inorder.findIndex((it) => it == rootVal);
  var leftInorder = inorder.slice(0, idx);
  var rightInorder = inorder.slice(idx + 1);
  var leftPreorder = preorder.slice(1, 1 + leftInorder.length);
  var rightPreorder = preorder.slice(1 + leftInorder.length);
  root.left = restore(leftPreorder, leftInorder);
  root.right = restore(rightPreorder, rightInorder);
}

Array.prototype.findIndex = function (f) {
  for (let i = 0; i < this.length; i++) {
    if (f(this[i], i, this)) {
      return i;
    }
  }
  return -1;
};

var a = array2Tree([1, 2, 3, 4, 5, 6, 7]);

class PriorQueue {
  constructor(init = []) {
    this.heap = init.slice();
  }
  getLeftIdx(idx) {
    return 2 * idx + 1;
  }
  getRightIdx(idx) {
    return 2 * idx + 2;
  }
  getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }
  insert(val) {
    if (val !== null) {
      this.heap.push(val);
      this._bubbleUp(this.heap.length - 1);
      return true;
    }
    return false;
  }
  _bubbleUp(idx) {
    let parent = this.getParentIdx(idx);
    while (idx > 0 && this.heap[idx] < this.heap[parent]) {
      //保证 parentIdx > 0,只需要保证 idx > 0
      //以最小堆为例,这里用的是小于号
      this._swap(idx, parent);
      idx = parent;
      parent = this.getParentIdx(idx);
    }
  }
  extract() {
    if (this.isEmpty()) {
      return undefined;
    }
    if (this.size() === 1) {
      return this.heap.shift();
    }
    var removed = this.heap.shift();
    this.heap.unshift(this.heap.pop());
    this._sinkDown(0);
    return removed;
  }
  _sinkDown(idx) {
    let left = this.getLeftIdx(idx);
    let right = this.getRightIdx(idx);
    let size = this.size();
    while (size > 1) {
      if (right < size) {
        //左右节点都存在
        var min = this.heap[left] > this.heap[right] ? right : left;
      } else if (left < size) {
        //只有左节点
        var min = left;
      } else {
        //不存在子节点
        break;
      }
      this._swap(idx, min);
      idx = min;
      left = this.getLeftIdx(idx);
      right = this.getRightIdx(idx);
    }
  }

  _swap(a, b) {
    if (a !== b) {
      var temp = this.heap[a];
      this.heap[a] = this.heap[b];
      this.heap[b] = temp;
    }
  }

  size() {
    return this.heap.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  findMin() {
    return this.isEmpty ? undefined : this.heap[0];
  }
}

//堆排序:第一个想法,构建一个空堆,数组里元素一个一个insert,再依次shift出来,时间复杂度O(nlogn)
//第二种:在一个数组里,它的叶子节点数量为Math.ceil(size()/2),每个叶子节点都可以看作是已经构建好的堆.把这个数组堆化,从前面最后的一个非叶子节点(Math.floor(size()/2)sinkdown则维护好了一个三个节点的最小堆,然后向前sink down维护好每个最小堆依次到根,即可堆化.时间复杂度O(n)
function heapSort(array) {
  var ary = new PriorQueue(array);
  for (let i = Math.floor(array.length / 2); i >= 0; i--) {
    ary._sinkDown(i);
  }
  return ary;
}

class HashMap {
  constructor() {
    this._keys = [];
    this._values = [];
  }
  has(key) {}
  get(key) {}
  set(key) {}
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
    if (key > length) {
      length = key;
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
  constructor(fullname) {
    this.fullName = fullname;
  }
  get firstName() {
    return this.fullName.match(/(\S+)/g)[0];
  }
  get lastName() {
    return this.fullName.match(/(\S+)/g)[1];
  }
  get fullname() {
    return this.firstName + " " + this.lastName;
  }
  set firstName(name) {
    this.firstName = name;
  }
  set lastName(name) {
    this.lastName = name;
  }
  set fullname(name) {
    this.fullname = name;
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
ul2.onmousedown = ()=> false//组织返回文本
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
house.addEventListener("mouseover", function (e) {
  
})