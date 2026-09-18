let createBtn = document.querySelector(".create-button");
let modal = document.querySelector(".modal-screen");
let closeBtn = document.querySelector(".close-x-btn");
let cancelBtn = document.querySelector(".close");
let continueBtn = document.querySelector(".continue");
let noteText = document.querySelector("#editor");
let noteContainer = document.querySelector(".notes-container");
let colorBoxes = document.querySelectorAll(".color-box");
let searchInp = document.querySelector(".search-input");
let searchBtn = document.querySelector(".search-btn");

function showModal() {
    modal.classList.remove("hidden");
}
createBtn.addEventListener("click", showModal);

function hiddenModal() {
    modal.classList.add("hidden");
}
closeBtn.addEventListener("click", hiddenModal);
cancelBtn.addEventListener("click", hiddenModal);
function esc(event) {
    if (event.code === "Escape" && modal.className !== "hidden") {
        hiddenModal();
    }
}
document.body.addEventListener("keyup", esc);


function addNote() {
    let createNote = document.createElement("article");
    createNote.className = "note";
    noteContainer.append(createNote);
    let noteP = document.createElement("p");
    noteP.className = "note-content";
    noteP.innerHTML = noteText.value;
    createNote.append(noteP);
    let deleteNoteBtn = document.createElement("div");
    createNote.append(deleteNoteBtn);
    let deletIcone = document.createElement("i");
    deletIcone.className = "fa-solid fa-trash delete";
    deleteNoteBtn.append(deletIcone);
    hiddenModal();
    noteText.value = "";

    function deleteNote() {
        createNote.remove();

    }
    deleteNoteBtn.addEventListener("click", deleteNote);
    createNote.style.backgroundColor = noteColor;
}

continueBtn.addEventListener("click", addNote);
let noteColor;
// let colorBoxSelected;
colorBoxes.forEach(function (box) {
    box.addEventListener("click", function (event) {
        noteColor = event.target.dataset.color;
        let colorBoxSelected = document.querySelector(".selected");
        colorBoxSelected.classList.remove("selected");
        
        event.target.classList.add("selected");
        
    });
});

function searching() {
    const searchValue = searchInp.value;
    const notes = document.querySelectorAll(".note");
    notes.forEach(function (note) {
       const noteContent = note.querySelector(".note-content");
           
       if (noteContent.innerHTML.includes(searchValue)) {
        note.style.display = "flex";
    //    console.log(note);

       } else {
        note.style.display = "none";
    //    console.log("no");

       }
    });
}
// function searching() {
//     const searchValue = searchInp.value;
//     const notes = document.querySelectorAll(".note");
  
//     notes.forEach(function (note) {
//       const noteContentElem = note.querySelector(".note-content");
  
//       if (noteContentElem.innerHTML.includes(searchValue)) {
//         note.style.display = "flex";
//       } else {
//         note.style.display = "none";
//       }
//     });
//   }

searchBtn.addEventListener("click" , searching);