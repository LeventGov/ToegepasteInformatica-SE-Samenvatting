import fetch from 'node-fetch';

function average(values) {
  return values.reduce((acc, value) => acc + value, 0) / values.length;
}

async function getAlbumTitles() {
  const request = await fetch('http://localhost:3000/albums');
  const albums = await request.json();
  return albums.map(album => album.title);
}

async function getFirstTrackDetailsOfAlbum(albumId) {
  const request = await fetch(`http://localhost:3000/albums/${albumId}`);
  const album = await request.json();
  const track = album.tracks[0];
  const trackRequest = await fetch(`http://localhost:3000/songs/${track.id}`);
  return trackRequest.json();
}

async function getFullAlbum(albumId) {
  const request = await fetch(`http://localhost:3000/albums/${albumId}`);
  const album = await request.json();

  const trackIds = album.tracks.map(track => track.id);
  const trackRequests = await Promise.all(trackIds.map(trackId => fetch(`http://localhost:3000/songs/${trackId}`)));
  const tracks = await Promise.all(trackRequests.map(trackRequest => trackRequest.json()));
  
  return tracks;
}

async function getAveragePopularity(albumId) {
  const tracks = await getFullAlbum(albumId);
  return average(tracks.map(track => track.popularity));
}

async function getMostPopularAlbum() {
  const albums = await fetch('http://localhost:3000/albums');
  const albumRequests = await albums.json();
  
  const averages = await Promise.all(albumRequests.map(album => getAveragePopularity(album.id)));
  const maxAverage = Math.max(...averages);

  return albumRequests[averages.indexOf(maxAverage)];
}

getAveragePopularity(9).then(result => console.log(result));