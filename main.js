const NOTE_WIDTH = 15;
let notClicked = true;
let lastMouseX = 0;

document.body.onmousedown = () => { mouse.clicked = true; }
document.body.onmouseup = () => { mouse.clicked = false; }

const notesContainer = document.querySelector('.notes');
const numberOfNotes = Math.floor(notesContainer.offsetWidth / NOTE_WIDTH);
const cols = [];
for(let i=0; i<numberOfNotes; i+=1) { cols.push('15px') }
notesContainer.style.gridTemplateColumns = cols.join(' ');

const notes = Array.from(notesContainer.children);
let id = 0;
const noteDetails = notes.map(note => {
    id += 1;
    const col = Math.floor((note.offsetLeft-notesContainer.offsetLeft)/NOTE_WIDTH) + 1;
    return {
        id: id,
        note: note.textContent,
        colStart: col,
        colSpan: Math.floor(note.offsetWidth / NOTE_WIDTH),
        colEnd: this.colStart + this.colSpan
    }
})

function getEdge(note, mouseX, mouseY) {
    const noteStart = note.offsetLeft;
    const noteEnd = noteStart + note.offsetWidth;
    if( (mouseX >= noteStart) && (mouseX <= noteStart+8) ){
        return "left";
    } else if( (mouseX <= noteEnd) && (mouseX >= noteEnd-8) ) {
        return "right";
    } else {
        return null;
    }
}

const mouse = {
    clicked: false,
    note: notes[0],
    x: 0,
    y: 0,    
}

const resizeNote = (e) => {
    mouse.note = e.target;
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    if(notClicked) {
        lastMouseX = mouse.x;
        notClicked = false;
    }

    const edge = getEdge(mouse.note, mouse.x, mouse.y);
    if(edge === "left") {
        mouse.note.style.cursor = "col-resize";
        if(mouse.clicked) {
            const noteId = Number(mouse.note.id.split("-")[1]);
            const noteDetail = noteDetails[noteId-1];

            if(mouse.x < lastMouseX) {
                if( Math.floor(lastMouseX-mouse.x) <= NOTE_WIDTH) {
                    console.log('enlarging');

                    mouse.note.style.gridColumn = `${noteDetail.colStart-1}/span ${noteDetail.colSpan+1}`;
                    noteDetails[noteId-1].colStart -= 1;
                    noteDetails[noteId-1].colSpan += 1;
                    lastMouseX = mouse.x;
                }
            } else if(mouse.x > lastMouseX) {
                if( Math.floor(mouse.x-lastMouseX) <= NOTE_WIDTH) {
                    console.log('shrinking');

                    mouse.note.style.gridColumn = `${noteDetail.colStart+1}/span ${noteDetail.colSpan-1}`;
                    noteDetails[noteId-1].colStart += 1;
                    noteDetails[noteId-1].colSpan -= 1;
                    lastMouseX = mouse.x;
                }
            }
        } else {
            notClicked = true;
        }
    } 
}  

notes.forEach(note => {
    note.addEventListener("mousemove", resizeNote);
})



