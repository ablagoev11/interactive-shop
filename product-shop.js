const ScreenController = (function () {
  const items = document.querySelector(".items");
  const displayScreen = (function () {
    const products = productsList.getProducts();
    for (product of products) {
      const item = document.createElement("div");
      item.classList.add("item");
      const name = document.createElement("h2");
      name.classList.add("name");
      name.textContent = product.name;
      const description = document.createElement("p");
      description.classList.add("description");
      description.textContent = product.shortDescription;
      const price = document.createElement("p");
      price.classList.add("price");
      price.textContent = product.textContent = product.price + " лв.";
      const image = document.createElement("img");
      image.setAttribute("src", product.image);
      const anchor = document.createElement("a");
      anchor.classList.add("page-change");
      const button = document.createElement("button");
      button.textContent = "Go to page";
      anchor.appendChild(button);
      button.setAttribute("id", product.id);
      item.appendChild(name);
      item.appendChild(description);
      item.appendChild(price);
      item.appendChild(image);
      item.appendChild(anchor);
      items.appendChild(item);
    }
  })();

  function openPage(e) {
    if (e.target.id) {
      window.open(`./item.html?id=${e.target.id}`, "_blank");
    }
  }
  items.addEventListener("click", openPage);
})();
