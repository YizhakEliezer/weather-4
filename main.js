let lastAccessTime = 0; 




// //Background color
// function updateBackground() {
//     var now = new Date();
//     var hour = now.getHours();

//     const blackborder=document.querySelector(".black-border");
    
//     // Night time (from 7 PM to 6 AM)
//     if (hour >= 20 || hour < 5) {
//         document.body.style.backgroundColor = "black";
//         document.querySelector('.myHome').style.color = 'rgb(82, 151, 151)';
     
//     }
//     // Morning time (from 6 AM to 10 AM)
//     // else if (hour >= 5 && hour < 12) {
//     //     document.body.style.backgroundColor = "#faf5af";
//     // }

//     else if (hour >= 5 && hour < 8) {
//         document.body.style.backgroundColor = "rgb(183, 206, 233)";
//     }

//     else if (hour >= 8 && hour < 10) {
//         document.body.style.backgroundColor = "rgb(183, 206, 233)";
//     }


//     else if (hour >= 10 && hour < 16) {
//         document.body.style.backgroundColor = "white";
//         document.querySelector('.myHome').style.color = 'white';
//         document.getElementById('clouds').style.opacity = '0.5';
//     }
//     // Default background color for the rest of the day
//     else {
//         // document.body.style.backgroundColor = "#f7c4c4";
//         document.body.style.backgroundColor = "rgb(183, 206, 233)";
//         document.querySelector('.myHome').style.color = 'white';
        
//     }
// }


// // Call the function initially to set the background color
// document.addEventListener("DOMContentLoaded", updateBackground);

// // Update the background color every minute
// setInterval(updateBackground, 60000); // Update every minute








//my home page
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
  



var lat1;
var lag1;



document.addEventListener('DOMContentLoaded', function() {


    // Your JavaScript code here
    async function main() {
        var input = document.getElementById('place-input');
        var inputValue = input.value;
        console.log(input.value);
        await gps();
        await fetchData();
        // Check if the input value is not empty
        if (inputValue !== "") {
            // Execute a certain function
            await gps();
            await fetchData();

        } else {
            // await fetchDataSearch();
            await initAutocomplete();
        }

    }


    async function gps() {
        // Check if the browser supports geolocation
        if (navigator.geolocation) {
            // Get the current position
            navigator.geolocation.getCurrentPosition(async function(position) {
                // Extract latitude and longitude from the position object
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
    
                // Construct API URL with latitude, longitude, and API key
                const apiKey = 'dcf36bad979cb7811d2a97058a2ccbf2';
                const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    
                try {
                    // Fetch weather data
                    const response = await fetch(apiUrl);
                    const data = await response.json();
    
                    const convertTDegreesCelsius = data.main.temp - 273.15;
                    const formattedNumberTemp = convertTDegreesCelsius.toFixed(1);
                    let mode = data.weather[0].main;
                    let icon="https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";


                    var now = new Date();
                    var hour = now.getHours();
                   
                    
    
                    // Handle weather conditions
                    if (mode === "Clear") {
                        mode = "בהיר";

                      document.getElementById('background-videoClouds').style.display = 'none';
                      document.getElementById('background-videoRain').style.display = 'none';
                      document.getElementById('background-videoSnow').style.display = 'none';

                      if (hour >= 5 && hour < 7) {
                        document.getElementById('backgroundvideoSunset').style.display = 'block';
                              document.getElementById('backgroundvideoMoon').style.display = 'none';
                                 document.getElementById('background-videoSun').style.display = 'none';
                    }
                    else if (hour >= 7 && hour < 16) {
                        document.getElementById('background-videoSun').style.display = 'block';
                            document.getElementById('backgroundvideoMoon').style.display = 'none';
                             document.getElementById('backgroundvideoSunset').style.display = 'none';
                    }
                    else if (hour >= 16 && hour < 19) {
                        document.getElementById('backgroundvideoSunset').style.display = 'block';
                          document.getElementById('backgroundvideoMoon').style.display = 'none';
                                 document.getElementById('background-videoSun').style.display = 'none';
                    }
                     else if (hour >= 19 && hour < 5) {
                        document.getElementById('backgroundvideoMoon').style.display = 'block';
                             document.getElementById('background-videoSun').style.display = 'none';
                             document.getElementById('backgroundvideoSunset').style.display = 'none';
                    }

                    } else if (mode === "Clouds") {
                        mode = "מעונן";
                        document.getElementById('background-videoClouds').style.display = 'block';
                        document.getElementById('background-videoSun').style.display = 'none';
                        document.getElementById('background-videoRain').style.display = 'none';
                        document.getElementById('background-videoSnow').style.display = 'none';
                            document.getElementById('backgroundvideoMoon').style.display = 'none';
                             document.getElementById('backgroundvideoSunset').style.display = 'none';
                    } else if (mode === "Rain") {
                        mode = "גשום";
                      document.getElementById('background-videoRain').style.display = 'block';
                      document.getElementById('background-videoClouds').style.display = 'none';
                      document.getElementById('background-videoSun').style.display = 'none';
                      document.getElementById('background-videoSnow').style.display = 'none';
                            document.getElementById('backgroundvideoMoon').style.display = 'none';
                             document.getElementById('backgroundvideoSunset').style.display = 'none';
                    } else if (mode === "Thunderstorm") {
                        mode = "סופת רעמים";
                    } else if (mode === "Drizzle") {
                        mode = "טפטוף";
                    } else if (mode === "Snow") {
                        mode = "שלג";
                     document.getElementById('background-videoSnow').style.display = 'block';
                     document.getElementById('background-videoSun').style.display = 'none';
                     document.getElementById('background-videoClouds').style.display = 'none';
                     document.getElementById('background-videoRain').style.display = 'none';
                            document.getElementById('backgroundvideoMoon').style.display = 'none';
                             document.getElementById('backgroundvideoSunset').style.display = 'none';
                    }
    
                    // Log data to console
                    console.log(data);
                    console.log(formattedNumberTemp);
                    console.log(icon);
    
    
    
                    const sun="sun.png";
                    const moon="moon.png";
                    const sunset="sunset.png";
                    function getIconSun(mode, icon){
                     if(mode === "Clear" || mode === "בהיר") {
                        if (hour >= 5 && hour < 7) {
                            return   sunset;
                        }
                        else if (hour >= 7 && hour < 16) {
                            return   sun;
                        }
                        else if (hour >= 16 && hour < 19) {
                            return   sunset ;
                        }
                         else if (hour >= 19 && hour < 5) {
                            return   moon;
                        }
                       
                     }else{
                         return icon;
                     }
                 }
    
    
                    // Display weather information on the webpage
                    let weatherInMyHomeKarneyShomron=document.querySelector(".black-border");
                    weatherInMyHomeKarneyShomron.innerHTML="מזג האוויר במיקום שלי הוא"
                    weatherInMyHomeKarneyShomron.innerHTML+="<br>"+formattedNumberTemp+ "°C"+"<br>"+mode+"<br>";
                    weatherInMyHomeKarneyShomron.innerHTML+="<img src="+getIconSun(mode,icon)+">";
    
                } catch (error) {
                    console.error('Error fetching weather data:', error);
                }
            }, function(error) {
                // Handle errors when retrieving the location
                console.error('Error getting location:', error);
            });
        } else {
            // Geolocation is not supported by this browser
            console.log('Geolocation is not supported by this browser.');
        }
    }


    async function fetchData() {


        if (navigator.geolocation) {
         // Get the current position
         navigator.geolocation.getCurrentPosition(async function(position) {
             // Extract latitude and longitude from the position object
             const latitude = position.coords.latitude;
             const longitude = position.coords.longitude;
   
             // Construct API URL with latitude, longitude, and API key
             const apiKey = 'dcf36bad979cb7811d2a97058a2ccbf2';
             const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
             try {
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
                       return  mode = "בהיר";
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
               if(mode === "Clear" || mode === "בהיר") {
                 return   sun;
               }else{
                   return icon;
               }
           }
        
              
                 const dataTime = document.getElementById("dataTime");
                 const tempTime = document.getElementById("tempTime");


                
                 let currentDate1 = new Date();
                 currentDate1.setDate(currentDate1.getDate() + 1);
                 let formattedDate1 = currentDate1.toLocaleDateString('he-IL',{ month: "numeric", day: "2-digit", timeZone: 'Asia/Jerusalem' });
                
                 let currentDate2 = new Date();
                 currentDate2.setDate(currentDate2.getDate() + 2);
                 let formattedDate2 = currentDate2.toLocaleDateString('he-IL',{ month: "numeric", day: "2-digit", timeZone: 'Asia/Jerusalem' });
                
                 let currentDate3 = new Date();
                 currentDate3.setDate(currentDate3.getDate() + 3);
                 let formattedDate3 = currentDate3.toLocaleDateString('he-IL',{ month: "numeric", day: "2-digit", timeZone: 'Asia/Jerusalem' });
                 
                 let currentDate4 = new Date();
                 currentDate4.setDate(currentDate4.getDate() + 4);
                 let formattedDate4 = currentDate4.toLocaleDateString('he-IL', { month: "numeric", day: "2-digit", timeZone: 'Asia/Jerusalem' });
                
                 let currentDate5 = new Date();
                 currentDate5.setDate(currentDate5.getDate() + 5);
                 let formattedDate5 = currentDate5.toLocaleDateString('he-IL', { month: "numeric", day: "2-digit", timeZone: 'Asia/Jerusalem' });
              
                 dataTime.innerHTML =
                 "<p>"+formattedDate1+'</p>'+"<img src="+getIconSun(weatherDay1,iconDay1)+">"+"<p1>"+getMode(weatherDay1)+"</p1>"+"<p2>"+tempDay1+" ° C"+"</p2>"+"<hr>"+
                 "<p>"+formattedDate2+'</p>'+"<img src="+getIconSun(weatherDay2,iconDay2)+">"+"<p1>"+getMode(weatherDay2)+"</p1>"+"<p2>"+tempDay2+" ° C"+"</p2>"+"<hr>"+
                 "<p>"+formattedDate3+'</p>'+"<img src="+getIconSun(weatherDay3,iconDay3)+">"+"<p1>"+getMode(weatherDay3)+"</p1>"+"<p2>"+tempDay3+" ° C"+"</p2>"+"<hr>"+
                 "<p>"+formattedDate4+'</p>'+"<img src="+getIconSun(weatherDay4,iconDay4)+">"+"<p1>"+getMode(weatherDay4)+"</p1>"+"<p2>"+tempDay4+" ° C"+"</p2>"+"<hr>"+
                 "<p>"+formattedDate5+'</p>'+"<img src="+getIconSun(weatherDay5,iconDay5)+">"+"<p1>"+getMode(weatherDay5)+"</p1>"+"<p2>"+tempDay5+" ° C"+"</p2>"; 
               
              
               //   tempTime.innerHTML +=
               //   "<p>"+tempDay1+" ° C"+ "<br>"+getMode(weatherDay1)+"<img src="+iconDay1+">"+'</p>'+
               //    "<p>"+tempDay2+" ° C"+ "<br>"+getMode(weatherDay2)+"<img src="+iconDay2+">"+'</p>'+
               //    "<p>"+tempDay3+" ° C"+ "<br>"+getMode(weatherDay3)+"<img src="+iconDay3+">"+'</p>'+
               //    "<p>"+tempDay4+" ° C"+ "<br>"+getMode(weatherDay4)+"<img src="+iconDay4+">"+'</p>'+
               //    "<p>"+tempDay5+" ° C"+ "<br>"+getMode(weatherDay5)+"<img src="+iconDay5+">"+'</p>';
             } catch (error) {
                 console.error('Error fetching weather data:', error);
             }
         }, function(error) {
             // Handle errors when retrieving the location
             console.error('Error getting location:', error);
         });
     } else {
         // Geolocation is not supported by this browser
         console.log('Geolocation is not supported by this browser.');
     }
   
   
   
    }


    async function initAutocomplete() {
        var input = document.getElementById('place-input');
        var autocomplete = new google.maps.places.Autocomplete(input);
        
        autocomplete.addListener('place_changed', async function() {
            var place = autocomplete.getPlace();
            var placeId = place.place_id;
            var lat = place.geometry.location.lat();
            var lng = place.geometry.location.lng();
             lat1=lat;
             lag1=lng;
      
            // console.log('Place ID:', placeId);
            console.log('Latitude:', lat);
            console.log('Longitude:', lng);

            const apiKey = 'dcf36bad979cb7811d2a97058a2ccbf2';
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`;

            try {
                // Fetch weather data
                const response = await fetch(apiUrl);
                const data = await response.json();
    
                const convertTDegreesCelsius = data.main.temp - 273.15;
                const formattedNumberTemp = convertTDegreesCelsius.toFixed(1);
                let mode = data.weather[0].main;
                let icon="https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";

                var now = new Date();
                var hour = now.getHours();
    
                                    // Handle weather conditions
                    if (mode === "Clear") {
                        mode = "בהיר";

                      document.getElementById('background-videoClouds').style.display = 'none';
                      document.getElementById('background-videoRain').style.display = 'none';
                      document.getElementById('background-videoSnow').style.display = 'none';

                      if (hour >= 5 && hour < 7) {
                        document.getElementById('backgroundvideoSunset').style.display = 'block';
                              document.getElementById('backgroundvideoMoon').style.display = 'none';
                                 document.getElementById('background-videoSun').style.display = 'none';
                    }
                    else if (hour >= 7 && hour < 16) {
                        document.getElementById('background-videoSun').style.display = 'block';
                            document.getElementById('backgroundvideoMoon').style.display = 'none';
                             document.getElementById('backgroundvideoSunset').style.display = 'none';
                    }
                    else if (hour >= 16 && hour < 19) {
                        document.getElementById('backgroundvideoSunset').style.display = 'block';
                          document.getElementById('backgroundvideoMoon').style.display = 'none';
                                 document.getElementById('background-videoSun').style.display = 'none';
                    }
                     else if (hour >= 19 && hour < 5) {
                        document.getElementById('backgroundvideoMoon').style.display = 'block';
                             document.getElementById('background-videoSun').style.display = 'none';
                             document.getElementById('backgroundvideoSunset').style.display = 'none';
                    }

                    } else if (mode === "Clouds") {
                        mode = "מעונן";
                        document.getElementById('background-videoClouds').style.display = 'block';
                        document.getElementById('background-videoSun').style.display = 'none';
                        document.getElementById('background-videoRain').style.display = 'none';
                        document.getElementById('background-videoSnow').style.display = 'none';
                            document.getElementById('backgroundvideoMoon').style.display = 'none';
                             document.getElementById('backgroundvideoSunset').style.display = 'none';
                    } else if (mode === "Rain") {
                        mode = "גשום";
                      document.getElementById('background-videoRain').style.display = 'block';
                      document.getElementById('background-videoClouds').style.display = 'none';
                      document.getElementById('background-videoSun').style.display = 'none';
                      document.getElementById('background-videoSnow').style.display = 'none';
                            document.getElementById('backgroundvideoMoon').style.display = 'none';
                             document.getElementById('backgroundvideoSunset').style.display = 'none';
                    } else if (mode === "Thunderstorm") {
                        mode = "סופת רעמים";
                    } else if (mode === "Drizzle") {
                        mode = "טפטוף";
                    } else if (mode === "Snow") {
                        mode = "שלג";
                     document.getElementById('background-videoSnow').style.display = 'block';
                     document.getElementById('background-videoSun').style.display = 'none';
                     document.getElementById('background-videoClouds').style.display = 'none';
                     document.getElementById('background-videoRain').style.display = 'none';
                            document.getElementById('backgroundvideoMoon').style.display = 'none';
                             document.getElementById('backgroundvideoSunset').style.display = 'none';
                    }

                
                // Log data to console
                console.log(data);
                console.log(formattedNumberTemp);
                console.log(icon);



                const sun="sun.png";
                const moon="moon.png";
                const sunset="sunset.png";
                function getIconSun(mode, icon){
                 if(mode === "Clear" || mode === "בהיר") {
                    if (hour >= 5 && hour < 7) {
                        return   sunset;
                    }
                    else if (hour >= 7 && hour < 16) {
                        return   sun;
                    }
                    else if (hour >= 16 && hour < 19) {
                        return   sunset ;
                    }
                     else if (hour >= 19 && hour < 5) {
                        return   moon;
                    }
                   
                 }else{
                     return icon;
                 }
             }
    
    
                // Display weather information on the webpage
                let weatherInMyHomeKarneyShomron=document.querySelector(".black-border");
                weatherInMyHomeKarneyShomron.innerHTML="מזג באוויר במיקום שנבחר";
                weatherInMyHomeKarneyShomron.innerHTML+="<br>"+formattedNumberTemp+ "°C"+"<br>"+mode+"<br>";
                weatherInMyHomeKarneyShomron.innerHTML+="<img src="+getIconSun(mode,icon)+">";
    
            }
            
            catch (error) {
                console.error('Error fetching weather data:', error);
            }




            const apiKey1 = 'dcf36bad979cb7811d2a97058a2ccbf2';
            const apiUrl1 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${apiKey1}`;
    
             try {
                 // Fetch weather data
                 const re = await fetch(apiUrl1);
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
                       return  mode = "בהיר";
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
               if(mode === "Clear" || mode === "בהיר") {
                 return   sun;
               }else{
                   return icon;
               }
           }
        
              
                 const dataTime = document.getElementById("dataTime");
                 const tempTime = document.getElementById("tempTime");
              
                 let currentDate1 = new Date();
                 currentDate1.setDate(currentDate1.getDate() + 1);
                 let formattedDate1 = currentDate1.toLocaleDateString('he-IL', { month: "numeric", day: "2-digit", timeZone: 'Asia/Jerusalem' });
                
                 let currentDate2 = new Date();
                 currentDate2.setDate(currentDate2.getDate() + 2);
                 let formattedDate2 = currentDate2.toLocaleDateString('he-IL', { month: "numeric", day: "2-digit", timeZone: 'Asia/Jerusalem' });
                
                 let currentDate3 = new Date();
                 currentDate3.setDate(currentDate3.getDate() + 3);
                 let formattedDate3 = currentDate3.toLocaleDateString('he-IL',{ month: "numeric", day: "2-digit", timeZone: 'Asia/Jerusalem' });
                 
                 let currentDate4 = new Date();
                 currentDate4.setDate(currentDate4.getDate() + 4);
                 let formattedDate4 = currentDate4.toLocaleDateString('he-IL', { month: "numeric", day: "2-digit", timeZone: 'Asia/Jerusalem' });
                
                 let currentDate5 = new Date();
                 currentDate5.setDate(currentDate5.getDate() + 5);
                 let formattedDate5 = currentDate5.toLocaleDateString('he-IL', { month: "numeric", day: "2-digit", timeZone: 'Asia/Jerusalem' });

              
                 dataTime.innerHTML =
                 "<p>"+formattedDate1+'</p>'+"<img src="+getIconSun(weatherDay1,iconDay1)+">"+"<p1>"+getMode(weatherDay1)+"</p1>"+"<p2>"+tempDay1+" ° C"+"</p2>"+"<hr>"+
                 "<p>"+formattedDate2+'</p>'+"<img src="+getIconSun(weatherDay2,iconDay2)+">"+"<p1>"+getMode(weatherDay2)+"</p1>"+"<p2>"+tempDay2+" ° C"+"</p2>"+"<hr>"+
                 "<p>"+formattedDate3+'</p>'+"<img src="+getIconSun(weatherDay3,iconDay3)+">"+"<p1>"+getMode(weatherDay3)+"</p1>"+"<p2>"+tempDay3+" ° C"+"</p2>"+"<hr>"+
                 "<p>"+formattedDate4+'</p>'+"<img src="+getIconSun(weatherDay4,iconDay4)+">"+"<p1>"+getMode(weatherDay4)+"</p1>"+"<p2>"+tempDay4+" ° C"+"</p2>"+"<hr>"+
                 "<p>"+formattedDate5+'</p>'+"<img src="+getIconSun(weatherDay5,iconDay5)+">"+"<p1>"+getMode(weatherDay5)+"</p1>"+"<p2>"+tempDay5+" ° C"+"</p2>"; 
               
     
             }
             catch (error) {
                console.error('Error fetching weather data:', error);
            }
        });
    }

    // async function fetchDataSearch() {

    //     // var input = document.getElementById('place-input');
    //     // var autocomplete = new google.maps.places.Autocomplete(input);
    //     // autocomplete.addListener('place_changed', async function() {
    //         // var place = autocomplete.getPlace();
    //         // var placeId = place.place_id;
    //         // var lat = place.geometry.location.lat();
    //         // var lng = place.geometry.location.lng();
    
    //               console.log("latttttt"+lat1);
    //              console.log("latggggggg"+lag1);
    //         const apiKey = 'dcf36bad979cb7811d2a97058a2ccbf2';
    //         const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat1}&lon=${lag1}&appid=${apiKey}`;
    
    //          try {
    //              // Fetch weather data
    //              const re = await fetch(apiUrl);
    //              const data = await re.json();
    //              console.log(data);
              
              
    //              const dataDay1=data.list[5].dt_txt.substring(6, 10);
    //              const tempDay1=(data.list[5].main.temp - 273.15).toFixed(1);
    //              const weatherDay1=data.list[5].weather[0].main;
    //              const iconDay1="https://openweathermap.org/img/wn/"+data.list[5].weather[0].icon+"@2x.png";
              
    //              const dataDay2=data.list[13].dt_txt.substring(6, 10);
    //              const tempDay2=(data.list[13].main.temp - 273.15).toFixed(1);
    //              const weatherDay2=data.list[13].weather[0].main;
    //              const iconDay2="https://openweathermap.org/img/wn/"+data.list[13].weather[0].icon+"@2x.png";
              
    //              const dataDay3=data.list[21].dt_txt.substring(6, 10);
    //              const tempDay3=(data.list[21].main.temp - 273.15).toFixed(1);
    //              const weatherDay3=data.list[21].weather[0].main;
    //              const iconDay3="https://openweathermap.org/img/wn/"+data.list[21].weather[0].icon+"@2x.png";
              
    //              const dataDay4=data.list[29].dt_txt.substring(6, 10);
    //              const tempDay4=(data.list[29].main.temp - 273.15).toFixed(1);
    //              const weatherDay4=data.list[29].weather[0].main;
    //              const iconDay4="https://openweathermap.org/img/wn/"+data.list[29].weather[0].icon+"@2x.png";
              
    //              const dataDay5=data.list[37].dt_txt.substring(6, 10);
    //              const tempDay5=(data.list[37].main.temp - 273.15).toFixed(1);
    //              const weatherDay5=data.list[37].weather[0].main;
    //              const iconDay5="https://openweathermap.org/img/wn/"+data.list[37].weather[0].icon+"@2x.png";
                 
                 
              
               
              
    //           function getMode(mode){
    //                 if (mode === "Clear") {
    //                    return  mode = "שמשי";
    //             } else if (mode === "Clouds") {
    //              return  mode = "מעונן";
    //             } else if (mode === "Rain") {
    //              return  mode = "גשום";
    //             } else if (mode === "Thunderstorm") {
    //              return  mode = "סופת רעמים";
    //             } else if (mode === "Drizzle") {
    //              return mode = "טפטוף";
    //             } else if (mode === "Snow") {
    //                return mode = "שלג";
    //             }
    //           }
              
    
    //           const sun="sun.png";
    //           function getIconSun(mode, icon){
    //            if(mode === "Clear" || mode === "שמשי") {
    //              return   sun;
    //            }else{
    //                return icon;
    //            }
    //        }
        
              
    //              const dataTime = document.getElementById("dataTime");
    //              const tempTime = document.getElementById("tempTime");
              
    //              let currentDate1 = new Date();
    //              currentDate1.setDate(currentDate1.getDate() + 1);
    //              let formattedDate1 = currentDate1.toLocaleDateString('he-IL', { timeZone: 'Asia/Jerusalem' }).substring(0,3);
    //              let currentDate2 = new Date();
    //              currentDate2.setDate(currentDate2.getDate() + 2);
    //              let formattedDate2 = currentDate2.toLocaleDateString('he-IL', { timeZone: 'Asia/Jerusalem' }).substring(0,3);
    //              let currentDate3 = new Date();
    //              currentDate3.setDate(currentDate3.getDate() + 3);
    //              let formattedDate3 = currentDate3.toLocaleDateString('he-IL', { timeZone: 'Asia/Jerusalem' }).substring(0,3);
    //              let currentDate4 = new Date();
    //              currentDate4.setDate(currentDate4.getDate() + 4);
    //              let formattedDate4 = currentDate4.toLocaleDateString('he-IL', { timeZone: 'Asia/Jerusalem' }).substring(0,3);
    //              let currentDate5 = new Date();
    //              currentDate5.setDate(currentDate5.getDate() + 5);
    //              let formattedDate5 = currentDate5.toLocaleDateString('he-IL', { timeZone: 'Asia/Jerusalem' }).substring(0,3);

              
    //              dataTime.innerHTML =
    //              "<p>"+formattedDate1+'</p>'+"<img src="+getIconSun(weatherDay1,iconDay1)+">"+"<p1>"+getMode(weatherDay1)+"</p1>"+"<p2>"+tempDay1+" ° C"+"</p2>"+"<hr>"+
    //              "<p>"+formattedDate2+'</p>'+"<img src="+getIconSun(weatherDay2,iconDay2)+">"+"<p1>"+getMode(weatherDay2)+"</p1>"+"<p2>"+tempDay2+" ° C"+"</p2>"+"<hr>"+
    //              "<p>"+formattedDate3+'</p>'+"<img src="+getIconSun(weatherDay3,iconDay3)+">"+"<p1>"+getMode(weatherDay3)+"</p1>"+"<p2>"+tempDay3+" ° C"+"</p2>"+"<hr>"+
    //              "<p>"+formattedDate4+'</p>'+"<img src="+getIconSun(weatherDay4,iconDay4)+">"+"<p1>"+getMode(weatherDay4)+"</p1>"+"<p2>"+tempDay4+" ° C"+"</p2>"+"<hr>"+
    //              "<p>"+formattedDate5+'</p>'+"<img src="+getIconSun(weatherDay5,iconDay5)+">"+"<p1>"+getMode(weatherDay5)+"</p1>"+"<p2>"+tempDay5+" ° C"+"</p2>"; 
               
     
    //          }
    //          catch (error) {
    //             console.error('Error fetching weather data:', error);
    //         }


    //     // }
    //     // );
    // }

    // Call the main function when the page is loaded
    main();


    // Call the main function when the input value changes
    document.getElementById('place-input').addEventListener('input',main );
});









































// document.addEventListener('DOMContentLoaded', function() {
//     // Your JavaScript code here
  
//     async function main() {
//         var input = document.getElementById('place-input');
//         var inputValue = input.value;
//         console.log(input.value);
//         await fetchData();
//         // // Check if the input value is not empty
//         if (inputValue !== "") {
//             // Execute a certain function
//             await fetchData();

//         } 
//         else {
//             await fetchDataSearch();

//         }

//     }

//     async function fetchData() {


//         if (navigator.geolocation) {
//          // Get the current position
//          navigator.geolocation.getCurrentPosition(async function(position) {
//              // Extract latitude and longitude from the position object
//              const latitude = position.coords.latitude;
//              const longitude = position.coords.longitude;
   
//              // Construct API URL with latitude, longitude, and API key
//              const apiKey = 'dcf36bad979cb7811d2a97058a2ccbf2';
//              const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
//              try {
//                  // Fetch weather data
//                  const re = await fetch(apiUrl);
//                  const data = await re.json();
//                  console.log(data);
              
              
//                  const dataDay1=data.list[5].dt_txt.substring(6, 10);
//                  const tempDay1=(data.list[5].main.temp - 273.15).toFixed(1);
//                  const weatherDay1=data.list[5].weather[0].main;
//                  const iconDay1="https://openweathermap.org/img/wn/"+data.list[5].weather[0].icon+"@2x.png";
              
//                  const dataDay2=data.list[13].dt_txt.substring(6, 10);
//                  const tempDay2=(data.list[13].main.temp - 273.15).toFixed(1);
//                  const weatherDay2=data.list[13].weather[0].main;
//                  const iconDay2="https://openweathermap.org/img/wn/"+data.list[13].weather[0].icon+"@2x.png";
              
//                  const dataDay3=data.list[21].dt_txt.substring(6, 10);
//                  const tempDay3=(data.list[21].main.temp - 273.15).toFixed(1);
//                  const weatherDay3=data.list[21].weather[0].main;
//                  const iconDay3="https://openweathermap.org/img/wn/"+data.list[21].weather[0].icon+"@2x.png";
              
//                  const dataDay4=data.list[29].dt_txt.substring(6, 10);
//                  const tempDay4=(data.list[29].main.temp - 273.15).toFixed(1);
//                  const weatherDay4=data.list[29].weather[0].main;
//                  const iconDay4="https://openweathermap.org/img/wn/"+data.list[29].weather[0].icon+"@2x.png";
              
//                  const dataDay5=data.list[37].dt_txt.substring(6, 10);
//                  const tempDay5=(data.list[37].main.temp - 273.15).toFixed(1);
//                  const weatherDay5=data.list[37].weather[0].main;
//                  const iconDay5="https://openweathermap.org/img/wn/"+data.list[37].weather[0].icon+"@2x.png";
                 
                 
              
               
              
//               function getMode(mode){
//                     if (mode === "Clear") {
//                        return  mode = "שמשי";
//                 } else if (mode === "Clouds") {
//                  return  mode = "מעונן";
//                 } else if (mode === "Rain") {
//                  return  mode = "גשום";
//                 } else if (mode === "Thunderstorm") {
//                  return  mode = "סופת רעמים";
//                 } else if (mode === "Drizzle") {
//                  return mode = "טפטוף";
//                 } else if (mode === "Snow") {
//                    return mode = "שלג";
//                 }
//               }
              
   
//               const sun="sun.png";
//               function getIconSun(mode, icon){
//                if(mode === "Clear" || mode === "שמשי") {
//                  return   sun;
//                }else{
//                    return icon;
//                }
//            }
        
              
//                  const dataTime = document.getElementById("dataTime");
//                  const tempTime = document.getElementById("tempTime");


                
//                  let currentDate1 = new Date();
//                  currentDate1.setDate(currentDate1.getDate() + 1);
//                  let formattedDate1 = currentDate1.toLocaleDateString('he-IL', { timeZone: 'Asia/Jerusalem' }).substring(0,3);
//                  let currentDate2 = new Date();
//                  currentDate2.setDate(currentDate2.getDate() + 2);
//                  let formattedDate2 = currentDate2.toLocaleDateString('he-IL', { timeZone: 'Asia/Jerusalem' }).substring(0,3);
//                  let currentDate3 = new Date();
//                  currentDate3.setDate(currentDate3.getDate() + 3);
//                  let formattedDate3 = currentDate3.toLocaleDateString('he-IL', { timeZone: 'Asia/Jerusalem' }).substring(0,3);
//                  let currentDate4 = new Date();
//                  currentDate4.setDate(currentDate4.getDate() + 4);
//                  let formattedDate4 = currentDate4.toLocaleDateString('he-IL', { timeZone: 'Asia/Jerusalem' }).substring(0,3);
//                  let currentDate5 = new Date();
//                  currentDate5.setDate(currentDate5.getDate() + 5);
//                  let formattedDate5 = currentDate5.toLocaleDateString('he-IL', { timeZone: 'Asia/Jerusalem' }).substring(0,3);

              
//                  dataTime.innerHTML =
//                  "<p>"+formattedDate1+'</p>'+"<img src="+getIconSun(weatherDay1,iconDay1)+">"+"<p1>"+getMode(weatherDay1)+"</p1>"+"<p2>"+tempDay1+" ° C"+"</p2>"+"<hr>"+
//                  "<p>"+formattedDate2+'</p>'+"<img src="+getIconSun(weatherDay2,iconDay2)+">"+"<p1>"+getMode(weatherDay2)+"</p1>"+"<p2>"+tempDay2+" ° C"+"</p2>"+"<hr>"+
//                  "<p>"+formattedDate3+'</p>'+"<img src="+getIconSun(weatherDay3,iconDay3)+">"+"<p1>"+getMode(weatherDay3)+"</p1>"+"<p2>"+tempDay3+" ° C"+"</p2>"+"<hr>"+
//                  "<p>"+formattedDate4+'</p>'+"<img src="+getIconSun(weatherDay4,iconDay4)+">"+"<p1>"+getMode(weatherDay4)+"</p1>"+"<p2>"+tempDay4+" ° C"+"</p2>"+"<hr>"+
//                  "<p>"+formattedDate5+'</p>'+"<img src="+getIconSun(weatherDay5,iconDay5)+">"+"<p1>"+getMode(weatherDay5)+"</p1>"+"<p2>"+tempDay5+" ° C"+"</p2>"; 
               
              
//                //   tempTime.innerHTML +=
//                //   "<p>"+tempDay1+" ° C"+ "<br>"+getMode(weatherDay1)+"<img src="+iconDay1+">"+'</p>'+
//                //    "<p>"+tempDay2+" ° C"+ "<br>"+getMode(weatherDay2)+"<img src="+iconDay2+">"+'</p>'+
//                //    "<p>"+tempDay3+" ° C"+ "<br>"+getMode(weatherDay3)+"<img src="+iconDay3+">"+'</p>'+
//                //    "<p>"+tempDay4+" ° C"+ "<br>"+getMode(weatherDay4)+"<img src="+iconDay4+">"+'</p>'+
//                //    "<p>"+tempDay5+" ° C"+ "<br>"+getMode(weatherDay5)+"<img src="+iconDay5+">"+'</p>';
//              } catch (error) {
//                  console.error('Error fetching weather data:', error);
//              }
//          }, function(error) {
//              // Handle errors when retrieving the location
//              console.error('Error getting location:', error);
//          });
//      } else {
//          // Geolocation is not supported by this browser
//          console.log('Geolocation is not supported by this browser.');
//      }
   
   
   
//     }

//     async function fetchDataSearch() {

//         var input = document.getElementById('place-input');
//         var autocomplete = new google.maps.places.Autocomplete(input);
//         autocomplete.addListener('place_changed', async function() {
//             var place = autocomplete.getPlace();
//             var placeId = place.place_id;
//             var lat = place.geometry.location.lat();
//             var lng = place.geometry.location.lng();
    
   
//             const apiKey = 'dcf36bad979cb7811d2a97058a2ccbf2';
//             const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${apiKey}`;
    
//              try {
//                  // Fetch weather data
//                  const re = await fetch(apiUrl);
//                  const data = await re.json();
//                  console.log(data);
              
              
//                  const dataDay1=data.list[5].dt_txt.substring(6, 10);
//                  const tempDay1=(data.list[5].main.temp - 273.15).toFixed(1);
//                  const weatherDay1=data.list[5].weather[0].main;
//                  const iconDay1="https://openweathermap.org/img/wn/"+data.list[5].weather[0].icon+"@2x.png";
              
//                  const dataDay2=data.list[13].dt_txt.substring(6, 10);
//                  const tempDay2=(data.list[13].main.temp - 273.15).toFixed(1);
//                  const weatherDay2=data.list[13].weather[0].main;
//                  const iconDay2="https://openweathermap.org/img/wn/"+data.list[13].weather[0].icon+"@2x.png";
              
//                  const dataDay3=data.list[21].dt_txt.substring(6, 10);
//                  const tempDay3=(data.list[21].main.temp - 273.15).toFixed(1);
//                  const weatherDay3=data.list[21].weather[0].main;
//                  const iconDay3="https://openweathermap.org/img/wn/"+data.list[21].weather[0].icon+"@2x.png";
              
//                  const dataDay4=data.list[29].dt_txt.substring(6, 10);
//                  const tempDay4=(data.list[29].main.temp - 273.15).toFixed(1);
//                  const weatherDay4=data.list[29].weather[0].main;
//                  const iconDay4="https://openweathermap.org/img/wn/"+data.list[29].weather[0].icon+"@2x.png";
              
//                  const dataDay5=data.list[37].dt_txt.substring(6, 10);
//                  const tempDay5=(data.list[37].main.temp - 273.15).toFixed(1);
//                  const weatherDay5=data.list[37].weather[0].main;
//                  const iconDay5="https://openweathermap.org/img/wn/"+data.list[37].weather[0].icon+"@2x.png";
                 
                 
              
               
              
//               function getMode(mode){
//                     if (mode === "Clear") {
//                        return  mode = "שמשי";
//                 } else if (mode === "Clouds") {
//                  return  mode = "מעונן";
//                 } else if (mode === "Rain") {
//                  return  mode = "גשום";
//                 } else if (mode === "Thunderstorm") {
//                  return  mode = "סופת רעמים";
//                 } else if (mode === "Drizzle") {
//                  return mode = "טפטוף";
//                 } else if (mode === "Snow") {
//                    return mode = "שלג";
//                 }
//               }
              
    
//               const sun="sun.png";
//               function getIconSun(mode, icon){
//                if(mode === "Clear" || mode === "שמשי") {
//                  return   sun;
//                }else{
//                    return icon;
//                }
//            }
        
              
//                  const dataTime = document.getElementById("dataTime");
//                  const tempTime = document.getElementById("tempTime");
              
//                  let currentDate1 = new Date();
//                  currentDate1.setDate(currentDate1.getDate() + 1);
//                  let formattedDate1 = currentDate1.toLocaleDateString('he-IL', { timeZone: 'Asia/Jerusalem' }).substring(0,3);
//                  let currentDate2 = new Date();
//                  currentDate2.setDate(currentDate2.getDate() + 2);
//                  let formattedDate2 = currentDate2.toLocaleDateString('he-IL', { timeZone: 'Asia/Jerusalem' }).substring(0,3);
//                  let currentDate3 = new Date();
//                  currentDate3.setDate(currentDate3.getDate() + 3);
//                  let formattedDate3 = currentDate3.toLocaleDateString('he-IL', { timeZone: 'Asia/Jerusalem' }).substring(0,3);
//                  let currentDate4 = new Date();
//                  currentDate4.setDate(currentDate4.getDate() + 4);
//                  let formattedDate4 = currentDate4.toLocaleDateString('he-IL', { timeZone: 'Asia/Jerusalem' }).substring(0,3);
//                  let currentDate5 = new Date();
//                  currentDate5.setDate(currentDate5.getDate() + 5);
//                  let formattedDate5 = currentDate5.toLocaleDateString('he-IL', { timeZone: 'Asia/Jerusalem' }).substring(0,3);

              
//                  dataTime.innerHTML =
//                  "<p>"+formattedDate1+'</p>'+"<img src="+getIconSun(weatherDay1,iconDay1)+">"+"<p1>"+getMode(weatherDay1)+"</p1>"+"<p2>"+tempDay1+" ° C"+"</p2>"+"<hr>"+
//                  "<p>"+formattedDate2+'</p>'+"<img src="+getIconSun(weatherDay2,iconDay2)+">"+"<p1>"+getMode(weatherDay2)+"</p1>"+"<p2>"+tempDay2+" ° C"+"</p2>"+"<hr>"+
//                  "<p>"+formattedDate3+'</p>'+"<img src="+getIconSun(weatherDay3,iconDay3)+">"+"<p1>"+getMode(weatherDay3)+"</p1>"+"<p2>"+tempDay3+" ° C"+"</p2>"+"<hr>"+
//                  "<p>"+formattedDate4+'</p>'+"<img src="+getIconSun(weatherDay4,iconDay4)+">"+"<p1>"+getMode(weatherDay4)+"</p1>"+"<p2>"+tempDay4+" ° C"+"</p2>"+"<hr>"+
//                  "<p>"+formattedDate5+'</p>'+"<img src="+getIconSun(weatherDay5,iconDay5)+">"+"<p1>"+getMode(weatherDay5)+"</p1>"+"<p2>"+tempDay5+" ° C"+"</p2>"; 
               
     
//              }
//              catch (error) {
//                 console.error('Error fetching weather data:', error);
//             }


//         }
//         );
//     }
    

//     // Call the main function when the page is loaded
//     main();

//     // Call the main function when the input value changes
//     document.getElementById('place-input').addEventListener('input',main);
// });






