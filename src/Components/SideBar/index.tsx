import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { FcBriefcase } from "react-icons/fc";
import { RiGroup2Fill } from "react-icons/ri";
import { TiGroup } from "react-icons/ti";

function SideBar() {
  return (
    <div className="w-[220px] flex flex-col gap-3 h-screen border-r border-secondary px-4 pt-3">
      <button className="h-8 hover:opacity-80 hover:bg-secondary rounded-xl">
        <div className="flex items-center gap-2">
          <div className="w-8 rounded-full">
            <img
              className="rounded-xl"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
          <span className="font-bold">Lê Quốc Anh</span>
        </div>
      </button>

      <button className="h-8 hover:opacity-80 hover:bg-secondary rounded-xl">
        <div className="flex items-center gap-2">
          <div className="w-8 rounded-full text-primary">
            <FaUserFriends className="w-full h-wfull" />
          </div>
          <span className="font-bold">Bạn bè</span>
        </div>
      </button>

      <button className="h-8 hover:opacity-80 hover:bg-secondary rounded-xl">
        <div className="flex items-center gap-2">
          <div className="w-8 rounded-full text-primary">
            <TiGroup className="w-full h-wfull" />
          </div>
          <span className="font-bold">Nhóm</span>
        </div>
      </button>

      <button className="h-8 hover:opacity-80 hover:bg-secondary rounded-xl">
        <div className="flex items-center gap-2">
          <div className="w-8 rounded-full text-primary">
            <FcBriefcase className="w-full h-wfull" />
          </div>
          <span className="font-bold">Tuyển dụng 🔥</span>
        </div>
      </button>

      <div className="divider"></div>
      <div>Hiện thị các lối tắt để sau</div>
    </div>
  );
}

export default SideBar;
