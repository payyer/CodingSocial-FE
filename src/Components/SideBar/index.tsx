import { FaUserFriends } from "react-icons/fa";
import { FcBriefcase } from "react-icons/fc";
import { TiGroup } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { OptionBar } from "../../Pages/Personal";

function SideBar() {
  const navigate = useNavigate();
  const navigateTo = (url: string, optionBar: OptionBar) => {
    navigate(`${url}?tab=${optionBar}`);
  };

  return (
    <div className="relative w-[220px]  border-r border-secondary mx-3 pt-[84px]">
      <div className="absolute top-[80] left-0">
        <div className="fixed w-[220px] flex flex-col gap-3 ">
          {/* Go to profile user */}
          <button
            onClick={() => navigateTo("/personal", OptionBar.Post)}
            className="h-10 hover:opacity-80 hover:bg-secondary rounded-xl mr-2"
          >
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

          {/* Friend list */}
          <button
            onClick={() => navigateTo("/personal", OptionBar.Friends)}
            className="h-10 mr-2 hover:opacity-80 hover:bg-secondary rounded-xl"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 rounded-full text-primary">
                <FaUserFriends className="w-full h-wfull" />
              </div>
              <span className="font-bold">Bạn bè</span>
            </div>
          </button>

          {/* Groups */}
          <button
            onClick={() => navigateTo("/personal", OptionBar.History)}
            className="h-10 mr-2 hover:opacity-80 hover:bg-secondary rounded-xl"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 rounded-full text-primary">
                <TiGroup className="w-full h-wfull" />
              </div>
              <span className="font-bold">Nhóm</span>
            </div>
          </button>

          {/* Recruit */}
          <button
            onClick={() => navigateTo("/personal", OptionBar.History)}
            className="h-10 mr-2 hover:opacity-80 hover:bg-secondary rounded-xl"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 rounded-full text-primary">
                <FcBriefcase className="w-full h-wfull" />
              </div>
              <span className="font-bold">Tuyển dụng 🔥</span>
            </div>
          </button>

          <div className="divider mr-3"></div>
          <div>Hiện thị các lối tắt để sau</div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
