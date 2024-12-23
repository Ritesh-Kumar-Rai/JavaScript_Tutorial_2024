// main function for search functionality

const search_module = () =>{


    if(window.location.pathname != "/"){
        return;
    }

    const search_form = document.getElementById("search-form");

    search_form.addEventListener("submit", (e)=>{

        e.preventDefault(); // to stop page reload

        HapticOn();

        // Creating object of form data to get it's data
        const form_data = new FormData(search_form);
        const search_input = form_data.get("search").trim(); // get data value by it's name attribute of input tag

        const searched_products_arr = products_list.filter((item)=>{
            return item.title.toLowerCase().includes(search_input.toLowerCase());
        });

        console.error(searched_products_arr,"and it's length : "+searched_products_arr.length)
        // calling remove.. func to first delete all child elements from the result page
        removeChildElements_of_mainPage();

        // If the searched_result is empty then display the error message
        if(searched_products_arr.length < 1){
            displayError_for_searchResults()
            return;
        }

        // now calling to displayItems(arr_of_products) to display or render the searched data's result
        displayItems(searched_products_arr);
        
    });
}



const displayError_for_searchResults = () =>{
    const res = document.querySelector(".product-cards");
    res.innerHTML = `
    <div id="forSearchError" style="padding: 4rem; margin-block: 3rem; background-color: rgba(180, 85, 85, 0.555); color:aliceblue; text-align: center; border-radius:2rem;">
            <h3>🥴Oops! It looks like your desired product is not available or missing 🤔</h3>
    </div>
    `;
    HapticOn();
}