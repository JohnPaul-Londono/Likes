// console.log("page loading...");

// index     0  1   2
var post = [9, 12, 10];
var ps = [
    document.querySelector("#count"),
    document.querySelector("#count1"),
    document.querySelector("#count2")
];

function add1(id) {
    post[id]++;
    ps[id].innerHTML = post[id] + "like(s)";
}





// function add1(){
//     var count = 9;
//     var countElement = document.querySelector(".count")
//     console.log(countElement);
//     count++;
//     countElement.innerText = count + " like(s)";
//     console.log(count);
    
// }

// function add2(){
//     var count = 12;
// var countElement = document.querySelector(".count1")
// console.log(countElement);
//     count++;
//     countElement.innerText = count + " like(s)";
//     console.log(count);
// }
// function add3(){
//     var count = 10;
// var countElement = document.querySelector(".count2")
// console.log(countElement);
//     count++;
//     countElement.innerText = count + " like(s)";
//     console.log(count);
// }


