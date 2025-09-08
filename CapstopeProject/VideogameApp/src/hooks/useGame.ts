
import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";
export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform : Platform } [];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGame = () => {
    const [games, setGames] = useState<Game[]>([]);
      const [errors, setErrors] = useState("");
    
      useEffect(() => {
        const controller = new AbortController(); 
        apiClient
          .get<FetchGamesResponse>("/games")
          .then((res) => setGames(res.data.results))
          .catch((err) => { if(err instanceof CanceledError) return;
            setErrors(err.message)});

          return () => controller.abort();
      }, []);
  return {games, errors}
}

export default useGame