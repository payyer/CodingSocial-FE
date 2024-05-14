import PublicType from "../PublicType";
import { useState } from "react";

enum EditMode {
  Edit = 1,
  View = 2,
}

function UserInfo() {
  const [editMode, setEditMode] = useState<EditMode>(EditMode.View);

  return (
    <div className="bg-secondary rounded-xl p-4">
      <form action="" className="flex flex-col gap-6 my-2">
        {/* Email & CV */}
        <div className="grid grid-cols-2 gap-2">
          <div>
            <div className="flex gap-2 items-center">
              <label htmlFor="user_name" className="font-bold text-lg">
                CV:
              </label>
              <input
                type="text"
                className="py-1 px-3 flex-1 bg-secondary border-b-2 border-borderLine focus:outline-none"
                value={"Korea"}
                disabled
              />
            </div>
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <label htmlFor="user_name" className="font-bold text-lg ">
                Email:
              </label>
              <input
                type="text"
                className="py-1 px-3 flex-1 bg-secondary border-b-2 border-borderLine focus:outline-none"
                value={"jenniexinhdep@gmail.com"}
                disabled
              />
            </div>
          </div>
        </div>

        {/* Bio */}
        <div>
          <div className="flex gap-2 items-center">
            <label
              htmlFor="user_bio"
              className="font-bold text-lg self-start mt-2"
            >
              Bio:
            </label>
            <textarea
              disabled
              value={
                "Jennie Kim (Korean: 김제니; born January 16, 1996), known mononymously as Jennie, is a South Korean singer, rapper, and actress. Born and raised in South Korea, Jennie studied in New Zealand for five years before returning to South Korea in 2010."
              }
              rows={5}
              name=""
              id=""
              className="flex-1 bg-secondary p-2 border-borderLine border-2 rounded-lg scrollbar-thin scrollbar-thumb-primary scrollbar-track-secondary"
            ></textarea>
          </div>
        </div>

        {/* User Name */}
        <div className="flex gap-2 items-center">
          <label htmlFor="user_name" className="font-bold text-lg w-32">
            Tên hiển thị:
          </label>
          <input
            type="text"
            className="py-1 px-3 flex-1 bg-secondary border-b-2 border-borderLine focus:outline-none"
            value={"Jennie"}
            disabled
          />

          <PublicType />
        </div>

        {/* Birth day */}
        <div className="flex gap-2 items-center">
          <label htmlFor="user_name" className="font-bold text-lg w-32">
            Ngày sinh:
          </label>
          <input
            type="text"
            className="py-1 px-3 flex-1 bg-secondary border-b-2 border-borderLine focus:outline-none"
            value={"16/01/1996"}
            disabled
          />
          <PublicType />
        </div>

        {/* Address */}
        <div className="flex gap-2 items-center">
          <label htmlFor="user_name" className="font-bold text-lg w-32">
            Địa chỉ:
          </label>
          <input
            type="text"
            className="py-1 px-3 flex-1 bg-secondary border-b-2 border-borderLine focus:outline-none"
            value={"Cheongdam-dong"}
            disabled
          />
          <PublicType />
        </div>

        {/* City */}
        <div className="flex gap-2 items-center">
          <label htmlFor="user_name" className="font-bold text-lg w-32">
            Thành phố:
          </label>
          <input
            type="text"
            className="py-1 px-3 flex-1 bg-secondary border-b-2 border-borderLine focus:outline-none"
            value={"Seoul"}
            disabled
          />
          <PublicType />
        </div>

        {/* Country */}
        <div className="flex gap-2 items-center">
          <label htmlFor="user_name" className="font-bold text-lg w-32">
            Quốc Tịnh:
          </label>
          <input
            type="text"
            className="py-1 px-3 flex-1 bg-secondary border-b-2 border-borderLine focus:outline-none"
            value={"Korea"}
            disabled
          />
          <PublicType />
        </div>
      </form>

      {/* EditMode */}
      {editMode === EditMode.View ? (
        <button
          onClick={() => setEditMode(EditMode.Edit)}
          className="bg-lightBg p-2 my-2 w-full rounded-lg hover:opacity-85 font-bold"
        >
          Chỉnh sửa
        </button>
      ) : (
        <div className="grid grid-cols-2 gap-2">
          <button className="bg-lightBg p-2 my-2 w-full rounded-lg hover:opacity-85 font-bold">
            <span className="text-green-400">Lưu</span>
          </button>
          <button
            onClick={() => setEditMode(EditMode.View)}
            className="bg-lightBg p-2 my-2 w-full rounded-lg hover:opacity-85 font-bold"
          >
            <span className="text-red-500">Hủy</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default UserInfo;
