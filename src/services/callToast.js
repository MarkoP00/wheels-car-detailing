import { toast } from "vue3-toastify";

export default function callToast(message, type) {
  toast[type](message, {
    autoClose: 3000,
    theme: "dark",
  });
}
