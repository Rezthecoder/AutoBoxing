let array = ["Suresh", "Ramesh", "Rajesh", "Rakesh"];
let output = array.map((x) => x.toUpperCase());
console.log(output);
let object = {
  name: "Suresh",
  age: 25,
  city: "Kathmandu",
  print: function () {
    console.log(this.name + " " + this.age);
  },
};

let object2 = {
  name: "Herbert",
  age: 33,
};

object.print();
object.print.call(object2);
