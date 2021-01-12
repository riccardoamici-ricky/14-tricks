const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}
// Regular
console.log('hello');
// Interpolated
console.log('Hello I am a %s string!', '💩');
// Styled
console.log('%c I am some great text', 'font-size: 50px; background: yellow;');
// warning!
console.warn('OH NOOOO');
// Error :|
console.error('shit!');
// Info
console.info('here\'s some wisdom');
// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong');
// clearing
console.clear();
// Viewing DOM Elements
console.log(p);
console.dir(p);
// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dogs years old`);
  console.groupEnd(`${dog.name}`);
})
// counting
console.count('Ricky');
console.count('Ricky');
console.count('Ricky');
console.count('Ricky');
console.count('Cami');
console.count('Ricky');
console.count('Cami');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/riccardoamici-ricky')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });

  console.table(dogs);