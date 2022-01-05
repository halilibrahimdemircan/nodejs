const decrease = require("./notes");
const yargs = require("yargs");
const notes = require("./notes");
const chalk = require("chalk");

console.log(yargs.argv);

yargs.command({
  command: "add",
  describe: "Add a note",
  builder: {
    title: {
      describe: "Node title",
      demandOption: true,
      type: "string ",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
    console.log("Adding a note", argv);
  },
});
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing the note");
  },
});
yargs.command({
  command: "list",
  describe: "List your notes",
  handler: function () {
    console.log("Listing out all notes");
  },
});
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("Reading a note");
  },
});
