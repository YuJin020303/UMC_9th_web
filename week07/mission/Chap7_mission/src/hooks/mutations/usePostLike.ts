import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postLike } from "../../apis/lp";
import { QUERY_KEY } from "../../constants/key";
import type { RequestLpDto, ResponseLpDetailDto, Likes } from "../../types/lp";
import type { ResponseMyInfoDto } from "../../types/auth";

export default function usePostLike() {
    const qc = useQueryClient();

    return useMutation({
        mutationFn: postLike,
        onMutate: async(lp: RequestLpDto) => {
      
      await qc.cancelQueries({
        queryKey: [QUERY_KEY.lp, lp.lpId],
      });

      const previousLpPost = qc.getQueryData<ResponseLpDetailDto>([QUERY_KEY.lp, lp.lpId]);
      
      const newLpPost = {
        ...previousLpPost,
        data: {
          ...previousLpPost?.data,
          likes: previousLpPost?.data.likes ? previousLpPost.data.likes.map(l => ({...l})) : []
        }
      }
    
      const me = qc.getQueryData<ResponseMyInfoDto>([QUERY_KEY.myInfo]);
      const userId = Number(me?.data.id);
    
      const likedIndex = previousLpPost?.data.likes.findIndex((like) => like.userId === userId) ?? -1;
    
      if (likedIndex >= 0){
        newLpPost.data.likes = newLpPost.data.likes.filter(l => l.userId !== userId);
      } else {
        const newLike = {userId, lpId: lp.lpId} as Likes;
        newLpPost.data.likes = [...newLpPost.data.likes, newLike];
      }
    
      qc.setQueryData([QUERY_KEY.lp, lp.lpId], newLpPost);
    
      return {previousLpPost, newLpPost};
    },
    onError: (err, newLp, context) => {
      console.log(err, newLp);
      qc.setQueryData([QUERY_KEY.lp, newLp.lpId], context?.previousLpPost?.data.id);
    },

    onSettled: async(_data, _error, variables) => {
      await qc.invalidateQueries({
        queryKey:[QUERY_KEY.lp, variables.lpId],
      });
    },
    })
}