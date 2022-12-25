import NotesView from "./NotesView.js"
import NotesAPI from "./NotesAPI.js"

const app = document.getElementById("app");
const view = new NotesView(app, {
    onNoteAdd() {
        console.log("Let's add a note!");
    },
    onNoteSelect() {
        console.log("Note selected:" + id);
    },
    onNoteDelete() {
        console.log("Note deleted:" + id);
    },
    onNoteEdit(newTitle, newBody) {
        console.log(newTitle);
        console.log(newBody);
    },
});

const notes = NotesAPI.getAllNotes();

view.updateNoteList(NotesAPI.getAllNotes());
view.updateActiveNote(notes[0]);