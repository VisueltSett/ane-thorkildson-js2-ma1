import { displayMessage } from "./ui/displayMessage.js";
import {renderProducts} from "./ui/renderProducts.js";
import {sortProducts} from "./ui/sortProducts.js";



const url = "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/products";

async function getProducts() {
    try {
        const response = await fetch(url);
        const result = await response.json();
        const products = result.data;

        

    renderProducts(products);

    sortProducts(products);


    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".products-container");
    }
}

getProducts();
