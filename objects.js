var playlist = {
  artistName: 'songTitle',
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist['artistName'] = 'songTitle'
return object.assign({}, playlist, {['artistName']: 'songTitle'})
}
