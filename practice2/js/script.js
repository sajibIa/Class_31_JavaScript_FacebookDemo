let allPrint=document.querySelector(".allPrint")
let name=document.querySelector(".name")
let caption=document.querySelector(".caption")
let button=document.querySelector(".button")
let print=document.querySelector(".print")


let arr=[]

    button.addEventListener("click",function(){
        name.classList.remove("sajib")
        // console.log(name.value,caption.value);
        print.innerHTML=""
        if(!name.value){
            // print.innerHTML="Please enter something"
            name.classList.add("sajib")
            // name.value.innerHTML="sl;lsadfsd"
            // name.style.background="red"
            // name.style.width="200px"

           
        }else{
            arr.push({
                name:name.value,
                caption:caption.value
            })
            allPrint.innerHTML=""
            name.value=""
            caption.value=""
            display()

        }
       
    })





function display(){
    
arr.map(item=>{
    allPrint.innerHTML+=`<div class="card mt-3" style="width: 18rem;">
                
<div class="card-body ">
  <h5 class="card-title">${item.name}</h5>
  <p class="card-text">${item.caption}</p>
  <button class="btn btn-primary">Edit</button>
  <button class="btn btn-danger deleteBtn">Delete</button>
</div>
</div>`
    
})
let deleteBtn=document.querySelectorAll(".deleteBtn")
let convertDeleteBtn=Array.from(deleteBtn)
convertDeleteBtn.map((item2,index)=>{
    item2.addEventListener("click",function(){
        arr.splice(index,1)
        allPrint.innerHTML=""
        display()

    })
    
})

}
