// print the multiple table of 5

// let num1 = 5;
// for (let i = 1; i <= 10; i++) {
//   console.log(`${num1} * ${i} = `, num1 * i);
// }

// using a arrow function print prime number upto 79

// const prime = (num) => {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return true;
//     }
//   }
//   return num > 1;
// };

// for (let i = 1; i <= 79; i++) {
//   if (prime(i)) {
//     console.log(i);
//   }
// }

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

for (let num = 2; num <= 20; num++) {
  let prime = true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      prime = false;
    }
  }

  if (prime) {
    console.log(num);
  }
}

let a = 5;
let b = 2;

console.log(a % b);


