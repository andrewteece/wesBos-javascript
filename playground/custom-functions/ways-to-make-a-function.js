//function doctorize(firstName) {
//  return `Dr. ${firstName}`;
//}

/*  // Anon Function
function (firstName) {
    return `Dr. ${firstName}`;
}
*/

/* console.log(doctorize2('Andrew')); //JS will "Hoist" the function, but will not with variable function 

// Function Expression
const doctorize = function (firstName) {
  return `Dr. ${firstName}`;
};

function doctorize2(firstName) {
  return `Dr. ${firstName}`;
}
*/

/* ARROW FUNCTIONS */
/*
const inchToCM = (inches) => inches * 2.54;

//function add(a, b = 3) {
//  const total = a + b;
//  return total;
//}

const add = (a, b = 3) => a + b; 
*/

// RETURNING AN OBJECT

/*function makeABaby(first, last) {
  const baby = {
    name: `${first} ${last}`,
    age: 0,
  };

  return baby;
}*/

const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });
