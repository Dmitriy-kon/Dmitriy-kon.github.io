"use strict";

import { validateForm, resetForm } from "./validateForm.js";
import { globalHabbits, rerender } from "./render.js";
import { saveData } from "./utils.js";
import { togglePopup } from "./togglePopup.js";

function addHabbit(event) {
  event.preventDefault();
  const data = validateForm(event.target, ["name", "icon", "target"]);
  if (!data) {
    return;
  }

  const habbits = globalHabbits;
  const maxId = habbits[habbits.length - 1].id;
  habbits.push({
    id: maxId + 1,
    icon: data.icon,
    name: data.name,
    target: data.target,
    days: [],
  });

  saveData("habbit1", habbits);
  togglePopup();
  rerender(maxId + 1, habbits);
  resetForm(event.target, ["name", "target"]);
}

window.addHabbit = addHabbit;

export { addHabbit };
