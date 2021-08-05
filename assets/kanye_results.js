const quoteField = $("#kanye-random-quote")
const songField = $(".kanye-decide-song")
let number = 0;
let backButton = $("#backButton");
//generates a random number within the amount of songs kanye has released
let randomNumber = function () {
    number = Math.floor(Math.random() * 1566);
    return;
}
randomNumber()

//sets api url to be a random Kanye West song using pagination with a random number
let napsterURL = `https://api.napster.com/v2.2/artists/art.5015309/tracks?limit=1&offset=${number}&apikey=OTI0NjE5NWEtNWVjOC00ZTJjLTliMDgtOTdkMTg5NjEwYmU0`

//pulls data from kanye.rest api
fetch("https://api.kanye.rest")
    .then(function (response) {
        if (!response.ok) {
            throw response.json();
        }
        return response.json()
    })
    .then(function (data) {
        quoteField.text(`"${data.quote}" - Kanye West`);
    })

//pulls a random kanye song from napster
fetch(napsterURL)
    .then(function (response) {
        if (!response.ok) {
            throw response.json();
        }
        return response.json()
    })

    //displays a random kanye song
    .then(function (data) {
        songField
        .text(`${data.tracks[0].name} off the album: ${data.tracks[0].albumName}.`)
        .attr("href",data.tracks[0].previewURL)
    })

    //allows user to go back to main page
    backButton.on("click", function(){
        window.history.back();
      })