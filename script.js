const burg=document.querySelector(".hamb")
const nav=document.querySelector(".navbar")
const tab=document.querySelectorAll(".tab")
burg.addEventListener("click", () => {
    nav.classList.toggle("isactive")
    burg.classList.toggle("isactive")
})

tab.forEach(tb => {
    tb.addEventListener("click" , () =>{
        nav.classList.remove("isactive")
        burg.classList.remove("isactive")
    })
})
var mail=document.getElementById("email")
function validate(){
    if(mail.value==""){
        window.alert("Enter the mail");
        mail.focus;
    }
}