const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

for (let i = 0; i < ingredients.length; i += 1) {
  const name = ingredients[i];
  const itemElm = document.createElement("li");
  itemElm.classList.add("item");
  itemElm.textContent = `${name}`;

  const listElm = document.getElementById("ingredients");
  listElm.append(itemElm);
}
