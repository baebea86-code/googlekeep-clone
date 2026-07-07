class Note {
  constructor(id, title, text) {
    this.id = id;
    this.title = title;
    this.text = text;
  }
}

class App {
  constructor() {
    this.notes = [];
  }

  addNote({ title, text }) {
    const id = 2;
    const newNote = new Note(id, title, text);
    this.notes = [...this.notes, newNote];
  }

  editNote(id, {title, text}) {

  }
}

const note1 = {
  title: "Test note",
  text: "text",
};
const app = new App();
app.addNote(note1);
console.log(app.notes);