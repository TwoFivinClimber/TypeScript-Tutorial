var coerceAmount = function (amount) {
    /// This doesn't work because it is type checking over number && object with amount in it.  Need to specify which case we're dealing with first.
    // if ( amount.amount) {
    //   return amount.amount
    // }
    // return amount
    /// TS checks which option it's dealing with first and then checks the type.
    if (typeof amount === 'object') {
        return amount.amount;
    }
    return amount;
};
coerceAmount({ amount: 20 });
coerceAmount(20);
