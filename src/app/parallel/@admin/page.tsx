import React from "react";
import { delay } from "@/utils/delay";

const AdminPage = async () => {
  await delay(3000)
  return (
    <div className={"bg-emerald-900 h-60 rounded w-full flex justify-center items-center text-white"}>
      <h2 className={"font-bold text-4xl"}>Admin Page</h2>
    </div>
  );
};

export default AdminPage;