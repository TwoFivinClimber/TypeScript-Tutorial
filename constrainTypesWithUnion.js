"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultUser = void 0;
exports.defaultUser = {
    id: 1,
    firstName: "Matt",
    lastName: "Pocock",
    //// I_SHOULD_NOT_BE_ALLOWED does not fit constraint of type union
    role: 'user',
};
