const kanyeBtn$ = $('.kanye-btn');
const userBtn$ = $('.user-btn');
const userInput$ = $('.input-field');


function handleUserFormSubmit(event) {
  event.preventDefault();

  var searchInputVal = userInput$.value;
  

  if (!searchInputVal) {
    alert('You need a search input value!');
    return;
  }

  let queryString = `./user-form.html?q=${searchInputVal}`;

  location.assign(queryString);
};

function handleKanyeButton(event) {
  let queryString = "./kanye-decide.html";
  location.assign(queryString);
};

userBtn$.click(handleUserFormSubmit);
kanyeBtn$.click(handleKanyeButton);

