import { BiSolidPlusCircle } from "react-icons/bi";

function AddPostButton() {
  return (
    <div className=" w-full rounded-lg bg-[#2b2d30]">
      <button className="w-full hover:opacity-90 ">
        <div className="m-3 flex items-center justify-center gap-2 font-bold">
          <span>Thêm bài viết mới</span>{" "}
          <BiSolidPlusCircle className="text-2xl text-primary" />
        </div>
      </button>
    </div>
  );
}

export default AddPostButton;
