<template>
  <section class="popupOverlay" @click="closePopup">
    <transition name="fade">
      <div class="popupContent" v-if="popupVisible" @click.stop>
        <div class="popupTitle">
          <h3>{{ props.title }}</h3>
        </div>
        <div class="popupMessage">
          <p>{{ props.message }}</p>
        </div>
        <div class="popupButton">
          <Button :buttonText="'Okay!'" @click="closePopup"></Button>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Button from "./Button.vue";

const popupVisible = ref(null);

const props = defineProps({
  title: String,
  message: String,
});
const emit = defineEmits("close-popup");

function closePopup() {
  popupVisible.value = false;

  setTimeout(() => {
    emit("close-popup");
  }, 300);
}

onMounted(() => {
  popupVisible.value = true;
});
</script>

<style scoped>
.popupOverlay {
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; /* Ensures the popup is on top of other elements */
}

.popupContent {
  background: rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 90%;
  padding: 20px;
  text-align: center;
  position: relative;
  border: 1px solid #dc3545;
}
.popupTitle {
  position: relative;
}
.popupTitle h3 {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.popupTitle::before {
  content: "";
  position: absolute;
  bottom: -20%;
  left: 30%;
  width: 40%;
  height: 2px;
  background-color: #dc3545;
}

.popupMessage p {
  margin: 15px 0;
  font-size: 1rem;
}

.popupButton {
  margin-top: 20px;
}

/* Transition classes */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
