import { getExistingFavs } from "./ui/favFunctions.js";

const favourites = getExistingFavs();

const productsContainer = document.querySelector(".products-container");

if (!favourites.length) {
    productsContainer.innerHTML = "You have not added any favourites yet";
}

favourites.forEach((favourite) => {
    productsContainer.innerHTML += `<div class="product">
                                    <h3>${favourite.name}</h3>
                                    <i class="fas fa-heart"></i>
                                    <div class="price">Price: ${favourite.price} incl vat</div>
                                </div>`;
});
