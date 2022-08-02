"use strict";
function isosceles(slide1, slide2, slide3) {
    if (slide1 === slide2 && slide2 === slide3) {
        console.log("Not a Isosceles Triangel");
    }
    if (slide1 === slide2 && slide1 !== slide3) {
        console.log("Isosceles Triangel");
    }
    if (slide2 === slide3 && slide2 !== slide1) {
        console.log("Isosceles Triangel");
    }
    if (slide1 === slide3 && slide1 !== slide2) {
        console.log("Isosceles Triangel");
    }
    else {
        console.log("Not a Isosceles Triangel");
    }
}
isosceles(34, 7, 34);
