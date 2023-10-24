// Simple add two numbers function with
// a few approaches to typing

// Pass in object type inline
// function addTwoNumbers(params: {first: number; second: number}) {
//   return params.first + params.second;
// };

// Create named type

// type addTwoType = {
//   first: number;
//   second: number;
// }

// function addTwoNumbers(params: addTwoType) {
//     return params.first + params.second;
//   };

// Interfacing
// Relatvely same a typing but provides less verbose error messaging

interface addTwoInterface {
  first: number;
  second: number;
}

const addTwoNumbers = (params: addTwoInterface) => {
    return params.first + params.second;
  };
  


addTwoNumbers({first: 2, second: 4});
    
addTwoNumbers({first: 10, second: 20});
