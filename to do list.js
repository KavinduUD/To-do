const inputBox=document.getElementById("input-box")
const listContainer=document.getElementById("list-container")
function addtask(){
    if(inputBox.value===''){
        alert("You must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li)//insertAdjacentHTML(li)
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    savedata();
}
inputBox.addEventListener("keyup", function(event) {
    // 13 is the key code for Enter key
    if (event.keyCode === 13) {
        addtask();
    }
});
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);
/*"LI" or "SPAN", it should be in uppercase because that's how it will be represented by the tagName property. */
function savedata(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function recalldata(){
    listContainer.innerHTML=localStorage.getItem("data");
}
recalldata();
function cleartask(){
    while (listContainer.firstChild){
        listContainer.removeChild(listContainer.firstChild);
    }
    inputBox.value = '';
    savedata();
}
