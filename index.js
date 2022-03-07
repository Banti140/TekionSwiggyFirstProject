// import foodData from "./index.json" assert { type: "json" };
// const tag_id = document.getElementById("recommendation");

// let model={
//     modalData:foodData,
//     init:function(data){
//        this.modelData=data;
//     },
//     };

//     function myFunction(){
//       console.log("hitesh");
//   }

//     // view
//         // <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
//     let view={  
//     // console.log(addToCartButtons.length);
    
  
//       buildFoodView: function(){
//         const viewData=controller.getData()

//         console.log(viewData);
//         // let index=0;
//         for (let x of viewData['foodData']){
//          tag_id.innerHTML+= `<div class="recommendation">
//          <button onclick="addToCartClicked()" >ADD TO CART</button>
//          <div class="firstDish">
//         ${x.dishItemName}
//         <div class="pricerecom">
//         ${x.dishPrice}
//         </div>
//         <div id="firstDishandname_img" > 
//             <img src="${x.image}" width="100" /> 
            
            
//         </div>

       
        
//         <div id="firstDishContent">
//         ${x.aboutdescripton}
//         </div>
//         <br> </br>
//         <hr class="descrecom">
//     </div>
//     </div>
//     `;}
//       },

//       render: function()
//       {
//         this.buildFoodView();
//       }
//     };

//     // view.buildFoodView.myFunction();
    
//     // controller
//     let controller={
//        init: function(){
//         model.init(foodData);
//         view.render();
//        },
//        getData:function()
//        {
//           return model.modalData;
//        }
//     }
//     controller.init(); 

//     let cartModel={
//         data:{
//             item:[]
//         },
//         init: function(item){
//             this.cartItem=item;
//         },
//         getitem(){
//             return this.item;
//         }
//     }


//     let cartView={
//         init(){
//             this.listener();
//         },
//         listener(){
//             document.getElementsByClassName('recommendation')[0] .addEventListener('click', (event) => {
//               this.addToCartClicked(event);
//             });
//         },

//              addToCartClicked(event) {
//                     var button = event.target
//                     var shopItem = button.parentElement.parentElement
//                     var title = shopItem.getElementsByClassName('firstDish')[0].innerText
//                     var price = shopItem.getElementsByClassName('pricerecom')[0].innerText
//                     // var imageSrc=shopItem.getElementsByClassName('shop-item-image')[0].src
//                     // var quantity=1
//                     this.addItemToCart(title,price)
//                     this.updateCartTotal()
//                 },

//          addItemToCart(title, price) {
//                 var cartRow = document.createElement('div')
//                 cartRow.classList.add('cart-row')
//                 var cartItems = document.getElementsByClassName('cart-items')[0]
                
//                 var cartRowContents = `
//                     <div class="cart-item cart-column">
//                         <img class="cart-item-image" src="${imageSrc}" width="30" height="100">
//                         <span class="cart-item-title">${title}</span>
//                     </div>
//                     <span class="cart-price cart-column">${price}</span>
//                     <div class="btn-group">
//                      <input class="cart-quantity-input" type="number" value="1" > 
                    
//                     <button class="btn btn-danger" type="button"  >REMOVE</button>
//                     </div>
            
//                     </div>`
//                 cartRow.innerHTML = cartRowContents
//                 cartItems.append(cartRow)
//             },

//          updateCartTotal() {
//                 var cartItemContainer = document.getElementsByClassName('cart-items')[0]
//                 var cartRows = cartItemContainer.getElementsByClassName('cart-row')
//                 // console.log("cartRows");
//                 var total = 0
//                 for (var i = 0; i < cartRows.length; i++) {
//                     var cartRow = cartRows[i]
//                     // console.log(cartRow);
//                     var priceElement = cartRow.getElementsByClassName('cart-price cart-column')[0]
//                     // console.log(priceElement);
//                     var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
//                     var price = parseFloat(priceElement.innerText.replace('Rs', ''))
//                     var quantity = quantityElement.value
//                     total = total + (price * quantity)
//                 }
//                 total = Math.round(total * 100) / 100
//                 document.getElementsByClassName('cart-total-price')[0].innerText =  total+' Rs'
                
//             }
//     }

//     let cartControl={
//         cartItem={},
//         init(){
//             this.getitem();
//             cartView.init();
//         },
//         getitem(){
//             this.cartItem=cartModel.getitem();
//             this.renderItem();
//         },
//         renderItem(){
//             cartView.render(this.cartItem);
//         }

//     }

//     cartControl.init();

// ***********************-------------------------*****************************

var removeCartItemButtons = document.getElementsByClassName('btn-danger')
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', removeCartItem)
}

function removeCartItem(event) {
    // console.log("hitesh");
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

var quantityInputs = document.getElementsByClassName('cart-quantity-input')
for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
    
}


var addToCartButtons = document.getElementsByClassName('shop-item-button')
    // console.log(addToCartButtons.length);
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    // document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)

    // function purchaseClicked() {
    //     alert('Thank you for your purchase')
    // }

    

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('firstDishandname')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc=shopItem.getElementsByClassName('shop-item-image')[0].src
    // var quantity=1
    addItemToCart(title,price,imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
            // quantity++;
            
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="30" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="btn-group">
         <input class="cart-quantity-input" type="number" value="1" > 
       
        <button class="btn btn-danger" type="button"  >REMOVE</button>
        </div>

        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    // console.log("cartRows");
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        // console.log(cartRow);
        var priceElement = cartRow.getElementsByClassName('cart-price cart-column')[0]
        // console.log(priceElement);
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('Rs', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText =  total+' Rs'
    
}