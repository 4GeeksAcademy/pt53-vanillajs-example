/* eslint-disable */
import "./style.css";

const createExample = (id, func, title) => {
  const section = `
  <row class="mb-3">
    <col>
      <h2>${title}</h2>
      <h3>Displayed Data:</h3>
      <div id="${id}" class="alert alert-warning mt-4"></div>
      <h3>JSONified Data:</h3>
      <div id="${id}Json" class="alert alert-warning mt-4"></div>
      <button id="${id}Button" class="btn btn-primary">
        Run this code
      </button>
    </col>
  </row>`;

  const target = document.querySelector("#target");
  target.innerHTML = target.innerHTML + section;
  const button = document.querySelector(`#${id}Button`);
  button.onclick = func;
};

const outputData = (id, data) => {
  const output = document.querySelector(`#${id}`);
  output.innerHTML = data;
  const outputJSON = document.querySelector(`#${id}Json`);
  outputJSON.innerHTML = JSON.stringify(data);
};

const getMiddleItem = (arr) => {
  let middleIndex = arr.length / 2;
  return arr[Math.floor(middleIndex)];
};

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
    },
  ];

  return colony[Math.floor(Math.random() * colony.length)];
};

window.onload = function () {
  let someVar = "some value, or whatnot.";
  const someConst = "some unchangable value.";

  /*
    8 Types of data:
  */

  // Numbers
  let someInteger = 11235813;
  let someFloat = Math.PI;

  createExample(
    "number",
    () => {
      outputData("number", someInteger);
    },
    "Numbers"
  );

  // Strings
  let someString = "Strings are text, and behave like text.";
  let someOtherString =
    "Normal strings can't have their quote in the string without being escaped.";
  let someStringLiteral = `This string is cool.<br />
  It can have break returns in it, and you can also<br />
  interpolate values into it like so: ${someFloat}`;

  createExample(
    "strings",
    () => {
      outputData("strings", someStringLiteral);
    },
    "Strings"
  );

  let someConcatenatedString =
    "This " + "is " + "a " + "concatenated " + "string.";

  // Booleans
  let someBoolean = false;
  let someTruthyValue = 1 === 1;
  let someFalsyValue = 1 + 1 === 3;

  // Null-like values
  let someNull = null;
  let someUndefined = undefined;

  // Arrays
  let someArray = [
    1, // Index: 0
    1, // Index: 1
    2, // Index: 2
    3, // Index: 3
    5, // Index: 4
    8, // Index: 5
    13, // Index: 6
    21, // Index: 7
  ];

  // Objects
  let someCat = {
    name: "Sombra",
    age: 1.25,
    color: "black",
    isNapping: false,
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
    },
  ];

  console.table(colonyOfCats);
};
