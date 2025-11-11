import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import ms from "ms"
import APIClient, { type FetchResponse } from "@/services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery<FetchResponse<Genre> , Error >({
    queryKey: ["genres"],
    queryFn: () => apiClient.getALL({}), 
    staleTime: ms('24h'), // 24 hours
    initialData: { count: genres.length, results: genres, next: null }, 
  });

export default useGenres;
