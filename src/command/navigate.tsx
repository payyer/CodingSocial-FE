import Home from "../Pages/Home/index.tsx";
import Personal from "../Pages/Personal/index.tsx";
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
  {
    link: "/personal",
    element: <Personal />,
  },
];

export default LinkPage;
