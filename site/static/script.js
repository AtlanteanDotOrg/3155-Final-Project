const icons = document.getElementsByClassName("item");
const recipe = document.getElementById("popup");
const recipecont = document.querySelector(".popUpText")
const badge = document.getElementsByClassName("badge");

function loadCont(){
    fetchFillerData()
    genPopUp(); 
    //clear content before re-generating pop-up
    for (var i = 0 ; i < icons.length; i++){
        delete(icons[i]);
    }
   
}
function genPopUp(){
    const whiteStars = document.querySelector(".stars").childNodes;
    
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
    if(target.src=="../static/pics/whitestar.png"){
        for(var i = 0; i < newRating;i++){
            images[i].src="../static/pics/goldstar.png";
            images[i].addEventListener("click",updateStars)
        }
        for(var j = newRating ; j < images.length;j++){
            images[j].src="../static/pics/whitestar.png";
        }
    }
    else{
        for(var i = newRating; i < 5;i++){
            images[i].src="../static/pics/whitestar.png";
        }
        for(var i = 0; i < newRating ;i++){
            images[i].src="../static/pics/goldstar.png";
        }
        
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
        star.setAttribute("stars", i+1)
        rating.appendChild(star); 
        star.addEventListener("mouseover", function(e){
            var result = hover(e); 
        });
    }
    
}
function display(title,content,target){
    console.log("test"); 
    recipecont.innerText="";
    recipe.style.display="block";
    var h2 = document.createElement("h2");
    var bdy = document.createElement("p");
    h2.innerText = title; 
    bdy.innerText = content;
    recipecont.appendChild(h2);
    recipecont.appendChild(bdy);
    const x = document.getElementById("x");
    x.addEventListener("click", del, target);
}

function del(target){
    recipe.style.display = "none"; 

}
