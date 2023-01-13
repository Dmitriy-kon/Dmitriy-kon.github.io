"use strict";
import { loadData, saveData } from "./utils.js";
import { page } from "./page.js";
import { rerender } from "./render.js";
import { addDays } from "./addDays.js";
import { deleteDay } from "./deleteDay.js";
import { togglePopup } from "./togglePopup.js";
import { setIcon } from "./setIcon.js";

let habbits = [];
const habbitsKeys = "habbit1";

habbits = loadData(habbitsKeys);

rerender(1, habbits);
