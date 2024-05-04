import { BrowserRouter, Routes, Route } from "react-router-dom";
import LinkPage from "./command/navigate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {LinkPage.map((link) => {
          return (
            <Route key={link.link} path={link.link} element={link.element} />
          );
        })}
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>

    // <>
    //   <div className="navbar border-b-[1px] border-borderLine w-full">
    //     <div className="flex justify-between w-full">
    //       {/* Logo */}
    //       <a className="btn btn-ghost text-xl text-primary">CodingSocial</a>
    //       {/* Search */}
    //       <div className="form-control">
    //         <input type="text" placeholder="Search" className="input focus:outline-none focus:border-2 focus:border-borderLine rounded-2xl w-[560px] bg-lightBg text-white placeholder:text-textPlaceHolder" />
    //       </div>
    //       {/* Profile */}
    //       <div className="dropdown dropdown-end">
    //         <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
    //           <div className="w-10 mask mask-squircle">
    //             <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    //           </div>
    //         </div>
    //         <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
    //           <li>
    //             <a className="justify-between">
    //               Profile
    //               <span className="badge">New</span>
    //             </a>
    //           </li>
    //           <li><a>Settings</a></li>
    //           <li><a>Logout</a></li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
}

export default App;
