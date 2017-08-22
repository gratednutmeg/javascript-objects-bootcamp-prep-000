var playlist = {'Lin Manuel Miranda': 'My Shot'};

function updatePlaylist(playlist,artist,song) {
  playlist[artist] = song;
  return playlist;
}

updatePlaylist(playlist,'Lady Gaga','Teeth');