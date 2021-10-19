// console.log("page loading...");

// index     0  1   2
    // var count = [9, 12, 10];
// var ps = [
//     document.querySelector("#count"),
//     document.querySelector("#count1"),
//     document.querySelector("#count2")
// ];

// function add1(id) {
//     post[id]++;
//     ps[id].innerHTML = post[id] + " like(s)";
// }


var count1 = 9;
var count2 = 12;
var count3 = 10;
function add1(){
    console.log(count1)
    var countElement = document.querySelector("#count")
    console.log(countElement);
    count1++;
    countElement.innerHTML = count1 + " like(s)";
    console.log(count1);
}
function add2(){
    console.log(count2)
    var countElement = document.querySelector("#count1")
    console.log(countElement);
    count2++;
    countElement.innerHTML = count2 + " like(s)";
    console.log(count2);
}
function add3(){
    console.log(count3)
    var countElement = document.querySelector("#count2")
    console.log(countElement);
    count3++;
    countElement.innerHTML = count3 + " like(s)";
    console.log(count3);
}


// top box
// var count = 9;
// var countElement = document.querySelector(".count")



// console.log(countElement);

// function add1(){
//     count++;
//     countElement.innerText = count + " like(s)";
//     console.log(count);
// }