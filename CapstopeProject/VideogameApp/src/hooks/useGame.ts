
import type { GameQuery } from "@/App";
// import useData from "./useData";
import { useInfiniteQuery } from "@tanstack/react-query";


import type {Platform} from "./usePlatforms"
import APIClient, { type FetchResponse } from "@/services/api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform : Platform } [];
  metacritic: number;
  rating_top: number;
}

const apiClient = new APIClient<Game>("/games")

const useGame = (gameQuery : GameQuery) => useInfiniteQuery<FetchResponse<Game>, Error>({
  queryKey: ['games' , gameQuery],
  queryFn:({pageParam = 1}) => apiClient.getALL({
      params: {
        genres: gameQuery.genreId,
        platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam
      },
    }),
  getNextPageParam: (lastPage, allPages) => lastPage.next ? allPages.length + 1 : undefined,
  staleTime: 24*60*60*1000,
  initialPageParam: 1, 
})
 

export default useGame
