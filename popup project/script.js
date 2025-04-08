var overlay=document.querySelector(".overlay")
var popbox=document.querySelector(".popbox")
var addbtn=document.getElementById("addpopbtn")
var cancel=document.getElementById("cancel")


addbtn.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="block"
    popbox.style.display="block"
})
cancel.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
    popbox.style.display="none"
})
var cont=document.querySelector(".cont")
var add=document.getElementById("add")
var addabbok=document.getElementById("bookinput")
var addauthor=document.getElementById("authorinput")
var bookdec=document.getElementById("tarea")
add.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-cont")
    div.innerHTML=`<h2>${addabbok.value}</h2><p>${bookdec.value}</p><h5>${addauthor.value}</h5><button onclick="del(event)">Delete</button>`
    cont.append(div)

})
function del(event){
    event.target.parentElement.remove()
}