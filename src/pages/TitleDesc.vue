<template>
  <section>
    <main>
      <div class="title">
        <h3>Welcome to</h3>
        <h1>Wheels Car Detailing Centre</h1>
        <div class="description">
          <p>
            <strong>Wheels Car Detailing</strong> - provides professional car
            detailing services, ensuring your vehicle looks and feels as brand
            new. Our team uses top-quality products and advanced techniques to
            deliver a shine to your vehicle, making it look unrecognizable.
          </p>
        </div>
      </div>
      <ImagesHover></ImagesHover>
    </main>
  </section>
</template>

<script setup>
import ImagesHover from "../components/ImagesHover.vue";
</script>

<style scoped>
section {
  min-height: 40vh;
<<<<<<< HEAD
=======
  
>>>>>>> 8905a2442c8c666fab2a84c5dd89a4267afc6eb1
}

main {
  max-width: 1000px;
  text-align: center;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
}

.title {
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
}
.title::after {
  content: "";
  position: absolute;
  left: 40%;
  bottom: -15%;
  width: 20%;
  height: 2px;
  background: #dc3545;
}

.title h3 {
  font-size: 1.5rem;
  color: #fff;
}

.title h1 {
  font-size: 2.5rem;
  color: #dc3545;
}

.description p {
  font-size: 1rem;
  color: #fff;
  line-height: 1.6;
  letter-spacing: 1.5px;
}

@media (max-width: 376px) {
  .title::after {
    left: 30%;
    bottom: -5%;
    width: 40%;
  }
}
</style>
