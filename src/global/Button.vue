<template>
  <button class="button">{{ buttonText }}</button>
</template>

<script setup>
const props = defineProps({
  buttonText: String,
});
</script>

<style scoped>
.button {
  padding: 10px 30px;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  font-weight: 600;
  border-radius: 30px;
  border: 2px solid #dc3545;
  transition: 0.4s;
  background: transparent;
  cursor: pointer;
}
.button:hover {
  background: #dc3545;
}
</style>
