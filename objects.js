var playlist = {'Lin Manuel Miranda': 'My Shot'};

function updatePlaylist(playlist,artist,song) {
  playlist[artist] = song;
  console.log(playlist);
  return playlist;
}