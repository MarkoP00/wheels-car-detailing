<template>
  <section>
    <main>
      <div class="servicesTitle">
        <h2>Excellence in Every Detail</h2>
        <p>
          <strong>At Wheels Car Detailing</strong>, we understand that every
          detail matters. With over 2,000 vehicles expertly cleaned, our team is
          dedicated to providing a service that not only meets but exceeds your
          expectations. We use top-tier products and advanced techniques to
          ensure that your car is treated with the utmost care and precision,
          leaving it spotless and rejuvenated. When you choose us, you are
          choosing quality, reliability, and a shine that lasts.
        </p>
      </div>
      <!-- cards -->
      <div class="cardsMain">
        <div
          class="card"
          v-for="item in cards"
          :key="item.para"
          :class="{ active: item.active }"
          @click="activateCard(item.id)">
          <div class="card-img">
            <img
              :src="item.imageSource"
              alt="" />
          </div>
          <div class="card-body">
            <span class="bg"></span>
            <span class="bg"></span>
            <span class="bg"></span>
            <div class="content">
              <h2 class="title">{{ item.title }}</h2>
              <p class="para">
                {{ item.para }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<script setup>
import { ref } from "vue";
import bmwEnt from "@/assets/flipImages/bmwent.jpg";
import engine from "@/assets/flipImages/engine2.jpg";
import ceramic from "@/assets/flipImages/ceramic.jpg";
import lightPolish from "@/assets/flipImages/light-polish.jpg";
import backlight from "@/assets/flipImages/bmw-backLight.jpg";
import glass from "@/assets/flipImages/glass.jpg";

const cards = ref([
  {
    title: "Interior",
    para: "Get a spotless interior with our deep cleaning service. We clean carpets, seats, and more, leaving your vehicle looking fresh and new.",
    imageSource: bmwEnt,
    active: false,
    id: 1,
  },
  {
    title: "Engine",
    para: "Revitalize your engine bay with our meticulous cleaning. We remove grime and dirt, ensuring a cleaner and better-performing engine.",
    imageSource: engine,
    active: false,
    id: 2,
  },
  {
    title: "Ceramic Coating",
    para: "Protect your vehicle's paint with our durable ceramic coating, offering a sleek, long-lasting shine.",
    imageSource: ceramic,
    active: false,
    id: 3,
  },
  {
    title: "Headlight Polish",
    para: "Restore clarity to your headlights with our expert polishing, ensuring better visibility and a refreshed look.",
    imageSource: lightPolish,
    active: false,
    id: 4,
  },
  {
    title: "Protection + Shine",
    para: "Our deep-clean polish doesn’t just shine—it seals your paint with a layer that repels dirt and enhances durability",
    imageSource: backlight,
    active: false,
    id: 5,
  },
  {
    title: "Glass",
    para: "Keep your glass spotless and clear with our specialized treatment that prevents water stains.",
    imageSource: glass,
    active: false,
    id: 6,
  },
]);

function activateCard(cardId) {
  cards.value.forEach((card) => {
    if (card.id === cardId) {
      card.active = !card.active;
    } else {
      card.active = false;
    }
  });
}
</script>

<style scoped>
section {
  gap: 20px;
}
main {
  display: flex;
  flex-direction: column;
  gap: 100px;
  max-width: 1000px;
  text-align: center;
  padding: 20px;
  border-radius: 8px;
}
.servicesTitle {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.servicesTitle strong {
  color: #dc3545;
}
.servicesTitle h2 {
  color: #dc3545;
  font-weight: 800;
  font-size: 25px;
}
.servicesTitle p {
  letter-spacing: 1.5px;
}
.servicesTitle::after {
  content: "";
  position: absolute;
  left: 40%;
  bottom: -15%;
  width: 20%;
  height: 2px;
  background: #dc3545;
}
/* cards */
.cardsMain {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-family: "roboto", sans-serif;
  gap: 50px;
}
.card {
  width: 270px;
  height: 400px;
  position: relative;
  transform-style: preserve-3d;
  transition: 0.5s;
  cursor: pointer;
  border-radius: 20px;
}

.card:hover {
  box-shadow: 0px 0px 20px rgb(220, 53, 69, 0.8);
}

.card-img {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  transform: translateZ(40px);
  overflow: hidden;
}
.card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-body {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, -40px) rotateY(180deg);
  width: 85%;
  height: 87%;
  border-radius: 20px;
  overflow: hidden;
  border: 5px solid #dc3545;
}

.card.active {
  transform: rotateY(180deg);
}

.card-body .bg {
  position: absolute;
  background: #771b25;
  border-radius: 100px;
  width: 0%;
  transition: 0.5s;
}

.card-body .bg:nth-child(1) {
  height: 25%;
  transform-origin: left;
  top: 0;
  left: -30%;
  transform: rotate(-10deg);
}

.card-body .bg:nth-child(2) {
  height: 50%;
  transform-origin: right;
  top: 5%;
  right: -30%;
  transform: rotate(-10deg);
}

.card-body .bg:nth-child(3) {
  height: 50%;
  transform-origin: left;
  top: 70%;
  left: -30%;
  transform: rotate(-10deg);
}

.card.active .card-body .bg {
  width: 200%;
  transition-delay: 0.5s;
}

.card.active .card-body .bg:nth-child(2) {
  transition-delay: 1s;
}

.card.active .card-body .bg:nth-child(3) {
  transition-delay: 1.5s;
}

.content {
  position: relative;
  opacity: 0;
  transition: 0.5s;
  padding: 40px 10px;
  text-align: center;
}

.title {
  font-size: 30px;
  margin-bottom: 20px;
  color: #fff;
  text-transform: uppercase;
}
.para {
  color: #fff;
}
.card.active .content {
  opacity: 1;
  transition-delay: 2s;
}

@media (max-width: 376px) {
  main {
    padding: 10px;
  }
  .servicesTitle::after {
    left: 30%;
    bottom: -5%;
    width: 40%;
  }
}
</style>
