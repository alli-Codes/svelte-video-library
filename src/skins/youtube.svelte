<script>
  import Icon from "@iconify/svelte";
  import playArrow from "@iconify/icons-material-symbols/play-arrow";
  import VideoRangeControl from "../components/video-range-control.svelte";
  import playPauseMedia from "../lib/playPauseMedia";
  //   import pauseOutline from "@iconify/icons-material-symbols/pause-outline";

  let videoElement;
  // const check = () => console.log(videoElement.pause());
</script>

<main>
  <div class="container">
    <!-- <h1>Youtube</h1> -->
    <!-- svelte-ignore a11y-media-has-caption -->
    <video bind:this={videoElement}>
      <source src="/assets/video.mp4" type="video/mp4" />
    </video>
    <div class="controls__wrapper">
      <VideoRangeControl />
      <div class="controls__icons">
        <div class="primary">
          <button on:click={() => playPauseMedia(videoElement)}>
            <Icon icon={playArrow} width="35" />
          </button>
          <button><Icon icon="material-symbols:skip-next" width="35" /></button>
          <button><Icon icon="material-symbols:volume-up" width="25" /></button>
          <p>0:00 / 5:00</p>
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
    }
  }
</style>
