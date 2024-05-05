import { useNavigate } from "react-router-dom";
import HeaderTitle from "./HeaderTitle";
import ThirdParty from "./ThirdParty";
import { useState } from "react";
import { login } from "../../api/auth.api";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

function SignInForm() {
  const navigate = useNavigate();

  const goSignUp = () => {
    return navigate("/sign-up");
  };

  const goToHomePage = () => {
    return navigate("/");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Hàm xử lý sự kiện khi người dùng thay đổi giá trị của trường nhập liệu "Email"
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userInput = { email, password };
    login(userInput)
      .then((respone) => {
        console.log(respone.metadata);
        // set userId
        Cookies.set("userId", respone.metadata.user._id);
        Cookies.set("userRole", respone.metadata.user.user_roles);
        toast(respone.message);
        goToHomePage();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card shrink-0 w-full max-w-sm shadow-2xl text-white">
      <HeaderTitle title="Let try now!!" />
      {/* Sign up with 3rd party */}
      <ThirdParty />
      {/* divider */}
      <div className="divider -mt-1">or</div>

      {/* Login local*/}
      <form onSubmit={handleLogin} className="card-body -mt-12">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="examp@gmail.com"
            className="input focus:outline-none focus:border-1 focus:border-borderLine bg-lightBg"
            required
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Your password"
            className="input focus:outline-none focus:border-1 focus:border-borderLine bg-lightBg"
            required
            value={password}
            onChange={handlePasswordChange}
          />
          <label className="label flex mt-2">
            <a
              onClick={goSignUp}
              className="label-text-alt text-primary underline text-lg link link-hover font-medium"
            >
              Sign up now!
            </a>
            <a href="#" className="label-text-alt link link-hover font-medium">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
