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

        ul.innerHTML += `<li>${item}<button class="edit">Edit</button><button class="delete">Delete</button></li>`;

        let del = document.querySelectorAll(".delete");
        let delArr = Array.from(del);
        delArr.map((dtem,ddx)=>{
            dtem.addEventListener("click",function(){
                arr.splice(ddx,1);
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
        updt.style.display = "none";
        btn.style.display = "inline-block";
    })

    
}



