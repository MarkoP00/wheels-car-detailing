<template>
  <div class="hero">
    <img :src="bgImageSource" alt="background image" />
    <div class="text">
      <h4>BECAUSE WE KNOW</h4>
      <h1>HOW MUCH <br /><span class="spec">YOU LOVE</span></h1>
      <h4>YOUR CAR</h4>
      <Button
        :buttonText="'Book your appointment'"
        @click="() => handleBookButton('#contact')"
      ></Button>
    </div>

    <div class="mobileText">
      <h4>Because we know</h4>
      <h1>How much</h1>
      <h1 class="spec">You love</h1>
      <h4>YOUR CAR</h4>
      <Button
        :buttonText="'Book your appointment'"
        @click="() => handleBookButton('#contact')"
      ></Button>
    </div>
  </div>
</template>

<script setup>
import Button from "../global/Button.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";
import image1 from "../assets/bg-light.jpg";
import image2 from "../assets/bg.jpg";

const router = useRouter();
const bgImageSource = ref(image2);

setInterval(() => {
  bgImageSource.value = image1;
  setTimeout(() => {
    bgImageSource.value = image2;
  }, 1000);
}, 2000);

function handleBookButton(route) {
  router.push(route);
}
</script>

<style scoped>
/* image */
.hero {
  height: 100svh;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hero img {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-repeat: no-repeat;
}

.hero .text {
  width: 90%;
  margin: auto;
}

.hero .text h4 {
  font-size: 40px;
  color: #fff;
  font-weight: 500;
  margin-bottom: 20px;
}

.hero .text h1 {
  color: #fff;
  font-size: 65px;
  text-transform: uppercase;
  line-height: 1;
}
.hero .text h1 span {
  color: #dc3545;
  font-size: 80px;
  font-weight: bold;
}
.hero .text p {
  color: #fff;
  margin-bottom: 30px;
  font-weight: bold;
}
.mobileText {
  display: none;
  visibility: hidden;
  opacity: 0;
}
@media (max-width: 990px) {
  .hero {
    text-align: center;
  }
  .hero .text {
    display: none;
    opacity: 0;
    visibility: hidden;
  }
  .hero .mobileText {
    display: block;
    opacity: 1;
    visibility: visible;
  }
  .hero .mobileText {
    line-height: 60px;
  }
  .hero .mobileText h4 {
    font-size: 30px;
  }
  .hero .mobileText h1 {
    font-size: 40px;
  }
  .spec {
    color: #dc3545;
  }
}
</style>
