
const tag_id = document.getElementById("recommendation");

fetch("./index.json").then(response =>{
    return response.json();
}).then(function (data){
    for(let x of data['foodData']){
        tag_id.innerHTML+=
        `<div class="firstDish">
        <div id="firstDishandname">
            ${x.dishItemName}
            <img src="first.jpeg" /> 
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
        // console.log(x.id + " "+ x.dishPrice);
    }
})
// import foodData from "./index.json" assert { type: "json" };

