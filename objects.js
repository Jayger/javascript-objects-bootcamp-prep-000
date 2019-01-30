var playlist = {gorillaz: "Humility"};

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
}

removeFromPlaylist(playlist, gorillaz);

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {artistName: songTitle});
}

updatePlaylist(playlist, 'Slowdive', morningRise);
updatePlaylist(playlist, 'My Bloody Valentine', sugar);
updatePlaylist(playlist, 'Phil Ochs', hellraiser);