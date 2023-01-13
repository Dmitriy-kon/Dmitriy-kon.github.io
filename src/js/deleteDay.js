"use struct";

import { globalActiveHabbidId, globalHabbits, rerender } from "./render.js";
import { saveData } from "./utils.js";

function deleteDay(index) {
  const habbits = globalHabbits.map((habbit) => {
    if (habbit.id === globalActiveHabbidId) {
      habbit.days.splice(index, 1);
      return {
        ...habbit,
        days: habbit.days,
      };
    }
    return habbit;
  });
  //   globalHabbits = habbits;
  saveData("habbit1", habbits);
  rerender(globalActiveHabbidId, habbits);
}

window.deleteDay = deleteDay;
export { deleteDay };
