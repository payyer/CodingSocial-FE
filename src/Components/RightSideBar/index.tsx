import { FaSearch } from "react-icons/fa";

function RightSideBar() {
  return (
    <div className="w-[220px] flex flex-col gap-3 h-screen border-r border-secondary px-4 py-3">
      <div className="flex items-center justify-between gap-2 relative mb-2">
        <span className="font-bold">Người liên hệ</span>
        <FaSearch />
      </div>

      <button className="h-8 hover:opacity-80 rounded-xl flex gap-2">
        <div className="avatar online">
          <div className="w-8 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <span className="font-bold">Lê Thị Xuân Rin</span>
      </button>
      <button className="h-8 hover:opacity-80 rounded-xl flex gap-2">
        <div className="avatar offline">
          <div className="w-8 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <span className="font-bold truncate ">Lê Trương Quỳnh Nhi</span>
      </button>
    </div>
  );
}

export default RightSideBar;
