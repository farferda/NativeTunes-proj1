const SpotifyAPIAuthorization = 'Bearer BQDgURxE7nGgcyGIQNseqD6ssMv0Y7tYbmBRch0VJQSfO7kOER1tGupcNcdJ87iWb55GN4FNrAvq9YbyUG-rLDK19SjVvfa7-WHJmeFpafoCZcADCwzdI6sG2RnueKjY1u75H08MAmQ';
const SpotifyAPICountry = 'https://api.spotify.com/v1/browse/categories/party/playlists?country=';
const SpotifyAPIPlaylist = 'https://open.spotify.com/embed/user/spotify/playlist/';

class Message {
  static show(text) {
    document.querySelector('#spotify-playlist').classList.remove('isActive');
    document.querySelector('#playlistName').textContent = '';
    const messageElement = document.querySelector('.message');
    messageElement.textContent = text;
    messageElement.classList.add('isActive');
  }
  static hide() {
    document.querySelector('.message').classList.remove('isActive');
    document.querySelector('#spotify-playlist').classList.add('isActive');
  }
}

function initializeChart() {
  const map = AmCharts.makeChart('chartdiv', {
    'type': 'map',
    'theme': 'light',
    'projection': 'miller',
    'dataProvider': {
      'map': 'worldLow',
      'getAreasFromMap': true
    },
    'areasSettings': {
      'autoZoom': true,
      'selectedColor': '#f1fbff'
    },
    'smallMap': {},
    'export': {
      'enabled': true,
      'position': 'bottom-right'
    }
  });
  map.addListener('clickMapObject', handleCountrySelection);
}
function handleCountrySelection(event) {
  document.getElementById('country').textContent = (
    `You selected: ${event.mapObject.title}`
  );

  // Query Spotify
  $.ajax({
    url: SpotifyAPICountry + event.mapObject.id,
    method: 'GET',
    headers: {
      Authorization: SpotifyAPIAuthorization
    }
  }).done(didReceiveSpotifyPlaylist).fail(error => {
    if (error.status === 400) {
      Message.show(`This country doesn't have Spotify.`);
    }
  });
}
function didReceiveSpotifyPlaylist(response) {
  Message.hide();
  console.log(response.playlists.items.length);
  const randomNumber = Math.floor((Math.random() * 20) + 1);
  const randomPlaylist = response.playlists.items[Math.floor((Math.random() * 20) + 1)];
  const {name, id} = randomPlaylist;

  document.getElementById('playlistName').textContent = (
    `You are now listening to: ${name}`
  );
  const spotifyPlaylist = document.querySelector('#spotify-playlist');
  const nextSrc = SpotifyAPIPlaylist + id;
  spotifyPlaylist.setAttribute('src', nextSrc);
}

window.onload = () => {
  initializeChart();
};