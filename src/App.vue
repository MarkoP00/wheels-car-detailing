<template>
  <NavigationMenu></NavigationMenu>
  <LandingPage></LandingPage>
  <TitleDesc id="about"></TitleDesc>
  <Services id="services"></Services>
  <ComercVideo id="video"></ComercVideo>
  <UserForm></UserForm>
</template>

<script setup>
import NavigationMenu from "./components/NavigationMenu.vue";
import LandingPage from "./components/LandingPage.vue";
import TitleDesc from "./pages/TitleDesc.vue";
import Services from "./pages/Services.vue";
import ComercVideo from "./components/ComercVideo.vue";
import UserForm from "./components/UserForm.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  background: rgb(0 100 0 /0.1) !important;
}
main {
  margin-top: 100px;
}
section {
  display: flex;
  justify-content: center;
  align-items: center;
}

strong {
  color: #dc3545;
  font-weight: 800;
}

html {
  scroll-behavior: smooth;
}
</style>
