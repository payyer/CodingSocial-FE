import { BrowserRouter, Routes, Route } from "react-router-dom";
import LinkPage from "./command/navigate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "./Pages/SignIn";
import PrivateRoute from "./util/PrivateRoute";
import SignUp from "./Pages/SignUp";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          {LinkPage.map((link) => {
            return (
              <Route key={link.link} path={link.link} element={link.element} />
            );
          })}
        </Route>
        <Route element={<SignIn />} path="/sign-in" />
        <Route element={<SignUp />} path="/sign-up" />
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
  );
}

export default App;
