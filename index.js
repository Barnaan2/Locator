window.onload = ()=>{
    if(navigator.geolocation){navigator.geolocation.getCurrentPosition(search);}
    else{
        alert("Geolocation is not supported by this browser.");
    }
  };

 
   navigator.geolocation.watchPosition(change);
   
  


  //const watchID = navigator.geolocation.getCurrentPosition((position) => {
//   doSomething(position.coords.latitude, position.coords.longitude);
// });

let displayer = document.querySelector(".displayer");



// the search method
let mapView = {} 
let cricle = {}
let yourPosition = {}
var popup = L.popup();
let clicked_pos = {};
function search(value){
   try{
    mapView = L.map('map').setView([value.coords.latitude,value.coords.longitude], 13);
 L.tileLayer('http://{s}.google.com/vt/lyrs=s,p&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'],
    attribution: '&copy; <a href="https://yai-devs.netlify.app/" target = "_blank">From Yai</a>'
}).addTo(mapView);
  

    // alert(` latitude point is  ${value.coords.latitude} and longitude point is ${value.coords.longitude} `)
       yourPosition  = L.marker([value.coords.latitude, value.coords.longitude])
       console.log(value);
       cricle = L.circle([value.coords.latitude, value.coords.longitude],{radius:value.coords.accuracy})
        var feature = L.featureGroup([yourPosition,cricle]).addTo(mapView);
        mapView.fitBounds(feature.getBounds())
       yourPosition.bindPopup("<b>You are here </b><br>").openPopup();
    
       function onMapClick(e) {
           popup
               .setLatLng(e.latlng)
               .setContent("You clicked here")
               .openOn(mapView);
               // e.latlng.toString()
           
            clicked_pos = e;
            let position1 = new Distance(value.coords.latitude,value.coords.longitude);
            let position2 = new Distance(e.latlng.lat,e.latlng.lng);
            // position1.lat = value.coords.latitude;
            // position1.lng = value.coords.longitude;
            if(isNaN(position2.lat)|| isNaN(position2.lng)){
                console.log(position1);
                console.log(position2);
            }
            let diff = Distance.diff(position1.getRadians(),position2.getRadians());
            displayer.innerHTML = `The clicked point is ${Distance.distance(position1,position2,diff)}  away from you. `;
           

       }  
       mapView.on('click', onMapClick);


    }
       catch(e){

        console.log(`${e} There is none sense error `)
       }
      
  }


  function change(value){
    
    try{
        if(yourPosition){
            map.removeLayer(yourPosition);
            
        }
        if(cricle){
            map.removeLayer(cricle);
        }
        
//     mapView = L.map('map').setView([value.coords.latitude,value.coords.longitude], 13);
//  L.tileLayer('http://{s}.google.com/vt/lyrs=s,p&x={x}&y={y}&z={z}',{
//     maxZoom: 20,
//     subdomains:['mt0','mt1','mt2','mt3'],
//     attribution: '&copy; <a href="https://yai-devs.netlify.app/" target = "_blank">From Yai</a>'
// }).addTo(mapView);
  

    // alert(` latitude point is  ${value.coords.latitude} and longitude point is ${value.coords.longitude} `)
       yourPosition  = L.marker([value.coords.latitude, value.coords.longitude])
       console.log(value);
       cricle = L.circle([value.coords.latitude, value.coords.longitude],{radius:value.coords.accuracy*10})
        var feature = L.featureGroup([yourPosition,cricle]).addTo(mapView);
        mapView.fitBounds(feature.getBounds())
       yourPosition.bindPopup("<b>You are here </b><br>").openPopup();
       var popup = L.popup();
       let clicked_pos = {};


       if(popup){
        mapView.removeLayer(popup);
        onMapClick(clicked_pos);
       }
       function onMapClick(e) {
           popup
               .setLatLng(e.latlng)
               .setContent("You clicked here")
               .openOn(mapView);
               // e.latlng.toString()
           
            clicked_pos = e;
            let position1 = new Distance(value.coords.latitude,value.coords.longitude);
            let position2 = new Distance(e.latlng.lat,e.latlng.lng);
            // position1.lat = value.coords.latitude;
            // position1.lng = value.coords.longitude;
            if(isNaN(position2.lat)|| isNaN(position2.lng)){
                console.log(position1);
                console.log(position2);
            }
            let diff = Distance.diff(position1.getRadians(),position2.getRadians());
            displayer.innerHTML = `The clicked point is ${Distance.distance(position1,position2,diff)}  away from you. `;
           

       }  
       mapView.on('click', onMapClick);

    }
    
       catch(e){

        console.log(`${e} There is none sense error `)
       }
      
  }

 













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