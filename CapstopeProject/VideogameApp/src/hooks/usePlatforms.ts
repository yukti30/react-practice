import APIClient, { type FetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";


export interface Platform {
    id: number;
    name: string;
    slug : string;
}

const apiClient = new APIClient<Platform>('/platforms/lists/parents')
const usePlatforms = () =>  useQuery<FetchResponse<Platform> , Error >({
    queryKey : ["platforms"],
    queryFn: () => apiClient.getALL({}),
    staleTime: ms("24h"), //24hrs    
})

export default usePlatforms;
