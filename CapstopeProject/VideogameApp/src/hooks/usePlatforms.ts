import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";


export interface Platform {
    id: number;
    name: string;
    slug : string;
}

const apiClient = new APIClient<Platform>('/platforms/lists/parents')
const usePlatforms = () =>  useQuery({
    queryKey : ["platforms"],
    queryFn: apiClient.getALL,
    staleTime: 24*60*60*1000, //24hrs    
})

export default usePlatforms;
