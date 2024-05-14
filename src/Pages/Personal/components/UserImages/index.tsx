import { useState } from "react";
import CustomModal from "../../../../Components/CustomModal";

function UserImage() {
  const imageList = [
    {
      url: "https://media.vov.vn/sites/default/files/styles/large/public/2023-12/moi-ra-mat-ca-khuc-you-me-cua-jennie-blackpink-thong-tri-cac-bxh-am-nhac-20231008222608.jpg",
    },
    {
      url: "https://media.vov.vn/sites/default/files/styles/large/public/2023-12/moi-ra-mat-ca-khuc-you-me-cua-jennie-blackpink-thong-tri-cac-bxh-am-nhac-20231008222608.jpg",
    },
    {
      url: "https://media.vov.vn/sites/default/files/styles/large/public/2023-12/moi-ra-mat-ca-khuc-you-me-cua-jennie-blackpink-thong-tri-cac-bxh-am-nhac-20231008222608.jpg",
    },
    {
      url: "https://media.vov.vn/sites/default/files/styles/large/public/2023-12/moi-ra-mat-ca-khuc-you-me-cua-jennie-blackpink-thong-tri-cac-bxh-am-nhac-20231008222608.jpg",
    },
    {
      url: "https://images2.thanhnien.vn/528068263637045248/2024/4/27/jennienongbongmvvoizico1-1714188092937988313097.jpeg",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDJC3ZfM80z6ENWY66bZxvg6kJJz-MtJ6LnvGXePuDAw&s",
    },
  ];

  const keyOpenModal = "postView";
  const [currentURL, setCurrentURL] = useState("");

  return (
    <>
      <div className="grid grid-cols-4 gap-4 mb-2">
        {imageList.map((image) => {
          return (
            <label htmlFor={keyOpenModal}>
              <div
                onClick={() => setCurrentURL(image.url)}
                className=" h-80 rounded-lg cursor-pointer"
              >
                <img
                  className="h-full w-full object-cover rounded-lg hover:border-2 hover:border-primary"
                  src={image.url}
                />
              </div>
            </label>
          );
        })}
      </div>

      <CustomModal url={currentURL} keyOpenModal={keyOpenModal} />
      <hr className="mt-4 bg-black" />
    </>
  );
}

export default UserImage;
