"use strict";
import { loadData, saveData } from "./utils.js";
import { page } from "./page.js";
// import {renderHead} from "./renderHead"
import {rerender} from "./render.js"

let habbits = [];
const habbitsKeys = "habbit1";

habbits = loadData(habbitsKeys);
// saveData("habbit2", habbits)

// function rerenderMenu(activeHabbid, habbits) {
//   // Если привычке нет, то функция не вернет ничего
//   if (!activeHabbid) {
//     return;
//   }
//   for (const habbit of habbits) {
//     // проверка на существования атрибута у элемента
//     let existed = document.querySelector(`[menu-habbit-id="${habbit.id}"]`);
//     if (!existed) {
//       //Если не существует, то нужно создать
//       createButton(activeHabbid, habbit);
//       continue;
//     }
//     if (activeHabbid.id === habbit.id) {
//       // Если id привычки совпадает
//       existed.classList.add("menu__item_active");
//     } else {
//       existed.classList.remove("menu__item_active");
//     }
//   }
// }

// function createButton(activeHabbid, habbit) {
//   // Создаем элемент button и добавляем атрибут
//   const element = document.createElement("button");
//   element.setAttribute("menu-habbit-id", habbit.id);
//   element.classList.add("menu__item");
//   element.addEventListener("click", () => rerender(habbit.id));
//   element.innerHTML = `<img src="./icons/${habbit.icon}.svg" alt="${habbit.name}"/>`;
//   if (activeHabbid.id === habbit.id) {
//     // Если id привычки совпадает
//     element.classList.add("menu__item_active");
//   }
//   page.menu.appendChild(element);
// }

// function rerender(activeHabbidId) {
//   // 1. Ищем объект habbit с ID, который совпадает с аргументом
//   //
//   const activeHabbid = habbits.find((habbit) => habbit.id === activeHabbidId);
//   rerenderMenu(activeHabbid, habbits);
// }

rerender(1, habbits);
