// document.addEventListener('DOMContentLoaded', function() {
//     // Your JavaScript code here
//     async function main() {
//         var input = document.getElementById('place-input');
//         var inputValue = input.value;
//         console.log(input.value);
//         await fetchData();
//         // Check if the input value is not empty
//         if (inputValue !== "") {
//             // Execute a certain function
//             await fetchData();

//         } else {
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
//         });
//     }
    

//     // Call the main function when the page is loaded
//     main();

//     // Call the main function when the input value changes
//     document.getElementById('place-input').addEventListener('input',main );
// });
