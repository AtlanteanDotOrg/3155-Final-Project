const icons = document.getElementsByClassName("item");
const recipe = document.getElementById("popup");
const recipecont = document.querySelector(".popUpText")
const badge = document.getElementsByClassName("badge");

function loadCont(){
    fetchFillerData()
    
   
}

function hover(e,id){
    var target = e.target;
    var newRating = target.getAttribute("stars");
    var cont = target.parentElement; 
    var images = cont.querySelectorAll("img");
    if(target.src=="../static/pics/whitestar.png"){
        for(var i = 0; i < newRating;i++){
            images[i].src="../static/pics/goldstar.png";
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
    target.addEventListener("click", function(e){
        updateStars(e.target,id)
    })
    
    
}




function display(title,content,target){
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
    const whiteStars = document.querySelector(".stars").childNodes;
    
    for(var i = 0; i < whiteStars.length;i++){
        whiteStars[i].addEventListener("mouseover", function(e){
            hover(e,target.getAttribute("id"))
        });
    }
}

function del(target){
    recipe.style.display = "none"; 

}
