// get variables
    let btn = document.getElementById("btn");
    let textarea = document.getElementById("user");
    let notesList = document.getElementById("notes-list"); // Get the ul element
// get btn and clicked on button display amaliat
    btn.addEventListener("click", function(event) {
        event.preventDefault();
        let noteText = textarea.value.trim();
        // when not full created element li to list
        if (noteText !== "") {
            let listItem = document.createElement("li");
            listItem.textContent = noteText;
        
            // Add a delete button inside the list item
            let deleteBtn = document.createElement("button");
            deleteBtn.textContent = "x";
            deleteBtn.id="removeBtn"
            deleteBtn.addEventListener("click", function() {
                // Remove the clicked list item
                notesList.removeChild(listItem);
            });
            
            listItem.appendChild(deleteBtn);

            notesList.appendChild(listItem);
            textarea.value = "";
        }
        // when note full bode erroreed
        if(noteText===""){
            alert("enter your note list")
        }
    });
tammamm

