let radians =(degree)=>{

    return (Math.PI/180) * (degree);
   }

   let position=(position1,position2)=>{
    pos_diff = {}
    pos_diff.lat_diff = radians(position2.lat - position1.lat)
    pos_diff.long_diff = radians(position2.lng - position1.lng)
   
   
    position1.lat = radians(position1.lat);
    position1.lng = radians(position1.lng);
    position2.lat = radians(position2.lat);
    position2.lng = radians(position2.lng);
   
    return distance(position1,position2,pos_diff);
   }
   

   
   
   
   function distance (position1,position2,pos_diff){
   const earthRadius = 6371000;
   let lat1 = position1.lat;
   let lat2  = position2.lat;
   let long_diff = pos_diff.long_diff;
   let lat_diff = pos_diff.lat_diff;
   
  
   let pow1 = Math.pow(Math.sin(lat_diff/2.0),2);
   let lat_cos = Math.cos(lat1) * Math.cos(lat2);
   let pow2 = Math.pow(Math.sin(long_diff/2.0),2);
   let initial = pow1 + lat_cos * pow2;
    let distanceInitial = 2 * Math.atan2(Math.sqrt(initial),Math.sqrt(1-initial));
    let distanceInMeter = earthRadius * distanceInitial;
    return Math.round(distanceInMeter);
   }