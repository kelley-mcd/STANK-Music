$(function () {
  const kanyeBtn$ = $('.kanye-btn');
  const userBtn$ = $('.user-btn');
  //const userInput$ = $('input');
  const select$ = $('select');
  const recentSearch = $("#recentSearch");
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
          genreArray = data.genres
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
  function displayLocalStorage() {
    const userInput = JSON.parse(localStorage.getItem("Recent"));
    if (userInput == "You let Kanye decide.") {
      recentSearch.text("You let Kanye decide.")
      recentSearch.on("click", function () {
        
        let queryString ="./kanye-decide.html";
        location.assign(queryString);
      })
    }
    else {
      recentSearch.text(userInput.name)
      recentSearch.on("click", function () {

        let queryString = `./user-form.html?q=${userInput.val}`;
        location.assign(queryString);
      })
    }
  }

  // handlers for redirecting to the different results pages using the corresponding buttons
  function handleUserFormSubmit(event) {
    event.preventDefault();

    let inputVal = $("select option:selected").val();
    let userInput = {
      name: $("select option:selected").html(),
      val: inputVal
    }
    console.log(inputVal);
    if (inputVal === "") {
      M.toast({html: 'Select a Genre!'});
      return;
    }
    else {
      console.log(inputVal);
      console.log($("select option:selected"))
      localStorage.setItem("Recent", JSON.stringify(userInput))
      let queryString = `./user-form.html?q=${inputVal}`;
      location.assign(queryString);
    }

  };

  function handleKanyeButton(event) {
    event.preventDefault();
    localStorage.setItem("Recent", JSON.stringify("You let Kanye decide."))
    let queryString = "./kanye-decide.html";
    location.assign(queryString);
  };

  userBtn$.click(handleUserFormSubmit);
  kanyeBtn$.click(handleKanyeButton);
  handleRenderOptions();
  displayLocalStorage();


  //handleCreateArray();
  //$('select').formSelect();

});







