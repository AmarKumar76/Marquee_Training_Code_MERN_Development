const container = document.getElementById("container")
const result = document.getElementById("result");

//update count
function updateCount(){
    result.innerText = "Total Student :"+container.children.length;
}
updateCount();

// delete count
const deleteBtn = document.querySelectorAll(".deleteBtn")
for(let button of deleteBtn){
    button.addEventListener("click",function(){
        this.closest(".card").remove();
        updateCount();
    })
}
 const favCard = document.querySelectorAll(".favoriteBtn");
 for(let favr of favCard){
favr.addEventListener("click",function(){
    this.closest("card").classList.add("fav")
})
 }

 const prevBtn = document.querySelectorAll(".prevBtn");

for (let button of prevBtn) {
  button.addEventListener("click", function () {
    let currCard = this.closest(".card");
    let prevCard = currCard.previousElementSibling;

    // Fixed: Changed nextCard to prevCard
    if (prevCard) {
      alert("Previous Student : " + prevCard.children[0].innerText);
    } else {
      alert("No previous student");
    }
  });
}

const firsBtn = document.getElementById("firstBtn");

firsBtn.addEventListener("click", function () {
  let firstStudent = container.firstElementChild;
  alert(firstStudent.childer[0].innerText)
});

