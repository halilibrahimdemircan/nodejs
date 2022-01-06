const fs = require("fs");

const getNotes = () => {
  let text = "Your notes ...";

  return text;
};

const addNote = (title, body) => {
  const notes = loadNotes();

  notes.push({
    title: title,
    body: body,
  });
  saveNotes(notes);
};
console.log("Hellooo");

const saveNotes = () => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    console.log(error);
    return [];
  }
};

module.exports = { getNotes: getNotes, addNote: addNote };
