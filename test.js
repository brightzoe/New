//动态规划
//20级台阶，每次一步或两步
function find(current, how) {
  if (current == 20) {
    console.log(how);
  } else if (current > 20) {
    return;
  } else {
    find(current + 1, how + " 1 ");
    find(current + 2, how + " 2 ");
  }
}
find(0, "");

//棋盘，左上角到右下角;log出每种走法
function find(x, y, how) {
  if (x == 6 && y == 3) {
    console.log(how);
  } else if (x > 6 || y > 3) {
    return;
  } else {
    find(x + 1, y, how + " > ");
    find(x, y + 1, how + " V ");
  }
}

find(0, 0, "");

//一共多少种走法？
var JOURNAL = [
  { events: ["carrot", "exercise", "weekend"], squirrel: false },
  {
    events: ["bread", "pudding", "brushed teeth", "weekend", "touched tree"],
    squirrel: false
  },
  {
    events: ["carrot", "nachos", "brushed teeth", "cycling", "weekend"],
    squirrel: false
  },
  {
    events: [
      "brussel sprouts",
      "ice cream",
      "brushed teeth",
      "computer",
      "weekend"
    ],
    squirrel: false
  },
  {
    events: [
      "potatoes",
      "candy",
      "brushed teeth",
      "exercise",
      "weekend",
      "dentist"
    ],
    squirrel: false
  },
  {
    events: [
      "brussel sprouts",
      "pudding",
      "brushed teeth",
      "running",
      "weekend"
    ],
    squirrel: false
  },
  {
    events: ["pizza", "brushed teeth", "computer", "work", "touched tree"],
    squirrel: false
  },
  {
    events: ["bread", "beer", "brushed teeth", "cycling", "work"],
    squirrel: false
  },
  { events: ["cauliflower", "brushed teeth", "work"], squirrel: false },
  { events: ["pizza", "brushed teeth", "cycling", "work"], squirrel: false },
  { events: ["lasagna", "nachos", "brushed teeth", "work"], squirrel: false },
  { events: ["brushed teeth", "weekend", "touched tree"], squirrel: false },
  {
    events: ["lettuce", "brushed teeth", "television", "weekend"],
    squirrel: false
  },
  { events: ["spaghetti", "brushed teeth", "work"], squirrel: false },
  { events: ["brushed teeth", "computer", "work"], squirrel: false },
  { events: ["lettuce", "nachos", "brushed teeth", "work"], squirrel: false },
  { events: ["carrot", "brushed teeth", "running", "work"], squirrel: false },
  { events: ["brushed teeth", "work"], squirrel: false },
  { events: ["cauliflower", "reading", "weekend"], squirrel: false },
  { events: ["bread", "brushed teeth", "weekend"], squirrel: false },
  { events: ["lasagna", "brushed teeth", "exercise", "work"], squirrel: false },
  {
    events: ["spaghetti", "brushed teeth", "reading", "work"],
    squirrel: false
  },
  {
    events: ["carrot", "ice cream", "brushed teeth", "television", "work"],
    squirrel: false
  },
  { events: ["spaghetti", "nachos", "work"], squirrel: false },
  {
    events: ["cauliflower", "ice cream", "brushed teeth", "cycling", "work"],
    squirrel: false
  },
  { events: ["spaghetti", "peanuts", "computer", "weekend"], squirrel: true },
  {
    events: ["potatoes", "ice cream", "brushed teeth", "computer", "weekend"],
    squirrel: false
  },
  {
    events: ["potatoes", "ice cream", "brushed teeth", "work"],
    squirrel: false
  },
  { events: ["peanuts", "brushed teeth", "running", "work"], squirrel: false },
  { events: ["potatoes", "exercise", "work"], squirrel: false },
  { events: ["pizza", "ice cream", "computer", "work"], squirrel: false },
  { events: ["lasagna", "ice cream", "work"], squirrel: false },
  { events: ["cauliflower", "candy", "reading", "weekend"], squirrel: false },
  {
    events: ["lasagna", "nachos", "brushed teeth", "running", "weekend"],
    squirrel: false
  },
  { events: ["potatoes", "brushed teeth", "work"], squirrel: false },
  { events: ["carrot", "work"], squirrel: false },
  { events: ["pizza", "beer", "work", "dentist"], squirrel: false },
  { events: ["lasagna", "pudding", "cycling", "work"], squirrel: false },
  {
    events: ["spaghetti", "brushed teeth", "reading", "work"],
    squirrel: false
  },
  {
    events: ["spaghetti", "pudding", "television", "weekend"],
    squirrel: false
  },
  {
    events: ["bread", "brushed teeth", "exercise", "weekend"],
    squirrel: false
  },
  { events: ["lasagna", "peanuts", "work"], squirrel: true },
  { events: ["pizza", "work"], squirrel: false },
  { events: ["potatoes", "exercise", "work"], squirrel: false },
  { events: ["brushed teeth", "exercise", "work"], squirrel: false },
  {
    events: ["spaghetti", "brushed teeth", "television", "work"],
    squirrel: false
  },
  { events: ["pizza", "cycling", "weekend"], squirrel: false },
  { events: ["carrot", "brushed teeth", "weekend"], squirrel: false },
  { events: ["carrot", "beer", "brushed teeth", "work"], squirrel: false },
  { events: ["pizza", "peanuts", "candy", "work"], squirrel: true },
  {
    events: ["carrot", "peanuts", "brushed teeth", "reading", "work"],
    squirrel: false
  },
  { events: ["potatoes", "peanuts", "brushed teeth", "work"], squirrel: false },
  {
    events: ["carrot", "nachos", "brushed teeth", "exercise", "work"],
    squirrel: false
  },
  {
    events: ["pizza", "peanuts", "brushed teeth", "television", "weekend"],
    squirrel: false
  },
  {
    events: ["lasagna", "brushed teeth", "cycling", "weekend"],
    squirrel: false
  },
  {
    events: [
      "cauliflower",
      "peanuts",
      "brushed teeth",
      "computer",
      "work",
      "touched tree"
    ],
    squirrel: false
  },
  {
    events: ["lettuce", "brushed teeth", "television", "work"],
    squirrel: false
  },
  {
    events: ["potatoes", "brushed teeth", "computer", "work"],
    squirrel: false
  },
  { events: ["bread", "candy", "work"], squirrel: false },
  { events: ["potatoes", "nachos", "work"], squirrel: false },
  {
    events: ["carrot", "pudding", "brushed teeth", "weekend"],
    squirrel: false
  },
  {
    events: ["carrot", "brushed teeth", "exercise", "weekend", "touched tree"],
    squirrel: false
  },
  { events: ["brussel sprouts", "running", "work"], squirrel: false },
  { events: ["brushed teeth", "work"], squirrel: false },
  { events: ["lettuce", "brushed teeth", "running", "work"], squirrel: false },
  { events: ["candy", "brushed teeth", "work"], squirrel: false },
  {
    events: ["brussel sprouts", "brushed teeth", "computer", "work"],
    squirrel: false
  },
  { events: ["bread", "brushed teeth", "weekend"], squirrel: false },
  { events: ["cauliflower", "brushed teeth", "weekend"], squirrel: false },
  {
    events: ["spaghetti", "candy", "television", "work", "touched tree"],
    squirrel: false
  },
  { events: ["carrot", "pudding", "brushed teeth", "work"], squirrel: false },
  { events: ["lettuce", "brushed teeth", "work"], squirrel: false },
  {
    events: ["carrot", "ice cream", "brushed teeth", "cycling", "work"],
    squirrel: false
  },
  { events: ["pizza", "brushed teeth", "work"], squirrel: false },
  { events: ["spaghetti", "peanuts", "exercise", "weekend"], squirrel: true },
  {
    events: ["bread", "beer", "computer", "weekend", "touched tree"],
    squirrel: false
  },
  { events: ["brushed teeth", "running", "work"], squirrel: false },
  {
    events: ["lettuce", "peanuts", "brushed teeth", "work", "touched tree"],
    squirrel: false
  },
  {
    events: ["lasagna", "brushed teeth", "television", "work"],
    squirrel: false
  },
  {
    events: ["cauliflower", "brushed teeth", "running", "work"],
    squirrel: false
  },
  { events: ["carrot", "brushed teeth", "running", "work"], squirrel: false },
  { events: ["carrot", "reading", "weekend"], squirrel: false },
  { events: ["carrot", "peanuts", "reading", "weekend"], squirrel: true },
  { events: ["potatoes", "brushed teeth", "running", "work"], squirrel: false },
  { events: ["lasagna", "ice cream", "work", "touched tree"], squirrel: false },
  {
    events: ["cauliflower", "peanuts", "brushed teeth", "cycling", "work"],
    squirrel: false
  },
  { events: ["pizza", "brushed teeth", "running", "work"], squirrel: false },
  { events: ["lettuce", "brushed teeth", "work"], squirrel: false },
  {
    events: ["bread", "brushed teeth", "television", "weekend"],
    squirrel: false
  },
  {
    events: ["cauliflower", "peanuts", "brushed teeth", "weekend"],
    squirrel: false
  }
];

function tableFor(event) {
  var table = [0, 0, 0, 0];
  for (var i = 0; i < JOURNAL.length; i++) {
    var entry = JOURNAL[i];
    var index = 0;

    if (HasChangeEvent(event, entry)) {
      index++;
    }
    if (entry.squirrel) {
      index += 2;
    }

    table[index]++;
  }
  return table;
}

function HasChangeEvent(envent, entry) {
  return entry.envents.indexOf(event) !== -1;
}

function phi(table) {
  return (
    (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt(
      (table[2] + table[3]) *
        (table[0] + table[1]) *
        (table[1] + table[3]) *
        (table[0] + table[2])
    )
  );
}

function indexOf(ary, value) {
  for (var i = 0; i < ary.length; i++) {
    if (ary[i] == value) {
      return i;
    }
    return -1;
  }
}

function includes(ary, value) {
  if (value !== value) {
    //是否包含NaN，NaN不等于他自己
    for (var i = 0; i < ary.length; i++) {
      if (ary[i] !== ary[i]) {
        return true;
      }
    }
  } else {
    for (var i = 0; i < ary.length; i++) {
      if (ary[i] === value) {
        return true;
      }
    }
  }
  return false;
}

function slice(ary, startIdx, endIdx) {
  if (endIdx == undefined) {
    endIdx = ary.length - 1;
  }
  if (startIdx == undefined) {
    startIdx = 0;
  }
  var r = [];

  for (i = startIdx; i <= endIdx; i++) {
    r = r.push(ary[i]);
  }
  return r;
}

function fill(ary, val, start, end) {
  if (start < 0) {
    start = 0;
  }
  if (start == undefined) {
    start = 0;
  }
  if (end > ary.length - 1) {
    end = ary.length - 1;
  }
  for (var i = start; i <= end; i++) {
    ary[i] = val;
  }
  return ary;
}

function join(ary, joiner) {
  var result = "";
  for (var i = 0; i < ary.length - 1; i++) {
    result += ary[i] + joiner;
  }

  result += ary[ary.length - 1];
  return result;
}

function argsToArray(args) {
  var a = [];
  for (var i = 0; i < Object.length; i++) {
    a.push(obj[i]);
  }
  return result;
}

function max() {
  var maxx = -Infinity;
  for (var i = 0; i < arguments.length; i++) {
    if (args[i] > maxx) {
      maxx = args[i];
    }
  }
  return maxx;
}

function countF(a, b, c) {
  if (a == 1) {
    return 1
  }else if
}
