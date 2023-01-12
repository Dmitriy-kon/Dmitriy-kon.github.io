"use strict";

import { page } from "./page.js";

function renderHead(activeHabbid) {
  if (!activeHabbid) {
    return;
  }
  page.header.h1.innerText = activeHabbid.name;

  const progress = getProgress(activeHabbid);
  page.header.progresPercent.innerText = `${progress.toFixed(0)}%`;
  page.header.coverBar.setAttribute("style", `width: ${progress}%;, transition: 500ms;`)
}

function getProgress(activeHabbid) {
  const progress =
    activeHabbid.days.lenght / activeHabbid.target > 1
      ? 100
      : (activeHabbid.days.length / activeHabbid.target) * 100;
  return progress;
}

export { renderHead, getProgress };
