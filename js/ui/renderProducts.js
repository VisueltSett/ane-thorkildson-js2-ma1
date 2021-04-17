
               export function renderProducts(productsToRender){
                const productsContainer = document.querySelector(".products-container");
                productsContainer.innerHTML ="";

                productsToRender.forEach(function(product){
                    productsContainer.innerHTML += `<div class="product">
                    <h3>${product.name}</h3>
                    <div class="price">Price: ${product.price} incl vat</div>
                    </div>`;
                    console.log(product);
        
                });
            }