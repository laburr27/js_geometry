// RUN IN REPL.IT TO CHECK
class Rectangle{
  constructor(length, width){
    this.length = length;
    this.width = width;
  }

  area(){
    return this.length * this.width;
  }

  isSquare(){
    if (this.length == this.width) {
      return "This is a square!"
  } else {
      return "This is just a rectangle; not a square."
    }
  }

  perimeter(){
    return "The perimeter is "(this.length * 2) + (this.width * 2)
  }
}

let rect1 = new Rectangle(5,10)
let rect2 = new Rectangle(10,2)
let rect3 = new Rectangle(3,3)


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

}

class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
