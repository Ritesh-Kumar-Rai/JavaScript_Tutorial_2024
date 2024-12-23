
var products_list = new Array();



function removeChildElements_of_mainPage(pre_tag){

    // alert("called removeChild method::");
    let products_cards_tag = "";
    if(!pre_tag){
        products_cards_tag = document.querySelector(".product-cards");

    }else{
        products_cards_tag = pre_tag; 
    }
    console.warn("----->"+products_cards_tag);

    try {
        console.warn("outside loop"+products_cards_tag.hasChildNodes);
        while(products_cards_tag.hasChildNodes()){
            console.warn("inside loop");
                products_cards_tag.removeChild(products_cards_tag.firstChild);
        }

    } catch (error) {
        console.error(error);
    }

    

}

function displayItems(api_data){
    
    const products_cards_tag = document.getElementsByClassName("product-cards").item(0);
    console.log(products_cards_tag);
   
   
    // check for any existing childnodes available or not [if yes then remove first element]
    // removeChildElements_of_mainPage(products_cards_tag);


    const contents = document.createElement("div");
    contents.style.display = "flex";
    contents.style.gap = "5rem";
    contents.style.flexWrap = "wrap";
    contents.style.justifyContent = "center";
    // contents.style.backgroundColor = "purple"
    // console.log(Object.prototype.toString.call(content));

    api_data.forEach((item)=>{
        const div = document.createElement("div");
        div.setAttribute("class","hover");
        div.style.width = "18rem";
        div.style.minHeight = "1rem";
        div.style.padding = "1rem";
        div.style.backgroundColor = "#F0F0F0";
        div.style.display = "flex";
        div.style.flexDirection = "column";
        div.style.gap = "2vh";
        div.style.borderRadius = "0.40rem";
        div.style.filter = "drop-shadow(8px 8px 10px gray)";
        div.style.transition = "400ms ease-in-out";
        // console.log(item);


        const div_img = document.createElement("div");
        div_img.style.backgroundImage = `url(${item.image})`;
        div_img.style.backgroundSize = "cover";
        div_img.style.backgroundRepeat = "no-repeat";
        // div_img.style.backgroundPosition = "center";
        div_img.style.minHeight = "200px";
        // div_img.style.width = "200px";
        div_img.borderRadius = "0.90rem";


        const h4 = document.createElement('h4');
        h4.appendChild(document.createTextNode(item.title));

        const div_for_price = document.createElement("div");
        div_for_price.style.display = "flex";
        div_for_price.style.justifyContent = "space-between";
        div_for_price.style.alignItems = "center";

        const span = document.createElement("span");
        span.style.fontSize = "1.50rem"
        span.style.fontWeight = "500"
        span.appendChild(document.createTextNode("₹"+item.price));

        const span2 = document.createElement("span");
        span2.style.backgroundColor = "black";
        span2.style.color = "aliceblue";
        span2.style.fontSize = "0.80rem";
        span2.style.borderRadius = "1rem";
        span2.style.padding = "0.20rem 0.70rem";
        span2.innerHTML = `<i class="ri-star-fill"></i> ${item.rating.rate}`;

        div_for_price.appendChild(span);
        div_for_price.appendChild(span2);

        const button = document.createElement("button");
        button.setAttribute("data-id",`${item.id}`);
        button.setAttribute("class","product-card-btn hover-btn");
        button.setAttribute("href","/product");
        button.appendChild(document.createTextNode("VIEW ITEM"));
        button.style.padding = "1vh 3vw";
        button.style.fontWeight = "500";
        button.style.border = "2px solid black";
        button.style.borderRadius = "1rem";
        button.style.cursor = "pointer";
        button.style.transition = "400ms ease-in-out";
        
        const button2 = document.createElement('button');
        button2.appendChild(document.createTextNode("ADD TO CART"));
        button2.setAttribute("onclick",`addToCart(${item.id})`);
        button2.setAttribute("class", "hover-btn");
        button2.style.padding = "1vh 3vw";
        button2.style.fontWeight = "500";
        button2.style.backgroundColor = "black";
        button2.style.color = "aliceblue";
        button2.style.border = "none";
        button2.style.borderRadius = "1rem";
        button2.style.cursor = "pointer";
        button2.style.transition = "400ms ease-in-out";
        

        div.appendChild(div_img);
        div.appendChild(h4);
        div.appendChild(div_for_price);
        div.appendChild(button);
        div.appendChild(button2);

        contents.appendChild(div);
    });

    products_cards_tag.appendChild(contents);

    captureProductCardBtn();

}


function displayError(message){

    // check for any existing childnodes available or not [if yes then remove first and give me the parent element]
    // removeChildElements_of_mainPage();
    
    const products_cards_tag = document.querySelector(".product-cards"); 

    // creating new div
    const err_section = document.createElement('section');
    
    const div = document.createElement("div");
    div.style.backgroundColor = "#F0F0F0";
    div.style.borderRadius = "1rem";
    div.style.padding = "5rem";
    div.style.textAlign = "center";
    
    const h2 = document.createElement("h2");
    const h2_text_node = document.createTextNode("Oops! Something Bad Occured 🤔");
    h2.appendChild(h2_text_node);
    
    const p = document.createElement("p");
    p.style.marginTop = "1rem"
    const p_text_node = document.createTextNode("There might be this reason -> ");
    p.appendChild(p_text_node);
    
    const span = document.createElement("span");
    span.style.border = "none";
    span.style.borderRadius = ".40rem";
    span.style.padding = "4.10px 10px";
    span.style.backgroundColor = "white"
    span.style.color = "red";
    const error_text_node = document.createTextNode(message);
    span.appendChild(error_text_node);


    p.appendChild(span);

    div.appendChild(h2);
    div.appendChild(p);

    err_section.appendChild(div);

    products_cards_tag.appendChild(err_section);
}


function getProductData_from_API(){

    // api call
    // fetch("https://fakestoreapi.com/products")
    fetch("../products.json")
    .then((response)=> response.json())
    .then((response)=>{
        products_list = [...response];
        
        // console.log("data returned :=> ",products_list[0]);
        displayItems(products_list);
        
    })
    .catch((error)=> displayError("We are failed to get products data from api server please contact to owner 🥴"));
    
}