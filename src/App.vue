<template>
  <v-app>
    <!-- <v-container> -->
    <section class="firstSection">
      <div class="introduction">
        <h1 class="animated fadeInLeftBig">Безопасность ваших данных &#8211; наша работа</h1>
        <div class="logo animated fadeInLeftBig"></div>
      </div>
      <div class="anon animated fadeInDownBig"></div>
      <div class="yellowBlock animated fadeInUpBig"></div>
      <div class="arrow animated fadeInUpBig"></div>
    </section>
    <!-- </v-container> -->
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    //
  })
};
</script>

<style>
.firstSection {
  margin: 0 auto;
  min-height: 48vw;
  width: 80vw;
  background-color: #ffffff;
  position: relative;
  display: flex;
  justify-content: space-between;
}

.anon {
  background-image: url("./img/anon.png");
  width: 39vw;
  height: 48vw;
  background-size: cover;
  position: absolute;
  top: 0vw;
  left: 27.5vw;
  z-index: 99;
}

.yellowBlock {
  background-image: url("./img/yellow.png");
  width: 43vw;
  background-size: cover;
}

.introduction {
  display: flex;
  max-width: 23vw;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 34vw;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  background-color: white;
  margin-left: 3.5vw;
}

.introduction h1 {
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 2.5vw;
  max-width: 22vw;
  line-height: 1.2;
  animation-delay: 1s;
}

.logo {
  background-image: url("./img/logo.png");
  min-height: 10vw;
  background-size: 68%;
  width: 24vw;
  animation-delay: 1s;
}

.arrow {
  background-image: url("./img/arrow.png");
  min-height: 9vw;
  background-size: 100%;
  width: 6vw;
  position: absolute;
  top: 20vw;
  right: 3vw;
}

@media (max-width: 1024px) {
  .firstSection {
    min-height: 75vw;
    width: 100vw;
  }

  .introduction {
    height: 51vw;
    max-width: 25vw;
  }

  .introduction h1 {
    font-size: 3vw;
    max-width: 25vw;
  }

  .logo {
    min-height: 12vw;
    background-size: 78%;
    width: 26vw;
  }

  .anon {
    width: 60vw;
    height: 75vw;
    left: 22.5vw;
  }

  .yellowBlock {
    width: 60.7vw;
  }

  .arrow {
    min-height: 11vw;
    width: 8vw;
    top: 32vw;
  }
}
</style>
