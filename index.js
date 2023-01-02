window.onload = ()=>{
    if(navigator.geolocation){  navigator.geolocation.getCurrentPosition(search);}
  };


  function search(value){


    let  map = L.map('map').setView([value.coords.latitude,value.coords.longitude], 13);

 L.tileLayer('http://{s}.google.com/vt/lyrs=s,p&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'],
    attribution: '&copy; <a href="https://www.github.com/barnaan2">Bernabas Tekkalign</a>'
}).addTo(map);

    alert(` latitude point is  ${value.coords.latitude} and longitude point is ${value.coords.longitude} `)
    let yourPosition = L.marker([value.coords.latitude, value.coords.longitude]).addTo(map);
       yourPosition.bindPopup("<b>You are here </b><br>").openPopup();

      
  }

  var popup = L.popup();

  function onMapClick(e) {
      popup
          .setLatLng(e.latlng)
          .setContent("You clicked the map at " + e.latlng.toString())
          .openOn(map);
  }
  
  map.on('click', onMapClick);


  //   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       maxZoom: 19,
//       attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//   }).addTo(map);

/*
DIFFERENT TYPE OF GOOGLE MAP INCASE YOU WANT TO USE

GOOGLE TERRIAN:
googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});


Note the difference in the "lyrs" parameter in the URL:
Hybrid: s,h;
Satellite: s;
Streets: m;
Terrain: p;

GOOGLE SAT:
googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

GOOGLE HYBRID:

googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});





   GOOGLE STREET: 
googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});




*/