import { useState } from "react";
import CustomModal from "../../../../Components/CustomModal";

function UserVideo() {
  const listVideo = [
    {
      url: "eQNHDV7lKgE",
    },
    {
      url: "xfqBQ2XhBCg",
    },
    {
      url: "b73BI9eUkjM",
    },
    {
      url: "9I1FhgH2P7c",
    },
  ];

  const keyOpenModal = "videoModal";
  const [currentURL, setCurrentURL] = useState("");

  return (
    <>
      <div className="grid grid-cols-4 gap-4 mb-2 ">
        {listVideo.map((video) => {
          return (
            <label htmlFor={keyOpenModal}>
              <div
                onClick={() => setCurrentURL(video.url)}
                className=" h-80 rounded-lg cursor-pointer"
              >
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.url}`}
                ></iframe>
              </div>
            </label>
          );
        })}
      </div>

      {/* <CustomModal url={currentURL} keyOpenModal={keyOpenModal} /> */}
      <hr className="mt-4 bg-black" />
    </>
  );
}

export default UserVideo;
