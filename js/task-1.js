const categories = document.querySelectorAll("#categories .item");
const categoriesArray = Array.from(categories);
console.log(`Number of categories: ${categoriesArray.length}`);
categoriesArray.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  console.log(`Category: ${categoryName}`);
  const elementsCount = category.querySelectorAll("ul li").length;
  console.log(`Elements: ${elementsCount}`);
});
