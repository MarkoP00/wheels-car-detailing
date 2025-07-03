export default function formValidation(formData) {
  let formIsValid = true;
  let dataForSubmit = {};

  Object.keys(formData).forEach((key) => {
    const fieldValue = formData[key].value;

    if (key === "notification") {
      dataForSubmit[key] = fieldValue.trim();
      return;
    }

    formData[key].invalid = false;

    if (key === "email") {
      if (!fieldValue || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fieldValue)) {
        formData[key].invalid = true;
        formIsValid = false;
        return;
      }
    }

    if (key === "contact") {
      if (!fieldValue || fieldValue.length < 6) {
        formData[key].invalid = true;
        formIsValid = false;
      }
    }
    
    if (!fieldValue || fieldValue.length < 3) {
      formData[key].invalid = true;
      formIsValid = false;
      return;
    }

    dataForSubmit[key] = fieldValue;
  });

  return { formIsValid, dataForSubmit };
}
