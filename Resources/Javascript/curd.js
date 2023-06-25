let addBtn = document.getElementById('add_btn');
addBtn.addEventListener('click', addstudent);

let parentList = document.getElementById('parentList');

function addstudent(e) {
   if (parentList.children[0].className == "emptyMsg") {
      parentList.children[0].remove();
   }
   
   if(addBtn.previousElementSibling.value == ""){
      window.alert("Empty message to add")
      return;
   }
   let currentBtn = e.currentTarget;
   let currentInput = currentBtn.previousElementSibling;
   let currentName = currentInput.value;

   let newLi = document.createElement('li');
   // newLi.classList.add('list-group-item') ;
   newLi.classList = "list-group-item d-flex justify-content-between my-auto text-white bg-dark border-bottom border-success align-middle";
   newLi.innerHTML = `<h4 class="flex-grow-1">${currentName}</h4>
                     <button class="btn btn-warning mx-3" onclick="editChapter(this)">Edit</button>
                     <button class="btn btn-danger" onclick="removechapter(this)">Remove</button>`;

   parentList.appendChild(newLi);

}
function removechapter(currElement) {
   currElement.parentElement.remove()
   let parentList = document.getElementById('parentList');
   if (parentList.children.length == 0) {
      let newEmptyMsg = document.createElement("h3");
      newEmptyMsg.classList.add('emptyMsg')
      newEmptyMsg.textContent = 'Nothing is here! Please add a Element';
      parentList.appendChild(newEmptyMsg)
   }
}

// Editing the Element
function editChapter(currElement) {
   if (currElement.textContent == "Done") {
      currElement.textContent == "Edit";
      let currChapterName = currElement.previousElementSibling.value;
      let currHeading = document.createElement('h3');
      currHeading.className = "flex-grow-1 my-auto";
      currHeading.textContent = currChapterName;
      currElement.parentElement.replaceChild(currHeading, currElement.previousElementSibling)
   }
   else {
      currElement.textContent = "Done";
      let currChapterName = currElement.previousElementSibling.textContent;
      let currInput = document.createElement('input');
      currInput.type = "text";
      currInput.placeholder = "Student name";
      currInput.classList = "form-control my-auto";
      currInput.value = currChapterName;
      currElement.parentElement.replaceChild(currInput, currElement.previousElementSibling);
   }

}
