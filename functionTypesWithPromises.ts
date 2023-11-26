interface User1 {
  id: string;
  firstName: string;
  lastName: string;
}

// Can be typed out above to and used in place of typing for getUser()
type GetUser = (id: string) => Promise<User1>;

const createThenGetUser = async (
  /// Unrealistic useage as nothing is being passed but the challenge was to type out that it is returning a promise that contains a string
  createUser: () => Promise<string>,
  /// typing out what is going to be passed and what is going to be returned from getUser()
  getUser: (id: string) => Promise<User1>,
): Promise<User1> => {
  const userId: string = await createUser();

  const user = await getUser(userId);

  return user;
};
