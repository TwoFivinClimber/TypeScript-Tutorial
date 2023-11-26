interface User {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

/**
 * How do we ensure that defaultUser is of type User
 * at THIS LINE - not further down in the code?
 */
//// The error here makes the error more specific to the user construction
//// Rather than below where default user is being passed to getUserId

////  We assign the type to the variable like here:
const defaultUser: User = {
  id: 1,
  firstName: 'Brett',
  lastName: 'Hughes',
  isAdmin: true
};

const getUserId = (user: User) => {
  return user.id;
};

getUserId(defaultUser);
