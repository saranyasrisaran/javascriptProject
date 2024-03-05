const form=document.getElementById('item-form')
const itemInput=document.getElementById('item-input')
const itemList=document.getElementById('item-list')
const filter=document.getElementById('filter')
const clear=document.getElementById('clear')

function addItem(event){
    event.preventDefault()

   let newItem=itemInput.value

   const li=document.createElement('li')

   li.appendChild(document.createTextNode(newItem))
   console.log(li)
    const btn=createBtn("remove-item btn-link text-red")
    li.appendChild(btn)
    itemList.appendChild(li)
    checkUI()
    itemInput.value=""

    
 
   
}
function createBtn(classes){
    const btn=document.createElement('button')
    btn.className=classes
    const icon=createIcon("fa-solid fa-xmark")
    btn.appendChild(icon)
    return btn
    
}
function createIcon(classes){
    const icon=document.createElement('i')
    icon.className=classes
    return icon
}
function removeItem(event){
    if(event.target.parentElement.classList.contains('remove-item')){
        event.target.parentElement.parentElement.remove()
    }
    checkUI()


}
function removeAllItem(){
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild)
    }
    checkUI()
}
function checkUI(){
   let items=itemList.querySelectorAll('li')

    if(items.length === 0){
        filter.style.display='none'
        clear.style.display='none'
    }else{
        filter.style.display='block'
        clear.style.display='block'

    }
}
function filterItem(event) {
    const items=itemList.querySelectorAll('li')
    const text=event.target.value
    
    items.forEach((item)=>{
        const itemName=item.firstChild.textContent.toLowerCase().trim()
        if(itemName.indexOf(text) != -1){
            item.style.display='flex'
        }else{
            item.style.display='none'
        }
    })
    
    
}

checkUI()
form.addEventListener('submit',addItem)
itemList.addEventListener('click' ,removeItem)
clear.addEventListener('click',removeAllItem)
filter.addEventListener('input',filterItem)
