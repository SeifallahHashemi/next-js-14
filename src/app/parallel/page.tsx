import React from "react";
import { delay } from "@/utils/delay";

const ParallelPage = async () => {
  await delay(1000)
  return (
    <div className={"bg-teal-900 h-60 w-full flex justify-center items-center text-white rounded"}>
      <h1 className={"font-bold text-4xl"}>Parallel Routes</h1>
    </div>
  );
};

export default ParallelPage;