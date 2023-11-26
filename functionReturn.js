/**
 * How do we ensure that makeUser ALWAYS
 * returns a user?
 */
/* Adding the interface after the function () assigns return typing or what a function can return */
var makeUser = function () {
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
