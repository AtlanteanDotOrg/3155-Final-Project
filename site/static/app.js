let recipes =[];
window.addEventListener("DOMContentLoaded", fetchFillerData);
async function fetchFillerData(){
    try{
        const response =  fetch('/get_json')
        if(!response.ok){
            throw Error(`Error ${response.url} $${response.statusText}`)
        }
        recipes = await response.json;
        // recipes =  fetch('/get_json');
    }catch(e){
        console.log(e.message); 
    }
}
console.log(recipes);