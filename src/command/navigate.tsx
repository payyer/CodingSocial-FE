import Home from "../Pages/Home/index.tsx";
import SignIn from "../Pages/SignIn/index.tsx";
import SignUp from "../Pages/SignUp/index.tsx";
const LinkPage = [
  {
    link: "/",
    element: <Home />,
  },
  {
    link: "/sign-in",
    element: <SignIn />,
  },
  {
    link: "/sign-up",
    element: <SignUp />,
  },
];

export default LinkPage;
