// Function Definition
function calculateBill(billAmount, taxRate) {
  console.log(billAmount, taxRate);
  //this starts the function body/block
  console.log('Running Calculate Bill !!');

  const total = billAmount * (1 + taxRate);

  return total;
}

// Function Call or "Running the Function"
const wesTotal = 500;
const wesTaxRate = 0.3;
// const myTotal = calculateBill(wesTotal, wesTaxRate);

// let firstName = 'Andrew';
function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

//const greeting = sayHiTo('Andrew');
//console.log(greeting);

const myTotal3 = calculateBill(20 + 20 + 30 + 20, 0.15);

/*
function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name) {
  return `HEY ${name.toUpperCase()}`;
}
*/
