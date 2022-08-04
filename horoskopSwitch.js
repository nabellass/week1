// use switch to get random result

const btn = document.getElementById('button');

// show result
btn.addEventListener('click', () => {
  const getResult = document.createElement('p');
  const divResult = document.getElementById('result');

  // get random pick from array
  const array = [1,1,2,2,2,3,3,3,3,3];
  const randomArray = array[Math.floor(Math.random()* array.length)];
  
  switch (randomArray) {
    case 1:
        getResult.innerHTML = 'Hebat!!';
        break;
    case 2:
        getResult.innerHTML = 'Not bad lah';
        break;
    default:
        getResult.innerHTML = 'what a bad day';
        break;
  }
  
  divResult.append(getResult);
});
