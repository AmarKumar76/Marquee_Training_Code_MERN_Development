// const button = document.querySelectorAll('.show');
//  for(let btn of button){
//      btn.addEventListener('click', function(){ 
//         const card = this.closest('.card'); 
//         const title = card.querySelector("h2"); 
//         const price = card.querySelector(".price");
//          const rating = card.querySelector(".rating"); 
//          alert( title.innerText + "\n"+ price.innerText + "\n" + rating.innerText ) 
//         }) 
//     }

    // const btn = document.getElementById("btn")
    // btn.addEventListener("click",function(){
    //     const card = this.closest(".card")
    //     const name = card.querySelector("h2");
    //     const para = card.querySelector("p")
    //     alert("name "+name.innerText +"\n"+ "detail "+para.innerText
    //     )

    // })

    // const button = document.querySelectorAll(".delete")
    // for(let btn of button){
    //     btn.addEventListener("click",function(){
    //         let row = this.closest("tr");
    //         let name = row.children[0].innerText;
    //         alert (
    //         name+"Deleted"
    //         )
    //         row.remove();
    //     })
    // }

    const button = document.querySelectorAll(".delete")
    for(let btn of button){
        btn.addEventListener("click",function(){
            let row = this.closest("li");
            let name = row.children[0].innerText;
            alert (
            name+"Deleted"
            )
            row.remove();
        })
    }