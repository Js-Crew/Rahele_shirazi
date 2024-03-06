// Get variables
const btn = document.getElementById("btn");
const textarea = document.getElementById("user");
const notesList = document.getElementById("notes-list"); // دریافت عنصر ul

// Get the button and display the click operation
btn.addEventListener("click", function(event) {
  event.preventDefault();
  const noteText = textarea.value.trim();

  // If text is not empty, create the li element for the list
  if (noteText !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = noteText;

    //Add a delete button inside the list element
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.id = "removeBtn";
    deleteBtn.addEventListener("click", function() {
      //Delete the clicked list item
      notesList.removeChild(listItem);
      // delete from localStorage
      removeFromLocalStorage(noteText);
    });

    listItem.appendChild(deleteBtn);

    notesList.appendChild(listItem);
    textarea.value = "";
    // save in localStorage
    saveToLocalStorage(noteText);
  } else {
    // If the text is empty, an error message will be displayed
    alert("Enter your desired text.");
  }
});

// save in localStorage
function saveToLocalStorage(noteText) {
  const notes = getNotesFromLocalStorage();
  notes.push(noteText);
  localStorage.setItem("notes", JSON.stringify(notes));
}

// get data from localStorage
function getNotesFromLocalStorage() {
  const notesJSON = localStorage.getItem("notes");
  if (notesJSON === null) {
    return [];
  } else {
    return JSON.parse(notesJSON);
  }
}

// Display the list saved in localStorage
function displayNotes() {
  const notes = getNotesFromLocalStorage();
  notes.forEach(noteText => {
    const listItem = document.createElement("li");
    listItem.textContent = noteText;

    // Add a delete button inside the list element
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.id = "removeBtn";
    deleteBtn.addEventListener("click", function() {
      //Delete the clicked list item
      notesList.removeChild(listItem);
      // delete from localStorage
      removeFromLocalStorage(noteText);
    });

    listItem.appendChild(deleteBtn);

    notesList.appendChild(listItem);
  });
}

// delete from localStorage
function removeFromLocalStorage(noteText) {
  const notes = getNotesFromLocalStorage();
  const noteIndex = notes.indexOf(noteText);
  notes.splice(noteIndex, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
}

// Display the saved list at the beginning of page loading
displayNotes();
