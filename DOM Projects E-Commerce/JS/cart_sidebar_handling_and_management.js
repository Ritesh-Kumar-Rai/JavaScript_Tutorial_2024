var unique_cart = new Array(); 

const print_products_in_cart = () =>{
    // setting unique id's from CART to unique_cart
    unique_cart = [...new Set(CART)];
    console.log(unique_cart);
    // or 
    // unique_cart = CART.filter((val,index)=> CART.indexOf(val) === index);
    
    // printing to cart sidebar
    let html_contents = "";
    let subTotal = new Number(0);
        products_list.forEach((item)=>{
                if(unique_cart.includes(item.id)){
                    let total_quantity = new Number(0);

                    CART.forEach((val_id)=>{
                        if(val_id == item.id){
                            total_quantity++;
                        }
                    })

                    html_contents += ` 
                    <div id="card-plate">
                    <div class="card-back-panel">

                                    <div class="cart-one-card">
                                    <div class="left-image"><img class="pressable_for_routing" data-id="${item.id}" src="${item.image}" alt="img_src" srcset="" height="80px"></div>
                                    <div class="right-card-info">
                                        <h5 class="pressable_for_routing" data-id="${item.id}">${item.title}</h5>
                                        <div class="bottom-section-of-card">
                                        <span>₹${item.price}</span>
                                        <div class="input-for-quantity">
                                            <button type="button" class="quantityBtn${item.id}" onclick="popQty(${item.id})">-</button>
                                            <input type="number" id="quantity" name="quantity" value="${total_quantity}" min="1" max="50" readOnly>
                                            <button type="button" class="quantityBtn${item.id}" onclick="pushQty(${item.id})">+</button>
                                        </div>
                                        <i onclick="removeItem(${item.id},'${item.title.replace("'","/")}')" class="ri-delete-bin-6-fill"></i>
                                        </div>
                                    </div>
                                    </div>
                                    
                                    <div class="hover-panel">Total : ₹${(item.price * total_quantity).toFixed(2)}</div>
                    </div>
                    </div>
                    <br>
                    `;
                    subTotal += item.price * total_quantity;
                }
        });

    document.querySelector(".items-in-cart").innerHTML = html_contents;
    calculateCartSummary(subTotal);    
    
}


function calculateCartSummary(subTotal = 0){
    const GST = new Number(18); // in percentage
    const shipping_charge = new Number(60); // in ₹ (rupees)
    
    const total = new Number(subTotal + subTotal * (GST/100));

    const total_price_to_pay = new Number(total + shipping_charge);

    document.getElementById("subtotal").textContent = `₹${subTotal.toFixed(3)}`;
    document.getElementById("tax").textContent = `${GST}%`;
    document.getElementById("shipping").textContent = `₹${shipping_charge}`;
    document.getElementById("total").textContent = `₹${total_price_to_pay.toFixed(2)}`;

    // calling specific router handler for cart btns
    routerForCartProduct();

    checkCartlength_for_checkout();
}


// Remove Item from Cart function

const removeItem = (product_id,product_name) =>{
    product_name = product_name.replace("/","'");

    HapticOn();

    swal({
        title: "Are you sure?",
        text: `You want to remove, "${product_name}" from your Cart!`,
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {

            CART = CART.filter((id)=> id !== product_id);
            unique_cart.splice(product_id,1);
            const url_pathname_search = window.location.pathname+""+window.location.search;
            if(url_pathname_search === `/product?productId=${product_id}`){
                document.getElementById(`qty${product_id}`).value = "";
            }
            
            check_total_cart_products(product_id);
            
            HapticOn();

          swal(`Oh No! Your product "${product_name}" has been removed!`, {
            icon: "error",
          });
        }
      });

    
}


// Routing Function for sidebar product card
const routerForCartProduct = () =>{
        const pathname = "/product";

        const pressable_for_routing = document.querySelectorAll(".pressable_for_routing");
        pressable_for_routing.forEach((single_btn)=>{
            single_btn.addEventListener("click", (event)=>{
                const product_id = new Number(event.target.getAttribute("data-id"));
                event.target.href = pathname+"?productId="+product_id;
                handleUrlBar(event,product_id); 
            });
        });
}

const pushQty = (id) =>{
    console.warn("push-->"+id)
    CART.push(id);
    check_total_cart_products();
    checkQuantity_and_Rewrite(id);

    HapticOn();
}


const popQty = (id) =>{
    console.log("pop-->"+id);
   const popBtn =  document.querySelector(`.quantityBtn${id}`);
   const inputQtyValue = new Number(popBtn.nextElementSibling.value);
   if(inputQtyValue <= 1){
        popBtn.disabled = true;
        popBtn.style.backgroundColor = "rgb(94, 71, 74)"; 
        popBtn.title = "Quantity is at the least 1";
        return;
   }else{
    popBtn.disabled = false;
    popBtn.style.backgroundColor = "lightcoral";
   }
   let i = 0;
   CART.forEach((per_id,index)=>{
    if(per_id == id){
        i++;
        if(i <= 1){
            CART.splice(index,1);
        }
    }
   });
   check_total_cart_products();
   checkQuantity_and_Rewrite(id);

   HapticOn();
}