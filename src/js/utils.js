"use strict";

export function loadData(key) {
  // Загружаем json из локального хранилища
  const habbitsString = localStorage.getItem(key);
  const habbitArray = JSON.parse(habbitsString);
  if (Array.isArray(habbitArray)) {
    return habbitArray;
  }
}

export function saveData(key, value) {
  // Сохраняем ключ значение в локальное хранилище. В данном случае value это json
  localStorage.setItem(key, JSON.stringify(value));
}
