
let recipes =[];
 recipeCont = document.getElementById("recipes");

function fetchFillerData(){
    fetch("/get_json")
    .then(response => {
    return response.json();
    }).then(data=> load(data))
}
function load(data){
    recipes = data.recipes; 
    write(recipes); 
}

function write(data){
    for(var j = 0; j < data.length;j+=2){
        createItemRow(data[j],data[j+1]);
    }
    configure();

}
function createItemRow(item1, item2){
    
        const cont = document.createElement("div");
        cont.classList.add("row","justify-content-evenly");
        recipeCont.appendChild(cont);
        if(item1!=undefined) cont.appendChild(createItemCol(item1));
        if(item2!=undefined)cont.appendChild(createItemCol(item2));
    
   
}
function createItemCol(item){
    if(item!=undefined){
        const div = document.createElement("div");
        div.classList.add("col-sm-4","item");
        const icon = document.createElement("div");
        const tagCont = document.createElement("div");
        tagCont.classList.add("tags","row");
        const id = item.id;
        div.setAttribute("id",id)
        icon.classList.add("icon");
        div.appendChild(icon); 
        const img = document.createElement("img");
        img.id="icon";
        img.src="../static/pics/dish.png";
        const stars = item.stars;
        img.setAttribute("stars",stars)
        icon.appendChild(img);
        const starCont = document.createElement("div");
        starCont.classList.add("rating","row");
        starCont.id="rating";
        icon.appendChild(starCont); 
        genStars(starCont,stars);
        const h3 = document.createElement("h3");
        const tagTitle = document.createElement("h4");
        tagTitle.innerHTML="Tags: ";
        tagTitle.classList.add("col");
        tagCont.appendChild(tagTitle);
        h3.textContent=item.title;
        div.appendChild(h3); 
        div.appendChild(tagCont);

        title = item.title;
        content = item.Content; 
        const tag = document.createElement("p");
        const typeTag = document.createElement("p");
        const type = item.type;
        tag.classList.add("tag","col");
        if(item.Vegan=="True"){
            tag.innerHTML="Vegan";
            tagCont.appendChild(tag);
        }
        if(item.GF=="True"){   
            tag.innerHTML="Gluten Free";
            tagCont.appendChild(tag);         
        }
        typeTag.innerHTML= type;
        typeTag.classList.add("tag");
        tagCont.appendChild(typeTag);
        return div; 
    }
        
}
        
    
    
    
  
 function configure(){
    const items = document.querySelectorAll(".item");
    for(var i = 0; i < items.length; i++){
        
        items[i].addEventListener("click", send,items[i]);
    }
    
}
function send(target){
    target = target.target;
    var el = target.closest(".item")
    var id = el.getAttribute("id");
    var rec = recipes[id];
    display(rec.title,rec.Content,el);
    
}
 
