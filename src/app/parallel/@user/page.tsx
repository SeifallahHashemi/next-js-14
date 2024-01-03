import React from "react";
import { delay } from "@/utils/delay";

const UserPage = async () => {
  await delay(6000)
  return (
    <div className={"bg-orange-900 rounded h-60 w-full flex justify-center items-center text-white"}>
      <h2 className={"font-bold text-4xl"}>UserPage</h2>
    </div>
  );
};

export default UserPage;