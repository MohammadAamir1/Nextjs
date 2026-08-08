// // import { writeFile } from "fs/promises";
// import { readFile } from "fs/promises";

// // await writeFile("hello.txt", 'Hi, How are you?')
// const fileContents = await readFile("hello.txt", "utf-8");
// console.log(fileContents);

// // console.log(process.cwd());

// // console.log("Written to the file");

// // this page also run in server page as page.js of main file


// import http from 'http'

// const server = http.createServer((req,res) => {
//   console.log(req.url);
//   res.end("Hello from new next.js server");
// });

// server.listen(4000, () => {
//   console.log('server started on port 4000');
// })
import todosData from "../../todos.json";

export function GET() {
  console.log('Running GET route handler.')
  // return new Response(JSON.stringify(todosData), {
  //   headers: {
  //     // "Content-Type": "application/json",
  //     // "Content-Type": "audio/mp3",
  //     "Content-Type": "application/pdf", //mime types
  //   },
  //   status:200,
  //   statusText:'Ok Google',
  // });

  return Response.json(todosData)

}