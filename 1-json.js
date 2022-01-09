const fs = require("fs");

const book = {
  title: "Ego is the enemy",
  author: "Ryan Holiday",
};
console.log(book);

// bookJSON = JSON.stringify(book);
// // console.log(bookJSON, "stringfy");
// fs.writeFileSync("1-json.json", bookJSON);

// // const parseData = JSON.parse(bookJSON);
// // console.log(parseData.author);

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = JSON.parse(dataBuffer.toString());
console.log(dataBuffer.toString().title);
console.log(dataJSON.title);
