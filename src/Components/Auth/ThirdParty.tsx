import { FcGoogle } from "react-icons/fc"

function ThirdParty() {
    return (
        <div className="w-[100%] my-3">
            <button className="btn w-full bg-white text-black  hover:bg-textPlaceHolder rounded-2xl text-base font-bold">
                <FcGoogle className="text-xl" />
                <span>Google</span>
            </button>
        </div>
    )
}

export default ThirdParty