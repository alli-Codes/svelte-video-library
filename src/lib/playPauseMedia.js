import DT from "duration-time-conversion";

const videoPlayer = function (media) {
  this.isPlaying = media.paused;
  this.hasEnded = media.ended;
  this.play = () => media.play();
  this.pause = () => media.pause();
  this.togglePlayState = () => {
    // this.duration = media.duration ?? 0;
    this.isPlaying = media.paused;
    if (!this.isPlaying) {
      this.pause();
      return;
    }
    this.play();
    return;
  };

  const convertToTime = function (time) {
    if (time >= 3600) {
      return DT.d2t(time).slice(0, 8);
    }
    return DT.d2t(time).slice(3, 8);
  };

  this.duration = convertToTime(media.duration);
  this.currentTime = convertToTime(media.currentTime);
  this.fullTime = `${this.currentTime} / ${this.duration}`;

  this.checkForTimeUpdate = () => {
    media.addEventListener("timeupdate", () => {
      this.hasEnded = media.ended;
      this.currentTime = convertToTime(media.currentTime);
      this.fullTime = `${this.currentTime} / ${this.duration}`;
    });
  };
};

export default videoPlayer;
