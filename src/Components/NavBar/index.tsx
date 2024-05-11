import { FaBell, FaSearch } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

function NavBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#0e1216]">
      <div className="flex justify-between my-3 mx-4 items-center h-12">
        {/* Logo */}
        <div className="text-xl text-primary font-bold">Coding Social</div>

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
          <div className="dropdown dropdown-end">
            <button
              tabIndex={0}
              className="flex relative justify-center items-center w-10 h-10 bg-secondary rounded-full"
            >
              <FaMessage />
              <div className="absolute top-0 right-0">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
              </div>
            </button>
            <ul
              tabIndex={0}
              className="dropdown-content mt-2 z-50 menu p-2 shadow bg-base-100 rounded-box w-80 border border-borderLine"
            >
              <h2 className="text-xl font-bold w-full text-center">
                Messenger
              </h2>

              <div className="w-full h-10 my-2 relative flex items-center rounded-xl">
                <input
                  type="text"
                  placeholder="Find messenger!"
                  className="h-full pr-2 pl-11 rounded-xl text-lg w-full text-textPlaceHolder bg-borderLine"
                />
                <FaSearch className="absolute text-xl ml-4 " />
              </div>

              <li>
                <div className="flex gap-2">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-center">
                    <h3 className="font-bold ">Lê Quốc Anh</h3>
                    <p className="line-clamp-1 ">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Distinctio voluptate sunt sint sapiente fugit vero soluta
                      totam consequuntur aliquid tempora, perferendis placeat
                      quia exercitationem autem maiores. Laboriosam blanditiis
                      adipisci voluptatibus.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="dropdown dropdown-end">
            <button
              tabIndex={0}
              className="flex relative justify-center items-center w-10 h-10 bg-secondary rounded-full"
            >
              <FaBell />
              <div className="absolute top-0 right-0">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
              </div>
            </button>
            <ul
              tabIndex={0}
              className="dropdown-content mt-2 z-50 menu p-2 shadow bg-base-100 rounded-box w-52 border border-borderLine"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
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
      <hr className=" border-t border-secondary"></hr>
    </div>
  );
}

export default NavBar;
