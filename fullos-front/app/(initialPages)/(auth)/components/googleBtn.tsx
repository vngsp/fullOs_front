import GoogleIcon from "./googleIcon";

const GoogleBtn = () => {
    return (
        <button
            className="flex text-[12px] font-poppins font-light
         bg-black-el rounded-2xl border border-green-theme text-center w-32 mb-4"
        >
            <span className="flex items-center gap-2">
                <GoogleIcon />
                Google
            </span>
        </button>
    )
}

export default GoogleBtn;