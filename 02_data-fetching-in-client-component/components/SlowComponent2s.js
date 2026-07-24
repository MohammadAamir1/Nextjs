export default async function SlowComponet2s(){
    const Response = await fetch("https://procodrr.vercel.app/?sleep=2000");
    const data = await Response.json();
    return <div>
        {JSON.stringify(data)}
      </div>
}