//Local storage, session storage and cookies use for collection user information

// capacity = 4kb(c) , 10mb(local) , 5mb(sessionStorage)
// Expires = manually set(cookies), never expire(local storage), on tab close(session storage)
//storage location - browser and server(cookies), browser only(localStorage), browser only(localStorage)
//set with requests - yes(cookies) , no(localstorge and session storage)
//accessibal from - any window(cookies), any window(localStorage), same tab(session storage)

//Local Storage
localStorage.setItem("name", "Bob");
console.log(localStorage.getItem("name"));
localStorage.removeItem("name");
console.log(localStorage.getItem("name"));
localStorage.clear();

//Session storage
sessionStorage.setItem("name", "jaymeen");
console.log(sessionStorage.getItem("name"));
sessionStorage.removeItem("name");
console.log(sessionStorage.getItem("name"));

//Cookies
var expires = new Date(2023, 4, 15).toUTCString();
document.cookie = "name=jaymeen; expires=" + expires;

console.log(document.cookie);
