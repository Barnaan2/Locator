const creator = {
    name:"Bernabas Tekkalign",
    job:"software developer",
    github:"github.com/barnaan2/",
    linkedin:"linkedin.com/in/bernabas-tekkalign",
    twitter:"twitter.com/buliberna",
    company:"Yai",
    
}

// this class will accept a latitude and longitude in degrees and return them in radians.
class Distance {
    constructor(lat,lng){
       
            this.lat = lat;
            this.lng = lng;

            if(isNaN(lat)||isNaN(lng)){
                throw new Error("parameter is not a number. ")
            }
        
       
    }

     radian(degree){
        return degree * (Math.PI / 180);
    }

    getRadians(){
       let distance =  {lat:this.radian(this.lat),lng:this.radian(this.lng)};
        return (distance);
        
    }

  static diff(position1,position2) {
   let pos_diff = {}
    pos_diff.lat_diff = position2.lat - position1.lat
    pos_diff.long_diff = position2.lng - position1.lng
    return (pos_diff);

  }

  static  distance (position1,position2,pos_diff){
    // Earth's radius is given .Its actually 6371km  which is equal to 6371000m
    const earthRadius = 6371000;
    let initial = Math.pow(Math.sin(pos_diff.lat_diff/2.0),2) + Math.cos(position1.lat) * Math.cos(position2.lat) * Math.pow(Math.sin(pos_diff.long_diff/2.0),2);
    let distanceInitial = 2 * Math.atan2(Math.sqrt(initial),Math.sqrt(1-initial));
    let distanceInMeter = Math.round(earthRadius * distanceInitial);
    let distanceWithUnit = "";
    if(distanceInMeter >= 1000){
        distanceWithUnit = `${distanceInMeter/1000} km `;

    }
    else{
        distanceWithUnit = `${distanceInMeter} m `;
    }
    return distanceWithUnit;

   }
}


