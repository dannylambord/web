let object1;

 
function fetchData() {


    return new Promise((resolve, reject)=>{

            const req = new XMLHttpRequest();
                    
        req.onreadystatechange = () =>{
            if (req.readyState === 4) {
                if (req.status === 200) {
                    resolve(req);
                    console.log("connected");
                } else {
                    reject("Failed");
                }
            }

        };
            
        req.open("GET", "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json");
    req.send();

    })
}



       fetchData().then((req)=>{
    console.log(req.responseText);
    })
let a = "hello";
let b = "World";
let x = `${a}, ${b}!`;
console.log(x);

    // var char = req.responseText;
    // console.log(req.responseText);
    // object1 = JSON.parse(char)
    // console.log(object1);

    // function mmStats() {
    //     var powers = {};

    //     var members = object1["members"];
    //     powers = members;
    //     var str = "";
    //     for (let i in object1) {
    //         if (object1[i]) {
    //             console.log(object1[i]);
    //         }
    //     }
    //     console.log(powers);


    // }

    // function muStats() {

    //     var powers = {};
    //     var members = object1["members"];
    //     powers = JSON.stringify(members);
    //     var result1 = document.createElement("P");
    //     result1.innerHTML = JSON.stringify(members[1]);
    //     document.getElementById("para2").appendChild(result1);

    // }

    // function efStats() {

    //     var members = object1["members"];
    //     var result1 = document.createElement("P");
    //     result1.innerHTML = JSON.stringify(members[2]);
    //     document.getElementById("para3").appendChild(result1);

    // }

