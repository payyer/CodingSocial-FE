import SignUpForm from "../../Components/Auth/SignUp"
function SignUp() {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse  w-[90%] md:w-[70%]">
                <SignUpForm />
            </div>
        </div>
    )
}

export default SignUp