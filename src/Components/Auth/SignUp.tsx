import { useNavigate } from "react-router-dom"
import ThirdParty from "./ThirdParty"
import HeaderTitle from "./HeaderTitle"

function SignUpForm() {
    const navigate = useNavigate()

    const goSignIn = () => {
        return navigate('/sign-in')
    }
    return (
        <>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl  text-textPlaceHolder">
                <HeaderTitle title="Sign Up" />
                {/* Sign up with 3rd party */}
                <ThirdParty />
                {/* Line */}
                <div className="divider -mt-1">or</div>

                <form className="card-body -mt-12">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User name</span>
                        </label>
                        <input type="text" placeholder="Your display name" className="input focus:outline-none focus:border-1 focus:border-borderLine bg-lightBg" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="example@gmail.com" className="input focus:outline-none focus:border-1 focus:border-borderLine bg-lightBg" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Your password" className="input focus:outline-none focus:border-1 focus:border-borderLine bg-lightBg" required />
                        <label className="label flex mt-2">
                            <a onClick={goSignIn} className="label-text-alt text-primary underline text-lg link link-hover font-medium">Login</a>
                            <a href="#" className="label-text-alt link link-hover font-medium">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </>

    )
}

export default SignUpForm