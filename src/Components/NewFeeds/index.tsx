import { useState } from "react";
import { FaCommentDots, FaReply } from "react-icons/fa";
import { FaShareFromSquare } from "react-icons/fa6";
import { HiMiniPaperAirplane } from "react-icons/hi2";
import { ImFire } from "react-icons/im";
import { IoEarth } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";

enum CommentBox {
  Open = 1,
  Close = 2,
}

function NewFeeds() {
  const [commentBox, setCommentBox] = useState<CommentBox>(CommentBox.Close);

  const handleCommentBox = () => {
    if (commentBox == CommentBox.Open) {
      setCommentBox(CommentBox.Close);
    } else {
      setCommentBox(CommentBox.Open);
    }
  };

  return (
    <div className=" w-full rounded-lg bg-[#2b2d30] p-4 my-4">
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

        {/* Image context */}
        <div className="mt-3 flex justify-between w-full">
          <img
            className="w-full h-full"
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
      <div className="grid grid-cols-3  mt-2 border-t border-b border-gray-700 py-2 ">
        <div className="flex group items-center justify-center font-medium hover:bg-secondary rounded-full ">
          <button className="flex justify-center group-hover:text-2xl items-center w-10 h-10 rounded-full ">
            <ImFire className="text-orange-500 " />
          </button>
          <div className="cursor-pointer">Thích</div>
        </div>
        <div
          onClick={handleCommentBox}
          className="flex cursor-pointer items-center group justify-center font-medium hover:bg-secondary rounded-xl"
        >
          <button className="flex justify-center group-hover:text-2xl items-center w-10 h-10 rounded-full">
            <FaCommentDots className=" text-green-500" />
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

      {commentBox === CommentBox.Open && (
        <>
          {/* Input Comment */}
          <div className="flex mt-4 items-center gap-4">
            {/* Avatar */}
            <div className="avatar self-start">
              <div className="w-12 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            {/* Input */}
            <div className="relative  w-full">
              <textarea
                name=""
                id=""
                className="w-full rounded-lg py-2 bg-lightBg px-4 pb-6"
                placeholder="Thêm bình luận"
              ></textarea>
              <div className="absolute right-4 bottom-4 hover:opacity-80 cursor-pointer ">
                <HiMiniPaperAirplane className="text-primary " />
              </div>
            </div>
          </div>
          {/* Comment List */}
          <div className="flex gap-4 py-4">
            <div className="avatar self-start">
              <div className="w-12 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-center bg-secondary rounded-lg px-4 pt-1 pb-4">
              <div className="font-bold hover:underline text-white cursor-pointer">
                Jennie
              </div>
              <div className="self-start line-clamp-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis aliquam asperiores explicabo esse, quia ab porro ipsum
                velit in consequuntur qui suscipit aliquid itaque tenetur, totam
                a molestiae non! Non?
              </div>
              <div className="flex text-sm items-center mt-2 gap-4">
                <div className="flex items-center">
                  <ImFire className="text-orange-500 " />1
                </div>

                <div className="flex items-center gap-2">
                  Repy
                  <FaReply />
                </div>
              </div>
            </div>
          </div>

          {/* Reply Comment */}
          <div className="flex gap-4 py-4">
            {/* Avatar */}
            <div className="avatar self-start">
              <div className="w-12 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            {/* Main  */}
            <div className="flex flex-1 flex-col justify-center bg-secondary rounded-lg px-4 pt-1 pb-4">
              <div className="font-bold hover:underline text-white cursor-pointer">
                Jennie
              </div>
              {/* Old Comment*/}
              <div className="flex gap-4 py-4">
                <div className="avatar self-start">
                  <div className="w-12 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-center bg-secondary rounded-lg px-4 pt-1 pb-4">
                  <div className="font-bold hover:underline text-white cursor-pointer">
                    Jennie
                  </div>
                  <div className="self-start line-clamp-2 opacity-50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis aliquam asperiores explicabo esse, quia ab porro
                    ipsum velit in consequuntur qui suscipit aliquid itaque
                    tenetur, totam a molestiae non! Non?
                  </div>
                </div>
              </div>
              {/* Reply comment */}
              <div className="self-start line-clamp-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis aliquam asperiores explicabo esse, quia ab porro ipsum
                velit in consequuntur qui suscipit aliquid itaque tenetur, totam
                a molestiae non! Non?
              </div>
              <div className="flex text-sm items-center mt-2 gap-4">
                <div className="flex items-center">
                  <ImFire className="text-orange-500 " />1
                </div>

                <div className="flex items-center gap-2">
                  Repy
                  <FaReply />
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="flex justify-between">
        <div className="font-medium hover:underline cursor-pointer">
          Xem thêm bình luận
        </div>
        <div>10/20</div>
      </div>
    </div>
  );
}

export default NewFeeds;
