"use strict";

import { page } from "./page.js";

function renderContent(activeHabbid) {
  if (!activeHabbid) {
    return;
  }
  const days = activeHabbid.days;
  page.habbits.innerHTML =
    `<div class="habbit habbit___form"><div class="habbit__day">День ${activeHabbid.days.length + 1}</div><form class="habbit__form"><input class="input__icon"type="text"placeholder="Комментарий"/><img class="input__image" src="./icons/Vector.svg" alt="" /><button class="input__add">Готово</button></form></div>`;
  for (const day in days) {
    const dayInfo = renderDays(days[day], Number(day) + 1);
  }
}

function renderDays(day, number) {
  const habbit = document.createElement("div");
  habbit.classList.add("habbit");

  habbit.innerHTML = `<div class="habbit__day">День ${number}</div><div class="habbit__text">${day.comment}</div><button class="habbit__delete"><img src="icons/delete.svg" alt="" /></button>`;
  const habbitForm = document.querySelector(".habbit___form");
  page.habbits.insertBefore(habbit, habbitForm);
}

export { renderContent, renderDays };
