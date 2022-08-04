// use if statement

const btn = document.getElementById('button');

// show result
btn.addEventListener('click', () => {
  const getResult = document.createElement('p');
  const divResult = document.getElementById('result');

  // get random pick from array
  const array = [1,1,2,2,2,3,3,3,3,3];
  const randomArray = array[Math.floor(Math.random()* array.length)];
  
  if (randomArray%1 === 0) {
    getResult.innerHTML = 'Hebat!!';
  }
  if (randomArray%2 === 0) {
    getResult.innerHTML = 'Boleh juga';
  }
  if (randomArray%3 === 0) {
    getResult.innerHTML = 'Tidak beruntung :(';
  }
  
  divResult.append(getResult);
});
