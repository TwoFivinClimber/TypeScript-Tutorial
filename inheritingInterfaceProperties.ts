/// Establish a base interface that can extend upon another interface
interface base {
  id: string
}

interface UserTest extends base {
  firstName: string;
  lastName: string;
}

interface PostTest extends base {
  title: string;
  body: string;
}

interface Comment extends base {
  comment: string;
}

type tests = [
  UserTest, { id: string; firstName: string; lastName: string },
  PostTest, { id: string; title: string; body: string },
  Comment, { id: string; comment: string },
];
