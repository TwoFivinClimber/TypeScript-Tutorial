/**
 * How do we ensure that defaultUser is of type User
 * at THIS LINE - not further down in the code?
 */
//// The error here makes the error more specific to the user construction
//// Rather than below where default user is being passed to getUserId
var defaultUser = {
    id: 1,
    firstName: 'Brett',
    lastName: 'Hughes',
    isAdmin: true
};
var getUserId = function (user) {
    return user.id;
};
getUserId(defaultUser);
