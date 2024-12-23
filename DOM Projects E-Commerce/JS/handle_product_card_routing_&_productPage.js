

function captureProductCardBtn(){
    
    const product_card_btn = document.querySelectorAll(".product-card-btn");
    console.log(product_card_btn)
    product_card_btn.forEach((btn)=>{
        console.log(":button clicked");
        btn.addEventListener('click', (e)=>{
            e.stopPropagation();
            const product_id =  e.target.getAttribute("data-id");
            const product_route_href = e.target.getAttribute("href"); 
            e.target.href = product_route_href+"?productId="+product_id;

            // calling the handleUrlBar by passing an event so that this func will push href to url-bar then routing performs later..
            handleUrlBar(e,product_id);
            // document.getElementById("pro-page").innerHTML = "pak";
            // pak(product_id);
        })
    });


} 


function displayProductPage(id){
    const productContainer_of_productPage = document.querySelector('.product-container');
    
    let selected_category = "";
    

    products_list.forEach((obj_item)=>{
        if(obj_item.id == id){
            
                selected_category = obj_item.category;

                productContainer_of_productPage.innerHTML = `
                <div class="image-area">
                    <img src="${obj_item.image}" alt="${obj_item.image}" srcset="" height="500px" width="auto">
                </div>
            
                <div class="product-details-panel">
                    <h3>${obj_item.category.toUpperCase()}</h3>
                    <h1>${obj_item.title}</h1>
                    <div class="ratings-component">
                        <span>Rating ${obj_item.rating.rate} <i class="ri-star-fill"></i></span>
                        <span id="review-count">Reviews: ${obj_item.rating.count}</span>
                    </div>
                    <h2>₹ ${obj_item.price}</h2>
                    <p>${obj_item.description}</p>
                    <div class="button-n-quantity">
                        <div class="qty">
                            <label for="qty">Qty.</label>
                            <input type="number" name="qty" id="qty${obj_item.id}">
                        </div>
                        <button type="button" onclick="addToCart_with_Input(${obj_item.id})">Add to Cart</button>
                    </div>
                </div>
                `;

                // Calling checkQuantity_and_Rewrite() method to check if the product are added to cart then display it's quantity added
                checkQuantity_and_Rewrite(obj_item.id);
            }
    });




    // Printing related item cards
    const related_item_cards = document.querySelector(".related-item-cards");

    let html_contents = "";
    products_list.forEach((item)=>{
        if(item.category === selected_category){
            html_contents += `
            <div class="inside-product-page-single-card">
            <div class="image-for-item-small">
                <img src="${item.image}" alt="${item.image}" srcset="" height="200px" width="200px">
            </div>
            <h4>${item.title}</h4>
            <div class="price-rating">
                <span>₹ ${item.price}</span>
                <span class="rate-span">
                    <i class="ri-star-fill"></i>
                    ${item.rating.rate}
                </span>
            </div>
            <button class="view-item product-card-btn" data-id="${item.id}" href="/product">VIEW ITEM</button>
            <button class="add-to-cart" onclick="addToCart(${item.id})">ADD TO CART</button>
        </div>
            `;
        }
    });

    related_item_cards.innerHTML = html_contents;

    captureProductCardBtn();

}

