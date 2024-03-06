async function main() {
    const re=await fetch('https://api.openweathermap.org/data/2.5/weather?lat=32.097780&lon=34.894630&appid=dcf36bad979cb7811d2a97058a2ccbf2');
     const data= await re.json();
     const convertTDegreesCelsius=data.main.temp-273.15;
     let formattedNumberTemp = convertTDegreesCelsius.toFixed(1);
     console.log(data);
     console.log(formattedNumberTemp);
      let mode=data.weather[0].main;
      let icon="https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";

      
      if (mode === "Clear") {
        mode = "שמשי";
    } else if (mode === "Clouds") {
        mode = "מעונן";
    } else if (mode === "Rain") {
        mode = "גשום";
    } else if (mode === "Thunderstorm") {
        mode = "סופת רעמים";
    } else if (mode === "Drizzle") {
        mode = "טפטוף";
    } else if (mode === "Snow") {
        mode = "שלג";
    }

    // Log data to console
    console.log(data);
    console.log(formattedNumberTemp);
    console.log(icon);



    const sun="sun.png";
    function getIconSun(mode, icon){
     if(mode === "Clear" || mode === "שמשי") {
       return   sun;
     }else{
         return icon;
     }
 }


    // Display weather information on the webpage
    let weatherInMyHomeKarneyShomron=document.querySelector(".black-border");
    weatherInMyHomeKarneyShomron.innerHTML+="<br>"+formattedNumberTemp+ "°C"+"<br>"+mode+"<br>";
    weatherInMyHomeKarneyShomron.innerHTML+="<img src="+getIconSun(mode,icon)+">";
 
 
 
 
 
  }
 
 

 
 main();
 
 
 





document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const menu = document.getElementById("menu");
    let isMenuVisible = false;
  
    // Function to toggle menu visibility
    function toggleMenu() {
      if (isMenuVisible) {
        menu.style.display = "none";

      } else {
        menu.style.display = "block";
      
      }
      isMenuVisible = !isMenuVisible;
    }
  
    // Toggle menu visibility when menu icon is clicked
    menuIcon.addEventListener("click", function(event) {
      toggleMenu();
      event.stopPropagation(); // Prevent the click event from propagating to the document
    });
  
    // Close menu when clicking outside of it
    document.addEventListener("click", function(event) {
      if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.style.display = "none";
        isMenuVisible = false;
      }
    });
  });
  













  async function fetchData() {


   
    

         // Construct API URL with latitude, longitude, and API key
         const apiKey = 'dcf36bad979cb7811d2a97058a2ccbf2';
         const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=32.097780&lon=34.894630&appid=${apiKey}`;
       
             // Fetch weather data
             const re = await fetch(apiUrl);
             const data = await re.json();
             console.log(data);
          
          
             const dataDay1=data.list[5].dt_txt.substring(6, 10);
             const tempDay1=(data.list[5].main.temp - 273.15).toFixed(1);
             const weatherDay1=data.list[5].weather[0].main;
             const iconDay1="https://openweathermap.org/img/wn/"+data.list[5].weather[0].icon+"@2x.png";
          
             const dataDay2=data.list[13].dt_txt.substring(6, 10);
             const tempDay2=(data.list[13].main.temp - 273.15).toFixed(1);
             const weatherDay2=data.list[13].weather[0].main;
             const iconDay2="https://openweathermap.org/img/wn/"+data.list[13].weather[0].icon+"@2x.png";
          
             const dataDay3=data.list[21].dt_txt.substring(6, 10);
             const tempDay3=(data.list[21].main.temp - 273.15).toFixed(1);
             const weatherDay3=data.list[21].weather[0].main;
             const iconDay3="https://openweathermap.org/img/wn/"+data.list[21].weather[0].icon+"@2x.png";
          
             const dataDay4=data.list[29].dt_txt.substring(6, 10);
             const tempDay4=(data.list[29].main.temp - 273.15).toFixed(1);
             const weatherDay4=data.list[29].weather[0].main;
             const iconDay4="https://openweathermap.org/img/wn/"+data.list[29].weather[0].icon+"@2x.png";
          
             const dataDay5=data.list[37].dt_txt.substring(6, 10);
             const tempDay5=(data.list[37].main.temp - 273.15).toFixed(1);
             const weatherDay5=data.list[37].weather[0].main;
             const iconDay5="https://openweathermap.org/img/wn/"+data.list[37].weather[0].icon+"@2x.png";
             
             
          
             
          
             function getMode(mode){
              if (mode === "Clear") {
                 return  mode = "שמשי";
          } else if (mode === "Clouds") {
           return  mode = "מעונן";
          } else if (mode === "Rain") {
           return  mode = "גשום";
          } else if (mode === "Thunderstorm") {
           return  mode = "סופת רעמים";
          } else if (mode === "Drizzle") {
           return mode = "טפטוף";
          } else if (mode === "Snow") {
             return mode = "שלג";
          }
        }
        

        const sun="sun.png";
        function getIconSun(mode, icon){
         if(mode === "Clear" || mode === "שמשי") {
           return   sun;
         }else{
             return icon;
         }
     }
  
        
           const dataTime = document.getElementById("dataTime");
           const tempTime = document.getElementById("tempTime");
        
           dataTime.innerHTML +=
           "<p>"+dataDay1+'</p>'+"<img src="+getIconSun(weatherDay1,iconDay1)+">"+"<p1>"+getMode(weatherDay1)+"</p1>"+"<p2>"+tempDay1+" ° C"+"</p2>"+"<hr>"+
           "<p>"+dataDay2+'</p>'+"<img src="+getIconSun(weatherDay2,iconDay2)+">"+"<p1>"+getMode(weatherDay2)+"</p1>"+"<p2>"+tempDay2+" ° C"+"</p2>"+"<hr>"+
           "<p>"+dataDay3+'</p>'+"<img src="+getIconSun(weatherDay3,iconDay3)+">"+"<p1>"+getMode(weatherDay3)+"</p1>"+"<p2>"+tempDay3+" ° C"+"</p2>"+"<hr>"+
           "<p>"+dataDay4+'</p>'+"<img src="+getIconSun(weatherDay4,iconDay4)+">"+"<p1>"+getMode(weatherDay4)+"</p1>"+"<p2>"+tempDay4+" ° C"+"</p2>"+"<hr>"+
           "<p>"+dataDay5+'</p>'+"<img src="+getIconSun(weatherDay5,iconDay5)+">"+"<p1>"+getMode(weatherDay5)+"</p1>"+"<p2>"+tempDay5+" ° C"+"</p2>"; 
         
           //   tempTime.innerHTML +=
           //   "<p>"+tempDay1+" ° C"+ "<br>"+getMode(weatherDay1)+"<img src="+iconDay1+">"+'</p>'+
           //    "<p>"+tempDay2+" ° C"+ "<br>"+getMode(weatherDay2)+"<img src="+iconDay2+">"+'</p>'+
           //    "<p>"+tempDay3+" ° C"+ "<br>"+getMode(weatherDay3)+"<img src="+iconDay3+">"+'</p>'+
           //    "<p>"+tempDay4+" ° C"+ "<br>"+getMode(weatherDay4)+"<img src="+iconDay4+">"+'</p>'+
           //    "<p>"+tempDay5+" ° C"+ "<br>"+getMode(weatherDay5)+"<img src="+iconDay5+">"+'</p>';
   




}
fetchData();





function updateBackground() {
  var now = new Date();
  var hour = now.getHours();

  const blackborder=document.querySelector(".black-border");
  // Night time (from 7 PM to 6 AM)
  if (hour >= 20 || hour < 5) {
      document.body.style.backgroundColor = "black";
  }
  // Morning time (from 6 AM to 10 AM)
  else if (hour >= 5 && hour < 17) {
      document.body.style.backgroundColor = "#faf5af";
  }
  // Default background color for the rest of the day
  else {
      document.body.style.backgroundColor = "#f7c4c4";
   
  }
}

// Call the function initially to set the background color
document.addEventListener("DOMContentLoaded", updateBackground);

// Update the background color every minute
setInterval(updateBackground, 60000); // Update every minute