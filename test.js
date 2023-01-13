let onj = {
  id: 1,
  icon: "sport",
  name: "Отжимания",
  target: 10,
  days: [
    { comment: "Первый подход всегда дается тяжело" },
    { comment: "Второй уже проще" },
  ],
};

console.log({
  ...onj,
  days: onj.days.concat([{ comment: "тестирование" }]),
});
