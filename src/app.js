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

const displayItem = (item, index) => {
  const section = `
  <row class="mb-3">
    <col>
      <h3>Index: ${index}</h3>
      <h3>${item}</h3>
      <hr />
    </col>
  </row>`;

  const target = document.querySelector("#target");
  target.innerHTML = target.innerHTML + section;
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

const makeElementOnPage = (
  tag_name = "div",
  content = "This is the content of the div.",
  classes = [],
  id = null,
  onclick = null
) => {
  const new_elem = document.createElement(tag_name);
  new_elem.innerHTML = content;
  new_elem.classList.add(...classes);
  new_elem.addEventListener("click", onclick);

  const body = document.querySelector("body");
  body.appendChild(new_elem);
};

const createButton = () => {
  const buttonColors = [
    "btn-primary",
    "btn-secondary",
    "btn-success",
    "btn-danger",
    "btn-warning",
    "btn-info",
    "btn-light",
    "btn-dark",
  ];

  makeElementOnPage(
    "button",
    "ADD MORE BUTTONS!",
    [
      "m-1",
      "btn",
      buttonColors[Math.floor(Math.random() * buttonColors.length)],
    ],
    (onclick = () => createButton())
  );
};

window.onload = function () {
  let someVar = "some value, or whatnot.";
  const someConst = "some unchangable value.";

  const wat = createButton();

  /*
    8 Types of data:
  */

  // Numbers
  let someInteger = 11235813;
  let someFloat = Math.E;

  // Strings
  let someString = "Strings are text, and behave like text.";
  let someOtherString =
    "Normal strings can't have their quote in the string without being escaped.";
  let someStringLiteral = `This string is cool.<br />
  It can have break returns in it, and you can also<br />
  interpolate values into it like so: ${Math.E * 25 - 73 * Math.PI}`;

  let someConcatenatedString =
    "This " + "is " + "a " + "concatenated " + "string.";

  // Booleans
  let someBoolean = false;
  let someTruthyValue = 1 === 1;
  let someFalsyValue = 1 + 1 === 3;

  1 < 2; // < is the less than operator
  2 <= 2; // <= is less than or equal to
  1 > 2;
  2 >= 2;

  1 != 2; // != is not equals
  1 !== 2; // strict not equals

  !true === false; // ! negation operator.
  !false === true;

  // Null-like values
  let someNull = null;
  let someUndefined = undefined;

  // ; is a Greek question mark, but ; is a semicolon.

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
  let someArrayArray = [
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ];

  let ticTacToe = [
    ["o", "o", "o"],
    ["", "x", ""],
    ["x", "", "x"],
  ];

  let sparseTTT = [
    { player: "x", x: 1, y: 1 },
    { player: "o", x: 1, y: 2 },
    { player: "x", x: 2, y: 0 },
    { player: "o", x: 2, y: 2 },
    { player: "x", x: 0, y: 0 },
    { player: "0", x: 0, y: 2 },
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
    isVisiting: false,
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

  const books = [
    {
      title: "Neuromancer",
      author: "William Gibson",
      year_published: 1984,
      isbn: "",
      rating: 85,
    },
    {
      title: "Snow Crash",
      author: "Neal Stephenson",
      year_published: 1992,
      isbn: "978-01336162-0",
      rating: 100,
    },
    {
      title: "Altered Carbon",
      author: "Richard K. Morgan",
      year_published: 2002,
      isbn: "",
      rating: 90,
    },
    {
      title: "Cryptonomicon",
      author: "Neal Stephenson",
      year_published: 2000,
      isbn: "978-0-380-78862-0",
      rating: 95,
    },
    {
      title: "Consider Phlebas",
      author: "Ian M. Banks",
      year_published: 1987,
      isbn: "0-333-45430-8",
      rating: 99,
    },
    {
      title: "American Gods",
      author: "Neil Gaiman",
      year_published: 2001,
      isbn: "0-380-97365-0",
      rating: 95,
    },
    {
      title: "Going Postal",
      author: "Terry Pratchett",
      year_published: 2004,
      isbn: "	0-385-60342-8",
      rating: 97,
    },
  ];

  // displayItem(JSON.stringify(books[0]), 0);

  // Old-school traditional for loop.
  // for (let i = 0; i < books.length; i++) {
  //   displayItem(`Title: ${books[i].title}`, i);
  // }

  // for (let i = books.length - 1; i >= 0; i--) {
  //   displayItem(`Title: ${books[i].title}`, i);
  // }

  // for (let book of books) {
  //   displayItem(`Title: ${book.title}`, 0);
  // }

  // for (let idx in books) {
  //   displayItem(`Title: ${books[idx].title}`, idx);
  // }

  // let i = 0;
  // while (i < 100) {
  //   if (i % 15 === 0) {
  //     displayItem("FizzBuzz", i);
  //   } else if (i % 5 === 0) {
  //     displayItem("Fizz", i);
  //   } else if (i % 3 === 0) {
  //     displayItem("Buzz", i);
  //   } else {
  //     displayItem(i, i);
  //   }
  //
  //   i++;
  // }

  // books.forEach((item) => {
  //   displayItem(`Title: ${item.title}`, 0);
  // });

  // let mappedBooks = books.map((item) => {
  //   return `Author: ${item.author}`;
  // });

  // displayItem(JSON.stringify(mappedBooks), 0);

  // let filteredBooks = books.filter((item) => {
  //   return item.author === "Neal Stephenson";
  // });

  // for (let book of filteredBooks) {
  //   displayItem(`Title: ${book.title}`, 0);
  // }

  // let sortedBooks = books
  //   .map((i) => {
  //     return i.title;
  //   })
  //   .sort();

  // console.log(sortedBooks);

  // for (let book of sortedBooks) {
  //   displayItem(`Title: ${book}`, 0);
  //   console.log(books.map((i) => i.year));
  // }

  // Conditionals, and program flow.

  for (let book of books) {
    // if (book.author === "Neal Stephenson") {
    //   displayItem(book.title, "if");
    // } else if (book.title.toLowerCase().includes("con")) {
    //   displayItem(book.title, "else if");
    // } else {
    //   displayItem(book.title, "else");
    // }
    // Ternary operator
    // book.rating > 85
    //   ? displayItem(book.title, "is highly rated")
    //   : displayItem(book.title, "is not highly rated");
    // if (book.rating > 85) {
    //   displayItem(book.title, "is highly rated");
    // } else {
    //   displayItem(book.title, "is not highly rated");
    // }
    // thing you are evaluating ? doIfTruthy() : doIfFalsy()
    // Switch statements
    // switch (book.author.toLowerCase()) {
    //   case "richard k. morgan":
    //     displayItem(
    //       `${book.title} is by the author of "Fallen Angels".`,
    //       book.author
    //     );
    //     break;
    //   case "neal stephenson":
    //     displayItem(
    //       `${book.title} is by the author of "The Gilded Age".`,
    //       book.author
    //     );
    //     break;
    //   case "neil gaiman":
    //   case "terry pratchett":
    //     displayItem(
    //       `${book.title} is by one of the authors of "Good Omens".`,
    //       book.author
    //     );
    //     break;
    //   default:
    //     displayItem(
    //       `${book.title} is by an author that doesn't really matter.`,
    //       book.author
    //     );
    // }
  }

  // for (let cat of colonyOfCats) {
  //   console.log(
  //     `${cat.name} is a ${cat.color} cat, and they are ${
  //       cat.isNapping ? "asleep" : "awake"
  //     }.`
  //   );

  //   if (cat.isNapping) {
  //     console.log(`${cat.name} is a ${cat.color} cat, and they are asleep.`);
  //   } else {
  //     console.log(`${cat.name} is a ${cat.color} cat, and they are awake.`);
  //   }
  // }
};
