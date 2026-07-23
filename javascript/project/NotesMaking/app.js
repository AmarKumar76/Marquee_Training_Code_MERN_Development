const form = document.getElementById("notes")
const input = document.getElementById("noteinput")
const list = document.getElementById("noteList")
const clrbtn = document.getElementById("clearbtn")
const count = document.getElementById("count")
const addbtn = document.getElementById("addbtn")

let totalnotes = 0;
//add notes
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    if(input.value.trim() ==""){
        alert("notes input empty")
        return ;
    }
//create li
const li = document.createElement("li")

// for write text
 const span = document.createElement("span")
 span.innerText = input.value;

 //delete button

 const deletebtn = document.createElement("button");
 deletebtn.innerText = "Delete"
 deletebtn.className = "deleteBtn"

// delete 
deletebtn.addEventListener("click",()=>{
    li.remove()
    totalnotes--;
    count.innerText =totalnotes;
})

//add element

li.append(span)
li.append(deletebtn)

// 
list.append(li);
totalnotes++;
count.innerText = totalnotes;
input.value = "";

})
clrbtn.addEventListener("click",()=>{
    //for(let i=0;i<totalnotes;i++){
        list.remove();

   // }
    totalnotes =0;
    count.innerText = totalnotes;
})
