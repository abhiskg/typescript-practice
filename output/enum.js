"use strict";
var RType;
(function (RType) {
    RType[RType["SUCCESS"] = 5] = "SUCCESS";
    RType[RType["FAILURE"] = 6] = "FAILURE";
    RType[RType["UNAUTHENTICATED"] = 7] = "UNAUTHENTICATED";
    RType[RType["FORBIDDEN"] = 8] = "FORBIDDEN";
})(RType || (RType = {}));
const response1 = {
    status: 400,
    type1: RType.FAILURE,
    data: {
        name: "test",
    },
};
console.log(response1.type1); //6
