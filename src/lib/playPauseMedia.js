let playState = false;

const playPauseMedia = function (media, isPlaying) {
  if (playState) {
    media.pause();
    playState = false;
  }
  media.play();
};
