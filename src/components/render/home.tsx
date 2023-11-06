"use client";
import DatePage from "@/components/date-page/date-page";
import TodoCard from "@/components/card/todo-card";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Product } from "@/libs/types";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";

export default function PrevNextJs() {
  const { ref, inView, entry } = useInView();
  const fetchProducts = async ({ pageParam }: { pageParam: number }) => {
    const response = await fetch(
      `https://64db99de593f57e435b13182.mockapi.io/products?page=${pageParam}&limit=10`,
    );
    return response.json();
  };
  const { data, status, error, fetchNextPage, isFetchingNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.length ? allPages.length + 1 : undefined;
      return nextPage;
    },
    getPreviousPageParam: (firstPage, allPages) => firstPage.prevCursor,
  });
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage])
  // console.log(data?.pages[0].map((product: Todo) => typeof product))
  const content = data?.pages.map((products: Product[]) =>
    products.map((product, index) => {
      if (products.length == index + 1) {
        return (
          <TodoCard
            innerRef={ref}
            key={product.id}
            product={product}
            className={"w-full h-52 grid place-content-center"}
          />
        );
      }
      return (
        <TodoCard
          key={product.id}
          product={product}
          className={"w-full h-52 grid place-content-center"}
        />
      )
    }),
  );
  if (status === "pending") {
    return <p>Loading ...</p>;
  }
  if (status === "error") {
    return <p>Error: {error.message}</p>;
  }
  return <div>{content}</div>;
}
