import React from "react";
import RhfWithAction from "@/components/React Hook Form - Zod - ServerAction/with-action";
import Rhf from "@/components/React Hook Form - Zod - ServerAction/rhf";
import SimpleForm from "@/components/React Hook Form - Zod - ServerAction/simple";
import RhfWithZod from "@/components/React Hook Form - Zod - ServerAction/rhf-with-zod";

const RhfContainer = () => {
  return (
    <div className={"max-w-7xl mx-auto py-24"}>
       <SimpleForm />
       {/*<Rhf /> */}
       {/*<RhfWithZod /> */}
      {/*<RhfWithAction />*/}
    </div>
  );
};

export default RhfContainer;