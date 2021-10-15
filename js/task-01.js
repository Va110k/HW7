function categoriesNumbers() {
  const getCategories = document.querySelectorAll("li.item");
  return console.log(`В списке ${getCategories.length} категории`);
}
categoriesNumbers();

function categoriesAll() {
  const getCategories = document.querySelectorAll("li.item");
  getCategories.forEach((category) => {
    console.log(
      `Категория: ${category.querySelector("h2").textContent}
     Количество элементов: ${category.querySelectorAll("li").length}`
    );
  });
}

categoriesAll();
