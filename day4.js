
// Activity 1: For Loop

// Task 1: WAP to print numbers from 1 to 10 using a for loop.

for (let i = 1; i <= 10; i++)
    console.log(i);
//output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// Task 2: WAP to print the multiplication table of 5 using a for loop.

for (let i = 1; i <= 10; i++)
    console.log(`5*${i}=${5 * i}`);
// Output:
// 5*1=5
// 5*2=10
// 5*3=15
// 5*4=20
// 5*5=25
// 5*6=30
// 5*7=35
// 5*8=40
// 5*9=45
// 5*10=50


// Activity 2: While Loop

// Task 3: WAP to calculate the sum of numbers from 1 to 10 using a while loop.

let sum = 0;
for (let i = 1; i <= 10; i++)
    sum += i;
console.log(sum);
// output:55

// Task 4: WAP to print numbers from 10 to 1 using a while loop.

let i = 10;
while (i > 0) {
    console.log(i--);
}
//output:
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

// Activity 3: Do While Loop

// Task 5: WAP to print numbers from 1 to 5 using a do...while loop.

let num = 1;
do {
    console.log(num++);
} while (num <= 5);
// output:
// 1
// 2
// 3
// 4
// 5


// Task 6: WAP to calculate the factorial of a number using a do...while loop.

let fac = 1;
num = 7;
do {
    fac *= num--;
} while (num != 0)
console.log(fac);
// output:5040

// Activity 4: Nested Loops

// Task 7: WAP to print a pattern using nested for loops: 

for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '*';
    }
    console.log(row);
}
// Pattern
// *
// * *
// * * *
// * * * *
// * * * * *

// Activity 5: Loop Control Statements

// Task 8: WAP to print numbers from 1 to 10, but skip the number 5 using the continue statement.

for (let i = 1; i <= 10; i++) {
    if (i == 5)
        continue;
    console.log(i);
}
// output
// 1
// 2
// 3
// 4
// 6
// 7
// 8
// 9
// 10

// Task 9: WAP to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

for (let i = 1; i <= 10; i++) {
    if (i == 7)
        break;
    console.log(i);
}
// output
// 1
// 2
// 3
// 4
// 5
// 6
