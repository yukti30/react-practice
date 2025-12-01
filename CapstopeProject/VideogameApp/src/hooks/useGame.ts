
// import type { GameQuery } from "@/App"; 
import ms from "ms";
// import useData from "./useData";
import { useInfiniteQuery } from "@tanstack/react-query";


import APIClient, { type FetchResponse } from "@/services/api-client";
import useGameQueryStore from "@/store";
import type { Game } from "../enteties/Game";

const apiClient = new APIClient<Game>("/games")

const useGame = () => {
  const gameQuery = useGameQueryStore(s => s.gameQuery)
  return useInfiniteQuery<FetchResponse<Game>, Error>({
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
  staleTime: ms('24h'),
  initialPageParam: 1, 
})
 
}
export default useGame
