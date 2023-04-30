
let recipes =[];
 recipeCont = document.getElementById("recipes");
fetchFillerData()
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
        const id = item.id;
        div.setAttribute("id",id)

        icon.classList.add("icon");
        div.appendChild(icon); 
        const img = document.createElement("img");
        img.src="../static/pics/dish.png";
        img.id="icon";
        const stars = item.stars;
        img.setAttribute("stars",stars)
        icon.appendChild(img);
        const starCont = document.createElement("div");
        starCont.classList.add("rating","solidGlass","row");
        starCont.id="rating";
        icon.appendChild(starCont); 
        genStars(starCont,stars);
        const h3 = document.createElement("h3");
        h3.textContent=item.title;
        div.appendChild(h3); 
        title = item.title;
        content = item.Content; 
        return div; 
    }
    }
    
    // const span = document.createElement("span");
    //     span.classList.add("top-0","start-100","translate-middle", "badge","rounded-pill","bg-success")
    // if(item.Vegan="True"){
    //     span.textContent="Vegan";
    //     img.appendChild(span);
    // }
    // if(item.GF="True"){
    //     span.textContent="Gluten Free";
    //     img.appendChild(span);
    // }
    
  
 function configure(){
    const items = document.getElementsByClassName("item");
    for(var i = 0; i < items.length; i++){
        items[i].addEventListener("click",display);
    }
    
}
 
