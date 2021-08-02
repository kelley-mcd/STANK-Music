<<<<<<< HEAD
$(function () {
    const resultDiv = document.getElementById('user-choice-results');
    
    function getParam() {
        let searchParamsValue = document.location.search.split('q=');
        console.log(searchParamsValue);
        let genreId = searchParamsValue[1];
        console.log(genreId);
        getApi(genreId);
    }

    function getApi(genreId) {
        if (genreId) {
            let url = `https://api.napster.com/v2.2/genres/${genreId}/tracks/top?apikey=OTI0NjE5NWEtNWVjOC00ZTJjLTliMDgtOTdkMTg5NjEwYmU0`;
            fetch(url)
                .then(function (response) {
                    if (!response.ok) {
                        throw response.json();
                    }
                    return response.json();
                })
                .then(function (data) {
                    console.log(data);
                    for (i=0; i < data.tracks.length; i++) {
                        let artist = document.createElement('h5');
                        let track = document.createElement('p');
                        artist.textContent = data.tracks[i].artistName
                        track.textContent = data.tracks[i].name;
                        resultDiv.append(artist);
                        resultDiv.append(track);

                    }

                })
        }

    }
    getParam();

});






=======
function goBack() {
    window.history.back();
  }
>>>>>>> a060d42d55756f73619ec2dbffce2594029ae6d3
