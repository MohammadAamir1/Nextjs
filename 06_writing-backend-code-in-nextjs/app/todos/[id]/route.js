import todos from "../../../todos.json";

export async function GET(_, { params }){
    const { id } = await params;
    // console.log(context);
    // console.log(a);
    // return Response.json(todosData[id - 1]); this method not for any id

    const todo = todos.find((todo) => id == todo.id.toString());

    if(!todo) {
        return Response.json(
            { error: "Todo not found" },
            {
                status: 404,
            }
        )
    }
    return Response.json(todo);
}