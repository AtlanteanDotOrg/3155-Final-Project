const icons = document.getElementsByClassName("item");
const recipe = document.getElementById("popup");
const recipecont = document.querySelector(".popUpText")
const x = document.getElementById("x");
const badge = document.getElementsByClassName("badge");
var title; 
var content; 
function loadCont(){
    const icon = document.querySelectorAll("#icon");
    const rating = document.querySelectorAll(".rating");
   
    for(var j = 0; j < icon.length ; j++){
        var stars = icon[j].getAttribute("stars");
        if(!icon[j].hasAttribute("stars")){
            stars=5;
        }
        genStars(rating[j],stars);
    }
 
    genPopUp(); 
    //clear content before re-generating pop-up
    for (var i = 0 ; i < icons.length; i++){
        delete(icons[i]);
    }
   
}
function genPopUp(){
    const whiteStars = document.querySelector(".stars").childNodes;
    for (var i = 0 ; i < icons.length; i++){
        x.addEventListener("click", del, icons[i]);
    }
    for(var i = 0; i < whiteStars.length;i++){
        whiteStars[i].addEventListener("mouseover", function(e){
            var result = hover(e); 
            console.log(result); 
        });
    }
}
function hover(e){
    var target = e.target;
    var newRating = target.getAttribute("stars");
    var cont = target.parentElement; 
    var images = cont.querySelectorAll("img");
    for(var i = 0; i < newRating;i++){
        images[i].src="../static/pics/goldstar.png";
        images[i].addEventListener("click",updateStars)
    }
    for(var j = newRating ; j < images.length;j++){
        images[j].src="../static/pics/whitestar.png";
    }
    
}
function updateStars(e){
    var target = e.target; 
    return target.getAttribute("stars");
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
function display(e){
    console.log("test"); 
    recipecont.innerText="";
    recipe.style.display="block";
    var h2 = document.createElement("h2");
    var bdy = document.createElement("p");
    var id = target.getAttribute("id");
    console.log(e);
    h2.innerText = title; 
    bdy.innerText = content;
    recipecont.appendChild(h2);
    recipecont.appendChild(bdy);
}
function updateContent(title,content){
    title  = title;
    content = content; 
}
function del(target){
    recipe.style.display = "none"; 

}
