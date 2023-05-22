//map same as Object
//map is same as object but you can assign key as any data type

const rest = new Map(); //empty map
//set - add key and value
//get - get value using key
//size - give number of key
// has - key exist or not

rest.set("name", "Classico Italiano"); // adding value
rest.set(1, "Firenze,Italy");
console.log(rest.get("name"));
console.log(rest.has("name"));
console.log(rest.get(1));
console.log(rest.size);
console.log(rest);
