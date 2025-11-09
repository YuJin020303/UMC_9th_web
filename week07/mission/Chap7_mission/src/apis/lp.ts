import type { PaginationDto, CommentPaginationDto } from "../types/common";
import { axiosInstance } from "./axios";
import type { ResponseLikeLpDto, ResponseLpCommentListDto, ResponseLpDetailDto, ResponseLpListDto, RequestCreateLpDto, ResponseCreateLpDto } from "../types/lp";

export const getLpList = async (paginationDto: PaginationDto):Promise<ResponseLpListDto> => {
  const { data } = await axiosInstance.get("/v1/lps", {
    params: paginationDto,
  });
  return data;
}

export const getLpDetail = async (lpId: string | undefined):Promise<ResponseLpDetailDto> => {
  const { data } = await axiosInstance.get(`/v1/lps/${lpId}`);
  return data;
}

export const getLpComments = async (commentPaginationDto: CommentPaginationDto):Promise<ResponseLpCommentListDto> => {
  const { data } = await axiosInstance.get(`/v1/lps/${commentPaginationDto.lpId}/comments`,{
    params: commentPaginationDto,
  });
  return data;
}

export const postLike = async (lpId: string | undefined):Promise<ResponseLikeLpDto> => {
  const { data } = await axiosInstance.post(`/v1/lps/${lpId}/likes`);
  return data;
}

export const deleteLike = async (lpId: string | undefined):Promise<ResponseLikeLpDto> => {
  const { data } = await axiosInstance.delete(`/v1/lps/${lpId}/likes`);
  return data;
}

export const postCreateLp = async (newLp: RequestCreateLpDto):Promise<ResponseCreateLpDto> => {
  const { data } = await axiosInstance.post("/v1/lps/", newLp);
  return data;
};