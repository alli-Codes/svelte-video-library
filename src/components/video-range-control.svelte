<script>
  let rangeThumb, rangeProgress;

  const move = function () {
    // rangeThumb.style.left = this.value + "%";
    rangeProgress.style.width = this.value + "%";
  };
</script>

<main>
  <div class="wrapper">
    <input
      type="range"
      class="range__input"
      min="0"
      max="100"
      value="0"
      on:input={move}
    />
    <div class="range__container">
      <div class="range__progress" bind:this={rangeProgress} />
    </div>
  </div>
</main>

<style lang="scss" scoped>
  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    position: relative;

    &:hover {
      .range__container {
        transform: scaleY(2);
      }
      .range__input::-webkit-slider-thumb {
        background-color: red;
        transition: none !important;
      }
    }

    .range__container {
      background-color: rgb(218, 216, 216);
      width: 100%;
      height: 0.2rem;
      outline: none;
      border-radius: 0.3rem;
      cursor: pointer;
      position: relative;
      transition: transform 0.4s ease;
      position: absolute;
      left: 0;
      overflow: hidden;
      .range__progress {
        background-color: red;
        width: 0%;
        height: 100%;
      }
    }
  }
  .range__input {
    -webkit-appearance: none;
    background-color: transparent;
    width: 100%;
    height: 0.2rem;
    outline: none;
    border-radius: 0.3rem;
    position: relative;
    z-index: 20;
    cursor: pointer;
  }
  .range__input::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: transparent;
    width: 1rem;
    height: 1rem;
    border-radius: 2rem;
    cursor: pointer;
    z-index: 3;
    transform: scale(0.9, 0.9);
    transition: transform 0.3s ease;
    position: relative;
  }
</style>
