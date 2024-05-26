import { useState } from "react";
import { FaMinus, FaSearch } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { HiMiniPaperAirplane } from "react-icons/hi2";

function RightSideBar() {
  const [isChat, setIsChat] = useState(false);
  const [isHolder, setIsHoder] = useState(false);
  const beginChat = () => {
    setIsChat(true);
    setIsHoder(true);
  };

  const hiddenChat = () => {
    setIsChat(false);
  };

  const isHolderChat = () => {
    setIsChat(true);
  };

  const endChat = () => {
    setIsChat(false);
    setIsHoder(false);
  };

  return (
    <div className="relative w-[220px] flex flex-col gap-3 border-r border-secondary mt-[72px]">
      <div className="absolute top-[10px] -left-4">
        <div className="fixed w-[220px] flex flex-col gap-3">
          {/* Header */}
          <div className="flex items-center justify-between gap-2 relative mb-2">
            <span className="font-bold">Người liên hệ</span>
            <FaSearch />
          </div>

          {/* List friend chat user */}
          <button
            onClick={beginChat}
            className="h-8 hover:opacity-80 rounded-xl flex gap-2"
          >
            <div className="avatar online">
              <div className="w-8 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <span className="font-bold">Lê Thị Xuân Rin</span>
          </button>
          {/* Chat manager */}
          {isHolder && (
            <div
              onClick={isHolderChat}
              className="fixed bottom-4 right-4 cursor-pointer "
            >
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </div>
          )}

          {/* Chat Box */}
          {isChat && (
            <div className="fixed flex flex-col bottom-4 right-20 h-96  cursor-default w-80 bg-lightBg rounded-md z-[99]">
              {/* Header */}
              <div className="bg-lightBg h-16 flex items-center gap-2 px-2 rounded-t-md border-b border-textPlaceHolder">
                <div className="avatar online">
                  <div className="w-10 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>

                <div className="flex flex-col justify-normal flex-1">
                  <div className="font-bold">Jennie</div>
                  <div className="text-xs text-textPlaceHolder">
                    Đang hoạt động
                  </div>
                </div>

                {/* Header-Button */}
                <div className="flex gap-2">
                  <button
                    onClick={hiddenChat}
                    className="p-1 hover:opacity-80 hover:bg-opacity-80 hover:bg-secondary rounded-full"
                  >
                    <FaMinus className="text-xl text-primary font-bold" />
                  </button>
                  <button
                    onClick={endChat}
                    className="p-1 hover:opacity-80 hover:bg-opacity-80 hover:bg-secondary rounded-full"
                  >
                    <FaXmark className="text-xl text-primary font-bold" />
                  </button>
                </div>
              </div>

              {/* Chat content */}
              <div className="py-2 px-2 flex-1  border-b border-textPlaceHolder">
                <div className="chat chat-start my-2">
                  <div className="chat-bubble bg-secondary">
                    It's over Anakin, <br />I have the high ground.
                  </div>
                </div>
                <div className="chat chat-end text-black my-2">
                  <div className="chat-bubble bg-primary">
                    You underestimate my power!
                  </div>
                </div>
              </div>
              {/* Chat input */}
              <div className="w-full h-10 my-2 relative flex items-center rounded-xl">
                <input
                  type="text"
                  placeholder="Aa"
                  className="h-full pr-10 pl-2 rounded-xl text-base w-full text-textPlaceHolder bg-borderLine mx-4"
                />
                <HiMiniPaperAirplane className="absolute right-8 text-primary hover:opacity-80 cursor-pointer" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RightSideBar;
