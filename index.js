
// const tag_id = document.getElementById("recommendation");

// fetch("./index.json").then(response => {
//     return response.json();
// }).then(function (data) {
//     for (let x of data['foodData']) {
//         tag_id.innerHTML +=
//             `<div class="firstDish">
//         ${x.dishItemName}
//         <div id="firstDishandname_img" > 
//             <img src="${x.image}" width="100" /> 
//             <button onclick="addToCartClicked()">Add To Cart</button>
//         </div>

//         <div class="pricerecom">
//         ${x.dishPrice}
//         </div>
        
//         <div id="firstDishContent">
//         ${x.aboutdescripton}
//         </div>
//         <br> </br>
//         <hr class="descrecom">
//     </div>
//     `
//     }
// })
// // import foodData from "./index.json" assert { type: "json" };

// {/* <button onclick="myFunction()">Add to Cart</button> */}

import foodData from "./index.json" assert { type: "json" };

let model={
    itemsData:foodData,
    init:function(passeddata){
        this.itemsData=passeddata;
    },
    setData:function(itemsData){
        return this.itemsData;
    }
};

let view={
    init: function() {
        this.render();
    },

    itemsListView:function(){
         fetch("./index.json").then(response => {
             response.json();
        }).then(function (data) {
            for (let x of data['foodData']) {
                tag_id.innerHTML +=
                    `<div class="firstDish">
                ${x.dishItemName}
                <div id="firstDishandname_img" > g
                    <img src="${x.image}" width="100" /> 
                    <button onclick="addToCartClicked()">Add To Cart</button>
                </div>
        
                <div class="pricerecom">
                ${x.dishPrice}
                </div>
                
                <div id="firstDishContent">
                ${x.aboutdescripton}
                </div>
                <br> </br>
                <hr class="descrecom">
            </div>
            `
            }
        })
    },

    render:function(){
        this.itemsListView();
    }
};

let controller={
    init:function(){
        model.init(foodData);
        view.render();
    },
    getItem:function(){
        return model.itemsData;
    }
}


// fetch('./index.json')
//     .then((response) => response.json())
//     .then((item) => {
//         profileController.init(item.profileData);
//         postsController.init(item);
//         footerController.init();
//     });