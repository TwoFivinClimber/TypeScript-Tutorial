/// Optional parameters 


////// ? makes parameter undefined and not required
const getName = (params: {first: string; last?: string }) => {
  if (params.last) {
    return `${params.first} ${params.last}`;
  }
    return params.first;
};

getName({first: "Matt"});

/////// | operator makes the parameter optional but undefined needs to be passed as last value
// const getName = (params: {first: string; last: string | undefined }) => {
//   if (params.last) {
//     return `${params.first} ${params.last}`;
//   }
//     return params.first;
// };

// getName({first: "Matt", last: undefined});
