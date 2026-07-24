import SlowComponet2s from "@/components/SlowComponent2s";
import SlowComponet3s from "@/components/SlowComponent3s";
import TodoItems from "@/components/TodoItems";
import { Suspense } from "react";

async function fetchData(url){
  const response = await fetch(url);
  return await response.json();
}

// one more methods
  const urls = [
    "https://jsonplaceholder.typicode.com/todos?_limit=5",
    "https://procodrr.vercel.app/?sleep=2000",
    "https://procodrr.vercel.app/?sleep=3000",
  ];

const Todos = async () => {
  //   console.log(fetch);
  // const slowResponse = await fetch("https://procodrr.vercel.app/?sleep=2000");
  // const data = await slowResponse.json();
  // console.log(data);
  // const response = await fetch(
  //   "https://jsonplaceholder.typicode.com/todos?_limit=5"
  // );
  // const todos = await response.json();

  // const slowResponse1 = await fetch("https://procodrr.vercel.app/?sleep=2000");
  // const data1 = await slowResponse1.json();
  // console.log(data1);

  // const slowResponse2 = await fetch("https://procodrr.vercel.app/?sleep=3000");
  // const data2 = await slowResponse2.json();
  // console.log(data2);
  


  // const [todos, data2, data3] = await Promise.all([
    // fetchData("https://jsonplaceholder.typicode.com/todos?_limit=5"),
    // fetchData("https://procodrr.vercel.app/?sleep=2000"),
    // fetchData("https://procodrr.vercel.app/?sleep=3000"),
  // ]);

  const [todos, data2, data3] = await Promise.all(
    urls.map((url) => fetchData(url))
  );

  // here we do two promise 
  // const [todos, data2, data3] = await Promise.all([todoResponse.json(), slowResponse2.json(), slowResponse3.json()])

  return (
    <>
      <h1>Todos</h1>
      {/* <Suspense
        fallback={
          <div className="todos-container">
            {Array.from({ length: 5 }).map((_, index) => (
              <li key={index} className="shimmer">
                <div className="shimmer-checkbox"></div>
                <div className="shimmer-text"></div>
              </li>
            ))}
          </div>
        }
      >
        <TodoItems />
      </Suspense>
      <Suspense fallback={<div>"Loading data 1"</div>}>
        <SlowComponet2s />
      </Suspense>
      <Suspense fallback={<div>"Loading todos..."</div>}>
        <SlowComponet3s />
      </Suspense> */}



      <div className="todos-container">
        {todos.map(({ id, title, completed }) => (
          <div className="todo-item" key={id}>
            <input type="checkbox" checked={completed} readOnly />
            <p>{title}</p>
          </div>
        ))}
      </div> 
      <div>
        {JSON.stringify(data2)}
      </div>
       <div>
        {JSON.stringify(data3)}
      </div>
    </>
  );
};

export default Todos;
