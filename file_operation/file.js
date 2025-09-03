const fs = require("fs");

// fs.readFile("file.txt", "utf8", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   if (data) {
//     console.log("data", data);
//     fs.writeFileSync("new_file.txt", data, (error) => {
//       if (error) {
//         console.log("error", error);
//       }
//       console.log("written sucessfully");
//     });
//   }
// });

// fs.readFile("file.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
//   if (data) {
//     console.log("data", data);
//     fs.writeFileSync("new_file.txt", data, (error) => {
//       if (error) {
//         console.log("error", error);
//       }
//       console.log("written sucessfully");
//     });
//   }
// });

// console.log("This runs without waiting!");

// fs.appendFile("file.txt", "\nNew Line!", (err) => {
//   if (err) console.error(err);
//   else console.log("Data appended");
// });

// fs.unlink("new_file.txt", (err) => {
//   if (err) console.error(err);
//   else console.log("File deleted");
// });

// fs.rename("new_file.txt", "text.txt", (err) => {
//   if (err) console.error(err);
//   else console.log("File renamed");
// });

fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log("This runs without waiting!");
