// function
let a = 5;
let b = 4;
function add() {
  return a + b;
}
let result = add();
console.log(result);

function sub(){
  return a-b;
}
console.log(sub());

function mul(m = 9 , n = 9){
  return m * n;
}
console.log(mul());

function sum(m,n){
  return x + y;
}
console.log(sum(x =3,y=6));

// arrow function

const test = () => {
  return p + q;
}
console.log(test(p = 9, q = 9));

// promises
// resolve and reject not used
// try and catch used

const promise = async()  => {
  try {
const user = await user.create();
console.log("okay")
  } catch (error) {
console.log("not okay")
  }
}

