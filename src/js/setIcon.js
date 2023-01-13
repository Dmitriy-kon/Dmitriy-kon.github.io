"use strict";

import { page } from "./page.js";

function setIcon(context, icon) {
  page.popup.iconField.value = icon;
  const activeIcon = document.querySelector(".popup__icon.popup_icon-active");
  activeIcon.classList.remove("popup_icon-active");
  context.classList.add("popup_icon-active");
}

window.setIcon = setIcon;

export { setIcon };
