let radians =(degree)=>{

    return (Math.PI/180) * (degree);
   }

   // console.log(radians(180));
   
   // let lat1 = 51.510357
   // let long1  = -0.116773
   // let lat2 = 38.889931
   // let long2  = -77.009003
   // let position1 = {lat:lat1,long:long1};
   // let position2={lat:lat2,long:long2};
   let position=(position1,position2)=>{
    pos_diff = {}
    pos_diff.lat_diff = radians(position2.lat - position1.lat)
    pos_diff.long_diff = radians(position2.lng - position1.lng)
   // let lat_diff = lat2 - lat1
   // let long_diff = long2 - long1
   
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
   
    // formula to calculate the difference between two points
   //  a = sin²(φB - φA/2) + cos φA * cos φB * sin²(λB - λA/2)
   // c = 2 * atan2( √a, √(1−a) )
   // d = R * c
   let pow1 = Math.pow(Math.sin(lat_diff/2.0),2);
   let lat_cos = Math.cos(lat1) * Math.cos(lat2);
   let pow2 = Math.pow(Math.sin(long_diff/2.0),2);
   let initial = pow1 + lat_cos * pow2;
    let distanceInitial = 2 * Math.atan2(Math.sqrt(initial),Math.sqrt(1-initial));
    let distanceInMeter = earthRadius * distanceInitial;
    return Math.round(distanceInMeter);
   }