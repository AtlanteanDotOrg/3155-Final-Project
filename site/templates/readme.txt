stylesheet links should look like this:
<link rel ="stylesheet" href="{{ url_for('static', filename='style.css') }}" 
onerror="this.onerror=null; this.href='static/style.css'">


ONCLICK EVENT WILL NOT WORK WITHOUT ITEM CLASS
also do not put class=item on something that isnt a link <3 
the several important tags is to fight bootstrap

USING BOOTRAP V 5
https://getbootstrap.com/docs/5.3/getting-started/introduction/
FUZZY SEARCH PLUGIN
https://listjs.com/docs/plugins/fuzzysearch/ 
TO DO:
search 
tag system 

explore recipes front end template:
 <!-- <div class="row justify-content-evenly">
        
                        <div class="col-sm-4 item ">
                            <div class="icon">
                                <img src="../static/pics/dish.png"/ id="icon" stars="5">
                                    <div class="rating solidGlass row" id="rating"></div>
                                    <span class="top-0 start-100 translate-middle badge rounded-pill bg-success">
                                        Dairy Free
                                        <span class="visually-hidden">Dairy Free</span>
                                        
                                </div>
                            
                            <h3> Mom's pan fried Dumplings</h3>
                        </div>
                        <div class="col-sm-4 item">
                            <div class="icon">
                                <img src="../static/pics/dish.png"/ id="icon" stars="5">
                                <div class="rating solidGlass row"></div>
    
                            </div>
                            <h3> Homemade Pizza</h3>
        
                        </div>
                    </div>
                    <div class="row justify-content-evenly">
                        <div class="col-sm-4 item ">
                            <div class="icon">
                                <img src="../static/pics/dish.png"/ id="icon"  stars="5">
                                    <div class="rating solidGlass row" id="rating"></div>
                                    <span class="top-0 start-100 translate-middle badge rounded-pill bg-success">
                                        Dairy Free
                                        </span>
                                
                                    
                            </div>
                           
                            <h3> Mom's pan fried Dumplings</h3>
                        </div>
                        <div class="col-sm-4 item">
                            <div class="icon">
                                <img src="../static/pics/dish.png"/ id="icon" stars="5">
                                <div class="rating solidGlass row" id="rating"></div>
    
                            </div>
                            <h3> Homemade Pizza</h3>
        
                        </div>
                    </div> -->
              