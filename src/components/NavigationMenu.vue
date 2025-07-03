<template>
  <header>
    <div class="navbar">
      <div
        class="logo"
        @click="() => handleBookButton('/')">
        <img
          src="/src/assets/car-logo.png"
          alt="" />
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
        <a href=""> <i class="fa-brands fa-instagram"></i> </a>
      </div>
      <button
        class="toggle_btn"
        @click="toggleMenu">
        <i :class="['fa-solid', isMenuOpen ? 'fa-xmark' : 'fa-bars']"></i>
      </button>
    </div>
    <div :class="['dropDown', { open: isMenuOpen }]">
      <ul class="dropDown-list">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="#about">About</router-link></li>
        <li><router-link to="#services">Services</router-link></li>
        <li><router-link to="#video">Video</router-link></li>
        <li><router-link to="#contact">Contact</router-link></li>
      </ul>
      <div class="dropSocial">
        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
      </div>
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
/* drop down menu */

.dropDown {
  position: absolute;
  right: 2rem;
  top: 100px;
  width: 280px;
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 12px;
  overflow: hidden;
  text-align: center;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease-out;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1000;
}

.dropDown.open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

/* Menu List */
.dropDown-list {
  padding: 10px 0;
  margin: 0;
}

.dropDown li {
  list-style: none;
  padding: 0.8rem 1.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  border-left: 3px solid transparent;
}

.dropDown li:hover {
  background-color: rgba(220, 53, 69, 0.3);
  border-left: 3px solid #dc3545;
}

.dropDown li a {
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  display: block;
  transition: all 0.2s;
}

.dropDown li:hover a {
  transform: translateX(5px);
  color: #dc3545;
}

.dropSocial {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(0, 0, 0, 0.3);
}

.dropSocial a {
  color: #fff;
  font-size: 18px;
  transition: all 0.3s ease;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(220, 53, 69, 0.3);
}

.dropSocial a:hover {
  background: #dc3545;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(220, 53, 69, 0.4);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dropDown.open {
  animation: fadeIn 0.3s ease-out forwards;
}
.toggle_btn i.fa-xmark {
  transform: rotate(180deg);
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
@media (max-width: 450px) {
  header {
    padding: 10px 20px;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
