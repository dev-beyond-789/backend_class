// print the multiple table of 5

// let num1 = 5;
// for (let i = 1; i <= 10; i++) {
//   console.log(`${num1} * ${i} = `, num1 * i);
// }

// using a arrow function print prime number upto 79

// const isPrime = (num) => {
//   let prime = true;

//   for (let i = 2; i < num; i++) {
//     prime = prime && !Number.isInteger(num / i);
//   }

//   return num > 1 && prime;
// };

// for (let i = 1; i <= 20; i++) {
//   if (isPrime(i)) {
//     console.log(i);
//   }
// }

// for (let num = 2; num <= 20; num++) {
//   let prime = true;

//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       prime = false;
//     }
//   }

//   if (prime) {
//     console.log(num);
//   }
// }

// let a = 5;
// let b = 2;

// console.log(a % b);


// print the multiple table of 9

let num1 = 10;
for (let i = 1; i <= 20; i++) {
  console.log(`${num1} * ${i} = `, num1 * i);
}

// const promise = async()  => {
//   try {
// const user = await user.create();
// console.log("okay")
//   } catch (error) {
// console.log("not okay")
//   }
// }


// // addition
// let a = 5;
// let b = 4;
// function add() {
//   return a + b;
// }

const prime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return true;
    }
  }
  return num > 1;
};

for (let i = 1; i <= 79; i++) {
  if (prime(i)) {
    console.log(i);
  }
};

let name = "Beyond";

let math = 85;
let science = 72;
let english = 90;

let average = (math + science + english) / 3;

let grade;

if (average >= 80) {
    grade = "A";
} else if (average >= 70) {
    grade = "B";
} else if (average >= 60) {
    grade = "C";
} else if (average >= 50) {
    grade = "D";
} else {
    grade = "F";
}

console.log("Student:", name);
console.log("Average:", average.toFixed(2));
console.log("Grade:", grade);