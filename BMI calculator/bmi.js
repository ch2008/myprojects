const calculate = document.getElementById("calculate");
const reload = document.getElementById("reload");
const height = document.getElementById("Height");
const weight = document.getElementById("Weight");
const bmiresult = document.getElementById("bmiresult");
const catagory = document.getElementById("category");
const names = document.getElementById("name");









calculate.addEventListener("click",()=>{


let name = names.value
let meter = height.value * 0.3048;
let squaremeter = meter * meter
let bmi = (weight.value / squaremeter).toFixed(3)


 if(height && weight !=="" && height && weight>=0){
  bmiresult.innerText=` ${name} your BMI is  ${bmi}`
   
 }else if( bmi<=18){
  bmiresult.innerText=` ${name} your BMI is  ${bmi}`
 catagory.innerText=`${name} you are underweight`;
  catagory.style.color = " blue"
 
 }else if(bmi>=18 && bmi<=24.9){
  bmiresult.innerText=` ${name} your BMI is  ${bmi}`
  catagory.innerText=` ohooo! ${name} you are healthy`;
  catagory.style.color = "green";

 }else if(bmi>=25){
  bmiresult.innerText=` ${name} your BMI is  ${bmi}`
 catagory.innerText=` ops! ${name} you are overweight,time to work-out more `;
  catagory.style.color = "red";
 }else{
  catagory.innerText=` please fill all the section `;
 }

 reload.addEventListener("click",()=>{
  window.location.reload()
})

})



