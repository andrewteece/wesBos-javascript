// Function Definition
function calculateBill() {
  //this starts the function body/block
  console.log('Running Calculate Bill !!');

  const total = 100 * 1.13;

  return total;
}

// Function Call or "Running the Function"
const myTotal = calculateBill();

//console.log(`Your total is $${myTotal}`);

console.log(`Your total is $${calculateBill()}`);
