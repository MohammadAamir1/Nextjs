import { readFile, writeFile } from "node:fs/promises";
import todos from "../../todos";
import { connectDB } from "@/lib/connectDB";
// import mongoose from "mongoose";
import Todo from "@/models/todoModel";

// connectDB();

export async function GET() {
  await connectDB();
  // const result = db.collection("users").insertOne({ name: "Amir" });
  // const result = await mongoose.connection.db
  //   .collection("todos")
  //   .insertMany([{ title: "Learn Node.js", completed: false }]);
  const newTodo = await Todo.create({
    text: "Learn Typescript",
  })
  const result = await Todo.find();
  console.log(result);

  const todoJSONString = await readFile("./todos.json", "utf-8");
  const todos = JSON.parse(todoJSONString);
  return Response.json(result);
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