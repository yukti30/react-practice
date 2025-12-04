import type { Screentshots } from "@/enteties/Sreenshots"
import APIClient from "@/services/api-client"
import { useQuery } from "@tanstack/react-query"

const useScreenshots = (id: number) => {
    const apiClient = new APIClient<Screentshots>(`/games/${id}/screenshots`)
    return useQuery({
        queryKey: ["screenshots" , id],
        queryFn : () => apiClient.getALL({})
    })
}

export default useScreenshots;