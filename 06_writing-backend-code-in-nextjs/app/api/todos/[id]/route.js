// return Response.json(todosData[id - 1]); this method not for any id
// import { writeFile } from "node:fs/promises";
// import todos from "../../../todos";
import Todo from "@/models/todoModel";
import { connectDB } from "@/lib/connectDB";
import { getLoggedInUser } from "@/lib/auth";

export async function GET(_, { params }) {
  await connectDB();

  const user = await getLoggedInUser();
  if (user instanceof Response) return user;

  const { id } = await params;
  // const todo = todos.find((todo) => id === todo.id);
  const todo = await Todo.findOne({ _id: id, userId: user.id });

  if (!todo) {
    return Response.json(
      { error: "Todo not found" },
      {
        status: 404,
      }
    );
  }
  return Response.json(todo);
}

export async function PUT(request, { params }) {
  await connectDB();

  const user = await getLoggedInUser();
  if (user instanceof Response) return user;

  const editTodoData = await request.json();
  const { id } = await params;
  // const todoIndex = todos.findIndex((todo) => id === todo.id);
  // const todo = todos[todoIndex];

  // if (editTodoData.id) {
  //   return Response.json(
  //     { error: "Changing ID is not allow." },
  //     {
  //       status: 403,
  //     }
  //   );
  // }

  // const editedTodo = { ...todo, ...editTodoData };
  // todos[todoIndex] = editedTodo;

  // await writeFile("todos.json", JSON.stringify(todos, null, 2));
  const editedTodo = await Todo.updateMany( { _id: id, userId: user.id }, editTodoData, {
    new: true,
    // runValidators: true,
  });
  
  return Response.json(editedTodo);
}

export async function DELETE(_, { params }) {
  await connectDB();

  const user = await getLoggedInUser();
  if (user instanceof Response) return user;

  const { id } = await params;
  // const todoIndex = todos.findIndex((todo) => id === todo.id);
  // todos.splice(todoIndex, 1);
  // await writeFile("todos.json", JSON.stringify(todos, null, 2));

  await Todo.deleteOne({ _id: id, userId: user.id});
  return new Response(null, {
    status: 204,
  });
}