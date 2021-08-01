$(function () {
  const kanyeBtn$ = $('.kanye-btn');
  const userBtn$ = $('.user-btn');
  //const userInput$ = $('input');
  const select$ = $('select');
  let genreArray = [];

  // function to query the napster api and grab info on different genres, 
  //then dynamically render them as input field options.
  function handleRenderOptions() {
    let url = 'https://api.napster.com/v2.2/genres?apikey=OTI0NjE5NWEtNWVjOC00ZTJjLTliMDgtOTdkMTg5NjEwYmU0';

    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //console.log(data.genres);
        for (var i = 0; i < data.genres.length; i++) {
          let options = data.genres[i].name;
          let genreId = data.genres[i].id;
          //console.log(options, genreId);
          let userOptions = document.createElement('option');
          userOptions.innerHTML = options;
          userOptions.value = genreId;
          select$.append(userOptions);
          select$.formSelect();
        }
      })
  }

  // function to create array of key value pairs with name and id of genres
  function handleCreateArray() {
    let url = 'https://api.napster.com/v2.2/genres?apikey=OTI0NjE5NWEtNWVjOC00ZTJjLTliMDgtOTdkMTg5NjEwYmU0';

    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //console.log(data.genres);
        for (var i = 0; i < data.genres.length; i++) {
          let options = data.genres[i].name;
          let genreId = data.genres[i].id;
          let genreObject = {
            name : options,
            id : genreId
          }
          genreArray.push(genreObject);
        }
        console.log(genreArray);
      })
  }





  // handlers for redirecting to the different results pages using the corresponding buttons
  function handleUserFormSubmit(event) {
    event.preventDefault();

    
    let inputVal = $('option').attr('value');


    if (inputVal === undefined) {
      alert('You need a search input value!');
      return;
    }
    else {
      let queryString = `./user-form.html?q=${inputVal}`;
      location.assign(queryString);
    }

  };



  function handleKanyeButton(event) {
    event.preventDefault();
    let queryString = "./kanye-decide.html";
    location.assign(queryString);
  };

  userBtn$.click(handleUserFormSubmit);
  kanyeBtn$.click(handleKanyeButton);
  handleRenderOptions();
  handleCreateArray();

});





