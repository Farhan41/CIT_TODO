let inpt = document.querySelector("input");
let btn = document.querySelector("button");
let updt = document.querySelector(".update");
let error = document.querySelector(".error");
let ul = document.querySelector("ul");

let arr= [];
let upID = "";

btn.addEventListener("click",function(){
    if(!inpt.value){
        error.innerHTML = "You Have To Write SomeThing!"
    }else{
        error.innerHTML = "";
        arr.push(inpt.value);
        console.log(arr);
        cT()
        inpt.value = "";
    }
})

function cT(){
    ul.innerHTML = "";
    arr.map((item)=>{

        ul.innerHTML += `<li class="item">
        <div class="line">
            <div id="round"></div>
            <div class ="demo">${item}</div>
        </div>
        <div><button class="edit">Edit</button>
            <button class="delete">Delete</button></div>
    </li>`;

        let del = document.querySelectorAll(".delete");
        // console.log(del);
        let delArr = Array.from(del);
        delArr.map((dtem,ddx)=>{
            dtem.addEventListener("click",function(){
                arr.splice(ddx,1);
                // console.log(arr);
                cT()
            })
        })

        let edt = document.querySelectorAll(".edit");
        let edtArr = Array.from(edt);
        edtArr.map((etem,edx)=>{
            etem.addEventListener("click",function(){
                inpt.focus();
                updt.style.display = "inline-block";
                btn.style.display = "none";
                upID = edx;
            })
        })

        

    });

    updt.addEventListener("click", function(){
        arr[upID] = inpt.value;
        inpt.value = "";
        cT();
        console.log(arr)
        updt.style.display = "none";
        btn.style.display = "inline-block";
        upID = "";
    })

    let demo = document.querySelector(".demo");

    demo.addEventListener("click",function(){
    demo.classList.toggle("test");
    })

   

    
}





// let line = document.querySelector(".line");

// line.addEventListener("click", function(){
//    line.classList.toggle("test");
// })





