// 1.charAT
// The charAt() method returns a char value at the given index number.
// const anyString = "Brave new world";
// console.log(`The character at index 0   is '${anyString.charAt()}'`);
// No index was provided, used 0 as default
// console.log(`The character at index 0   is '${anyString.charAt(0)}'`);
// console.log(`The character at index 1   is '${anyString.charAt(1)}'`);
// console.log(`The character at index 2   is '${anyString.charAt(2)}'`);
// console.log(`The character at index 3   is '${anyString.charAt(3)}'`);
// console.log(`The character at index 4   is '${anyString.charAt(4)}'`);
// console.log(`The character at index 999 is '${anyString.charAt(999)}'`);

//2 Trim()
// The trim() method removes whitespace from both sides of a string
// let text1 = "      Hello World!      ";
// let text2 = text1.trim();
// console.log(text2, "text2");

//slice,//split and substr and substring difff

//slice
// The slice() method extracts a part of a string.
// The slice() method returns the extracted part in a new string.
// The slice() method does not change the original string.

// let text = "Hello world!";
// let result1 = text.slice(0, 5);
// let result2 = text.slice(3);
// let result3 = text.slice(1, 1); //no result found
// let result4 = text.slice(1, 0); //no result found
// let result5 = text.slice(-1); // last character
// let result6 = text.slice(-3, -1); // count in reverse way

// console.log(result1, "result1");
// console.log(result2, "result2");
// console.log(result3, "result3");
// console.log(result4, "result4");
// console.log(result5, "result5");
// console.log(result6, "result6");

// substring() is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring().
// let text = "Hello world!";
// let result1 = text.substring(0, 5);
// let result2 = text.substring(3);
// let result3 = text.substring(1, 1); //no result found
// let result4 = text.substring(1, 0);
// let result5 = text.substring(-1);
// let result6 = text.substring(-3, -1); //no result found (diff examples  between substring and slice)

// console.log(result1, "result1");
// console.log(result2, "result2");
// console.log(result3, "result3");
// console.log(result4, "result4");
// console.log(result5, "result5");
// console.log(result6, "result6");

//substr
// substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.
// let text = "Hello world!";
// let result1 = text.substr(2, 3); //give result
// let result2 = text.substr(2);
// let result3 = text.substr(1, 1);
// let result4 = text.substr(1, 0); //no result found
// let result5 = text.substr(-4);
// let result6 = text.substr(-3, 1); //no result found (diff examples  between substring and slice)

// let result7 = text.slice(7, 3); //no result

// console.log(result1, "result1");
// console.log(result2, "result2");
// console.log(result3, "result3");
// console.log(result4, "result4");
// console.log(result5, "result5");
// console.log(result6, "result6");
// console.log(result7, "result7");

//main diff
//sub str and substring both are similar to slice method
//but diff is that in substring that start and end values less than 0 are treated as 0 in substring().
//The difference is that the second parameter specifies the length of the extracted part in substring().

//Split()
// A string can be converted to an array with the split() method:
// const text = "Hello World";
// If the separator is "", the returned array will be an array of single characters:
// console.log(text.split(""));
// If the separator is " ", the returned array will be an array of element separated by comma:
// console.log(text.split(" "));
// If the separator is omitted, the returned array will contain the whole string in index [0].
// console.log(text.split());

// PadStart
// The padStart() method adding padding in a string from the start.
// It pads a string with another string (multiple times) until it reaches a given length.
// let text = "5";
// let padded = text.padStart(4, "0");
// let text = "5";
// let padded = text.padStart(4, "x");
// console.log(padded, "text");

//PadEnd
// The padEnd() method adding padding in a string from the end.
// It pads a string with another string (multiple times) until it reaches a given length.
// let text = "5";
// let padded = text.padEnd(4, "0");
// let text = "5";
// let padded = text.padEnd(4, "x");
// console.log(padded, "text");
