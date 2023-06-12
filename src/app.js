/* eslint-disable */
import "./style.css";

const outputData = (data) => {
  const output = document.querySelector("#output");
  output.innerHTML = data;
  const outputJSON = document.querySelector("#outputJson");
  outputJSON.innerHTML = JSON.stringify(data);
}

const getMiddleItem = (arr) => {
  let middleIndex = arr.length / 2;
  return arr[Math.floor(middleIndex)];
}

const getRandomCat = () => {
  const colony = [
    {
      name: "Sombra",
      age: 1.25,
      color: "black",
      isNapping: true,
    },
    {
      name: "Nekobasu",
      age: 1.25,
      color: "brindle",
      isNapping: false,
    },
    {
      name: "Grizelle",
      age: 6,
      color: "brown and absurdly fluffy",
      isNapping: false,
    }
  ]

  return colony[Math.floor(Math.random() * colony.length)];
}

window.onload = function() {
  let someVar = "some value, or whatnot.";
  const someConst = "some unchangable value.";

  /*
    8 Types of data:
  */

  // Numbers
  let someInteger = 11235813;
  let someFloat = 1.0;

  // Strings
  let someString = 'Strings are text, and behave like text.';
  let someOtherString = "Normal strings can't have their quote in the string without being escaped.";
  let someStringLiteral = `This string is cool.<br />
  It can have break returns in it, and you can also<br />
  interpolate values into it like so: ${someInteger}`;

  // Booleans
  let someBoolean = false;
  let someTruthyValue = (1 === 1);
  let someFalsyValue = (1 + 1 === 3);

  // Null-like values
  let someNull = null;
  let someUndefined = undefined;

  // Arrays
  let someArray = [
    1,  // Index: 0
    1,  // Index: 1
    2,  // Index: 2
    3,  // Index: 3
    5,  // Index: 4
    8,  // Index: 5
    13, // Index: 6
    21, // Index: 7
  ];

  // Objects
  let someCat = {
    name: "Sombra",
    age: 1.25,
    color: "black",
    isNapping: true,
  };

  let someOtherCat = {
    name: "Nekobasu",
    age: 1.25,
    color: "brindle",
    isNapping: false,
    isVisiting: true,
  };

  let colonyOfCats = [
    {
      name: "Sombra",
      age: 1.25,
      color: "black",
      isNapping: true,
    },
    {
      name: "Nekobasu",
      age: 1.25,
      color: "brindle",
      isNapping: false,
    },
    {
      name: "Grizelle",
      age: 6,
      color: "brown and absurdly fluffy",
      isNapping: false,
    }
  ];

  console.table(colonyOfCats);
};
