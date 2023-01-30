let searchBox=document.getElementById("searchBox");
let btn=document.getElementById("btn");
let show_more=document.getElementById("show_more");
let display=document.getElementById("display");

 async function searchBtn() {
  if(searchBox.value==""){
    console.log("Hello");
    display.innerHTML="" 
    
    display.innerHTML=`
    <h2>"Your Input Box Is Empaty"</h2>
    `
  }
  
    else{
      display.innerHTML=""
  const api=await fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchBox.value}&client_id=VRCZYrVldSZ8ArhuUTp0tQUKJ0v7JPWBNlUzBd0MS5Y`)
   
  const Response= await api.json();
  Response.results.map((ele)=>{
    display.innerHTML += `
            <div class="innerDiv">
            <img src=${ele.urls.full}>
            </div>
            `
  })
}

    }
