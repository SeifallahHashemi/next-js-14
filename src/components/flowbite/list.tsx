import React from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { deleteAction } from "@/utils/actions/action";
import { useFormState, useFormStatus } from "react-dom";

interface Props {
  input: string;
  id: string;
}
const List = (props: Props) => {
  useFormStatus()
  return (
    <dl className="max-w-md divide-y divide-gray-200 text-gray-900 dark:divide-gray-700 dark:text-white border-b-2 border-amber-100">
      <div className="flex flex-row justify-between">
        <dt className="mb-1 text-gray-500 dark:text-gray-400 md:text-lg">
          {props.input}
        </dt>
        <dd className="text-lg font-semibold">
          <form>
            <input type={"hidden"} name={"id"} value={props.id}/>
            {/*<Button formAction={deleteAction} type="primary" htmlType={"button"} icon={<DeleteOutlined />} size={"small"} danger />*/}
            <button formAction={deleteAction} className={"bg-rose-700 rounded py-[4px] px-2"}><DeleteOutlined /></button>
          </form>
        </dd>
      </div>
      {/*<div className="flex flex-col py-3">
        <dt className="mb-1 text-gray-500 dark:text-gray-400 md:text-lg">
          Home address
        </dt>
        <dd className="text-lg font-semibold">
          92 Miles Drive, Newark, NJ 07103, California, USA
        </dd>
      </div>
      <div className="flex flex-col pt-3">
        <dt className="mb-1 text-gray-500 dark:text-gray-400 md:text-lg">
          Phone number
        </dt>
        <dd className="text-lg font-semibold">+00 123 456 789 / +12 345 678</dd>
      </div>*/}
    </dl>
  );
};

export default List;