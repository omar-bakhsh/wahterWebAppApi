 
 var x="";

 function myFunction() {
	var x = document.getElementById("mySelect").value;
 
  document.getElementById("demo").innerHTML = "You selected: " + x;
 
 
   
var city =x; 


$.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+ city +"&&units=metric&APPID=78ba2ea151e4e11abd2bd75b1255dc75", function (data) {

    console.log(data);
     var pic =["./img/krch.png","./img/red.png","./img/jed.png"]
     var jp =pic[2];
     var rp =pic[1];
     var kp =pic[0];

     alert(x)       
 
	var icon ="https://openweathermap.org/img/w/" + data.weather[0].icon+".png";
	
	$(".icon").attr("src",icon);
     var wthr =data.weather[0].main;
     $(".wather").append(wthr);
     var temp =data.main.temp;
     $(".temp").append(temp);
        console.log(temp);

});}


                                                         /*
                                                           var e = document.getElementById("mySelect");
                                                      var cty  = e.options[e.selectedIndex].value;
                                                      if (true) {
 	document.body.style.backgroundImage =jp;
 };
  
                                                        */ 


