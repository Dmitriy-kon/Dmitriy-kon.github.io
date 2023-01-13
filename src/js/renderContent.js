"use strict";

import { page } from "./page.js";

function renderContent(activeHabbid) {
  if (!activeHabbid) {
    return;
  }
  const days = activeHabbid.days;
  page.habbits.innerHTML = ''
  for (const day in days) {
    const dayInfo = renderDays(days[day], Number(day) + 1);
  }
  document.querySelector(".habbit___form").querySelector(".habbit__day").innerText = `День ${days.length + 1}`
}

function renderDays(day, number) {
  const habbit = document.createElement("div");
  habbit.classList.add("habbit");

  habbit.innerHTML = `<div class="habbit__day">День ${number}</div><div class="habbit__text">${day.comment}</div><button class="habbit__delete" onclick='deleteDay(${number - 1})'><img src="./src/icons/delete.svg" alt="" /></button>`;
  page.habbits.appendChild(habbit);
}

export { renderContent, renderDays };
