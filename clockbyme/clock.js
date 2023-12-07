const hour=document.querySelector("#hour");
const minutes=document.querySelector("#minutes");
const seconds=document.querySelector("#seconds");

setInterval(()=>{
    const timezone=new Date()

    hour.innerHTML=(timezone.getHours()<10?"0":"" )+timezone.getHours();
    minutes.innerHTML=(timezone.getMinutes()<10?"0":"")+timezone.getMinutes();
    seconds.innerHTML=(timezone.getSeconds()<10?"0":"")+timezone.getSeconds();
},1000);
