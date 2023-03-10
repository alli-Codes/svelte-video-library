<script>
  import Icon from "@iconify/svelte";
  import playArrow from "@iconify/icons-material-symbols/play-arrow";
  //   import pauseOutline from "@iconify/icons-material-symbols/pause-outline";
</script>

<main>
  <div class="container">
    <!-- <h1>Youtube</h1> -->
    <!-- svelte-ignore a11y-media-has-caption -->
    <video>
      <source src="/assets/video.mp4" type="video/mp4" />
    </video>
    <section class="controls__container">
      <div class="controls__wrapper">
        <div class="primary">
          <Icon icon={playArrow} width="35" />
          <Icon icon="material-symbols:skip-next" width="35" />
          <Icon icon="material-symbols:volume-up" width="25" />
          <p>0:00 / 5:00</p>
        </div>
        <div class="secondary">
          <Icon icon="bi:toggle2-on" width="25" />
          <Icon icon="material-symbols:closed-caption" width="25" />
          <Icon icon="mdi:cog" width="25" />
          <Icon icon="akar-icons:miniplayer" width="25" />
          <Icon icon="material-symbols:rectangle-outline" width="25" />
          <Icon icon="material-symbols:fullscreen" width="25" />
        </div>
      </div>
    </section>
  </div>
</main>

<style scoped>
  .container {
    background-color: red;
    width: 60rem;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .controls__container {
    /* background-color: black; */
    width: 100%;
    position: absolute;
    bottom: 0;
  }
  .controls__wrapper {
    /* width: 100%; */
    color: white;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .primary,
  .secondary {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
</style>
