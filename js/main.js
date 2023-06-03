const list = document.querySelector(".list")
const items = document.querySelectorAll(".item");

items.forEach((item)=>
{
    item.addEventListener("dragstart" , ()=>
    {
        
        setTimeout(()=>item.classList.add("dragging"),0)
    })
    item.addEventListener("dragend" , ()=>
    {
        item.classList.remove("dragging");
    })
})
 
let initList = (e)=>
{
    e.preventDefault()
    const draggingItem = document.querySelector(".dragging");
   const siblings = [...document.querySelectorAll(".item:not(.dragging)")]
    let nextSibling = siblings.find((sibling)=>
    {
       return e.clientY <= sibling.offsetTop +sibling.offsetHeight/2
    })
    
    list.insertBefore(draggingItem,nextSibling)
  
}

list.addEventListener("dragover" , initList)
list.addEventListener("dragenter" , (e)=>e.preventDefault())

console.log(h.offsetTop)

list.addEventListener("click" , (e)=>
{
    console.log(e.clientY);
})