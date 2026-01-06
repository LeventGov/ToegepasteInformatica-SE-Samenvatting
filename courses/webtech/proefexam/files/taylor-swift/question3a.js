// ============================================
// QUESTION 3a: Taylor Swift API - Promise Pattern
// ============================================
// Dit vraag test je begrip van:
// - Fetch API (communicatie met server)
// - Promise pattern (.then() chaining)
// - Array manipulation met .map()
// - Promise.all() voor parallelle requests
// ============================================

import fetch from 'node-fetch';

// STAP 1: Helper functie - bereken gemiddelde van array
// Dit wordt later gebruikt om populariteit uit te rekenen
function average(values) {
  // Som alle waardes op met reduce, deel door aantal elementen
  return values.reduce((acc, value) => acc + value, 0) / values.length;
}

// ============================================
// STAP 2: Fetch album titels
// ============================================
function getAlbumTitles() {
  // STAP 2a: Fetch alle albums van API
  return fetch('http://localhost:3000/albums')
    // STAP 2b: Response converteren naar JSON
    .then(res => res.json())
    // STAP 2c: Map albums array naar array van alleen titels
    .then(albums => albums.map(album => album.title));
}

// ============================================
// STAP 3: Get details van eerste track van album
// ============================================
function getFirstTrackDetailsOfAlbum(albumId) {
  // STAP 3a: Fetch het album met gegeven ID
  return fetch(`http://localhost:3000/albums/${albumId}`)
    .then(res => res.json())
    .then(album => {
      // STAP 3b: Pak eerste track van dit album
      const firstTrack = album.tracks[0];
      
      // STAP 3c: Fetch details van deze track (aparte request!)
      // Dit is genest fetching - we doen een fetch op basis van vorige result
      return fetch(`http://localhost:3000/songs/${firstTrack.id}`)
        .then(res => res.json());
    });
}

// ============================================
// STAP 4: Get ALL tracks van een album
// Dit is de moeilijkste - er zijn veel requests nodig!
// ============================================
function getFullAlbum(albumId) {
  // STAP 4a: Fetch het album
  return fetch(`http://localhost:3000/albums/${albumId}`)
    .then(res => res.json())
    .then(album => {
      // STAP 4b: Extraheer alle track IDs
      const trackIds = album.tracks.map(track => track.id);
      
      // STAP 4c: Fetch ALLE tracks tegelijkertijd (parallel)
      // Promise.all() wacht tot alle promises klaar zijn, dan combineert het results
      return Promise.all(
        trackIds.map(trackId => 
          fetch(`http://localhost:3000/songs/${trackId}`)
            .then(res => res.json())
        )
      );
    });
}

// ============================================
// STAP 5: Get gemiddelde populariteit van album
// ============================================
function getAveragePopularity(albumId) {
  // STAP 5a: Get alle tracks van dit album
  return getFullAlbum(albumId)
    // STAP 5b: Bereken gemiddelde popularity score
    .then(tracks => {
      return average(tracks.map(track => track.popularity));
    });
}

// ============================================
// STAP 6: Find meest populaire album
// Dit combineert alles - moeilijkste functie!
// ============================================
function getMostPopularAlbum() {
  // STAP 6a: Fetch alle albums
  return fetch('http://localhost:3000/albums')
    .then(res => res.json())
    .then(albums => {
      // STAP 6b: Bereken popularity voor elk album (parallel!)
      return Promise.all(albums.map(album => getAveragePopularity(album.id)))
        .then(averages => {
          // STAP 6c: Vind de MAXIMALE popularity score
          const maxAverage = Math.max(...averages);
          
          // STAP 6d: Return het album met deze maximum score
          // indexOf geeft ons index van max waarde, die gebruiken we om album te vinden
          return albums[averages.indexOf(maxAverage)];
        });
    });
}

// ============================================
// STAP 7: Test - roep functie aan
// ============================================
// Fetch gemiddelde populariteit van album ID 9
getAveragePopularity(9).then(result => console.log(result));
