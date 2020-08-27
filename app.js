var list = document.getElementById("list");
function addtodo(){
    var todo_item = document.getElementById("todo_item");
    // create li tag with text node
    var li = document.createElement('li');
    var litext = document.createTextNode(todo_item.value);
    li.appendChild(litext);

    //create delete button
    var delBtn = document.createElement("button");
    var deltext =document.createTextNode("DELETE");
    delBtn.setAttribute("class","btn");
    delBtn.setAttribute("onclick","deleteItem(this)");
    delBtn.appendChild(deltext)
// create edit button
    var editBtn = document.createElement("button");
    var edittext =document.createTextNode("Edit")
    editBtn.appendChild(edittext)
    editBtn.setAttribute("onclick","editItem(this)");
   
    li.appendChild(delBtn);
    li.appendChild(editBtn);
    list.appendChild(li);
    todo_item.value =""
}
function deleteItem(e)
{
e.parentNode.remove()
}
function deleteall()
{
    list.innerHTML=""
}
function editItem(e)
{
    var val=e.parentNode.firstChild.nodeValue;
    var editValue =prompt("enter edit value",val)
    e.parentNode.firstChild.nodeValue = editValue
 
}
