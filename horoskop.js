let btn = document.querySelector('button');
let getOutput = document.querySelector('h3');

let result = ['Hebat!!', 'Boleh juga!', 'Mengerikan.'];

const randomNumber = Date.now();
if (randomNumber%3 === 0) {
  console.log(result[0]);
}
if (randomNumber%2 === 0) {
  console.log(result[1]);
}
if (randomNumber%1 === 0) {
  console.log(result[2]);
}

btn.addEventListener('click', function() {
  getOutput.innerText = randomNumber();
});
