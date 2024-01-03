import React from "react";
import Search from "@/components/Search/search";

const AppContainer = ({ searchParams }: {
  searchParams?: {
    q?: string;
    page?: string;
  }
}) => {
  console.log(searchParams?.q || '');
  return (
    <div className={"container max-w-2xl"}>
      <Search />
    </div>
  );
};

export default AppContainer;