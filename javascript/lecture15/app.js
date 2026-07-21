const submitbtn = document.getElementById("submitbtn")
const disablebtn = document.getElementById("disablebtn")
const enablebtn = document.getElementById("enablebtn")

disablebtn.addEventListener("click",()=>{
    disablebtn.disabled = true
})
disablebtn.addEventListener("click",()=>{
    disablebtn.disabled = false;
})
const para = document.getElementById("para")
const show = document.getElementById("show");
const hide = document.getElementById("hide");

show.addEventListener("click",()=>{
    para.style.display="block";
})
para.addEventListener("click",()=>{
    para.style.display="none";
})

const togglebtn = document.getElementById("togglebtn")
const password = document.getElementById("password")
togglebtn.addEventListener("click",()=>{
    if(password.type === "password"){
        password.type = "text"
        togglebtn.innerHTML = "hide password"
    }
    else{
        password.type = "password"
        togglebtn.innerHTML= "show password"
    }
})