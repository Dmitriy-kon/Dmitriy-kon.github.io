"use strict";

import { globalActiveHabbidId, globalHabbits, rerender } from "./render.js";
import { saveData } from "./utils.js";

function addDays(event) {
  event.preventDefault();

  const formElement = event.target;
  const data = new FormData(formElement);
  const comment = data.get("comment");

  addError(formElement, comment);

  const habbits = addDataDays(formElement, comment);
  saveData("habbit1", habbits);
  rerender(globalActiveHabbidId, habbits);
}

function addError(form, comment) {
  // добавляет класс ошибки на input, если он пустой
  form["comment"].classList.remove("input__error");
  if (!comment) {
    form["comment"].classList.add("input__error");
  }
}

function addDataDays(form, comment) {
  form["comment"].value = "";
  const habbits = globalHabbits.map((habbit) => {
    if (habbit.id === globalActiveHabbidId) {
      return {
        ...habbit,
        days: habbit.days.concat([{ comment }]),
      };
    }
    return habbit;
  });
  return habbits;
}

window.addDays = addDays;

export { addDays };
