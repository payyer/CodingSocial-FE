import { BiSolidPlusCircle } from "react-icons/bi";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

function AddPostButton() {
  const [fileURL, setFileURL] = useState("");
  const onDrop = useCallback(() => {}, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpeg", "jpb.", ".svg"],
    },
  });

  const openModal = () => {
    const modal = document.getElementById(
      "my_modal_4"
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <>
      <div onClick={openModal} className=" w-full rounded-lg bg-[#2b2d30]">
        <button className="w-full hover:opacity-90 ">
          <div className="m-3 flex items-center justify-center gap-2 font-bold">
            <span>Thêm bài viết mới</span>{" "}
            <BiSolidPlusCircle className="text-2xl text-primary" />
          </div>
        </button>
      </div>

      {/* Create Post Modal */}
      <dialog id="my_modal_4" className="modal ">
        <div className="modal-box w-1/2 max-w-5xl scrollbar-thin scrollbar-thumb-primary scrollbar-track-secondary overflow-y-scroll">
          {/* Header */}
          <div className="flex gap-4 w-full">
            {/* Avatar */}
            <div className="avatar self-start">
              <div className="w-14 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            {/* Select mode view Public & Private */}
            <div className="flex justify-start  flex-col gap-2 flex-1">
              <h3 className="font-bold  text-lg hover:underline cursor-pointer">
                Jennie
              </h3>
              <select className="bg-lightBg px-2 py-1 rounded-lg text-sm cursor-pointer w-28">
                <option>Công khai</option>
                <option>Bạn bè</option>
                <option>Cá nhân</option>
              </select>
            </div>
            <form method="dialog" className=" flex">
              {/* if there is a button, it will close the modal */}
              <button className="self-start bg-lightBg py-2 px-4  rounded-lg hover:bg-secondary">
                Close
              </button>
            </form>
          </div>

          <form className="mt-4 ">
            {/* Text content */}
            <textarea
              className="bg-lightBg w-full rounded-lg py-2 px-4"
              placeholder="Nhập nội dung"
              name="content"
              rows={4}
            />

            {/* Add Photo */}
            <div
              className="w-full bg-lightBg mb-4 mt-3 h-72 rounded-lg"
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              {fileURL ? (
                <div>Test1</div>
              ) : (
                <div className="h-full flex flex-col justify-center items-center cursor-pointer">
                  <img
                    className="w-40 h-40"
                    src="https://static.thenounproject.com/png/1337310-200.png"
                    alt="Upload image"
                  />

                  <p className="font-medium">Upload file here</p>
                </div>
              )}
            </div>

            {/* Submit button */}
            <button className="bg-lightBg py-2 px-4 w-full font-medium flex justify-center items-center gap-2 rounded-lg hover:bg-secondary">
              {/* <span className="loading loading-spinner"></span> */}
              Đăng bài
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default AddPostButton;
