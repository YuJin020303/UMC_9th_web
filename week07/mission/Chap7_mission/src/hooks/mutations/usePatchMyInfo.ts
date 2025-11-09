import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchMyInfo } from "../../apis/auth";
import type { RequestMyInfoDto } from "../../types/auth";
import { QUERY_KEY } from "../../constants/key";


export default function  usePatchMyInfo() {
    const qc = useQueryClient();

    return useMutation({
        mutationFn: ({ name, bio, avatar }: RequestMyInfoDto) => patchMyInfo({ name, bio, avatar }),
        onSuccess: () => {
            qc.invalidateQueries({ 
                queryKey: [QUERY_KEY.myInfo], 
            })
        },
    })
}