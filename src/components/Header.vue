<template>
  <header>
    <div class="navbar">
      <div class="logo" @click="() => handleBookButton('/')">
        <img src="/src//assets/car-logo.png" alt="" />
      </div>
      <ul class="links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="#services">Services</router-link></li>
        <li><router-link to="#video">Video</router-link></li>
        <li><router-link to="#contact">Contact</router-link></li>
      </ul>
      <div class="social">
        <a href=""> <i class="fa-brands fa-facebook-f"></i></a>
        <a href=""> <i class="fa-brands fa-x-twitter"></i></a>
        <a href=""> <i class="fa-brands fa-whatsapp"></i> </a>
      </div>
      <button class="toggle_btn" @click="toggleMenu">
        <transition name="icon-fade">
          <i :class="menuIconChange" key="menu-icon"></i>
        </transition>
      </button>
    </div>
    <div :class="['dropDown', { open: isMenuOpen }]">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="#services">Services</router-link></li>
      <li><router-link to="#video">Video</router-link></li>
      <li><router-link to="#contact">Contact</router-link></li>
    </div>
  </header>

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
import { computed, ref } from "vue";
import { RouterLink } from "vue-router";
import Button from "../global/Button.vue";
import { useRouter } from "vue-router";
import image1 from "../assets/bg-light.jpg";
import image2 from "../assets/bg.jpg";
const router = useRouter();
const isMenuOpen = ref(false);
const bgImageSource = ref(image2);

const menuIconChange = computed(() =>
  isMenuOpen.value ? "fa-solid fa-xmark" : "fa-solid fa-bars"
);
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

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
.links li {
  list-style: none;
}
.links li a {
  position: relative;
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
}
.links li a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 0%;
  height: 2px;
  background: #dc3545;
  transition: 0.4s;
}
.links li a:hover::after {
  width: 100%;
}

header {
  position: fixed;
  padding: 20px 100px;
  width: 100%;
  z-index: 999;
  background: rgba(0, 0, 0, 0.7);
  border-bottom: 1px solid #dc3545;
}
.logo {
  width: 200px;
  cursor: pointer;
}
.logo img {
  width: 100%;
  height: 100%;
}
.navbar {
  width: 100%;
  height: 60px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.social a i {
  color: #fff;
  font-size: 22px;
  margin-left: 15px;
  transition: color 0.2s;
}
.social a i:hover {
  transform: scale(1.2);
  color: #dc3545;
}

.navbar .logo a {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
}
.navbar .links {
  display: flex;
  gap: 2rem;
}
.navbar .toggle_btn {
  color: #fff;
  font-size: 1.5rem;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  display: none;
  opacity: 0;
  visibility: hidden;
  transition: 0.2s all;
}
.dropDown {
  position: absolute;
  right: 2rem;
  top: 110px;
  width: 300px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  overflow: hidden;
  display: none;
  transition: 0.5s;
}
.dropDown.open {
  display: block;
  transition: 0.5s;
}
.dropDown li {
  list-style: none;
  padding: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: 0.2s;
  cursor: pointer;
}
.dropDown li:hover {
  background-color: #dc3545;
}
.dropDown li a {
  text-decoration: none;
  color: #fff;
}

/* image */
.hero {
  position: relative;
  height: 100vh;
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
  .navbar .links,
  .social {
    display: none;
    visibility: hidden;
    opacity: 0;
  }
  .navbar .toggle_btn {
    display: block;
    opacity: 1;
    visibility: visible;
  }
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

@media (max-width: 576px) {
  .dropDown {
    left: 2rem;
    width: unset;
  }
  header {
    padding: 20px 30px;
  }
}
</style>
