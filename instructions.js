Instructions

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