$(function () {
    const backButton = $('#back'); 
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
                        let albumImg = document.createElement('a');
                        artist.textContent = data.tracks[i].artistName
                        track.textContent = data.tracks[i].name;
                        albumImg.setAttribute('href', data.tracks[i].previewURL);
                        albumImg.textContent = 'Preview';
                        resultDiv.append(artist);
                        resultDiv.append(track);
                        resultDiv.append(albumImg);

                    }

                })
        }

    }
    getParam();

    backButton.click(function() {
        window.history.back();
      })
    
    
});






