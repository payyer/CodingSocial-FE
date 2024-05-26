import { useNavigate } from "react-router-dom";
import HeaderTitle from "./HeaderTitle";
import ThirdParty from "./ThirdParty";
import Cookies from "js-cookie";
import { SubmitHandler, useForm } from "react-hook-form";
import { ILogin } from "../../types/access";
import { useLoginMutation } from "../../reduceSlice/acess.server";
import {
  setCookieWithExpiryDays,
  setCookieWithExpiryMinute,
} from "../../util/cookie";

function SignInForm() {
  const navigate = useNavigate();

  const goSignUp = () => {
    return navigate("/sign-up");
  };

  const [login] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>();
  const onSubmit: SubmitHandler<ILogin> = (data) => {
    login(data)
      .then((res) => {
        if (res.data?.status === 200) {
          console.log(res);
          const tokens = res.data?.metadata.tokens;
          const metadata = res.data?.metadata;
          if (metadata) {
            localStorage.setItem("userId", metadata.user._id);
            localStorage.setItem("userName", metadata.user.user_name);
          }
          if (tokens) {
            setCookieWithExpiryMinute("accessToken", tokens.accessToken, 1);
            setCookieWithExpiryDays("refreshToken", tokens.refreshToken, 2);
            navigate("/");
          }
        } else {
          console.log(res.error);
        }
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
      <form onSubmit={handleSubmit(onSubmit)} className="card-body -mt-12">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            {...register("email", { required: "This is required." })}
            type="email"
            placeholder="examp@gmail.com"
            className="input focus:outline-none focus:border-1 focus:border-borderLine bg-lightBg"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            {...register("password", { required: "This is required." })}
            type="password"
            placeholder="Your password"
            className="input focus:outline-none focus:border-1 focus:border-borderLine bg-lightBg"
            required
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
