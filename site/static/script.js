const icons = document.getElementsByClassName("item");
const recipe = document.getElementById("popup");
const recipecont = document.querySelector(".popUpText")
const x = document.getElementById("x");
const badge = document.getElementsByClassName("badge");
window.onload = function(){
    const icon = document.querySelectorAll("#icon");
    const rating = document.querySelectorAll(".rating");

    for(var j = 0; j <= icon.length; j++){
        genStars(rating[j],5);
    }
    for (var i = 0 ; i < icons.length; i++){
        delete(icons[i]);
    }
}
//sample recipe is written directly in here
//for simplicity 
//change these
var title = "Mom's Pan Fried Dumplings";
var content = "Add your dumplings to your pan in a circular shape\n" + "Add oil to your pan\n" +"Fry them";
for (var i = 0 ; i < icons.length; i++){
    icons[i].addEventListener("click", display, icons[i])
    x.addEventListener("click", del, icons[i]);
}

//generate default rating, which is 5 stars
function genStars(rating,num){
    //clear deafault star rating first
    while(rating.firstChild){
        rating.removeChild(rating.firstChild); 
    }
    for(var i = 0; i < num;i++){    
        const star = document.createElement("img");
        star.src="../static/pics/goldstar.png"
        rating.appendChild(star); 
    }
    
}
function display(target){
    recipecont.innerText="";
    var target = target.target; 
    recipe.style.display="block";
    var h2 = document.createElement("h2");
    var bdy = document.createElement("p");
    h2.innerText = title; 
    bdy.innerText = content;
    recipecont.appendChild(h2);
    recipecont.appendChild(bdy);
}
function del(target){
    recipe.style.display = "none"; 

}
function addDairyFree(){
    //TO DO: create function that adds a dairy free flag
    //so we don't have to fight boostrap
}

function addGlutenFree(){
    //TO DO: create function that adds a gluten free flag
    //so we don't have to fight boostrap
}

function addGlutenDairyFree(){
    //TO DO: create function that adds a dairy and gluten free flag
    //so we don't have to fight boostrap
}

