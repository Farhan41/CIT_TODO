let inputBox = document.querySelector("#input-box");

let postButton = document.querySelector(".post-button");

let error = document.querySelector(".error");

let ebtn = document.querySelector(".edit");



let ul = document.querySelector("ul");

let arr = [];

postButton.addEventListener("click", function(){
    if(!inputBox.value){
        error.innerHTML = "You have to write something!"
    }else{
        error.innerHTML = "";
        arr.push(inputBox.value);
        console.log(arr);
        cT()
        inputBox.value = "";
    }
});


function cT(){
    ul.innerHTML = "";
        arr.map((item)=>{
            ul.innerHTML += `<li><div id="grab">${item}</div><button class="edit">Edit</button><button class="delete">Delete</button></li>`
        })

        // DELETE
        let dbtn = document.querySelectorAll(".delete");
        let dbtnArr = Array.from(dbtn);
        dbtnArr.map((ditem,dindex)=>{
            ditem.addEventListener("click",function(){
                arr.splice(dindex,1);
                cT();
            })
        })



        // line-through

        let grab = document.getElementById("#grab");
        console.log(grab);

        grab.addEventListener("click", function(){
            grab.classList.toggle("check");
        })

       


        
} 