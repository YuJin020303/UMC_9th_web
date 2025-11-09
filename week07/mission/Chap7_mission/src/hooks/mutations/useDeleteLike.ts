import { deleteLike } from "../../apis/lp";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY } from "../../constants/key";
import type { ResponseLikeLpDto } from "../../types/lp";

export default function useDeleteLike() {
    const qc = useQueryClient();

    return useMutation({
        mutationFn: deleteLike,
        onSuccess: (data:ResponseLikeLpDto) => {
            qc.invalidateQueries({ 
                queryKey: [QUERY_KEY.lp, String(data.data.lpId)], 
                exact:true, 
            })
        },
    })
}