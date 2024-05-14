import { BsThreeDots } from "react-icons/bs";
import { FaCommentDots, FaTrashAlt } from "react-icons/fa";
import { FaShareFromSquare } from "react-icons/fa6";
import { FcBriefcase } from "react-icons/fc";
import { ImFire } from "react-icons/im";
import { TiGroup } from "react-icons/ti";

enum OptionHistory {
  All = 1,
  Liked = 2,
  Shared = 3,
  Comments = 4,
  JobSubmitted = 5,
  Group = 6,
}

function UserHistory() {
  const optionHistory = [
    {
      name: "Tất cả",
      option: OptionHistory.All,
      icon: <ImFire className="text-orange-500 " />,
    },
    {
      name: "Đã ứng tyển",
      option: OptionHistory.JobSubmitted,
      icon: <FcBriefcase className="w-full h-wfull" />,
    },
    {
      name: "Nhóm đã tham gia",
      option: OptionHistory.Group,
      icon: <TiGroup className="w-full h-wfull text-primary" />,
    },
    {
      name: "Đã thích",
      option: OptionHistory.Liked,
      icon: <ImFire className="text-orange-500 " />,
    },
    {
      name: "Đã bình luận",
      option: OptionHistory.Comments,
      icon: <FaCommentDots className=" text-green-500" />,
    },
    {
      name: "Đã chia sẽ",
      option: OptionHistory.Shared,
      icon: <FaShareFromSquare />,
    },
  ];
  return (
    <>
      {/* Option history */}
      <div className="flex gap-4">
        <div className="w-1/5 self-start">
          {optionHistory.map((option) => {
            return (
              <div className="bg-secondary cursor-pointer gap-2 px-4 flex justify-center items-center hover:opacity-80  first:rounded-tl-lg  last:rounded-bl-lg">
                <div className="font-medium py-2">{option.icon}</div>
                <div className="font-medium py-2 flex-1">{option.name}</div>
              </div>
            );
          })}
        </div>

        {/* History content */}
        <div className="flex-1 ">
          {/* History Item */}
          <div className="bg-secondary px-4 py-3 rounded-lg">
            <div className="font-medium text-white">14 tháng 5, 2024</div>
            {/* History SubItem */}
            <div className="flex items-center my-4 pb-2 gap-2 border-b border-gray-500">
              {/* Avatar */}
              <div className="avatar">
                <div className="w-16 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              {/* Content */}
              <div className="flex flex-col gap-2 justify-center">
                <div>
                  <span className="font-medium text-white hover:underline cursor-pointer">
                    Jennie
                  </span>{" "}
                  đã thích bài đăng của{" "}
                  <span className="font-medium text-white hover:underline cursor-pointer">
                    Rosé
                  </span>{" "}
                </div>
                <div className="line-clamp-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum magni architecto adipisci. Ad, deleniti incidunt esse
                  est nulla dolores corrupti quidem iste cum, porro dolor
                  aspernatur nemo? Eius, explicabo eos.
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  className="p-2 hover:bg-primary rounded-full cursor-pointer hover:text-black"
                >
                  <BsThreeDots />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box "
                >
                  <li>
                    <a>
                      {" "}
                      <FaTrashAlt /> Xóa
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center my-4 pb-2 gap-2 border-b border-gray-500">
              {/* Avatar */}
              <div className="avatar">
                <div className="w-16 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              {/* Content */}
              <div className="flex flex-col gap-2 justify-center">
                <div>
                  <span className="font-medium text-white hover:underline cursor-pointer">
                    Jennie
                  </span>{" "}
                  đã thích bài đăng của{" "}
                  <span className="font-medium text-white hover:underline cursor-pointer">
                    Rosé
                  </span>{" "}
                </div>
                <div className="line-clamp-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum magni architecto adipisci. Ad, deleniti incidunt esse
                  est nulla dolores corrupti quidem iste cum, porro dolor
                  aspernatur nemo? Eius, explicabo eos.
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  className="p-2 hover:bg-primary rounded-full cursor-pointer hover:text-black"
                >
                  <BsThreeDots />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box "
                >
                  <li>
                    <a>
                      {" "}
                      <FaTrashAlt /> Xóa
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full flex items-center justify-center bg-secondary mt-4 rounded-lg font-medium py-2 px-2 cursor-pointer hover:bg-primary hover:text-black">
            Tải thêm
          </div>
        </div>
      </div>

      <hr className="mt-4 bg-black" />
    </>
  );
}

export default UserHistory;
