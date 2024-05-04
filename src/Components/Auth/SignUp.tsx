import { useNavigate } from "react-router-dom";
import ThirdParty from "./ThirdParty";
import HeaderTitle from "./HeaderTitle";
import { useState } from "react";
import { signUpUser } from "../../api/auth.api";
import { toast } from "react-toastify";

function SignUpForm() {
  const navigate = useNavigate();

  // Handle state
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Hàm xử lý sự kiện khi người dùng thay đổi giá trị của trường nhập liệu "User name"
  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  // Hàm xử lý sự kiện khi người dùng thay đổi giá trị của trường nhập liệu "Email"
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  // Hàm xử lý sự kiện khi người dùng thay đổi giá trị của trường nhập liệu "Password"
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  // Hàm xử lý sự kiện khi người dùng nhấn nút "Submit"
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userInfo: UserInfo = { name: userName, email, password };

    try {
      const response = await signUpUser(userInfo);
      console.log(response);
      toast("Sign up successful!");
    } catch (error) {
      console.log(error);
      toast.error("Sign up failed. Please try again.");
    }
  };

  const goSignIn = () => {
    return navigate("/sign-in");
  };

  return (
    <>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl  text-textPlaceHolder">
        <HeaderTitle title="Sign Up" />
        {/* Sign up with 3rd party */}
        <ThirdParty />
        {/* Line */}
        <div className="divider -mt-1">or</div>

        <form className="card-body -mt-12" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">User name</span>
            </label>
            <input
              type="text"
              value={userName}
              onChange={handleUserNameChange}
              placeholder="Your display name"
              className="input focus:outline-none focus:border-1 focus:border-borderLine bg-lightBg"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              value={email}
              onChange={handleEmailChange}
              type="email"
              placeholder="example@gmail.com"
              className="input focus:outline-none focus:border-1 focus:border-borderLine bg-lightBg"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              value={password}
              onChange={handlePasswordChange}
              type="password"
              placeholder="Your password"
              className="input focus:outline-none focus:border-1 focus:border-borderLine bg-lightBg"
              required
            />
            <label className="label flex mt-2">
              <a
                onClick={goSignIn}
                className="label-text-alt text-primary underline text-lg link link-hover font-medium"
              >
                Login
              </a>
              <a
                href="#"
                className="label-text-alt link link-hover font-medium"
              >
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUpForm;
