// ============================================
// QUESTION 3b: Taylor Swift API - Async/Await Pattern
// ============================================
// Dit is DEZELFDE functionaliteit als question3a
// MAAR met moderne Async/Await syntax i.p.v. Promise .then()
//
// Voordelen:
// - Leest als normale sequentiële code (top-to-bottom)
// - Foutafhandeling met try/catch (zoals gewone code)
// - Veel cleaner en makkelijker te begrijpen
// ============================================

import fetch from 'node-fetch';

// STAP 1: Helper functie - gemiddelde
function average(values) {
  return values.reduce((acc, value) => acc + value, 0) / values.length;
}

// ============================================
// STAP 2: Fetch album titels (Async version)
// ============================================
async function getAlbumTitles() {
  // STAP 2a: Await bedeutet: wacht tot request klaar is
  // Je kan await ALLEEN in async functies gebruiken
  const request = await fetch('http://localhost:3000/albums');
  
  // STAP 2b: Wacht tot JSON parsing klaar is
  const albums = await request.json();
  
  // STAP 2c: Map naar titels en retourneer
  return albums.map(album => album.title);
}

// ============================================
// STAP 3: Get eerste track details (Async version)
// ============================================
async function getFirstTrackDetailsOfAlbum(albumId) {
  // STAP 3a: Fetch album
  const request = await fetch(`http://localhost:3000/albums/${albumId}`);
  const album = await request.json();
  
  // STAP 3b: Pak eerste track
  const track = album.tracks[0];
  
  // STAP 3c: Fetch track details
  const trackRequest = await fetch(`http://localhost:3000/songs/${track.id}`);
  
  // STAP 3d: Retourneer track data
  return trackRequest.json();
}

// ============================================
// STAP 4: Get alle tracks van album (Async version)
// ============================================
async function getFullAlbum(albumId) {
  // STAP 4a: Fetch album
  const request = await fetch(`http://localhost:3000/albums/${albumId}`);
  const album = await request.json();

  // STAP 4b: Extraheer track IDs
  const trackIds = album.tracks.map(track => track.id);
  
  // STAP 4c: Fetch alle track requests tegelijkertijd
  // Map geeft array van promises, await wacht op alles
  const trackRequests = await Promise.all(
    trackIds.map(trackId => fetch(`http://localhost:3000/songs/${trackId}`))
  );
  
  // STAP 4d: Parse alle responses naar JSON
  // Nog een Promise.all omdat we meerdere .json() calls hebben
  const tracks = await Promise.all(
    trackRequests.map(trackRequest => trackRequest.json())
  );
  
  // STAP 4e: Retourneer alle tracks
  return tracks;
}

// ============================================
// STAP 5: Get gemiddelde populariteit (Async version)
// ============================================
async function getAveragePopularity(albumId) {
  // STAP 5a: Get alle tracks
  const tracks = await getFullAlbum(albumId);
  
  // STAP 5b: Bereken en retourneer gemiddelde
  return average(tracks.map(track => track.popularity));
}

// ============================================
// STAP 6: Find meest populaire album (Async version)
// ============================================
async function getMostPopularAlbum() {
  // STAP 6a: Fetch albums
  const albums = await fetch('http://localhost:3000/albums');
  const albumRequests = await albums.json();
  
  // STAP 6b: Bereken popularity voor elk album (parallel)
  const averages = await Promise.all(
    albumRequests.map(album => getAveragePopularity(album.id))
  );
  
  // STAP 6c: Vind maximum popularity
  const maxAverage = Math.max(...averages);

  // STAP 6d: Retourneer album met maximum popularity
  return albumRequests[averages.indexOf(maxAverage)];
}

// ============================================
// STAP 7: Test - roep functie aan
// ============================================
// Dit ziet er hetzelfde uit als promise version
// Maar binnenin gebeurt alles met async/await
getAveragePopularity(9).then(result => console.log(result));
