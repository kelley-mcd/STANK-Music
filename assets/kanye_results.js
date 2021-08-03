const quoteField = $("#kanye-random-quote")
const songField = $(".kanye-decide-song")
let number = 0;
let backButton = $("#backButton");
let randomNumber = function () {
    number = Math.floor(Math.random() * 1566);
    return;
}
randomNumber()
let napsterURL = `https://api.napster.com/v2.2/artists/art.5015309/tracks?limit=1&offset=${number}&apikey=OTI0NjE5NWEtNWVjOC00ZTJjLTliMDgtOTdkMTg5NjEwYmU0`

fetch("https://api.kanye.rest")
    .then(function (response) {
        if (!response.ok) {
            throw response.json();
        }
        return response.json()
    })
    .then(function (data) {
        quoteField.text(data.quote);
    })

fetch(napsterURL)
    .then(function (response) {
        if (!response.ok) {
            throw response.json();
        }
        return response.json()
    })
    .then(function (data) {
        songField
        .text(`${data.tracks[0].name} off the album: ${data.tracks[0].albumName}.`)
        .attr("href",data.tracks[0].previewURL)

        console.log(data);
    })

    backButton.on("click", function(){
        window.history.back();
      })