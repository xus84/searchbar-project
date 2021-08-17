
const bots = [
    "Bot1", "Bot2","Bot3", "Bot4", "Bot5"
];

const output = document.querySelector(".output");
const search = document.querySelector(".filter-input");

window.addEventListener("DOMContentLoaded", loadList)
search.addEventListener("input", filter);

function loadList() {
    let temp = `<ul class="list-items">`;
    bots.forEach((item) => {
      temp += `<li class="list-item"> ${item} </li>`;
    });
    temp += `</ul>`;
    output.innerHTML = temp;
  }
  
  function filter(e) {
      let temp = '';
      const result  = bots.filter(item=> item.toLowerCase().includes(e.target.value.toLowerCase()));
      
  
      if(result.length>0){
          temp = `<ul class="list-items">`;
          result.forEach((item) => {
            temp += `<li class="list-item"> ${item} </li>`;
          });
          temp += `</ul>`;
      }else{
          temp =`<div class="no-item"> No Item Found </div>`;
      }
  
      output.innerHTML =temp;
  
}
