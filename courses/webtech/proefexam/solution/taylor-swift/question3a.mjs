import fetch from 'node-fetch';

function average(values) {
  return values.reduce((acc, value) => acc + value, 0) / values.length;
}

function getAlbumTitles() {
  return fetch('http://localhost:3000/albums')
    .then(res => res.json())
    .then(albums => albums.map(album => album.title));
}

function getFirstTrackDetailsOfAlbum(albumId) {
  return fetch(`http://localhost:3000/albums/${albumId}`)
    .then(res => res.json())
    .then(album => {
      const firstTrack = album.tracks[0];
      return fetch(`http://localhost:3000/songs/${firstTrack.id}`)
        .then(res => res.json());
    });
}

function getFullAlbum(albumId) {
  return fetch(`http://localhost:3000/albums/${albumId}`)
    .then(res => res.json())
    .then(album => {
      const trackIds = album.tracks.map(track => track.id);
      return Promise.all(trackIds.map(trackId => 
        fetch(`http://localhost:3000/songs/${trackId}`)
          .then(res => res.json()))
        );
    });
}

function getAveragePopularity(albumId) {
  return getFullAlbum(albumId)
    .then(tracks => {
      return average(tracks.map(track => track.popularity));
    });
}

function getMostPopularAlbum() {
  return fetch('http://localhost:3000/albums')
    .then(res => res.json()).then(albums => {
      return Promise.all(albums.map(album => getAveragePopularity(album.id)))
        .then(averages => {
          const maxAverage = Math.max(...averages);
          return albums[averages.indexOf(maxAverage)];
        });
  });
}

getAveragePopularity(9).then(result => console.log(result));