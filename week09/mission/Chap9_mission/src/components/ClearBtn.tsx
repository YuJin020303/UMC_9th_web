import { useDispatch } from "../hooks/useCustomRedux";
import { useSelector } from "../hooks/useCustomRedux";
import DeleteModal from "./DeleteModal";
import { openModal } from "../slices/modalSlice";

export const ClearBtn = () => {
  const { isOpen } = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  const handleModalOpen = () => {
    // 모달 열기 액션 디스패치
    dispatch(openModal());
  };

  return (
    <>
      <button
        className="mt-6 w-full bg-red-100 text-white py-3 rounded-md font-semibold hover:bg-red-600 transition-colors"
        onClick={handleModalOpen}
      >
        전체 삭제하기
      </button>
      {/* 모달 표시 */}
      {isOpen && (
        <DeleteModal/>
      )}
    </>
  );
};
