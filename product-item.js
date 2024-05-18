const ItemScreenController = (function () {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  const currentProduct = productsList.getProduct(id);
  const buttonBuy = document.querySelector(".buy button");
  const buttonReview = document.querySelector(".review-wrapper button");
  const loadItem = (function () {
    document.title = currentProduct.id;
    const name = document.querySelector(".name");
    const description = document.querySelector(".description");
    const price = document.querySelector(".price");
    const image = document.querySelector(".image");

    name.textContent = currentProduct.name;
    description.textContent = currentProduct.description;
    price.textContent = currentProduct.price + " лв.";
    image.setAttribute("src", currentProduct.image);
  })();

  buttonBuy.addEventListener("click", BuyItem);
  buttonReview.addEventListener("click", SubmitReview);

  function BuyItem(e) {
    e.preventDefault();
    const username = document.querySelector("#username");
    const address = document.querySelector("#address");
    alert(
      `${username.value}, благодарим за поръчката! Ще доставим поръчката на ${address.value}`
    );
  }

  function SubmitReview(e) {
    e.preventDefault();
    const reviewArea = document.querySelector("#review-area");
    currentProduct.addReview(reviewArea.value);
    updateReviews();
    reviewArea.value = "";
  }
  function updateReviews() {
    const reviewsDiv = document.querySelector(".reviews");
    reviewsDiv.style.border = "2px solid var(--red-color)";
    removeChildren(reviewsDiv);
    currentProduct.getReviews().forEach((review) => {
      const message = document.createElement("p");
      message.textContent = review;
      reviewsDiv.appendChild(message);
    });
  }
  function removeChildren(Node) {
    while (Node.firstChild) {
      Node.removeChild(Node.lastChild);
    }
  }
})();
