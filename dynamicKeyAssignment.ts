
const createCache = () => {
  /** Record allows you to use <string: string> for any and all of the key value pairs in cache */
  // const cache: Record<string, string> = {};

  /** Index signature Specifically allows you to type individual indexes or keys */
  const cache: {
    [id: string] : string;
  } = {}

  /** Interfacing for the object works too */
  // interface Cache {
  //   [id: string]: string;
  // }
  // const cache: Cache = {};

  const add = (id: string, value: string) => {
    cache[id] = value;
  };

  const remove = (id: string) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};

const cache = createCache();

cache.add('123', "Matt")
