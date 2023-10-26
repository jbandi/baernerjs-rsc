import { fetchAllData, fetchData } from "@/app/api/fetchData";
import { useEffect, useState } from "react";
import { FormDemo } from "@/app/FormDemo";
import { Chart, ChartDemo } from "@/app/ChartDemo";
import { ListDemo } from "@/app/ListDemo";

export async function HelloWorld() {
  // const [data, setData] = useState("Loading ...");
  //
  // useEffect(() => {
  //   fetchData().then((data) => {
  //     setData(data);
  //   });
  // });

  const data = await fetchData();

  // let data = "Loading ...";
  // fetchData().then((d) => {
  //   console.log(d);
  //   data = d;
  // });

  return (
    <div>
      <div className="flex w-screen flex-col items-center p-5 text-4xl">
        <p>Hello World!</p>
        <p>{data}</p>

        <FormDemo initalMessage={data} />
        <ListDemo />
        <ChartDemo />
      </div>
    </div>
  );
}
