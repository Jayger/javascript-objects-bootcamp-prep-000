var playlist = {gorillaz: "Humility"};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {artistName: songTitle});
}

updatePlaylist(playlist, 'Slowdive', morningRise);
updatePlaylist(playlist, 'My Bloody Valentine', sugar);
updatePlaylist(playlist, 'Phil Ochs', hellraiser);