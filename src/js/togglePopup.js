"use strict";
import { page } from "./page.js";

function togglePopup() {
  if (page.popup.index.classList.contains("cover_hidden")) {
    page.popup.index.classList.remove("cover_hidden");
  } else {
    page.popup.index.classList.add("cover_hidden");
  }
}

window.togglePopup = togglePopup;
export { togglePopup };
