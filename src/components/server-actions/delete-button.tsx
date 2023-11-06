'use client'
import React from "react";
import { useFormStatus } from "react-dom";
import { DeleteOutlined } from "@ant-design/icons";

const DeleteButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="bg-rose-700 rounded py-[4px] px-2">
      {pending ? "Deleting..." : <DeleteOutlined style={{ fill: "#fff", color: "white"}}/>}
    </button>
  );
};

export default DeleteButton;