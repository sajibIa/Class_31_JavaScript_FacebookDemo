let cardPrint=document.querySelector(".cardPrint")
let name=document.querySelector(".name")
let caption=document.querySelector(".caption")
let button=document.querySelector(".button")
let error=document.querySelector(".error")
let span1=document.querySelector(".span1")


let arr=[]


    button.addEventListener("click",function(){
        error.innerHTML=""
        span1.innerHTML=""
        // console.log(name.value,caption.value);
        if(!name.value){
            span1.innerHTML="Name is required"

        }else{
            if(!(name.value.match(/^[A-Za-z]{1}[A-Za-z]*$/))){
                span1.innerHTML="Only string"
            }else{
                arr.push({
                    name:name.value,
                    caption:caption.value
                })
                cardPrint.innerHTML=""
                name.value=""
                caption.value=""
                display()
            
            }
        }

    })
        
function display(){
    arr.map(item=>{
        cardPrint.innerHTML+=` <div class="card mt-3 " style="width: 18rem;">
               
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <p class="card-text">${item.caption}</p>
      <button class="btn btn-primary">Edit</button>
      <button class="btn btn-danger deleteBtn">Delete</button>
    </div>
    </div>`
        
    })
    let deleteBtn=document.querySelectorAll(".deleteBtn")
    let convertDeleteBtn=Array.from(deleteBtn)
    convertDeleteBtn.map((print2,index)=>{
        print2.addEventListener("click",function(){
            arr.splice(index,1)
            cardPrint.innerHTML=""
            display()
        })

    })
    
}
