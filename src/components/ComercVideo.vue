<template>
  <section>
    <main>
      <div class="comercMain">
        <div class="comercText">
          <h2>We value your time</h2>
          <p>
            Our services are designed to be both <strong>fast</strong> and
            <strong>efficient</strong>, without compromising on quality. Our
            team works diligently to deliver professional results quickly,
            ensuring your vehicle is back on the road looking its best in no
            time. Trust us to provide a top-notch detailing experience that
            respects your schedule.
          </p>
        </div>
        <div class="video">
          <iframe
            width="660"
            height="415"
            class="productionVideo"
            src="https://www.youtube.com/embed/nUHCZHWBWnM?si=LgS9v-DGYXLstWvR"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </main>
  </section>
</template>

<style scoped>
section {
  min-height: 90vh;
}
main {
  max-width: 1000px;
  padding: 20px;
  text-align: center;
}
.comercMain {
  display: flex;
  flex-direction: column;
  gap: 150px;
}
.comercText {
  position: relative;
}
.comercText h2 {
  color: #dc3545;
  margin-bottom: 20px;
  font-size: 25px;
}
.comercText p {
  line-height: 1.6;
  letter-spacing: 1.5px;
}
.comercText::before {
  content: "";
  position: absolute;
  left: 40%;
  bottom: -15%;
  width: 20%;
  height: 2px;
  background: #dc3545;
}
.productionVideo {
  width: 100%;
}

@media (max-width: 376px) {
  .comercText::before {
    left: 30%;
    bottom: -5%;
    width: 40%;
  }
}
</style>
