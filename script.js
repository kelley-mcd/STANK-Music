const playlistTemplateSource = document.getElementById('playlist-template').innerHTML;
const playlistTemplate = Handlebars.compile(playlistTemplateSource);

const tracksTemplateSource = document.getElementById('tracks-template').innerHTML;
const tracksTemplate = Handlebars.compile(tracksTemplateSource);

const $playlist = $('#playlist-container');
const $tracks = $('#tracks-container');
const $mainTitle = $('.header');
const $backButton = $('.back-button');

const getTopPlaylists = $.get('https://api.napster.com/v2.0/playlists?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm');

function getPlaylistTracks(id) {
  return $.get('https://api.napster.com/v2.0/playlists/' + id + '/tracks?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm&limit=200');
}

$backButton.click(() => {
	$playlist.show();
  $tracks.hide();
  $mainTitle.text('Top Playlists');
  $backButton.hide();
});

$backButton.hide(); // Initally hide back button.

function changeToTracks(playlistName) {
	$mainTitle.text(playlistName);
  $playlist.hide();
	$tracks.show();
  $backButton.show();
  
  return renderTracks;
}

function renderTracks(response) {
  $tracks.html(tracksTemplate(response));
}

getTopPlaylists
  .then((response) => {
    $playlist.html(playlistTemplate(response));
    addPlaylistListener();
  });

function addPlaylistListener() {
  $('.cover').on('click', (e) => {
    const $playlist = $(e.target);
    getPlaylistTracks($playlist.data('playlistId'))
      .then(changeToTracks($playlist.data('playlistName')));
  });
}