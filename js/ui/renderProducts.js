
              import { getExistingFavs } from "./favFunctions.js";
              
              export function renderProducts(productsToRender){
                const productsContainer = document.querySelector(".products-container");
                const favourites = getExistingFavs();
               
                productsContainer.innerHTML ="";

                productsToRender.forEach(function(product){
                    let cssClass="far";

                    const doesObjectExist = favourites.find(function (fav) {
                        console.log(fav);
                
                        return parseInt(fav.id) === product.id;
                    });
                
                    console.log(doesObjectExist);
                
                    if (doesObjectExist) {
                        cssClass = "fas";
                    }



                    productsContainer.innerHTML += `<div class="product">
                    <h3>${product.name}</h3>
                    <i class="${cssClass} fa-heart" data-id="${product.id}" data-name="${product.name}"></i>
                    <div class="price">Price: ${product.price} incl vat</div>
                    </div>`;
                    console.log(product);
        
                });
                
                const favButtons = document.querySelectorAll(".product i");

                favButtons.forEach((button) => {
                    button.addEventListener("click", handleClick);
                });
                
                function handleClick() {
                    this.classList.toggle("fas");
                    this.classList.toggle("far");
                
                    const id = this.dataset.id;
                    const name = this.dataset.name;
                
                    const currentFavs = getExistingFavs();
                
                    const productExists = currentFavs.find(function (fav) {
                        return fav.id === id;
                    });
                
                    if (!productExists) {
                        const product = { id: id, name: name };
                        currentFavs.push(product);
                        saveFavs(currentFavs);
                    } else {
                        const newFavs = currentFavs.filter((fav) => fav.id !== id);
                        saveFavs(newFavs);
                    }
                }
                
                function saveFavs(favs) {
                    localStorage.setItem("favourites", JSON.stringify(favs));
                }
                

            }