import { FaCameraRetro } from "react-icons/fa";
import NavBar from "../../Components/NavBar";
import NewFeeds from "../../Components/NewFeeds";
import { useEffect, useState } from "react";
import { OptionBar, listOptionBar } from ".";
import UserInfo from "./components/UserInfo";
import UserImage from "./components/UserImages/";
import UserVideo from "./components/UserVideo";
import UserFriendList from "./components/UserFriendList";
import UserHistory from "./components/UserHistory";
import AddPostButton from "../../Components/AddPostButton";
import { useSearchParams } from "react-router-dom";

function Personal() {
  const [searchParams] = useSearchParams();
  const [optionBar, setOptionBar] = useState<OptionBar>(OptionBar.Post);

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) {
      switch (tab) {
        case "3":
          setOptionBar(OptionBar.Image);
          break;
        case "4":
          setOptionBar(OptionBar.Video);
          break;
        case "5":
          setOptionBar(OptionBar.Friends);
          break;
        case "6":
          setOptionBar(OptionBar.History);
          break;
        case "2":
          setOptionBar(OptionBar.Personal);
          break;
        default:
          setOptionBar(OptionBar.Post);
          break;
      }
    }
  }, [searchParams]);

  return (
    <div className="max-h-screen pb-2 mb-2">
      <NavBar />
      <div className="mt-[74px] max-w-5xl mx-auto ">
        {/* Header */}
        <div className=" relative flex justify-center h-96  rounded-b-xl">
          {/*Header_Banner */}
          <div className=" w-full h-full">
            <img
              className=" w-full h-full object-cover rounded-b-xl "
              src="https://i.pinimg.com/originals/32/d7/01/32d7010160ec6012bd4def75583551a1.jpg"
              alt="Banner"
            />
            <button className="absolute bottom-4 right-4 bg-secondary rounded-full p-3 opacity-70 hover:opacity-100">
              <FaCameraRetro className="text-white" />
            </button>
          </div>

          {/* Header_Avatar */}
          <div className="avatar absolute flex- justify-center -bottom-20 rounded-full border-2">
            <div className="w-40 rounded-full">
              <img src="https://i.scdn.co/image/ab6761610000e5ebd95cf4457fac4cc62311f84f" />
            </div>

            <button className="absolute bottom-2 right-2 bg-secondary rounded-full p-3 opacity-70 hover:opacity-100">
              <FaCameraRetro className="text-white" />
            </button>

            <button className="absolute -bottom-12 text-4xl font-bold">
              Jennie
            </button>
          </div>
        </div>
        {/* Option Bar */}
        <div className=" mt-36 w-full flex justify-center gap-2 font-medium">
          {listOptionBar.map((option) => {
            return (
              <div
                onClick={() => setOptionBar(option.optionBar)}
                className={`p-2 px-4 rounded-xl cursor-pointer ${
                  option.optionBar === optionBar
                    ? `bg-primary text-black hover:opacity-80 `
                    : `bg-secondary hover:bg-borderLine`
                }`}
              >
                {option.name}
              </div>
            );
          })}
        </div>

        {/* Content */}
        <div className="h-auto rounded-xl mt-4 max-w-2xl mx-auto">
          {optionBar === OptionBar.Post && (
            <>
              <AddPostButton />
              <div className="mt-4">
                <NewFeeds />
              </div>
              <hr className="mt-4 bg-black" />
            </>
          )}

          {optionBar === OptionBar.Personal && <UserInfo />}
        </div>

        {optionBar === OptionBar.Image && <UserImage />}

        {optionBar === OptionBar.Video && <UserVideo />}

        {optionBar === OptionBar.Friends && <UserFriendList />}

        {optionBar === OptionBar.History && <UserHistory />}
      </div>
    </div>
  );
}

export default Personal;
