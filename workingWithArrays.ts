interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin";
  /// Adding the square brackets after the interface lets
  /// TS know that an array of posts can be expected
  // posts: Post[];

  /// OR //////
  
  /// Creates an array and you specify what type is going 
  /// to be in the array with <xxxx>
  posts: Array<Post>
}

interface Post {
  id: number;
  title: string;
}

export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  role: "admin",
  posts: [
    {
      id: 1,
      title: "How I eat so much cheese",
    },
    {
      id: 2,
      title: "Why I don't eat more vegetables",
    },
  ],
};
