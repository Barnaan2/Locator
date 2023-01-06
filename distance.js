let radians =(degree)=>{

    return (Math.PI/180) * (degree);
   }

   let position=(position1,position2)=>{
    pos_diff = {}
    pos_diff.lat_diff = radians(position2.lat )- radians(position1.lat)
    pos_diff.long_diff = radians(position2.lng) - radians(position1.lng)
   
   
    position1.lat = radians(position1.lat);
    position1.lng = radians(position1.lng);
    position2.lat = radians(position2.lat);
    position2.lng = radians(position2.lng);
   
    return distance(position1,position2,pos_diff);
   }
   

   
   
   
   function distance (position1,position2,pos_diff){
    // Earth's radius is given its actually 6371km  which is equal to 6371000m
   const earthRadius = 6371000;
    let initial = Math.pow(Math.sin(pos_diff.lat_diff/2.0),2) + Math.cos(position1.lat) * Math.cos(position2.lat) * Math.pow(Math.sin(pos_diff.long_diff/2.0),2);
    let distanceInitial = 2 * Math.atan2(Math.sqrt(initial),Math.sqrt(1-initial));
    let distanceInMeter = earthRadius * distanceInitial;
    return Math.round(distanceInMeter);
   }