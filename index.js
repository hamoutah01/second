function changeCursor(element) {
    element.style.cursor = "pointer";
}


function restoreCursor(element) {
    element.style.cursor="auto";
}







document.addEventListener("DOMContentLoaded", function(event){
    document.querySelector(".item").addEventListener("click", function(){
        var item=null;
        var xttp=new XMLHttpRequest();
		xttp.onreadystatechange=function(){
            if((this.readyState==4)&&(this.status==200)){
                item = this.responseText;
                var xttp=new XMLHttpRequest();
                xttp.onreadystatechange=function(){
                    if((this.readyState==4)&&(this.status==200)){
                        var entry= JSON.parse(this.responseText);
                        var renderedItem = renderHtml(item, entry.employees);
                   
                        document.querySelector("#content").innerHTML = renderedItem;
			        }
		        };
                xttp.open("GET", "data/chicken.json", true);
                xttp.send(null);
            }
        };
        xttp.open("GET", "templates/null.html", true);
        xttp.send(null);
    });
});

function renderHtml(template, employees) {
    var htmlString = "";

    for (var i = 0; i < employees.length; i++){
        var modifiedItem = template.replace(new RegExp("{{name}}", "g"), employees[i].name);
        modifiedItem = modifiedItem.replace(new RegExp("{{description}}", "g"), employees[i].description);


        htmlString += modifiedItems;
    }
    
    return htmlString;
}





document.addEventListener("DOMContentLoaded", function(event){
    document.querySelector(".item1").addEventListener("click", function(){
        var item=null;
        var xttp=new XMLHttpRequest();
		xttp.onreadystatechange=function(){
            if((this.readyState==4)&&(this.status==200)){
                item = this.responseText;
                var xttp=new XMLHttpRequest();
                xttp.onreadystatechange=function(){
                    if((this.readyState==4)&&(this.status==200)){
                        var entry= JSON.parse(this.responseText);
                        var renderedItem = renderHtml(item, entry.beef);
                   
                        document.querySelector("#content").innerHTML = renderedItem;
			        }
		        };
                xttp.open("GET", "data/beef.json", true);
                xttp.send(null);
            }
        };
        xttp.open("GET", "templates/null.html", true);
        xttp.send(null);
    });
});

function renderHtml(template, beef) {
    var htmlString = "";

    for (var i = 0; i < beef.length; i++){
        var modifiedItem = template.replace(new RegExp("{{name}}", "g"), beef[i].name);
        modifiedItem = modifiedItem.replace(new RegExp("{{description}}", "g"), beef[i].description);
        htmlString += modifiedItem;
    }
    
    return htmlString;
}



 document.addEventListener("DOMContentLoaded", function(event){
    document.querySelector(".item2").addEventListener("click", function(){
        var item=null;
        var xttp=new XMLHttpRequest();
		xttp.onreadystatechange=function(){
            if((this.readyState==4)&&(this.status==200)){
                item = this.responseText;
                var xttp=new XMLHttpRequest();
                xttp.onreadystatechange=function(){
                    if((this.readyState==4)&&(this.status==200)){
                        var entry= JSON.parse(this.responseText);
                        var renderedItem = renderHtml(item, entry.sushi);
                   
                        document.querySelector("#content").innerHTML = renderedItem;
			        }
		        };
                xttp.open("GET", "data/sushi.json", true);
                xttp.send(null);
            }
        };
        xttp.open("GET", "templates/null.html", true);
        xttp.send(null);
    });
});

function renderHtml(template, sushi) {
    var htmlString = "";

    for (var i = 0; i < sushi.length; i++){
        var modifiedItem = template.replace(new RegExp("{{name}}", "g"), sushi[i].name);
        modifiedItem = modifiedItem.replace(new RegExp("{{description}}", "g"), sushi[i].description);
        htmlString += modifiedItem;
    }
    
    return htmlString;
}



