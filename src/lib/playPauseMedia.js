import DT from "duration-time-conversion";

const videoPlayer = function (media) {
  this.isPlaying = media.paused;
  this.play = () => media.play();
  this.pause = () => media.pause();
  this.togglePlayState = () => {
    // this.duration = media.duration ?? 0;
    this.isPlaying = !media.paused;
    if (this.isPlaying) {
      this.pause();
      return;
    }
    this.play();
    return;
  };

  const covertToTime = function (time) {
    if (time >= 3600) {
      return DT.d2t(time).slice(0, 8);
    }
    return DT.d2t(time).slice(3, 8);
  };

  this.duration = covertToTime(20);
  console.log(this.duration, media.duration);
  this.currentTime = 0;

  this.checkForTimeUpdate = () => {
    media.addEventListener("timeupdate", () => {
      // const time = setInterval(() => {
      //   if (!this.isPlaying) {
      //     this.currentTime++;
      // console.log(this.duration, media.duration);
      //     return;
      //   }
      //   clearInterval(time);
      // }, 1000);
    });
  };
};

export default videoPlayer;
