import { useNavigate } from "react-router-dom";
import ThirdParty from "./ThirdParty";
import HeaderTitle from "./HeaderTitle";
import { SubmitHandler, useForm } from "react-hook-form";
import { ISignUpInput } from "../../types/access";
import { useSignUpMutation } from "../../reduceSlice/acess.server";
import {
  setCookieWithExpiryDays,
  setCookieWithExpiryMinute,
} from "../../util/cookie";

function SignUpForm() {
  const navigate = useNavigate();
  const goSignIn = () => {
    return navigate("/sign-in");
  };
  const initialStateSignUp = {
    name: "",
    email: "",
    password: "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpInput>({
    mode: "onChange",
    defaultValues: initialStateSignUp,
  });

  const [signUp] = useSignUpMutation();

  const onSubmit: SubmitHandler<ISignUpInput> = async (data) => {
    signUp(data).then((res) => {
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
    });
  };
  return (
    <>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl  text-textPlaceHolder">
        <HeaderTitle title="Sign Up" />
        {/* Sign up with 3rd party */}
        <ThirdParty />
        {/* Line */}
        <div className="divider -mt-1">or</div>

        <form className="card-body -mt-12" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">User name</span>
            </label>
            <input
              {...register("name", { required: "This is required." })}
              type="text"
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
              {...register("email", { required: "This is required." })}
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
              {...register("password", { required: "This is required." })}
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
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUpForm;
