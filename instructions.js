Instructions

1. install node and npm
2. change directory to project
3. npm init - this will create a package.json 
4. npm install babel-cli -D    (-D is for dependency)
5. nam install babel-preset-env -D
6. touch .babelrc

{
  "presets": ["env"]
}

7. 

add 

"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "babel src -d lib"
}



npm run build




//iterators/////////////////////////////////////////////

let artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(function(artist) {
  console.log(artist + ' is one of my favorite artists.');
});

groceries.forEach(groceryItem => console.log(' - ' + groceryItem));


let numbers = [1, 2, 3, 4, 5];

let squareNumbers = numbers.map(function(number) {
  return number * number;
});

let smallNumbers = bigNumbers.map(num => num/100);

console.log(squareNumbers);

let things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

let onlyNumbers = things.filter(function(thing) {
  return typeof thing === 'number';
});

let longFavoriteWords = favoriteWords.filter(word=>word.length > 7);

console.log(onlyNumbers);

//Transpilation with Babel
//1 create package.json in folder in terminal if node is installed
npm init

//2 install babel   -D makes this a dependant module when someone else runds package.json build

npm install babel-cli -D
npm install babel-preset-env -D

//3 creates babelrc

touch .babelrc

//4 add presets

{
  "presets": ["env"]
}

//5 add script build to main js

"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "babel src -d lib"
}

//npm run build

//gitingnore file in main directory to ignore node modules
.gitignore 

//run program
node lib/minesweeper.js