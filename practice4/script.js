let main=document.querySelector(".main")
let name=document.querySelector(".name")
let caption=document.querySelector(".caption")
let button=document.querySelector(".button")

let arr=[]

button.addEventListener("click",function(){
    // console.log(name.value,caption.value);
    arr.push({
        name:name.value,
        caption:caption.value
    })
    main.innerHTML=""
    name.value=""
    caption.value=""
    display()
})

function display(){
    arr.map(result=>{
        main.innerHTML+=`<div class="card mt-4" style="width: 18rem;">
                    
    <div class="card-body">
      <h5 class="card-title">${result.name}</h5>
      <p class="card-text">${result.caption}.</p>
      <button class="btn btn-primary">Edit</button>
      <button class="btn btn-danger deletebtn">Delete</button>
    </div>
    </div>`
    
    })
    let deletebtn=document.querySelectorAll(".deletebtn")
    let convartdetBtn=Array.from(deletebtn)
    convartdetBtn.map((result3,index)=>{
        result3.addEventListener("click",function(){
            arr.splice(index,1)
            main.innerHTML=""
            display()
        })


    })
    
    

    
}