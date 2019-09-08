var hotel = { star: "5", name: 'Homa', price: 'high' };
// console.log(hotel);
var property = prompt("Enter Property Name (star , name , price) to See It's Value");
var result = prompt("The Value of " + property + " is " + hotel[property] + " Do you want to update (yes or no)?");
var i;
(result == "yes") ? hotel[property] = prompt("Enter Your New Value"): i++;
console.log(hotel);