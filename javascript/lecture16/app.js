const btn = document.getElementById("btn")
btn.addEventListener("click",()=>{
    const h1 = document.createElement('h1');
    console.log(h1);
})
//set property
h1.id = "heading"
h1.className = "head"
h1.style.color = "red"
h1.innerText = "Hello"
console.log(h1);

document.body.append(h1);