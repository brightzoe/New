function noisy(f) {
  //函数作为参数，显示调用和调用结果
  //  ...args ：es6语法,接收多个参数
  return (...args) => {
    console.log('calling with', args)
    let result = f(...args)
    console.log('called with', args, ', returned', result)
    return result
  }
}

//noisy(Math.min)(1, 2, 3)

function filter(array, test) {
  //test函数作为参数，实现过滤
  //纯函数：并未修改给定的数组。
  var passed = []
  for (let i = 0; i < array.length; i++) {
    if (test(array[i])) {
      passed.push(array[i])
    }
  }
  return passed
}

function reducer(a, b) {
  return a.concat(b)
}
let flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce(reducer, [])

// console.log(flattened);

function keyBy(array, key) {
  var result = {}
  array.forEach((ary) => (result[ary[key]] = key))
  return result
}

function groupBy(array, prop) {
  var result = {}
  array.forEach((ary) => {
    var key = ary[prop]
    if (!(key in result)) {
      result[key] = []
    }

    result[key].push(ary)
  })
  return result
}
// console.log(grouped);
function groupBy3(ary, by) {
  var f = by
  if (typeof by == 'string') {
    f = (item) => item[by]
  }
  var result = {}
  ary.forEach((item) => {
    var key = f(item)

    if (!(key in result)) {
      result[key] = []
    }
    result[key].push(item)
  })
  return result
}

function bind(f, ...fixedArgs) {
  return function (...args) {
    return f(...fixedArgs, ...args)
  }
}

function bind(f) {
  var fixedArgs = Array.from(arguments).slice(1)
  return function () {
    var args = Array.from(arguments)
    return f.apply(null, fixedArgs.concat(args))
  }
}
function add(a, b, c) {
  return a + b + c
}
f2 = bind(add, 1)

function map(ary, mapper) {
  //reduce实现map
  return ary.reduce((acc, cur) => {
    acc.push(mapper(cur))
    return acc
  }, [])
}

function filter(ary, test) {
  return ary.reduce((acc, cur, idx, ary) => {
    if (test(cur, idx, ary)) {
      acc.push(cur)
    }
    return acc
  }, [])
}

function forEach(ary, action) {
  ary.reduce((_, cur, idx, ary) => action(cur, idx, ary))
}

//数组降维
function flatten(ary) {
  return ary.reduce((acc, cur) => acc.concat(cur), [])
}

//reduce 实现groupby
function groupby(ary, prec) {}

//every,测试是否每一项都满足条件,像&&；
//一旦一个为假，返回false，提前结束，不一定需要处理所有元素
FIXME: function every(array, test) {
  for (let i = 0; i < array.length; i++) {
    if (!test(array(i))) {
      return false
    }
  }
  return true
}

function every(array, con) {
  array.reduce((acc, cur, idx, array) => {
    return acc && con(cur, idx, ary) //也是短路特性
  }, true)
}
//some,测试是否至少有一项满足条件
//一旦一个为真，返回true，提前结束，不需要处理所有元素

function every(array, test) {
  return some(array, test)
}
//every与some互相实现



function bind(f, ...fixedArgs) {
  //null表示跳过,[1,null,2,null,3]
  return function (...args) {
    var temp = fixedArgs.slice()
    let j = 0
    for (let i = 0; i < temp.length; i++) {
      if (temp[i] === null) {
        temp[i] = args[j++]
      }
    }
    while (j < args.length) {
      temp.push(args[j++])
    }

    return f(...temp)
  }
}










function curry(func, n) {
  return function (...args) {
    if (args.length < n) {
      return curry(func,n-args.length)
    }
    return func.bind(null, args)
  }
}






function identity(...args) {
  return args[0]
}
console.log(identity(12,3))
