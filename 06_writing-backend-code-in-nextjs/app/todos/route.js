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

import { readFile, writeFile } from "node:fs/promises";
import todos from "../../todos";

export async function GET() {
  const todoJSONString = await readFile("./todos.json", "utf-8");
  const todos = JSON.parse(todoJSONString);
  return Response.json(todos);
}

export async function POST(request) {
  const todo = await request.json();
  const newTodo = {
    id: crypto.randomUUID(),
    text: todo.text,
    completed: false,
  };

  todos.push(newTodo);
  await writeFile("todos.json", JSON.stringify(todos, null, 2));
  return Response.json(newTodo, {
    status: 201,
  });
}