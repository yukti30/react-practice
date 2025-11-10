
import type { GameQuery } from "@/App";
// import useData from "./useData";
import { useQuery } from "@tanstack/react-query";


import type {Platform} from "./usePlatforms"
import APIClient from "@/services/api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform : Platform } [];
  metacritic: number;
  rating_top: number;
}

const apiClient = new APIClient<Game>("/games")

const useGame = (gameQuery : GameQuery) => useQuery({
  queryKey: ['games' , gameQuery],
  queryFn: () => apiClient.getALL( {
    params : {
      genres : gameQuery.genre?.id , 
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder ,
      search: gameQuery.searchText  }
    
  }),
  staleTime: 24*60*60*1000,
})
 

export default useGame
