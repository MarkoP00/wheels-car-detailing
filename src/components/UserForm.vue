<template>
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
      <form>
        <div class="formTitle">
          <h2>Enter your information and our team will contact you</h2>
        </div>
        <div class="formContent">
          <div class="formGroup">
            <label for="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="First name required"
              v-model="formData.firstName.value"
              :class="formData.firstName.invalid ? 'invalidInput' : ''"
              @blur="formData.firstName.invalid = false"
              autocomplete="off"
            />
          </div>
          <div class="formGroup">
            <label for="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Last name required"
              v-model="formData.lastName.value"
              :class="formData.lastName.invalid ? 'invalidInput' : ''"
              @blur="formData.lastName.invalid = false"
            />
          </div>
          <div class="formGroup">
            <label for="lastName">Email</label>
            <input
              type="email"
              id="lastName"
              placeholder="Email required"
              v-model="formData.email.value"
              :class="formData.email.invalid ? 'invalidInput' : ''"
              @blur="formData.email.invalid = false"
            />
          </div>
          <div class="formGroup">
            <label for="lastName">Contact Number</label>
            <input
              type="number"
              id="lastName"
              placeholder="Contact Number required"
              v-model="formData.contact.value"
              :class="formData.contact.invalid ? 'invalidInput' : ''"
              @blur="formData.contact.invalid = false"
            />
          </div>
          <div class="formGroup">
            <label for="date">Preffered Date</label>
            <input
              type="date"
              id="date"
              v-model="formData.date.value"
              :class="formData.date.invalid ? 'invalidInput' : ''"
              @blur="formData.date.invalid = false"
            />
          </div>
          <div class="formGroup">
            <label for="notification">Write notification for us</label>
            <textarea
              id="notification"
              placeholder="You can leave this empty..."
              v-model="formData.notification.value"
            ></textarea>
          </div>
          <div class="formGroup">
            <button type="button" @click="submitForm">Submit</button>
          </div>
        </div>
      </form>
    </main>
  </section>
  <Popup
    v-if="popupTitle"
    :title="popupTitle"
    :message="popupMessage"
    @close-popup="closePopup"
  ></Popup>
</template>

<script setup>
import { reactive, ref } from "vue";
import emailjs from "emailjs-com";
import Popup from "../global/Popup.vue";

const popupTitle = ref("");
const popupMessage = ref("");

const formData = reactive({
  firstName: { value: "", invalid: false },
  lastName: { value: "", invalid: false },
  email: { value: "", invalid: false },
  contact: { value: "", invalid: false },
  date: { value: "", invalid: false },
  notification: { value: "" },
});

function formValidation() {
  let functionIsValidated = true;
  let dataForSubmit = {};

  Object.keys(formData).forEach((key) => {
    const fieldValue = formData[key].value;

    if (key === "notification") {
      if (fieldValue) {
        dataForSubmit[key] = fieldValue;
      }
      return;
    }

    if (key === "email" && (!fieldValue || !fieldValue.includes("@"))) {
      formData[key].invalid = true;
      functionIsValidated = false;
      return;
    }

    if (key === "contact") {
      const contactValue = String(fieldValue);
      if (!contactValue || contactValue.length < 8) {
        formData[key].invalid = true;
        functionIsValidated = false;
        return;
      }
    }
    if (!fieldValue || fieldValue.length < 5) {
      formData[key].invalid = true;
      functionIsValidated = false;
    } else {
      formData[key].invalid = false;
      dataForSubmit[key] = fieldValue;
    }
  });

  return { functionIsValidated, dataForSubmit };
}

async function submitForm() {
  const { functionIsValidated, dataForSubmit } = formValidation();

  if (!functionIsValidated) {
    return;
  }

  const response = await fetch(
    "https://comercialweb-1d213-default-rtdb.firebaseio.com/form.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataForSubmit),
    }
  );

  if (response.ok) {
    popupTitle.value = "Success!";
    popupMessage.value =
      "We have recieved your booking application and our team will contact you as soon as possible!";

    // sending confirmation email
    const serviceID = "service_xob51ys";
    const templateID = "template_xu0p1nm";
    const userID = "n8SCu9ix_klWQ5LQq";

    const emailParams = {
      firstName: dataForSubmit.firstName,
      lastName: dataForSubmit.lastName,
      email: dataForSubmit.email,
      contact: dataForSubmit.contact,
      date: dataForSubmit.date,
      notification: dataForSubmit.notification,
    };

    await emailjs.send(serviceID, templateID, emailParams, userID);
  } else {
    popupTitle.value = "Fail...";
    popupMessage.value =
      "Something went wrong... We will fix this issue as soon as possible! Please, contact us on our local phone number.";
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
  /* padding: 0 20px; */
  /* changed */
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

form {
  max-width: 600px;
  background: rgba(0, 0, 0, 0.6);
  padding: 40px;
  border-radius: 8px;
  margin: 0 auto;
  border: 1px solid #dc3545;
  margin-bottom: 100px;
}
.formTitle {
  text-align: center;
  margin-bottom: 20px;
}
.formTitle h2 {
  font-size: 1.2rem;
  font-weight: 600;
  color: rgb(220, 53, 69);
}
.formContent {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.formGroup {
  display: flex;
  flex-direction: column;
}

.formGroup label {
  margin-bottom: 5px;
  font-size: 20px;
  color: #fff;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(100%); /* Obojava ikonicu u belo */
  cursor: pointer;
}

input,
textarea {
  color: #fff;
  background-color: #212121;
  height: 40px;
  padding: 10px;
  border: 2px solid white;
  border-radius: 5px;
}

input:focus,
textarea:focus {
  color: fff;
  background-color: #212121;
  outline-color: rgb(220, 53, 69);
  box-shadow: -3px -3px 15px rgb(220, 53, 69);
  transition: 0.1s;
  transition-property: box-shadow;
}

.formGroup textarea {
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
}

.formGroup textarea {
  resize: vertical;
  height: 100px;
}

.formGroup button {
  padding: 10px 15px;
  font-size: 1rem;
  color: #fff;
  background-color: #dc3545;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.formGroup button:hover {
  background-color: #771b25;
}
.invalidInput {
  outline-color: rgb(220, 53, 69);
  box-shadow: -3px -3px 15px rgb(220, 53, 69);
  border: 1px solid #dc3545;
}

@media (max-width: 376px) {
  .formText::before {
    left: 30%;
    bottom: -5%;
    width: 40%;
  }
  form {
    padding: 20px;
  }
  main {
    padding: 0 5px;
  }
}
</style>
