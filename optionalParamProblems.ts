//// Optional Params with 2 args instead of object
/// Same using "?" but optional params cannot go before required

const getName2 = (first: string, last?: string ) => {
  if (last) {
    return `${first} ${last}`;
  }
    return first;
};

getName2("Matt");
