const { TestWatcher } = require("jest");

function add (a, b) { return a + b;
  
}

function subtract (a, b) { return a - b;
}

function multiply (a, b) { return a * b;
}

function divide (a, b) { return a / b;
}

function power (a, b) { return a ** b;
}

function round (a) { return Math.round (a);
}

function roundUp (a) { return Math.ceil (a);
  
}

function roundDown (a) { return Math.trunc (a);
  // your code here
}

function absolute (a) { return Math.abs (a) ;
}

function quotient (a, b) { return Math.trunc (a/b) ;
  // your code hereß
}

function remainder (a, b) { if (a % b) ;
  // your code here
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder
}
