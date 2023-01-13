"use strict";

export function loadData(key) {
  // Загружаем json из локального хранилища
  let habbitsString = localStorage.getItem(key);
  if (!habbitsString) {
    habbitsString =
      '[{"id": 1,"icon": "sport","name": "Отжимания","target": 10,"days": [{ "comment": "Первый подход всегда дается тяжело" },{ "comment": "Второй уже проще" },{ "comment": "фывфы" },{ "comment": "asd" }]},{"id": 2,"icon": "food","name": "Правильное питание","target": 10,"days": [{ "comment": "Круто" },{ "comment": "asd" },{ "comment": "Тестирование" }]}]';
  }
  const habbitArray = JSON.parse(habbitsString);
  if (Array.isArray(habbitArray)) {
    return habbitArray;
  }
}

export function saveData(key, value) {
  // Сохраняем ключ значение в локальное хранилище. В данном случае value это json
  localStorage.setItem(key, JSON.stringify(value));
}
