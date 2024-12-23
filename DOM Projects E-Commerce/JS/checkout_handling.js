// first listen the checkout btn of CART
const checkoutBtn = document.querySelector(".checkout-button");

const handleCheckout = () =>{

    for (let i = 0; i < sessionStorage.length; i++) {
        HapticOn();
        if(sessionStorage.key(i) === "Ritesh Rai's E-comm proj."){
            swal("Thank your for Shopping!", "Your Order Placed Successfully!", "success");
            return;
        }
    }
    swal("Oops!", "You first need to logged-in!", "warning");
}

checkoutBtn.addEventListener("click", handleCheckout);

if(CART.length === 0 || unique_cart.length === 0){
  checkoutBtn.setAttribute("class","checkout-err-btn");
  checkoutBtn.removeEventListener("click",handleCheckout);
}



const checkCartlength_for_checkout = () =>{
    if(CART.length === 0 || unique_cart.length === 0){
        checkoutBtn.setAttribute("class","checkout-err-btn");
        checkoutBtn.removeEventListener("click",handleCheckout);
    }else if(CART.length > 0 || unique_cart.length > 0){
        checkoutBtn.setAttribute("class","checkout-button");
        checkoutBtn.addEventListener("click", handleCheckout);
    }
}

