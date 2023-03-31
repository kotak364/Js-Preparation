//string methods

//string is combination of alphabetical characters
//string data types is permit
//string method

// 1. toLowerCase
//it's convert string to lowercase
// const name = "Jaymeen";
// console.log(name.toUpperCase());

//2. toUpperCase
//it's convert string to uppercase
// const city = "Ahmedabad";
// console.log(city.toLowerCase());

//replace and replace all both are case sensitive

// 3. replace method
//it's replace the first match
// const userInfomarion = "My name is jaymeen";
// console.log(userInfomarion.replace("jaymeen", "maulik"));
// console.log(userInfomarion.replace("Jaymeen", "maulik")); //case sensitive

//4 replace all method
//it's replace the all matches
// let text = "Please visit Microsoft and Microsoft!";
// console.log(text.replaceAll("Microsoft", "Google"));

//5 Length
//It's return length of the string
// let test1 = "jaymeen";
// console.log(test1.length, "length");

//6 concat
// The concat() method joins two or more strings
// let text1 = "Hello";
// let text2 = "World!";
// let text3 = text1.concat("12");
// let text4 = text1.concat(" 12", text2);
// console.log(text4, "text3");

//7 string
// The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

//8 repeat method
//The repeat() method returns a new string which contains the specified number of copies of the string on which it was called with concatenated together.

// const mood = 'Happy! ';
// console.log(`I feel ${mood.repeat(3)}`);

// 9.charAT
// The charAt() method returns a char value at the given index number.
// const anyString = "Brave new world";
// console.log(`The character at index 0   is '${anyString.charAt()}'`);
// // No index was provided, used 0 as default
// console.log(`The character at index 0   is '${anyString.charAt(0)}'`);
// console.log(`The character at index 1   is '${anyString.charAt(1)}'`);
// console.log(`The character at index 2   is '${anyString.charAt(2)}'`);
// console.log(`The character at index 3   is '${anyString.charAt(3)}'`);
// console.log(`The character at index 4   is '${anyString.charAt(4)}'`);
// console.log(`The character at index 999 is '${anyString.charAt(999)}'`);

//10 Trim()
// The trim() method removes whitespace from both sides of a string
// let text1 = "      Hello World!      ";
// let text2 = text1.trim();
// console.log(text2, "text2");

//11 trimEnd()
// The trimEnd() method removes whitespace from the end of a string and returns a new string, without modifying the original string.

// let text1 = "      Hello World!      ";
// let text2 = text1.trimEnd();
// console.log(text2, "text2");

//11 trimStart()
// The trimStart() method removes whitespace from the start of a string and returns a new string, without modifying the original string.

// let text1 = "      Hello World!      ";
// let text2 = text1.trimStart();
// console.log(text2, "text2");

//12 includes
// The includes() method returns true if a string contains a specified string.
// Otherwise it returns false.
// The includes() method is case sensitive.

// let text = "Hello world, welcome to the universe.";
// let result1 = text.includes("world");
// let result2 = text.includes("World");
// console.log(result1, "result1")
// console.log(result2, 'result2')

//13 substr
// The substr() method extracts a part of a string.
let text = "Hello world!";
let result = text.substr(1, 4);
console.log(result, "result");
