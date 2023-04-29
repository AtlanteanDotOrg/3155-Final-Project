let recipes =[];

fetchFillerData()
function fetchFillerData(){
    try{
       const response =  fetch('/get_json',{
            method:"POST",
            "headers": {"Content-Type": "application/json"},

        })
        if(!response.ok){
            throw Error(`Error ${response.url} $${response.statusText}`)
        }
        recipes =  fetch('/get_json');
    }catch(e){
        console.log(e.message); 
    }
}
console.log(recipes);