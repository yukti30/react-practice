
import type { Trailers } from "@/enteties/Trailers";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";




const useVideos = (id : number) => {

    const apiClient = new APIClient<Trailers>(`/games/${id}/movies`)
    return useQuery(({
    queryKey : ["trailes" , id],
    queryFn: () => apiClient.getALL({}),
}))}

export default useVideos