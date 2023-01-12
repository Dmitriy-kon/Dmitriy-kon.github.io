"use strict";

export function loadData(key) {
  const habbitsString = localStorage.getItem(key);
  const habbitArray = JSON.parse(habbitsString);
  if (Array.isArray(habbitArray)) {
    return habbitArray;
  }
}

export function saveData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
