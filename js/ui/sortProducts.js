import {renderProducts} from "./renderProducts.js"
const productsContainer = document.querySelector(".products-container");


export function sortProducts(products){

    const sortByPrice = document.querySelector(".sortByPrice");

    sortByPrice.onkeyup = function(event){
    
        const priceValue = event.target.value;
    
        const filteredProducts = products.filter(
            function(product) {
                if(parseFloat(product.price) <= priceValue){
                    return true;
                }
                else if (!(parseFloat(product.price) <= priceValue)){
                    productsContainer.innerHTML = "No products matches your query";
                }
            });

            renderProducts(filteredProducts);
    }
}
