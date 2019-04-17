{
  $('img#album-cover-art').attr('src', album.albumArtURl);
  $('#album-title').text(album.title);
  $('.artist').text(album.artist);
  $('#release-info').text(album.releaseInfo);
}
