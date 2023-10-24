/// Optional parameters 
////// ? makes parameter undefined and not required
var getName = function (params) {
    if (params.last) {
        return "".concat(params.first, " ").concat(params.last);
    }
    return params.first;
};
getName({ first: "Matt" });
/////// | operator makes the parameter optional but undefined needs to be passed as last value
// const getName = (params: {first: string; last: string | undefined }) => {
//   if (params.last) {
//     return `${params.first} ${params.last}`;
//   }
//     return params.first;
// };
// getName({first: "Matt", last: undefined});
