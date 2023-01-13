"use strict";

import { globalActiveHabbidId, globalHabbits, rerender } from "./render.js";
import { saveData } from "./utils.js";
import { validateForm, resetForm } from "./validateForm.js";

function addDays(event) {
  event.preventDefault();

  const data = validateForm(event.target, ["comment"]);
  if (!data) {
    return;
  }

  const habbits = addDataDays(data);
  rerender(globalActiveHabbidId, habbits);
  resetForm(event.target, ["comment"]);
  saveData("habbit1", habbits);
}

function addDataDays(data) {
  const habbits = globalHabbits.map((habbit) => {
    if (habbit.id === globalActiveHabbidId) {
      return {
        ...habbit,
        days: habbit.days.concat([{ comment: data.comment }]),
      };
    }
    return habbit;
  });
  return habbits;
}

window.addDays = addDays;

export { addDays };
