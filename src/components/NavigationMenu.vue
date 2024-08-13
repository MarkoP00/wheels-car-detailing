<template>
  <header>
    <div class="navbar">
      <div class="logo" @click="() => handleBookButton('/')">
        <img src="/src/assets/car-logo.png" alt="" />
      </div>
      <ul class="links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="#about">About</router-link></li>
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
      <li><router-link to="#about">About</router-link></li>
      <li><router-link to="#services">Services</router-link></li>
      <li><router-link to="#video">Video</router-link></li>
      <li><router-link to="#contact">Contact</router-link></li>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { useRouter } from "vue-router";
import { computed, ref } from "vue";
const router = useRouter();
const isMenuOpen = ref(false);

const menuIconChange = computed(() =>
  isMenuOpen.value ? "fa-solid fa-xmark" : "fa-solid fa-bars"
);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
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
  top: 0;
  left: 0;
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
