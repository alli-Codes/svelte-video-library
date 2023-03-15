<script>
  import { writable } from "svelte/store";
  import { onMount } from "svelte";
  import Icon from "@iconify/svelte";
  import VideoRangeControl from "../components/video-range-control.svelte";
  import videoPlayer from "../lib/playPauseMedia";
  //   import pauseOutline from "@iconify/icons-material-symbols/pause-outline";

  let player;
  let videoElement;
  let isPlaying = writable(false);
  let hasEnded = writable(false);
  let fullTime = writable("00:00 / 00:00");
  let duration = writable(0);
  let currentTime = writable(0);
  let playBtn = writable("");
  let rangeProgress;
  let volumeIcon = "up";

  const move = function () {
    rangeProgress.style.width = this.value + "%";
    player.increaseVolume(this.value);
    if (this.value == 0) {
      volumeIcon = "off";
      return;
    }

    if (this.value < 50) {
      volumeIcon = "down";
      return;
    }

    volumeIcon = "up";
    return;
  };

  const checkMediaPlayState = function () {
    if ($isPlaying) {
      playBtn.set("material-symbols:pause-outline");
      return;
    }
    if ($hasEnded) {
      playBtn.set("material-symbols:play-arrow");
      return;
    }
    playBtn.set("material-symbols:play-arrow");
    return;
  };
  onMount(() => {
    checkMediaPlayState();
    videoElement.addEventListener("loadedmetadata", () => {
      player = new videoPlayer(videoElement);
      fullTime.set(player.fullTime);
      duration.set(videoElement.duration);
      currentTime.set(videoElement.currentTime);
      isPlaying.set(player.isPlaying);
      hasEnded.set(player.hasEnded);
    });

    videoElement.addEventListener("timeupdate", () => {
      fullTime.set(player.fullTime);
      duration.set(videoElement.duration);
      currentTime.set(videoElement.currentTime);
      isPlaying.set(player.isPlaying);
      checkMediaPlayState();
    });
    videoElement.addEventListener("ended", () => {
      isPlaying.set(!videoElement.paused);
      hasEnded.set(player.hasEnded);
      checkMediaPlayState();
    });
  });
</script>

<main>
  <div class="container">
    <!-- <h1>Youtube</h1> -->
    <!-- svelte-ignore a11y-media-has-caption -->
    <video bind:this={videoElement} on:timeupdate={player.checkForTimeUpdate}>
      <source src="/assets/video.mp4" type="video/mp4" />
    </video>
    <div class="controls__wrapper">
      <VideoRangeControl currentTime={$currentTime} duration={$duration} />
      <div class="controls__icons">
        <div class="primary">
          <button
            on:click={() => {
              player.togglePlayState();
            }}
          >
            <Icon bind:icon={$playBtn} width="35" />
          </button>
          <button><Icon icon="material-symbols:skip-next" width="35" /></button>
          <button class="volume__btn">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <i
              on:click={() => {
                player.muteMedia();
                player.muted ? (volumeIcon = "off") : (volumeIcon = "up");
              }}
              ><Icon
                icon="material-symbols:volume-{volumeIcon}"
                width="28"
              /></i
            >
            <div class="range__container">
              <div class="range__wrapper">
                <div class="range__progress" bind:this={rangeProgress} />
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value="100"
                on:input={move}
              />
            </div>
          </button>
          <p style="font-size: 13px">{$fullTime}</p>
        </div>
        <div class="secondary">
          <button><Icon icon="bi:toggle2-on" width="25" /></button>
          <button
            ><Icon icon="material-symbols:closed-caption" width="25" /></button
          >
          <button><Icon icon="mdi:cog" width="25" /></button>
          <button><Icon icon="akar-icons:miniplayer" width="25" /></button>
          <button
            ><Icon
              icon="material-symbols:rectangle-outline"
              width="25"
            /></button
          >
          <button><Icon icon="material-symbols:fullscreen" width="25" /></button
          >
        </div>
      </div>
    </div>
  </div>
</main>

<style lang="scss" scoped>
  .container {
    width: 60rem;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .controls__wrapper {
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.308),
      transparent
    );
    width: 100%;
    color: white;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    position: absolute;
    bottom: 0;
  }

  .controls__icons {
    padding: 0.3rem 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .primary,
  .secondary {
    display: flex;
    align-items: center;
    gap: 1rem;

    button {
      background-color: transparent;
      color: white;
      border: none;
      cursor: pointer;
      transition: all 3s ease;
    }

    .volume__btn {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      &:hover {
        .range__container {
          // display: flex;
          animation: 0.3s ease forwards zoomIn;
        }
      }
      .range__container {
        height: 1rem;
        width: 0;
        display: flex;
        align-items: center;
        overflow: hidden;
        position: relative;
        animation: 0.3s ease-in forwards zoomOut;

        // animation: 0.4s ease backwards zoom;

        @keyframes zoomIn {
          from {
            width: 0;
          }
          to {
            width: 4.5rem;
          }
        }

        @keyframes zoomOut {
          from {
            width: 4.5rem;
          }
          to {
            width: 0;
          }
        }
        .range__wrapper {
          background-color: rgb(124, 124, 124);
          width: 100%;
          height: 0.19rem;
          outline: none;
          border-radius: 0.3rem;
          cursor: pointer;
          transition: transform 0.4s ease;
          position: absolute;
          left: 0;
          overflow: hidden;
          .range__progress {
            background-color: white;
            height: 100%;
            width: 100%;
          }
        }
      }
      // }
      input {
        -webkit-appearance: none;
        background-color: transparent;
        width: 100%;
        height: 0.19rem;
        outline: none;
        border-radius: 0.3rem;
        position: relative;
        z-index: 20;
        cursor: pointer;
      }

      input:focus {
        .range__container {
          animation: 0.3s ease forwards zoomIn;
        }
      }

      input::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: white;
        width: 0.9rem;
        height: 0.9rem;
        border-radius: 2rem;
        cursor: pointer;
        z-index: 3;
        transition: transform 0.3s ease;
        position: relative;
      }
    }
  }
</style>
