"use strict";

function resetForm(form, fields) {
  for (const field of fields) {
    form[field].value = "";
  }
}

function validateForm(form, fields) {
  const formData = new FormData(form);
  const res = {};

  for (const field of fields) {
    const fieldValue = formData.get(field);
    form[field].classList.remove("input__error");
    if (!fieldValue) {
      form[field].classList.add("input__error");
    }
    res[field] = fieldValue;
  }
  let isValid = true;
  for (const field of fields) {
    if (!res[field]) {
      isValid = false;
    }
  }
  if (!isValid) {
    return;
  }
  return res;
}

window.validateForm = validateForm;
window.resetForm = resetForm;

export { validateForm, resetForm };
