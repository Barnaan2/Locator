window.onload = ()=>{
    if(navigator.geolocation){  navigator.geolocation.getCurrentPosition(search);}
  };

let  map = L.map('map').setView([3.5399846,39.0528407], 13);

googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'],
    attribution: '&copy; <a href="https://www.github.com/barnaan2">Bernabas Tekkalign</a>'
}).addTo(map);
  function search(value){
    alert(` latitude point is  ${value.coords.latitude} and longitude point is ${value.coords.longitude} `)
     var marker = L.marker([value.coords.latitude, value.coords.longitude]).addTo(map);
     var hotel = L.marker([3.5399846,39.0528407]).addTo(map);
     hotel.bindPopup("<b>Central hotel is here </b><br>")
  marker.bindPopup("<b>You are here </b><br>").openPopup();
  }


  //   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       maxZoom: 19,
//       attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//   }).addTo(map);