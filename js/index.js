//index.js
console.log('Hello, world');



const mult = (num1, num2) => num1 * num2;
const print = (num1, num2) => mult(num1, num2);
//console.log(print())

function printy(num1, num2) {

    let output = divide(num1, num2);
    function divide(num1, num2) {
        let val = num1 / num2;
        return val;
    }
    console.log(output);
}


function printVal() {
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    document.getElementById("answer").innerHTML = print(x,y);
    var para = document.createElement("p");
    para.innerHTML = print(x, y);
    document.body.appendChild(para);
}

var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}


const aboutMe = {
    fName: "Danny",
    lName: "Lambord",
    age: 21,
    address: {
        line1: 1008,
        line2: "The Heart",
        line3: "MediaCityUk",
        city: "Salford Quays"
    }
}

console.log(aboutMe.address.line1 / 2);
const text = JSON.stringify(aboutMe);
console.log(text);
console.log(JSON.parse(text));
const aboutMe2 = JSON.parse(text);
console.log(aboutMe2);