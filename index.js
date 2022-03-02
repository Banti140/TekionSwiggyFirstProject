
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

// console.log("hitesh");

// import foodData from "./index.json" assert { type: "json" };
const tag_id = document.getElementById("recommendation");

let model={
    setData:function({dishItemName,dishPrice,image,aboutdescripton}){
        tag_id.innerHTML +=
        `<div class="firstDish">
    ${dishItemName}
    <div id="firstDishandname_img" > 
        <img src="${image}" width="100" /> 
        <button onclick="addToCartClicked()">Add To Cart</button>
    </div>

    <div class="pricerecom">
    ${dishPrice}
    </div>
    
    <div id="firstDishContent">
    ${aboutdescripton}
    </div>
    <br> </br>
    <hr class="descrecom">
</div>
`
   },
  
};

let view={
    itemsListView:function(){
         fetch("./index.json").then(response => {
            return response.json();
         }
        ).then((data)=>{
              for (let x of data['foodData']) {
                  model.setData(x);

            }})
    },

    render:function(){
        this.itemsListView();
        }
};

let controller={
    init:function(){
        view.render();
    },
}

controller.init();



// fetch('./index.json')
//     .then((response) => response.json())
//     .then((item) => {
//         profileController.init(item.profileData);
//         postsController.init(item);
//         footerController.init();
//     });
