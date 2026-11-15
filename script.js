    const location = document.getElementById("cityId")
    const button = document.getElementById("buttonId")
    const paragraph = document.getElementById("messageId")
    const cloud = document.getElementById("cloudId")

 

    async function lookUp(){  

    if (location.value ===""){
     paragraph.textContent="Please type a city";
    return 

    }
   
    try{


    const r1= await fetch("https://geocoding-api.open-meteo.com/v1/search?count=1&name="+location.value)

    if (r1.status!==200){
     paragraph.textContent= "Could not look up location. please try again later"
     return 
    }
    const place = await r1.json() 

    if (place["results"]===undefined){
      paragraph.textContent= "No city found"
      return 
    }
 
    const lat = place["results"][0]["latitude"] 
    const lon = place["results"][0]["longitude"] 

    
    const r2= await fetch("https://api.open-meteo.com/v1/forecast?latitude="+lat+"&longitude="+lon+"&current=temperature_2m")
      

   
    if (r2.status!==200){
     paragraph.textContent= "Couldn't look up weather. Try again pls "
     return 
    }
    const weather = await r2.json()


    const celsius= weather["current"] ["temperature_2m"]
    const fahrenheit = Math.round(celsius * 9 / 5 + 32)
  
    paragraph.textContent = "In " + place["results"][0]["name"] +", " + place["results"][0]["country"] + " "+ "it is " + weather["current"] ["temperature_2m"] + weather["current_units"]["temperature_2m"] + " or " + fahrenheit + " Fahrenheit"
    }
    
 catch (error) { 
   console.log(error)
   paragraph.textContent= "Could not reach this server. Pls check your connection"
  }
}

    button.addEventListener("click", lookUp)

   
  async function getCloud() {

  if (location.value ===""){
    paragraph.textContent="Please type a city";
    return 

    }
   
    try{


    const r1= await fetch("https://geocoding-api.open-meteo.com/v1/search?count=1&name="+location.value)

    if (r1.status!==200){
     paragraph.textContent= "Could not look up location. please try again later"
     return 
    }
    const place = await r1.json() 

    if (place["results"]===undefined){
      paragraph.textContent= "No city found"
      return 
    }
 
    const lat = place["results"][0]["latitude"] 
    const lon = place["results"][0]["longitude"] 

    
    const r2= await fetch("https://api.open-meteo.com/v1/forecast?latitude="+lat+"&longitude="+lon+"&current=cloud_cover")
      

   
    if (r2.status!==200){
     paragraph.textContent= "Couldn't look up cloud. Try again pls "
     return 
    }
    const cloudData= await r2.json()


  
    paragraph.textContent = "In " + place["results"][0]["name"] +", " + place["results"][0]["country"] + " "+ "cloud coverage is " + cloudData["current"] ["cloud_cover"] + cloudData["current_units"]["cloud_cover"] 
    
 }catch (error) { 
   console.log(error)
   paragraph.textContent= "Could not reach this server. Pls check your connection"
  }
}

    cloud.addEventListener("click", getCloud)


    
