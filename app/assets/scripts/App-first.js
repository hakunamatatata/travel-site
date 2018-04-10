function person(name, favColor) {
  console.log("Hello, my name is " + name + " and my favorite color is " + favColor + ".");
}

var john = {
  name: "John Doe",
  favoriteColor: "blue"
}

person(john.name, john.favoriteColor);
person("Jane Smith", "green");
