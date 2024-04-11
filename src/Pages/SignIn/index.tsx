import SignInForm from "../../Components/Auth/SignIn"
function SignIn() {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse  w-[90%] md:w-[70%]">
                <SignInForm />
            </div>
        </div>
    )
}

export default SignIn