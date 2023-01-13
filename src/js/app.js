"use strict";
import { loadData, saveData } from "./utils.js";
import { page } from "./page.js";
import { rerender } from "./render.js";
import { addDays } from "./addDays.js";
import { deleteDay } from "./deleteDay.js";
import { togglePopup } from "./togglePopup.js";
import { setIcon } from "./setIcon.js";
import { addHabbit } from "./addHabit.js";

let habbits = [];
const habbitsKeys = "habbit1";

habbits = loadData(habbitsKeys);

const hashId = Number(document.location.hash.replace("#", ""));
const urlHabbitId = habbits.find((habbit) => habbit.id == hashId);

if (urlHabbitId) {
  console.log(urlHabbitId.id);
  rerender(urlHabbitId.id, habbits);
} else {
  rerender(1, habbits);
}
