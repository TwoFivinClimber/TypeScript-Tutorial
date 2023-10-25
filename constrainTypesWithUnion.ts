interface User {
  id: number;
  firstName: string;
  lastName: string;
  /**
   * How do we ensure that role is only one of:
   * - 'admin'
   * - 'user'
   * - 'super-admin'
   */
  /// TYPE UNION HERE
  role: 'admin' | 'user' | 'super-user';
}

export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  //// I_SHOULD_NOT_BE_ALLOWED does not fit constraint of type union
  role: 'I_SHOULD_NOT_BE_ALLOWED',
};
