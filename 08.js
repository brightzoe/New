function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i)
  }
}
let labels = []
repeat(3, (i) => {
  labels.push(`Unit ${i + 1}`)
})
// console.log(labels)

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

// noisy(Math.min)(1, 2, 3)

function transparentWarpping(f) {
  return function () {
    return f.apply(null, arguments) //模拟调用，访问f()的所有参数
  }
}

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

var ANCESTRY_FILE = JSON.stringify([
  {
    name: 'Carolus Haverbeke',
    sex: 'm',
    born: 1832,
    died: 1905,
    father: 'Carel Haverbeke',
    mother: 'Maria van Brussel',
  },
  {
    name: 'Emma de Milliano',
    sex: 'f',
    born: 1876,
    died: 1956,
    father: 'Petrus de Milliano',
    mother: 'Sophia van Damme',
  },
  {
    name: 'Maria de Rycke',
    sex: 'f',
    born: 1683,
    died: 1724,
    father: 'Frederik de Rycke',
    mother: 'Laurentia van Vlaenderen',
  },
  {
    name: 'Jan van Brussel',
    sex: 'm',
    born: 1714,
    died: 1748,
    father: 'Jacobus van Brussel',
    mother: 'Joanna van Rooten',
  },
  {
    name: 'Philibert Haverbeke',
    sex: 'm',
    born: 1907,
    died: 1997,
    father: 'Emile Haverbeke',
    mother: 'Emma de Milliano',
  },
  {
    name: 'Jan Frans van Brussel',
    sex: 'm',
    born: 1761,
    died: 1833,
    father: 'Jacobus Bernardus van Brussel',
    mother: null,
  },
  {
    name: 'Pauwels van Haverbeke',
    sex: 'm',
    born: 1535,
    died: 1582,
    father: 'N. van Haverbeke',
    mother: null,
  },
  {
    name: 'Clara Aernoudts',
    sex: 'f',
    born: 1918,
    died: 2012,
    father: 'Henry Aernoudts',
    mother: 'Sidonie Coene',
  },
  {
    name: 'Emile Haverbeke',
    sex: 'm',
    born: 1877,
    died: 1968,
    father: 'Carolus Haverbeke',
    mother: 'Maria Sturm',
  },
  {
    name: 'Lieven de Causmaecker',
    sex: 'm',
    born: 1696,
    died: 1724,
    father: 'Carel de Causmaecker',
    mother: 'Joanna Claes',
  },
  {
    name: 'Pieter Haverbeke',
    sex: 'm',
    born: 1602,
    died: 1642,
    father: 'Lieven van Haverbeke',
    mother: null,
  },
  {
    name: 'Livina Haverbeke',
    sex: 'f',
    born: 1692,
    died: 1743,
    father: 'Daniel Haverbeke',
    mother: 'Joanna de Pape',
  },
  {
    name: 'Pieter Bernard Haverbeke',
    sex: 'm',
    born: 1695,
    died: 1762,
    father: 'Willem Haverbeke',
    mother: 'Petronella Wauters',
  },
  {
    name: 'Lieven van Haverbeke',
    sex: 'm',
    born: 1570,
    died: 1636,
    father: 'Pauwels van Haverbeke',
    mother: 'Lievijne Jans',
  },
  {
    name: 'Joanna de Causmaecker',
    sex: 'f',
    born: 1762,
    died: 1807,
    father: 'Bernardus de Causmaecker',
    mother: null,
  },
  {
    name: 'Willem Haverbeke',
    sex: 'm',
    born: 1668,
    died: 1731,
    father: 'Lieven Haverbeke',
    mother: 'Elisabeth Hercke',
  },
  {
    name: 'Pieter Antone Haverbeke',
    sex: 'm',
    born: 1753,
    died: 1798,
    father: 'Jan Francies Haverbeke',
    mother: 'Petronella de Decker',
  },
  {
    name: 'Maria van Brussel',
    sex: 'f',
    born: 1801,
    died: 1834,
    father: 'Jan Frans van Brussel',
    mother: 'Joanna de Causmaecker',
  },
  {
    name: 'Angela Haverbeke',
    sex: 'f',
    born: 1728,
    died: 1734,
    father: 'Pieter Bernard Haverbeke',
    mother: 'Livina de Vrieze',
  },
  {
    name: 'Elisabeth Haverbeke',
    sex: 'f',
    born: 1711,
    died: 1754,
    father: 'Jan Haverbeke',
    mother: 'Maria de Rycke',
  },
  {
    name: 'Lievijne Jans',
    sex: 'f',
    born: 1542,
    died: 1582,
    father: null,
    mother: null,
  },
  {
    name: 'Bernardus de Causmaecker',
    sex: 'm',
    born: 1721,
    died: 1789,
    father: 'Lieven de Causmaecker',
    mother: 'Livina Haverbeke',
  },
  {
    name: 'Jacoba Lammens',
    sex: 'f',
    born: 1699,
    died: 1740,
    father: 'Lieven Lammens',
    mother: 'Livina de Vrieze',
  },
  {
    name: 'Pieter de Decker',
    sex: 'm',
    born: 1705,
    died: 1780,
    father: 'Joos de Decker',
    mother: 'Petronella van de Steene',
  },
  {
    name: 'Joanna de Pape',
    sex: 'f',
    born: 1654,
    died: 1723,
    father: 'Vincent de Pape',
    mother: 'Petronella Wauters',
  },
  {
    name: 'Daniel Haverbeke',
    sex: 'm',
    born: 1652,
    died: 1723,
    father: 'Lieven Haverbeke',
    mother: 'Elisabeth Hercke',
  },
  {
    name: 'Lieven Haverbeke',
    sex: 'm',
    born: 1631,
    died: 1676,
    father: 'Pieter Haverbeke',
    mother: 'Anna van Hecke',
  },
  {
    name: 'Martina de Pape',
    sex: 'f',
    born: 1666,
    died: 1727,
    father: 'Vincent de Pape',
    mother: 'Petronella Wauters',
  },
  {
    name: 'Jan Francies Haverbeke',
    sex: 'm',
    born: 1725,
    died: 1779,
    father: 'Pieter Bernard Haverbeke',
    mother: 'Livina de Vrieze',
  },
  {
    name: 'Maria Haverbeke',
    sex: 'm',
    born: 1905,
    died: 1997,
    father: 'Emile Haverbeke',
    mother: 'Emma de Milliano',
  },
  {
    name: 'Petronella de Decker',
    sex: 'f',
    born: 1731,
    died: 1781,
    father: 'Pieter de Decker',
    mother: 'Livina Haverbeke',
  },
  {
    name: 'Livina Sierens',
    sex: 'f',
    born: 1761,
    died: 1826,
    father: 'Jan Sierens',
    mother: 'Maria van Waes',
  },
  {
    name: 'Laurentia Haverbeke',
    sex: 'f',
    born: 1710,
    died: 1786,
    father: 'Jan Haverbeke',
    mother: 'Maria de Rycke',
  },
  {
    name: 'Carel Haverbeke',
    sex: 'm',
    born: 1796,
    died: 1837,
    father: 'Pieter Antone Haverbeke',
    mother: 'Livina Sierens',
  },
  {
    name: 'Elisabeth Hercke',
    sex: 'f',
    born: 1632,
    died: 1674,
    father: 'Willem Hercke',
    mother: 'Margriet de Brabander',
  },
  {
    name: 'Jan Haverbeke',
    sex: 'm',
    born: 1671,
    died: 1731,
    father: 'Lieven Haverbeke',
    mother: 'Elisabeth Hercke',
  },
  {
    name: 'Anna van Hecke',
    sex: 'f',
    born: 1607,
    died: 1670,
    father: 'Paschasius van Hecke',
    mother: 'Martijntken Beelaert',
  },
  {
    name: 'Maria Sturm',
    sex: 'f',
    born: 1835,
    died: 1917,
    father: 'Charles Sturm',
    mother: 'Seraphina Spelier',
  },
  {
    name: 'Jacobus Bernardus van Brussel',
    sex: 'm',
    born: 1736,
    died: 1809,
    father: 'Jan van Brussel',
    mother: 'Elisabeth Haverbeke',
  },
])
var ancestry = JSON.parse(ANCESTRY_FILE)

// console.log(filter(ancestry, function (person) {
//   return person.born > 1900 && person.born < 1925
// }));

// console.log(ancestry.filter(function (p) {//内置的方法
//   return p.father == "Carel Haverbeke"
// }));

//console.log(ancestry.map((p) => p.name))

// console.log(ancestry.reduce(function (min, cur) {
//   if (cur.born < min.born) {
//     return cur
//   } else {
//     return min
//   }
// }));
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

//男性和女性的平均年龄
function average(array) {
  var mapped = array.map((item) => item.died - item.born)
  return mapped.reduce((acc, cur) => acc + cur) / array.length
}

// console.log(average(ancestry.filter(ary => ary.sex == "m")));
// console.log(average(ancestry.filter((ary) => ary.sex == 'f')))
var byName = {}
ancestry.forEach((p) => (byName[p.name] = p))

//byName ['lily'].born =>1903

var byName2 = ancestry.reduce((obj, cur) => {
  obj[cur.name] = cur
  return obj
}, {})

var keyBy = (array, key) =>
  ancestry.reduce((obj, cur) => ((obj[cur[key]] = cur), obj), {})

function keyBy(array, key) {
  var result = {}
  array.forEach((ary) => (result[ary[key]] = ary))
  return result
}
var byName = keyBy(ancestry, 'name')

function sharedDNA(name) {
  var person = byName[name]
  if (!person) {
    return 0
  }
  if (person.name == 'Pauwels van Haverbeke') {
    return 1
  }
  var father = byName[person.father]
  var mother = byName[person.mother]
  return (sharedDNA(mother) + sharedDNA(father)) / 2
}

sharedDNA('Philibert Haverbeke')

function bigage(name) {
  //祖先中大于70岁的人
  var person = byName[name]
  if (!person) {
    return 0
  }
  var count = 0
  if (person.died - person.born >= 70) {
    count++
  }

  //var result = person.reduce((person) => person.died - person.born >= 70, {})
  return count + bigage(person.mother) + bigage(person.father)
}

function count(name) {
  var person = byName[name]
  if (!person) {
    return 0
  }
  return 1 + count(person.mother) + count(person.father)
}
// console.log(bigage('Philibert Haverbeke') / count('Philibert Haverbeke'))

var a = function () {
  var array = []
  for (var i = 1; i < 10; i++) {
    array.push(
      (function () {
        return i * i
      })()
    )
  }
  return array
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

//母亲平均生育年龄

var array = [
  { died: 34, born: 11 },
  { died: 46, born: 11 },
]
function average(array) {
  var mapped = array.map((item) => item.died - item.born)
  return mapped.reduce((acc, cur) => acc + cur) / array.length
}

//reduce实现avg
function avg(ary) {
  var sum = ary.reduce((acc, cur) => acc + cur)
  return sum / ary.length
}

ary.reduce(avg)

function groupby(ary) {
  var result = {}
  ary.forEach((item) => {
    var key = Math.ceil(item.born / 100)
    if (!(key in result)) {
      result[key] = []
    }
    var age = item.died - item.born
    result[key].push(age)
  })
  return result
}

//计算每个世纪人平均寿命
function centuryAge(obj) {
  for (ary in obj) {
    obj[ary] = avg(obj[ary])
  }
  return obj
}
centuryAge(groupby(ancestry))

//every,测试是否每一项都满足条件,像&&；
//一旦一个为假，返回false，提前结束，不一定需要处理所有元素
function every(array, test) {
  for (let i = 0; i < array.length; i++){
    if (!test(array(i))) {
      return false
    }
  }
  return true
}

//some,测试是否至少有一项满足条件
//一旦一个为真，返回true，提前结束，不需要处理所有元素

function some(array, test) {}
//every与some互相实现
a && b
