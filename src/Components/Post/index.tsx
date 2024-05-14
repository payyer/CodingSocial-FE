import { FaCommentDots } from "react-icons/fa";
import { FaShareFromSquare } from "react-icons/fa6";
import { ImFire } from "react-icons/im";
import { IoEarth } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";

function Post() {
  return (
    <>
      {/* Header */}
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          {/* Avatar */}
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          {/* Name and Mode */}
          <div>
            <div className="font-bold text-white hover:underline cursor-pointer">
              Lê Quốc Anh
            </div>
            <div className="flex items-center gap-2">
              <span>1 giờ</span>
              <IoEarth className="mt-1" />
            </div>
          </div>
        </div>
        <div>
          <button className=" w-8 h-8 rounded-full hover:bg-secondary flex justify-center items-center">
            <SlOptions />
          </button>
        </div>
      </div>

      {/* Content */}
      <div>
        {/* Text Content*/}
        <div className="mt-1 text-balance line-clamp-3 ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          eligendi blanditiis aspernatur culpa nihil numquam sed repellendus
          voluptatum sint molestiae veniam in id exercitationem, corporis vel
          quos necessitatibus. Nobis, sequi! Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Excepturi eligendi blanditiis aspernatur
          culpa nihil numquam sed repellendus voluptatum sint molestiae veniam
          in id exercitationem, corporis vel quos necessitatibus. Nobis, sequi!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          eligendi blanditiis aspernatur culpa nihil numquam sed repellendus
          voluptatum sint molestiae veniam in id exercitationem, corporis vel
          quos necessitatibus. Nobis, sequi! Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Excepturi eligendi blanditiis aspernatur
          culpa nihil numquam sed repellendus voluptatum sint molestiae veniam
          in id exercitationem, corporis vel quos necessitatibus. Nobis, sequi!
          <span className="text-blue-500 ml-1">Xem thêm</span>
        </div>

        {/* Image */}
        <div className="mt-3">
          <img
            src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2024/1/16/4197094479394162008815151451627877601360247n-1705392737074707191.jpeg"
            alt="Jennie"
          />
        </div>

        {/* emoji */}
        <div className="mt-3 flex justify-between">
          <div className="flex items-center">
            <button className="flex justify-center hover:text-2xl items-center w-10 h-10 rounded-full hover:bg-secondary">
              <ImFire className="text-orange-500 " />
            </button>
            <div className="hover:underline cursor-pointer">1 tỷ bùng cháy</div>
          </div>
          <div className="flex items-center gap-2">
            <div>bình luận</div>
            <div>chia sẽ</div>
          </div>
        </div>
      </div>

      {/* Comment Action */}
      <div className="grid grid-cols-3 mt-2 border-t border-b border-gray-700 py-2 ">
        <div className="flex group items-center justify-center font-medium hover:bg-secondary rounded-full ">
          <button className="flex justify-center group-hover:text-2xl items-center w-10 h-10 rounded-full ">
            <ImFire className="text-orange-500 " />
          </button>
          <div className="cursor-pointer">Thích</div>
        </div>
        <div className="flex items-center group justify-center font-medium hover:bg-secondary rounded-xl">
          <button className="flex justify-center group-hover:text-2xl items-center w-10 h-10 rounded-full">
            <FaCommentDots className=" text-primary" />
          </button>
          <div className="cursor-pointer">Bình luận</div>
        </div>
        <div className="flex items-center justify-center font-medium group hover:bg-secondary rounded-xl">
          <button className="flex justify-center group-hover:text-2xl items-center w-10 h-10 rounded-full ">
            <FaShareFromSquare />
          </button>
          <div className="cursor-pointer">Chia sẻ</div>
        </div>
      </div>

      {/* Comment Box */}
    </>
  );
}

export default Post;
