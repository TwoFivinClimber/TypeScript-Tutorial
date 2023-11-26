var createCache = function () {
    /** Record allows you to use <string: string> for any and all of the key value pairs in cache */
    // const cache: Record<string, string> = {};
    /** Index signature Specifically allows you to type individual indexes or keys */
    var cache = {};
    /** Interfacing for the object works too */
    // interface Cache {
    //   [id: string]: string;
    // }
    // const cache: Cache = {};
    var add = function (id, value) {
        cache[id] = value;
    };
    var remove = function (id) {
        delete cache[id];
    };
    return {
        cache: cache,
        add: add,
        remove: remove,
    };
};
var cache = createCache();
cache.add('123', "Matt");
