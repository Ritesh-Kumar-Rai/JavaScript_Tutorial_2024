
// function to add/toggle classname to button
const toggle_filter_btn_class = (btn) =>{
    btn.classList.toggle("filter-btn-pressed");
}

// function to remove classname from all array of buttons
const removeClassToggle = (arr) =>{
    arr.forEach((btn)=>{
        btn.classList.remove("filter-btn-pressed");
    });
}

// function for filtering product data by category
const filter_products_by_category = (category) =>{
    const filtered_products_arr = new Array();

    let final_category = new String("");

    switch(category){
        case "all" :
            // alert("all cat")
            final_category = "all";
            removeChildElements_of_mainPage();
            displayItems(products_list);
            return;
            break;
        case "mens-clothing" :
            // alert("mens cat")
            final_category = "men's clothing";
            break;
        case "womens-clothing" :
            // alert("womens cat")
            final_category = "women's clothing";
            break;
        case "electronics" :
            // alert("electronics cat")
            final_category = category;
            break;
        case "jewelery" :
            // alert("jewelery cat")
            final_category = category;
            break;
        default :
            return;            
    }

    
    products_list.forEach((item)=>{
        if(item.category === final_category){
            filtered_products_arr.push(item);
        } 
    });

    // removeChildElements_of_mainPage(document.querySelector(".product-cards"));
    removeChildElements_of_mainPage();
    displayItems(filtered_products_arr);
}


// function for main filtering starter
const filtering_main = () =>{
    
    // alert("filtering main function called");

    try {
        
        // First Targetting all filtering buttons to add Event Listeners
        const all = document.getElementById("all");
        const mens_clothing = document.getElementById("mens-clothing");
        const electronics = document.getElementById("electronics");
        const jewelery = document.getElementById("jewelery");
        const womens_clothing = document.getElementById("womens-clothing");

        // by default all btn is highlighted
        toggle_filter_btn_class(all);

        // Attaching an Event Listener to each filtering buttons

        all.addEventListener("click", (e)=>{
            // alert("all btn");
            if(e.target.getAttribute("class") !== "filter-btn-pressed") toggle_filter_btn_class(all);
            removeClassToggle([mens_clothing,electronics,jewelery,womens_clothing]);
            filter_products_by_category(e.target.id);
            HapticOn();
        });
        
        mens_clothing.addEventListener("click", (e)=>{
            // alert("mens btn");
            if(e.target.getAttribute("class") !== "filter-btn-pressed") toggle_filter_btn_class(mens_clothing);
            removeClassToggle([all,electronics,jewelery,womens_clothing]);
            filter_products_by_category(e.target.id);
            HapticOn();
        });
        
        electronics.addEventListener("click", (e)=>{
            // alert("electronics btn");
            if(e.target.getAttribute("class") !== "filter-btn-pressed") toggle_filter_btn_class(electronics);
            removeClassToggle([all,mens_clothing,jewelery,womens_clothing]);
            filter_products_by_category(e.target.id);
            HapticOn();
        });

        jewelery.addEventListener("click", (e)=>{
            // alert("jewelery btn");
            if(e.target.getAttribute("class") !== "filter-btn-pressed") toggle_filter_btn_class(jewelery);
            removeClassToggle([all,electronics,mens_clothing,womens_clothing]);
            filter_products_by_category(e.target.id);
            HapticOn();
        });

        womens_clothing.addEventListener("click", (e)=>{
            // alert("womens btn");
            if(e.target.getAttribute("class") !== "filter-btn-pressed") toggle_filter_btn_class(womens_clothing);
            removeClassToggle([all,electronics,jewelery,mens_clothing]);
            filter_products_by_category(e.target.id);
            HapticOn();
        });

        
      
    } catch (error) {
        alert("FROM filtering room ->"+error);    
    }

}