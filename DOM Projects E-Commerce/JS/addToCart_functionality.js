var CART = new Array();

// console.log(CART[0],CART.length);


const addToCart = (product_id)=>{
   let got_id = new Number();

    products_list.forEach((item)=>{
        if(product_id == item.id){
            got_id = parseInt(item.id);
        }
    });

    HapticOn();
    
    CART.push(got_id);
    // finally print on cart navbar button and sidebar heading
    check_total_cart_products();


    console.warn("Final CART list :"+CART);
    checkQuantity_and_Rewrite(got_id);
    
}



// check how many quantity added to cart of specific item 
const checkQuantity_and_Rewrite = (check_for_product_id)=>{
    let total_quantity = new Number(0);
    CART.forEach((id)=>{
        if(check_for_product_id === id){
            total_quantity++;
        }
    });
    
    const url_pathname_n_search = window.location.pathname+""+window.location.search;

    if(total_quantity > 0 && url_pathname_n_search === `/product?productId=${check_for_product_id}`) document.getElementById(`qty${check_for_product_id}`).value = total_quantity;
}


const addToCart_with_Input = (product_id) =>{
    let quantity_input = parseInt(document.getElementById(`qty${product_id}`).value);
    if(quantity_input <= 0){
        console.error("FROM addToCart_with_Input() --> You cannot add 0 or less quantity!");
        quantity_input = 1;
    }else if(isNaN(quantity_input)){
        console.error("FROM addToCart_with_Input() --> You must add a valid Quantity value!");
        quantity_input = 1;
    }

    const pre_quantity = check_for_quantity_preApplied(product_id);
    if(pre_quantity > quantity_input){
        // delete_previous_ones and add_new
        const tempArr = CART.filter((id)=> product_id != id);
        console.log(`original array ${CART} tempArr is ${tempArr} for id: ${product_id}`);
        console.log("BEFORE CART: "+CART)
        CART.length = 0;
        CART = [...tempArr];
        console.log("AFTER CART: "+CART);
        for(let i = 1; i <= quantity_input; i++) {
           CART.push(product_id); 
        }

        // finally print on cart navbar button and sidebar heading
        check_total_cart_products();
        
        checkQuantity_and_Rewrite(product_id);
        return ;
    }


    const final_quantity_to_add = new Number(Math.abs(pre_quantity - quantity_input));
    
    if(final_quantity_to_add == 0){
        addToCart(product_id);
        return;
    }

    for(let i=1; i<=final_quantity_to_add; i++){
        // alert(true);
        CART.push(product_id);
    }

    // finally print on cart navbar button and sidebar heading
    check_total_cart_products();
    
    checkQuantity_and_Rewrite(product_id);
    console.warn(final_quantity_to_add+") FINAL ARR is "+CART+" and it's length is"+CART.length);

}


function check_for_quantity_preApplied(check_for_product_id){
    let previous_total_quantity = new Number(0);
    CART.forEach((id)=>{
        if(check_for_product_id === id){
            previous_total_quantity++;
        }
    });

    return previous_total_quantity;
}




function check_total_cart_products(){
    const total_quantity = CART.length;
    document.getElementById("cart_moveUp_button").innerHTML = `<i class="ri-shopping-cart-2-fill"></i>Cart (${total_quantity})`;
    document.getElementById("cart_header_total").innerHTML = `Cart (${total_quantity})`;
    print_products_in_cart();
}