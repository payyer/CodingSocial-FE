import { FaBell } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

function NavBar() {
  return (
    <>
      <div className="flex justify-between my-3 mx-4 items-center">
        {/* Logo */}
        <div className="text-xl">Coding Social</div>

        {/* Input serach */}
        <div className=" w-[420px]">
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>

        {/* Profile and Notifications */}
        <div className="flex gap-2 items-center">
          <button className="flex justify-center items-center w-10 h-10 bg-secondary rounded-full">
            <FaMessage />
          </button>
          <button className="flex justify-center items-center w-10 h-10 bg-secondary rounded-full">
            <FaBell />
          </button>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="avatar">
              <div className="w-10 rounded-full ">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-secondary rounded-box w-32"
            >
              <li>
                <a>Profile</a>
              </li>
              <li>
                <a>Log out</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" border border-secondary"></div>
    </>
  );
}

export default NavBar;
