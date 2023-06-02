let printCard=document.querySelector(".printCard")
let name=document.querySelector(".name")
let caption=document.querySelector(".caption")
let button=document.querySelector(".button")

let arr=[
    // {
    //     name:"sajib1",
    //     dec:"sjaib"
    // },
    // {
    //     name:"sajib2",
    //     dec:"sjaib"
    // },
    // {
    //     name:"sajib3",
    //     dec:"sjaib"
    // },
]

button.addEventListener("click",function(){

    // console.log(name.value,caption.value);
    
    arr.push({
        name:name.value,
        dec:caption.value
        
    })
    printCard.innerHTML=""
    name.value=" "
    caption.value=" "
    
    display()
   
    
})





function display(){
    arr.map((item)=>{
        // console.log(item.name);
        printCard.innerHTML+=`<div class="card" style="width: 18rem;">
    
                
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <p class="card-text">${item.dec}</p>
      <button  class="btn btn-primary">Edit</button>
      <button  class="btn btn-danger deleteButton">Delete</button>
    </div>
    </div>`
    
    })
    let deleteButton=document.querySelectorAll(".deleteButton")
    let convertArr=Array.from(deleteButton)
    convertArr.map((giveArr,index)=>{
        // console.log(giveArr);
        // console.log(index);
        giveArr.addEventListener("click",function(){
            printCard.innerHTML=""
            arr.splice(index,1)
            
            display()
        })
       
        
    })
   
        
   
}
