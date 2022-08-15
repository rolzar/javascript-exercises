const add = function(...a) {
  let sum = 0;
  for(const arg of a){
    sum += arg; 
    
  }

  return sum
};

const subtract = function(a,b) {
  return a - b
	
};

const sum = function(arr) {
  const sum = arr.reduce((prev,curr) => curr + prev,0);

  return sum
	
};

const multiply = function(arr) {
  const mu = arr.reduce((prev,curr) => curr * prev);

  return mu


};

const power = function(a,b) {
  return Math.pow(a,b)
	
};

const factorial = function(a) {
  if(a === 0){
    return 1
  } else {
    return a * factorial(a-1)
  }


	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
