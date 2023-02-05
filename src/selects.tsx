import React, { useRef, useState } from "react";
import {
  Query,
  QueryCache,
  useQueries,
  useQueryClient,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  categories,
  getCategoryProducers,
  getProducerCategories,
} from "./fakeBackend";

export const Selects = () => {
  const [currentProducer, setCurrentProducer] = useState(0);
  const [currentCategory, setCurrentCategory] = useState(0);

  const queryClient = useQueryClient();

  const handleFetchCategories = async ({
    queryKey,
  }: {
    queryKey: readonly unknown[];
  }): Promise<any> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const cache: Query<any, unknown, any> | undefined = queryClient
          .getQueryCache()
          .find(queryKey);

        if (cache && cache.state.data?.length) {
          console.log("return cache");
          return resolve(cache.state.data);
        }

        return resolve(getProducerCategories(currentProducer));
      }, 2000);
    });
  };

  const handleFetchProducers = async ({
    queryKey,
  }: {
    queryKey: readonly unknown[];
  }): Promise<any> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const cache: Query<any, unknown, any> | undefined = queryClient
          .getQueryCache()
          .find(queryKey);

        if (cache && cache.state.data?.length) {
          console.log("return cache");
          return resolve(cache.state.data);
        }

        return resolve(getCategoryProducers(currentCategory));
      }, 2000);
    });
  };

  const [categories, producers] = useQueries({
    queries: [
      {
        queryKey: ["categories", { id: currentProducer }],
        queryFn: handleFetchCategories,
        refetchOnMount: true,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
      },
      {
        queryKey: ["producers", { id: currentCategory }],
        queryFn: handleFetchProducers,
        refetchOnMount: true,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
      },
    ],
  });

  return (
    <div>
      {!producers.data?.length || !categories.data?.length ? (
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
