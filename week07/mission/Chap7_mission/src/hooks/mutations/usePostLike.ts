import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postLike } from "../../apis/lp";
import { QUERY_KEY } from "../../constants/key";
import type { ResponseLikeLpDto } from "../../types/lp";

export default function usePostLike() {
    const qc = useQueryClient();

    return useMutation({
        mutationFn: postLike,
        onSuccess: (data:ResponseLikeLpDto) => {
            qc.invalidateQueries({ 
                queryKey: [QUERY_KEY.lp, String(data.data.lpId)], 
                exact:true, 
            })
        },
    })
}