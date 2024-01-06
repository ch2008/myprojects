
const inputValue=document.getElementById("input-Value").value;
const button = document.getElementById("button");
const output=document.getElementById("output")
 



let Akey="76df871f1ef1d97840742f1fb6d34e02";



     function currentWeather(){
     
        const weather=async function(){
           
            const weatherurl= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${Akey}&units=metric`);
            console.log(weatherurl);
            let jsondata = await weatherurl.json();
            console.log(jsondata);
            
         

            output.innerHTML= document.createElement=`
            <pre>
            <h1>${jsondata.name}</h1>
             
            
             
             
             <h3> Temp:${jsondata.main.temp}°C</h3>
             <h3> ${jsondata.weather[0].main}</h3>


            </pre>
             
             `
             
}
       
    weather()
      
    
    }
    currentWeather() 


