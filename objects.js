var playlist = {'Lin Manuel Miranda': 'My Shot'};

function updatePlaylist(playlist,artist,song) {
  playlist[artist] = song;
  console.log(playlist);
  return playlist;
}

function removeFromPlaylist(playlist,artist) {
  delete playlist[artist];
  console.log(playlist);
  return playlist;
}

updatePlaylist(playlist,'The Eagles','Desperado');
removeFromPlaylist(playlist,'Lin Manuel Miranda');
