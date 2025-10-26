import { useParams } from "react-router-dom";
import useGetLpDetail from "../hooks/queries/useGetLpDetail";

export const LpDetailPage = () => {
  const { lpid } = useParams<{ lpid: string }>(); // ✅ lpId만 구조분해

  const { data, isPending, isError } = useGetLpDetail(lpid);

  if (isPending) {
    return <div className="text-white text-3xl">Loading...</div>;
  }

  if (isError) {
    return <div className="text-white text-3xl">Error</div>;
  }

  return (
    <div className="bg-black h-screen p-10">
      <div className="bg-neutral-200 p-10 my-20 mx-10 flex gap-5 justify-center items-start rounded-md">
        <div className="bg-white p-8 rounded-lg shadow-md w-80">
          {/* Album Cover */}
          <img
            src={data.thumbnail}
            alt={data.title}
            className="w-64 h-64 mx-auto rounded-lg mb-4 shadow-lg shadow-teal-50"
          />
          <h2 className="text-xl font-semibold text-center">{data.title}</h2>
          <p className="text-gray-600 text-sm text-center">
            {data.author?.name}
          </p>
          <div className="mt-6 flex justify-center items-center">
            <button className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none">
              <svg
                width="64px"
                height="64px"
                viewBox="0 0 24 24"
                className="w-4 h-4 text-gray-600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transform="matrix(-1, 0, 0, 1, 0, 0)"
              >
                <path
                  d="M16.6598 14.6474C18.4467 13.4935 18.4467 10.5065 16.6598 9.35258L5.87083 2.38548C4.13419 1.26402 2 2.72368 2 5.0329V18.9671C2 21.2763 4.13419 22.736 5.87083 21.6145L16.6598 14.6474Z"
                  fill="#000000"
                />
                <path
                  d="M22.75 5C22.75 4.58579 22.4142 4.25 22 4.25C21.5858 4.25 21.25 4.58579 21.25 5V19C21.25 19.4142 21.5858 19.75 22 19.75C22.4142 19.75 22.75 19.4142 22.75 19V5Z"
                  fill="#000000"
                />
              </svg>
            </button>

            <button className="p-4 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none mx-4">
              <svg
                width="64px"
                height="64px"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-gray-600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V6Z"
                  fill="#000000"
                />
                <path
                  d="M14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V6Z"
                  fill="#000000"
                />
              </svg>
            </button>

            <button className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none">
              <svg
                width="64px"
                height="64px"
                viewBox="0 0 24 24"
                className="w-4 h-4 text-gray-600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.6598 14.6474C18.4467 13.4935 18.4467 10.5065 16.6598 9.35258L5.87083 2.38548C4.13419 1.26402 2 2.72368 2 5.0329V18.9671C2 21.2763 4.13419 22.736 5.87083 21.6145L16.6598 14.6474Z"
                  fill="#000000"
                />
                <path
                  d="M22.75 5C22.75 4.58579 22.4142 4.25 22 4.25C21.5858 4.25 21.25 4.58579 21.25 5V19C21.25 19.4142 21.5858 19.75 22 19.75C22.4142 19.75 22.75 19.4142 22.75 19V5Z"
                  fill="#000000"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex-1 p-5 ">
          <div className="flex justify-between items-center gap-5">
            <div className="flex items-center gap-5">
              <img
                src={data.author?.avatar}
                alt={data.author?.name}
                className="size-20 mx-auto rounded-full mb-4 shadow-lg shadow-teal-50"
              />
              <h2 className="text-xl font-semibold text-center">
                {data.author?.name}
              </h2>
            </div>

            <h1>{data.createdAt.slice(0, 10)}</h1>
          </div>

          {/* Lp 설명 */}
          <div className="flex justify-between">
            <h1 className="font-semibold text-2xl">{data.title}</h1>
            {/* 이모티콘 */}
            <div className="flex gap-2 pr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-5 text-neutral-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-5 text-neutral-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </div>
          </div>
          <h1 className="p-3">{data.content}</h1>
          <div className="flex gap-3 justify-center mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-6 text-blue-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
              />
            </svg>
            <h1 className="font-bold">{data.likes.length}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
