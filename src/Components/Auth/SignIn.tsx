import { useNavigate } from "react-router-dom"
import HeaderTitle from "./HeaderTitle"
import ThirdParty from "./ThirdParty"

function SignInForm() {
    const navigate = useNavigate()

    const goSignUp = () => {
        return navigate('/sign-up')
    }
    return (
        <div className="card shrink-0 w-full max-w-sm shadow-2xl text-white">
            <HeaderTitle title="Let try now!!" />
            {/* Sign up with 3rd party */}
            <ThirdParty />
            {/* divider */}
            <div className="divider -mt-1">or</div>

            {/* Login local*/}
            <form className="card-body -mt-12">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="examp@gmail.com" className="input focus:outline-none focus:border-1 focus:border-borderLine bg-lightBg" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Your password" className="input focus:outline-none focus:border-1 focus:border-borderLine bg-lightBg" required />
                    <label className="label flex mt-2">
                        <a onClick={goSignUp} className="label-text-alt text-primary underline text-lg link link-hover font-medium">Sign up now!</a>
                        <a href="#" className="label-text-alt link link-hover font-medium">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm