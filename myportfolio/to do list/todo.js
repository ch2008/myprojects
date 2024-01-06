const input = document.getElementById("input-Value");
const button = document.getElementById("button");
const todoBox = document.getElementById("ulist");
const dates = document.getElementById("presentTime");
   


// code  to display present date
const getDate=()=>{
 
  const currentDate=new Date();
 dates.innerHTML=` ${currentDate.getDate()},${ currentDate.getMonth()},${currentDate.getFullYear()}`;
//  dates.innerHTML= currentDate.getMonth();
//  dates.innerHTML= currentDate.getFullYear() ;

}
 const returned = getDate();


 

// code to activate the todo

const todoActive = () => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value == "") {
      alert("please enter something")
    } else {

      let newLi = document.createElement("li")
      newLi.innerHTML = `
      
     <span><input type="checkbox" id="check"></span> 
       <div class="inbox-Two"id="inbox-Two">
           ${input.value}
       </div>
       
       `;

      todoBox.appendChild(newLi);
// code for delete button************
      let delbtn = document.createElement("button")
      delbtn.innerHTML = `<button id="del">DELETE </button>  `
      newLi.appendChild(delbtn);

      delbtn.addEventListener("click", (e) => {
        list = e.target.parentNode.parentNode;
        list.remove();
      })

   // code for delete button************
      let pndbtn = document.createElement("button")
      pndbtn.innerHTML = `<button id="pending">PENDING </button>  `
      newLi.appendChild(pndbtn);

       pndbtn.addEventListener("click",(e)=>{
const list1= e.target.parentNode.parentNode;
console.log(list1.style.backgroundColor="rgba(234, 82, 82, 0.174)");
       })

    


//  after each add todo main input box must be emty*******
      input.value = "";
    }

  })

}

todoActive()




