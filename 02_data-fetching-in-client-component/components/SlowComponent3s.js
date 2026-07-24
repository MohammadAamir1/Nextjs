export default async function SlowComponet3s(){
    const Response = await fetch("https://procodrr.vercel.app/?sleep=3000");
    const data = await Response.json();
    return <div>
        {JSON.stringify(data)}
      </div>
}