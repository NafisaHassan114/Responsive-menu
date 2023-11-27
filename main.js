const icon = document.querySelector("#icon")
const elements = document.querySelector("#list") 
const cancel = document.querySelector("#cancel")

icon.addEventListener("click", function(){
    elements.style.display = "block"
    cancel.style.display = "block"
    icon.style.display = "none"
})

cancel.addEventListener("click", function(){
    elements.style.display = "none"
    cancel.style.display = "none"
    icon.style.display = "block"
})