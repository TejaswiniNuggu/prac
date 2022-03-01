class Circle{
    setAttribute(radius,color) {
        this.radius=radius;
        this.color=color;
    }
getradius() { return this.radius; }
getcolor() { return this.color; }
   getarea(){
    let area =3.14*(this.radius**2)
    console.log(area)
   }
getcircumference(){
    let circumferences = 2*3.14*this.radius
    console.log(circumferences)
   }
getstring(){
    let rad = this.radius
    let col = this.color
    let string = rad.toString();
    let cstring=col.toString(); 
console.log(string,cstring)
}

}

let radius1=new Circle();
radius1.setAttribute(10,"red");
radius1.getarea();
radius1.getcircumference();
console.log(radius1.getcolor());
console.log(radius1.getradius())
radius1.getstring();