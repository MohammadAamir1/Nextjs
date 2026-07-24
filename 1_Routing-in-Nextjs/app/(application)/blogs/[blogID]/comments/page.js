export default async function ({ params }){
    // const { blogID } = await params;
    const paramsObj = await params;
    const { blogID } = paramsObj;
    console.log(paramsObj)
    return <div>ALL comments on <b>{blogID}</b> page</div>
}