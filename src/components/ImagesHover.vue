<template>
  <div class="wrapper">
    <div class="container">
      <input type="radio" name="slide" id="c1" checked />
      <label for="c1" class="card">
        <img src="/src/assets/hoverImages/clean.jpg" alt="" />
        <div class="row">
          <div class="icon">1</div>
          <div class="description">
            <h4>Car Washing</h4>
            <p>Professional car wash for a flawless look.</p>
          </div>
        </div>
      </label>
      <input type="radio" name="slide" id="c2" />
      <label for="c2" class="card">
        <img src="/src/assets/hoverImages/rims.jpg" alt="" />
        <div class="row">
          <div class="icon">2</div>
          <div class="description">
            <h4>Rims</h4>
            <p>Thorough rim cleaning for a gleaming shine.</p>
          </div>
        </div>
      </label>
      <input type="radio" name="slide" id="c3" />
      <label for="c3" class="card">
        <img src="/src/assets/hoverImages/inside.jpg" alt="" />
        <div class="row">
          <div class="icon">3</div>
          <div class="description">
            <h4>Interior</h4>
            <p>Careful interior cleaning for a spotless finish.</p>
          </div>
        </div>
      </label>
      <input type="radio" name="slide" id="c4" />
      <label for="c4" class="card">
        <img src="/src/assets/hoverImages/bmw.jpg" alt="" />
        <div class="row">
          <div class="icon">4</div>
          <div class="description">
            <h4>Brand as New</h4>
            <p>Restoring your car to its original shine.</p>
          </div>
        </div>
      </label>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  height: 400px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: start;
  position: relative;
}
.card {
  position: relative;
  border-radius: 0.75rem;
  width: 80px;
  cursor: pointer;
  overflow: hidden;
  border-radius: 2rem;
  margin: 0 10px;
  display: flex;
  align-items: flex-end;
  transition: 0.6s cubic-bezier(0.28, -0.03, 0, 0.99);
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.8);
}
.row {
  position: absolute;
  z-index: 2;
}
.card > .row {
  color: white;
  display: flex;
  flex-wrap: nowrap;
}
.card > .row > .icon {
  background: rgba(220, 53, 69, 0.7);
  color: #fff;
  border-radius: 50%;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
}
.card > .row > .description {
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  height: 80px;
  width: 520px;
  opacity: 0;
  transform: translateY(30px);
  transition-delay: 0.3s;
  transition: all 0.3s ease;
}
.description p {
  color: rgb(220, 53, 69);
  padding-top: 5px;
  font-weight: bold;
}
.description h4 {
  text-transform: uppercase;
}
input {
  display: none;
}

input:checked + label {
  width: 600px;
}

input:checked + label .description {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
.card img {
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 1;
}

@media (max-width: 990px) {
  .wrapper {
    height: 100%;
  }
  .container {
    flex-direction: column;
    gap: 20px;
    flex-wrap: nowrap;
    height: 800px;
    justify-content: center;
    align-items: center;
  }
  .card img {
    width: 100%;
  }
  .card {
    width: 90%;
    height: 100%;
  }
  input:checked + label {
    width: 100%;
  }
}
@media (max-width: 450px) {
  .card > .row > .icon {
    display: none;
  }
  .card > .row > .description {
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>
