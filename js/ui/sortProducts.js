import { displayMessage } from "./displayMessage.js";
import {renderProducts} from "./renderProducts.js"


export function sortProducts(products){

    const sortByPrice = document.querySelector(".sortByPrice");

    sortByPrice.onkeyup = function(event){
    
        const priceValue = event.target.value;
    
        const filteredProducts = products.filter(
            function(product) {
                if(parseFloat(product.price) <= priceValue){
                    return true;
                } else {
                displayMessage("no-results", `error`, ".products-container");
                }
               
            });

            renderProducts(filteredProducts);
    }
}

  
    