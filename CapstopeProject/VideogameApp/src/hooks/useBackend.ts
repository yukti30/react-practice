import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import type { Game } from "../enteties/Game";

const apiClient = new APIClient<Game>("/games");
const useBackend = (slug: string) => useQuery(({
    queryKey : ['games' , slug ],
    queryFn: () => apiClient.get(slug)
}))

export default useBackend