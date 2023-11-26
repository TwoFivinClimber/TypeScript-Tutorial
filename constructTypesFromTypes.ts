interface UserTester {
  id: string;
  firstName: string;
  lastName: string;
}

/// Lesson was to use a Utility type to transform UserTester in to a type without including {id: } property.  I used the Omit utility type.
// type MyType = Omit<UserTester, "id">;


//Does the same but just says that either firstName or lastName can be used.
type MyType = Pick<User, "firstName" | "lastName">
