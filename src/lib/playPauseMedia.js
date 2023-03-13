const videoPlayer = function (media) {
  this.isPlaying = media.paused;
  this.play = () => media.play();
  this.pause = () => media.pause();
  this.togglePlayState = () => {
    console.log(this.isPlaying);
    this.isPlaying = !media.paused;
    if (this.isPlaying) {
      this.pause();
      return;
    }
    this.play();
    return;
  };
};

export default videoPlayer;
