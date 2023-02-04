import React, { useEffect, useRef, useState } from "react";
import { useIsFetching, useQueries, useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  categories,
  getCategoryProducers,
  getProducerCategories,
} from "./fakeBackend";

export const Selects = () => {
  const currentCategoriesRef = useRef([]);
  const currentProducersRef = useRef([]);
  const [currentProducer, setCurrentProducer] = useState(0);
  const [currentCategory, setCurrentCategory] = useState(0);

  const handleFetchCategories = async (): Promise<any> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getProducerCategories(currentProducer));
      }, 2000);
    });
  };

  const handleFetchProducers = async (): Promise<any> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getCategoryProducers(currentCategory));
      }, 2000);
    });
  };

  const [categories, producers] = useQueries({
    queries: [
      {
        queryKey: ["categories", { id: currentProducer }],
        queryFn: handleFetchCategories,
        // staleTime: Infinity,
        refetchOnMount: true,
        refetchOnWindowFocus: false,
        initialData: currentCategoriesRef.current,
        onSuccess: (data: any) => {
          currentCategoriesRef.current = data;
        },
      },
      {
        queryKey: ["producers", { id: currentCategory }],
        queryFn: handleFetchProducers,
        // staleTime: Infinity,
        refetchOnMount: true,
        refetchOnWindowFocus: false,
        initialData: currentProducersRef.current,
        onSuccess: (data: any) => {
          currentProducersRef.current = data;
        },
      },
    ],
  });

  return (
    <div>
      {!producers.data.length || !categories.data.length ? (
        <div>{"Loading..."}</div>
      ) : (
        <>
          <select
            disabled={producers.isFetching || categories.isFetching}
            onChange={(e) => {
              setCurrentProducer(+e.target.value);
            }}
          >
            <option key={"0"} value={"0"}>
              {"Choose producer"}
            </option>
            {producers.data.map((producer: any) => (
              <option key={producer.id} value={producer.id}>
                {producer.name}
              </option>
            ))}
          </select>
          <select
            disabled={producers.isFetching || categories.isFetching}
            onChange={(e) => {
              setCurrentCategory(+e.target.value);
            }}
          >
            <option key={"0"} value={"0"}>
              {"Choose category"}
            </option>
            {categories.data.map((category: any) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </>
      )}
      <ReactQueryDevtools />
    </div>
  );
};
