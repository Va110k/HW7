const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsList = document.querySelector("#ingredients");

const ingredientCreateEl = (item) => {
  const elem = document.createElement("li");
  elem.textContent = item;
  return elem;
};

const createIngredients = ingredients.map((ingredient) =>
  ingredientCreateEl(ingredient)
);

console.log(createIngredients);

ingredientsList.append(...createIngredients);
