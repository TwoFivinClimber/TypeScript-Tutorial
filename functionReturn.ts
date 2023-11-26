interface UserInit {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin";
  posts: Array<Post>;
}

interface Post {
  id: number;
  title: string;
}

/**
 * How do we ensure that makeUser ALWAYS
 * returns a user?
 */
/* Adding the interface after the function () assigns return typing or what a function can return */
const makeUser = (): UserInit => {
  return {
    id: 69,
    firstName: "John",
    lastName: "Wickersham",
    role: "super-admin",
    posts: [
      {
        id: 1,
        title: "Something"
      },
      {
        id: 2,
        title: "Something Else"
      }
    ]
  };
};
