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
    onNoteEdit(newTitle, newBody) {
        console.log(newTitle);
        console.log(newBody);
    },
});

view.updateNoteList(NotesAPI.getAllNotes());