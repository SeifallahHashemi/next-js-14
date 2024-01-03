import React from "react";

const ParallelLayout = ({
  children,
  admin,
  user,
                        }: {
  children: React.ReactNode;
  admin: React.ReactNode;
  user: React.ReactNode;
}) => {
  return (
    <div className={"container max-w-7xl min-h-screen flex flex-col gap-4 pt-4 rounded"}>
      <section>{children}</section>
      <section className={"flex gap-4 flex-row"}>
        {admin}
        {user}
      </section>
    </div>
  );
};

export default ParallelLayout;