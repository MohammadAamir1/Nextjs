// import { readFile, writeFile } from "node:fs/promises";
// import todos from "../../todos";
import { connectDB } from "@/lib/connectDB";
// import mongoose from "mongoose";
import Todo from "@/models/todoModel";
import { cookies } from "next/headers";

// connectDB();

export async function GET(request) {
  await connectDB();
  const cookieStore = await cookies();

  // const result = db.collection("users").insertOne({ name: "Amir" });
  // const result = await mongoose.connection.db
  //   .collection("todos")
  //   .insertMany([{ title: "Learn Node.js", completed: false }]);
  const allTodo = await Todo.find();

  // console.log(cookieStore.get("userId").value);
  cookieStore.set("userId", "1234", {
    httpOnly: true,
    maxAge: 5,
  });

  // console.log(request.headers.get("cookie"))

  // const response = new Response(JSON.stringify([]), {
  //   headers: {
  //     // 'Set-Cookie' : "name=ProCodrr;path=/;httpOnly",
  //     'Set-Cookie' : "userId=ProCodrr;path=/;httpOnly",
  //   },
  // });
  // return response;


  // console.log(allTodo.map(((id,))));

  // const todoJSONString = await readFile("./todos.json", "utf-8");
  // const todos = JSON.parse(todoJSONString);
  return Response.json(allTodo.map(({ id, text, completed }) => ({ id, text, completed })));
}

export async function POST(request) {
  await connectDB()
  const todo = await request.json();
  const { id, text, completed } = await Todo.create({ text: todo.text})
  return Response.json(
    { id, text, completed },
    {
      status: 201,
    }
  );
}