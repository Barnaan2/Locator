window.onload = ()=>{
    if(navigator.geolocation){  navigator.geolocation.getCurrentPosition(search);}
  };

let  map = L.map('map').setView([3.5399846,39.0528407], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  function search(value){
    alert(value.coords.latitude)
     var marker = L.marker([value.coords.latitude, value.coords.longitude]).addTo(map);
  marker.bindPopup("<b>You are here </b><br>.").openPopup();
  }