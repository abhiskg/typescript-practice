function isosceles(slide1: number, slide2: number, slide3: number) {
  if (slide1 === slide2 && slide2 === slide3) {
    console.log("Not a Isosceles Triangel");
  }
  if (slide1 === slide2 || slide2 === slide3 || slide1 === slide3) {
    console.log("Isosceles Triangel");
  } else {
    console.log("Not a Isosceles Triangel");
  }
}

isosceles(34, 7, 34);
