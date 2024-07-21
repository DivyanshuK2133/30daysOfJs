// Activity 1:Arithmetic Operation
// Task 1
let m = 21;
let n = 13;
console.log(m + n); // 34

// Task 2
let p = 25;
let q = 10;
console.log(p - q); // 15

//Task 3
let a = 5;
let b = 8;
console.log(a * b); // 40

//Task 4
let c = 60;
let d = 20;
console.log(c / d); // 3

//Task 5
let i = 49;
let j = 7;
console.log(i % j); // 0

// Activity 2:Assignment Operation
//Task 6
let k = 5;
k += 2;
console.log(k); // 7

//Task 7
let l = 5;
l -= 1;
console.log(l); // 4


//Activity 3:Comparison Operation
//Task 8
console.log(9 > 3); // true
console.log(9 < 5); // false

//Task 9
console.log(9 >= 9); // true
console.log(4 <= 3); // false

//Task 10
let t = 25;
let r = "25";
console.log(t == r);  // true
console.log(t === r); // false

//Activity 4:Logical Operation
//Task 11
let v = 64;
while (v > 0 && v % 2 == 0) {
    v = v / 2;
}
console.log(v); // 1

//Task 12
let age = 21;
if (age == 18 || age > 18) {
    console.log("eligible for Driving")
}
else {
    console.log("Not eligible");
} //eligible for Driving

//Task 13
if (!false) {
    console.log("executed");
} //executed

//Activity 5:Ternary Operation
//Task 14
let num = -21;
console.log(num >= 0 ? "positive" : "negative"); //Output:Negative