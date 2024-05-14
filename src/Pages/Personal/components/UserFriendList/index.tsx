import { useState } from "react";
import CustomModal from "../../../../Components/CustomModal";

enum OptionFriendBar {
  All = 1,
  FriendRequest = 2,
}

function UserFriendList() {
  const FriendList = [
    {
      avatar:
        "https://phunuvietnam.mediacdn.vn/thumb_w/700/179072216278405120/2023/9/17/pinstaapp36496724162882661379381082084505208312614491n1080-1694884332548528911610-320-0-995-1080-crop-1694884337658289827402-16-0-675-1057-crop-1694929616017215716269.jpg",
      name: "LALISA",
    },
    {
      avatar:
        "https://media-cdn-v2.laodong.vn/storage/newsportal/2023/7/25/1220914/Rose.jpg?w=800&h=420&crop=auto&scale=both",
      name: "Rosé",
    },
    {
      avatar:
        "https://images2.thanhnien.vn/528068263637045248/2024/3/12/js1-17102650444101039490703.jpeg",
      name: "Jisoo",
    },
    {
      avatar: " https://i.mydramalist.com/6Y8od_5c.jpg",
      name: "Jeon Somi",
    },
    {
      avatar:
        "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
      name: "User 1",
    },

    {
      avatar:
        "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
      name: "ABP Framework with .Net Core",
    },
  ];

  const optionFriendBar = [
    {
      name: "All",
      optionBar: OptionFriendBar.All,
    },
    {
      name: "Lời mời kết bạn",
      optionBar: OptionFriendBar.FriendRequest,
    },
  ];

  const FriendRequestList = [
    {
      avatar:
        "https://images2.thanhnien.vn/528068263637045248/2023/12/30/anh-3-4-17039489538481384830080.jpg",
      name: "NewJeans",
    },
  ];

  const [optionBar, setOptionBar] = useState<OptionFriendBar>(
    OptionFriendBar.All
  );
  const keyOpenModal = "deleteFriendModal";

  // Modal Accept Delete Friend
  const FriendModalDelete = () => {
    return (
      <div className="flex flex-col items-center gap-4 font-bold">
        <h1 className="text-2xl">Bạn có muốn hủy kết bạn</h1>
        <div className=" flex gap-2 text-xl">
          <button className="py-2 px-4 bg-secondary rounded-lg hover:bg-primary hover:text-black">
            Xác nhận
          </button>

          <label
            className="backdrop py-2 px-4 cursor-pointer bg-secondary rounded-lg hover:bg-primary hover:text-black"
            htmlFor={keyOpenModal}
          >
            Hủy
          </label>
        </div>
      </div>
    );
  };

  // Main
  return (
    <>
      {/* Option Friend View */}
      <div className="mb-4 flex gap-2 font-medium">
        {optionFriendBar.map((option) => {
          return (
            <div
              onClick={() => setOptionBar(option.optionBar)}
              className={`relative p-2 px-4 rounded-xl cursor-pointer ${
                option.optionBar === optionBar
                  ? `bg-primary text-black hover:opacity-80 `
                  : `bg-secondary hover:bg-borderLine`
              }`}
            >
              {option.name}
              {option.optionBar == OptionFriendBar.FriendRequest && (
                <span className="absolute -top-1 -right-1  flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Friend List View All*/}
      {optionBar === OptionFriendBar.All && (
        <div className="grid grid-cols-5 gap-4 mb-2 ">
          {FriendList.map((friend) => {
            return (
              <div className=" h-72 rounded-lg group bg-secondary flex flex-col  hover:border-primary hover:border-2">
                <div className="bg-black w-full h-2/3 rounded-t-lg  cursor-pointer">
                  <img
                    className="w-full h-full object-cover rounded-t-lg"
                    src={friend.avatar}
                    alt="Avatar"
                  />
                </div>
                <div className="flex flex-col items-center justify-center flex-1 gap-2">
                  <a className="text-xl line-clamp-1 font-bold text-white hover:underline px-2  group-hover:text-primary cursor-pointer ">
                    {friend.name}
                  </a>

                  <label htmlFor={keyOpenModal}>
                    <div className="bg-lightBg py-2 px-4 rounded-lg cursor-pointer hover:text-red-500 hover:opacity-80">
                      <span className=" font-bold ">Hủy kết bạn</span>
                    </div>
                  </label>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Friend List Request */}
      {optionBar === OptionFriendBar.FriendRequest && (
        <div className="grid grid-cols-5 gap-4 mb-2 ">
          {FriendRequestList.map((request) => {
            return (
              <div className=" h-72 rounded-lg group bg-secondary flex flex-col  hover:border-primary hover:border-2">
                <div className="bg-black w-full h-2/3 rounded-t-lg  cursor-pointer">
                  <img
                    className="w-full h-full object-cover rounded-t-lg"
                    src={request.avatar}
                    alt="Avatar"
                  />
                </div>
                <div className="flex flex-col items-center justify-center flex-1 gap-2">
                  <a className="text-xl line-clamp-1 font-bold text-white hover:underline px-2  group-hover:text-primary cursor-pointer ">
                    {request.name}
                  </a>

                  <div className="flex items-center justify-center gap-2 w-full">
                    <div className="bg-lightBg py-2 px-3 rounded-lg cursor-pointer hover:text-primary hover:opacity-80">
                      <span className=" font-bold ">Chấp nhận</span>
                    </div>
                    <div className="bg-lightBg py-2 px-3 rounded-lg cursor-pointer hover:text-red-500 hover:opacity-80">
                      <span className=" font-bold ">Hủy</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal delete friend */}
      <CustomModal child={FriendModalDelete()} keyOpenModal={keyOpenModal} />
      <hr className="mt-4 bg-black" />
    </>
  );
}

export default UserFriendList;
