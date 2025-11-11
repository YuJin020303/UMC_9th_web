import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchMyInfo } from "../../apis/auth";
import type { RequestMyInfoDto, ResponseMyInfoDto } from "../../types/auth";
import { QUERY_KEY } from "../../constants/key";

// 내 정보 조회
// export type ResponseMyInfoDto = CommonResponse<{
//   id: number;
//   name: string;
//   email: string;
//   bio: string | null;
//   avatar: string | null;
//   createdAt: Date;
//   updatedAt: Date;
// }>;

// export type RequestMyInfoDto = {
//   name: string;
//   bio: string | null;
//   avatar: string | null;
// }

export default function  usePatchMyInfo() {
    const qc = useQueryClient();

    return useMutation({
        mutationFn: ({ name, bio, avatar }: RequestMyInfoDto) => patchMyInfo({ name, bio, avatar }),
        // onSuccess: () => {
        //     qc.invalidateQueries({ 
        //         queryKey: [QUERY_KEY.myInfo], 
        //     })
        // },
        // 
        onMutate: async(patchInfo:RequestMyInfoDto) => {
            await qc.cancelQueries({
                queryKey: [QUERY_KEY.myInfo],
            });
            
            const preMyInfo = qc.getQueryData<ResponseMyInfoDto>([QUERY_KEY.myInfo]);
            
            const newMyInfoData = {
                id: preMyInfo?.data.id,
                name: patchInfo.name,
                email: preMyInfo?.data.email,
                bio: patchInfo.bio,
                avatar: patchInfo.avatar,
                createdAt: preMyInfo?.data.createdAt,
                updatedAt: preMyInfo?.data.updatedAt,
            };
            
            const newMyInfo = {...preMyInfo, data: newMyInfoData};
            qc.setQueryData([QUERY_KEY.myInfo], newMyInfo);
            
            return {preMyInfo, newMyInfo};
        },
        onError: (err, newLp, context) => {
            console.log(err, newLp);
            qc.setQueryData([QUERY_KEY.myInfo], context?.preMyInfo);
            alert("프로필 수정에 실패했습니다. 다시 시도해주세요.");
        },
    onSettled: async() => {
        await qc.invalidateQueries({
            queryKey:[QUERY_KEY.myInfo],
            exact: true,
        });
    },
})}