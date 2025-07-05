import emailjs from "emailjs-com";
import callToast from "./callToast";

export default async function handleSubmit(data) {
  try {
    const response = await fetch(
      "https://car-detail-b0a9c-default-rtdb.europe-west1.firebasedatabase.app/form.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      callToast("Firebase error", "error");
      throw new Error(`Firebase error: ${response.status}`);
    }

    const serviceID = "service_xob51ys";
    const templateID = "template_xu0p1nm";
    const userID = "n8SCu9ix_klWQ5LQq";

    const emailParams = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      date: data.date,
      notification: data.notification,
    };

    const emailjs_send = await emailjs.send(
      serviceID,
      templateID,
      emailParams,
      userID
    );

    return true;
  } catch (err) {
    console.log(err);
    callToast("Something went wrong...", "error");
    return false;
  }
}
