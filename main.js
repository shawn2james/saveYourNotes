const NOTE_WIDTH = 15;

let clicked = false;

const notesContainer = document.querySelector('.notes');

const numberOfNotes = Math.floor(notesContainer.offsetWidth / NOTE_WIDTH);
const cols = [];
for(let i=0; i<numberOfNotes; i+=1) { cols.push('1fr') }
notesContainer.style.gridTemplateColumns = cols.join(' ');

const notes = notesContainer.children;
let id = -1;
const noteDetails = Array.from(notes).map(note => {
    id += 1;

    // if(notesContainer.offsetLeft !== note.offsetLeft) {
    const col = Math.floor((note.offsetLeft-notesContainer.offsetLeft)/NOTE_WIDTH) + 1;
    // }

    return {
        id: id,
        note: note.textContent,
        colStart: col,
        colSpan: Math.floor(note.offsetWidth / NOTE_WIDTH)
    }
})

console.log(noteDetails);

const resizeNote = (e) => {
    const note = e.target;
    console.log(clicked);

    const clickX = e.clientX;
    const noteLeft = note.offsetLeft;
    const noteRight = note.offsetLeft + note.offsetWidth;

    if(clickX > (noteLeft-10) && clickX < (noteLeft+10)) {
        console.log("resizing");
    }} 

Array.from(notes).forEach(note => {
    note.addEventListener("mousedown", () => { clicked = true});
    note.addEventListener("mouseup", () => { clicked = false })
    note.addEventListener("mousemove", () => { return resizeNote ? clicked : function(){} });
})



