const a = document.querySelectorAll('a');

const MAIN = document.getElementById("main");

a.forEach((a_tag)=>{

    // console.log(a_tag)
    a_tag.addEventListener("click", (e)=>{
        e.preventDefault();
        // console.log(e.target,e.target.id === "home",e.target.id);
        const targeted_id = e.target.id;
        switch (targeted_id) {
            case "home":
                console.log("It's home page");
                handleUrlBar(e);
                break;
            case "product":
                console.log("It's products page");
                handleUrlBar(e);
                break;
            case "contact":
                console.log("It's contact page");
                handleUrlBar(e);
                break;
            case "about":
                console.log("It's about page");
                handleUrlBar(e);
                break;
        
            default:
                return;
        }
        // console.log(window.location.pathname);
    });



});


function handleUrlBar(event,product_id){
    // alert(event.target.href);
    // alert("HREF ->>>>>"+event.target.href);
    HapticOn();
    window.history.pushState({},"",event.target.href);
    doRouting(event,product_id);
}

const routes = {
    "/" : {
        src : "/templates/home_page.html",
        title : "Vanilla JS - Ecommerce project",
        desc : ""
    },
    "/home" : {
        src : "/home_page.html",
        title : "Vanilla JS - Ecommerce project",
        desc : ""
    },
    "/product" : {
        src : "/templates/product.html",
        title : "Product - Ecommerce project",
        desc : ""
    },
    "/products" : {
        src : "/templates/home_page.html",
        title : "Vanilla JS - Ecommerce project",
        desc : ""
    },
    "/contact" : {
        src : "/templates/contact.html",
        title : "Contact - Ecommerce project",
        desc : ""
    },
    "/about" : {
        src : "/templates/about.html",
        title : "About - Ecommerce project",
        desc : ""
    }

};


async function doRouting(event,product_id){
    const pathname = window.location.pathname;
    if(pathname.length === 0) pathname = "/";
    console.log("PATHNAME -> "+pathname);
    const route_path_location = await routes[pathname];


    try {
        
        const response = await fetch(route_path_location.src)
        const data = await response.text();
        // .then((response)=> response.text())
        // .then((data)=>{
            // console.log(data);
            
            const main = document.getElementById("main");
            while(main.hasChildNodes()){
                // console.log("main ka first child : "+main.firstChild);
                main.removeChild(main.firstChild);
            }
            
            MAIN.innerHTML = data;

        } catch (error) {
            console.error("FROM doRouting() error-->",error);
        }

        if(pathname === "/product"){
            if(product_id){
                console.warn("GOT IT");
                displayProductPage(product_id);
            }else{
                console.error("NEED IT",product_id);
            }
        }
        // console.log("MAIN PRODUCTS LIST :->"+products_list);
        if(pathname === "/" || pathname === "/home" || pathname === "/products"){

            filtering_main(); // to enable filtering mode and method
            search_module(); // to enable search functionality while page reloads

            if(products_list.length < 1){
                getProductData_from_API();
                console.log("fetch api for products called");
            }else{
                displayItems(products_list);
                console.warn("fetch api is already done...");
            }

            (pathname === "/products") ? document.getElementById("search-home").scrollIntoView() : null;
            
        }
        
    // })
    // .catch((error)=>console.error("Oops! Error-> "+error));
}


