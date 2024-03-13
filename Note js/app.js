// get value input
const textArea = document.querySelector('#textarea');

function getText() {
  return textArea.value;
}
// step2
// get variabel
const list = document.querySelector('#list');
// function addlist to page note
function addToList(text) {
  const li = document.createElement('li');
  li.textContent = text;
  li.dataset.id = Math.random().toString(36).substring(7); // ایجاد شناسه تصادفی
  list.body.appendChild(li);

  // save in localStorage
  const notes = getNotesFromLocalStorage();
  notes.push({
    id: li.dataset.id,
    text: text,
  });
  localStorage.setItem('notes', JSON.stringify(notes));
}
// step3
// show list to page
function showList() {
  const notes = getNotesFromLocalStorage();
  notes.forEach((note) => {
    const li = document.createElement('li');
    li.textContent = note.text;
    li.dataset.id = note.id;
    list.appendChild(li);
  });
}

showList();
// step4
// delete note list
list.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    const li = event.target;
    const id = li.dataset.id;

    // delete list
    li.remove();

    // delete to localStorage
    const notes = getNotesFromLocalStorage();
    const filteredNotes = notes.filter((note) => note.id !== id);
    localStorage.setItem('notes', JSON.stringify(filteredNotes));
  }
});
// step 5
// select note, edite
list.addEventListener('dblclick', (event) => {
  if (event.target.tagName === 'LI') {
    const li = event.target;
    const id = li.dataset.id;
    const text = li.textContent;

    // replace with textarea
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.dataset.id = id;
    li.replaceWith(textarea);

    // save text new
    textarea.addEventListener('blur', (event) => {
      const newText = event.target.value;
      const id = event.target.dataset.id;

      // update list
      li.textContent = newText;
      li.replaceWith(textarea);

      // uppdate localStorage
      const notes = getNotesFromLocalStorage();
      const note = notes.find((note) => note.id === id);
      note.text = newText;
      localStorage.setItem('notes', JSON.stringify(notes));
    });
  }
});
// step6
// Auxiliary functions
function getNotesFromLocalStorage() {
  const notes = localStorage.getItem('notes');
  return notes ? JSON.parse(notes) : [];
}



