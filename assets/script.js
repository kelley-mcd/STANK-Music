$(document).ready(function () {
  const kanyeBtn$ = $('.kanye-btn');
  const userBtn$ = $('.user-btn');
  const userInput$ = $('select');

  function handleGenerateOptions() {
    let url = 'https://api.napster.com/v2.2/genres?apikey=OTI0NjE5NWEtNWVjOC00ZTJjLTliMDgtOTdkMTg5NjEwYmU0';
    let genreArray = [];

    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data, genres) {
        console.log(data.genres);
        for (var i = 0; i < data.genres.length; i++) {
          let options = data.genres[i].name
          console.log(options);
          let userOptions = document.createElement('option');
          userOptions.textContent = options;
          userOptions.value = options;
          userInput$.append(userOptions);
        }
      })
  };




  function handleUserFormSubmit(event) {
    event.preventDefault();

    var searchInputVal = $('option').value;


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
  handleGenerateOptions();

  userInput$.formSelect();
});