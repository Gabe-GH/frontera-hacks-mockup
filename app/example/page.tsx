import { fetchDataSample } from "./handlers";


export default async function Page() {

  const data = await getData();

  return (
    <div>
      <h1>Data from MongoDB via API Route</h1>
      <ul>
        {data.map((item: any, index: any) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}


async function getData() {
  const res = await fetchDataSample();

  console.log(res);

  return res;
}