<template>
  <Spinner v-if="isLoading"></Spinner>
  <section id="contact">
    <main>
      <div class="formText">
        <h2>Contact us</h2>
        <p>
          Our team will carefully review your preferred booking date and ensure
          that you're kept informed at every stage of the process. We're here to
          make your experience seamless and enjoyable, so do not hesitate to
          reach out with any questions or special requests you might have. Your
          satisfaction is our top priority, and we are committed to providing
          you with the best service possible.
        </p>
      </div>
      <form class="custom-form">
        <div class="formTitle">
          <h2>Enter your information and our team will contact you</h2>
        </div>
        <div class="formContent">
          <div
            v-for="(field, key) in formData"
            :key="key">
            <div class="formGroup">
              <label :for="key">{{ field.label }}</label>

              <textarea
                v-if="field.type === 'textarea'"
                :id="key"
                :placeholder="field.placeHolder"
                v-model="field.value"
                :class="{ invalidInput: field.invalid }"
                @blur="field.invalid = false">
              </textarea>

              <input
                v-else
                :id="key"
                :type="field.type"
                :placeholder="field.placeHolder"
                v-model="field.value"
                :class="{ invalidInput: field.invalid }"
                @blur="field.invalid = false"
                autocomplete="off" />
            </div>
          </div>
          <div class="formGroup">
            <button
              type="button"
              @click="submitForm"
              class="submit-btn">
              Submit
            </button>
          </div>
        </div>
      </form>
    </main>
  </section>
  <Popup
    v-if="popupTitle"
    :title="popupTitle"
    :message="popupMessage"
    @close-popup="closePopup"></Popup>
</template>

<script setup>
import { reactive, ref } from "vue";
import Popup from "../global/Popup.vue";
import formValidation from "@/services/formValidation";
import callToast from "@/services/callToast";
import handleSubmit from "@/services/handleSubmit";
import Spinner from "@/global/Spinner.vue";

const popupTitle = ref("");
const popupMessage = ref("");

const isLoading = ref(false);

const formData = reactive({
  firstName: {
    value: "",
    invalid: false,
    placeHolder: "John",
    label: "First Name",
    type: "text",
  },
  lastName: {
    value: "",
    invalid: false,
    placeHolder: "Doe",
    label: "Last Name",
    type: "text",
  },
  email: {
    value: "",
    invalid: false,
    placeHolder: "johndoe123@gmail.com",
    label: "Email",
    type: "email",
  },
  contact: {
    value: "",
    invalid: false,
    placeHolder: "+38165123123",
    label: "Phone number",
    type: "number",
  },
  date: { value: "", invalid: false, label: "Prefered Date", type: "date" },
  notification: {
    value: "",
    placeHolder: "You can leave this empty",
    label: "Write notification for us",
    type: "textarea",
  },
});

async function submitForm() {
  const { formIsValid, dataForSubmit } = formValidation(formData);

  if (!formIsValid) {
    callToast("Invalid form. Please check all fields.", "warning");
    return;
  }

  isLoading.value = true;

  const submissionSuccess = await handleSubmit(dataForSubmit);

  if (submissionSuccess) {
    isLoading.value = false;

    popupTitle.value = "Success!";
    popupMessage.value =
      "We have recieved your booking request. Our team will contact you shortly!";
  } else {
    isLoading.value = false;

    popupTitle.value = "Something went wrong...";
    popupMessage.value = "Please try again later.";
  }
}

function closePopup() {
  popupTitle.value = "";
  popupMessage.value = "";
}
</script>

<style scoped>
section {
  padding: 0px;
  /* added */
}
main {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 150px;
}
.formText {
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  position: relative;
  padding: 0 20px;
}
.formText h2 {
  color: #dc3545;
  font-size: 25px;
}
.formText::before {
  content: "";
  position: absolute;
  left: 40%;
  bottom: -20%;
  width: 20%;
  height: 3px;
  background: #dc3545;
}
.formText p {
  line-height: 1.6;
  letter-spacing: 1.5px;
}

/* Form Container */
.custom-form {
  width: 600px;
  min-width: 300px;
  background: rgba(0, 0, 0, 0.8);
  padding: 2rem;
  border-radius: 12px;
  margin: 0 auto 100px;
  border: 1px solid rgba(220, 53, 69, 0.3);
  box-shadow: 0 10px 30px rgba(220, 53, 69, 0.1);
  transition: all 0.3s ease;
}

.custom-form:hover {
  border-color: rgba(220, 53, 69, 0.6);
  box-shadow: 0 10px 30px rgba(220, 53, 69, 0.2);
}

.formTitle {
  text-align: center;
  margin-bottom: 2rem;
}

.formTitle h2 {
  font-size: 1.4rem;
  font-weight: 600;
  color: #dc3545;
  text-shadow: 0 2px 4px rgba(220, 53, 69, 0.3);
  letter-spacing: 0.5px;
}

.formContent {
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
}

.formGroup {
  display: flex;
  flex-direction: column;
  position: relative;
}

.formGroup label {
  margin-bottom: 0.6rem;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  letter-spacing: 0.3px;
}

/* Input Fields */
input,
textarea {
  color: #fff;
  background-color: rgba(33, 33, 33, 0.8);
  padding: 0.8rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

input:focus,
textarea:focus {
  border-color: rgba(220, 53, 69, 0.8);
  box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.3);
  background-color: rgba(33, 33, 33, 1);
  outline: none;
}

/* textarea */
.formGroup textarea {
  min-height: 120px;
  resize: vertical;
  line-height: 1.5;
  scrollbar-width: thin;
  scrollbar-color: #dc3545 rgba(33, 33, 33, 0.8);
}

.formGroup textarea::-webkit-scrollbar {
  width: 8px;
}

.formGroup textarea::-webkit-scrollbar-track {
  background: rgba(33, 33, 33, 0.8);
  border-radius: 4px;
}

.formGroup textarea::-webkit-scrollbar-thumb {
  background-color: #dc3545;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}

.formGroup textarea::-webkit-scrollbar-thumb:hover {
  background-color: #c82333;
}

/* date */
input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(1);
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s;
}

input[type="date"]::-webkit-calendar-picker-indicator:hover {
  opacity: 1;
}

.submit-btn {
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, #dc3545, #c82333);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-top: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.submit-btn:hover {
  background: linear-gradient(135deg, #ab212e, #bb2232);
  box-shadow: 0 6px 12px rgba(220, 53, 69, 0.3);
}

.submit-btn:active {
  transform: translateY(0);
}

/* invalid status + animation */
.invalidInput {
  border-color: #dc3545 !important;
  box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.3) !important;
  animation: shake 0.5s ease;
}

@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  20%,
  60% {
    transform: translateX(-5px);
  }
  40%,
  80% {
    transform: translateX(5px);
  }
}

@media (max-width: 540px) {
  .custom-form {
    width: 90%;
    padding: 1.5rem;
  }

  .formTitle h2 {
    font-size: 1.2rem;
  }
}

@media (max-width: 425px) {
  .formContent {
    gap: 1.2rem;
  }

  input,
  textarea {
    padding: 0.7rem;
  }
}
</style>
