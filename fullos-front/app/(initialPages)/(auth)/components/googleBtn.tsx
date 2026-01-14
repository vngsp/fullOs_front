import GoogleIcon from "./googleIcon";

type Props = {
    onClick: () => void,
}

const GoogleBtn = ({ onClick }: Props) => {
    return (
        <button
            className="flex text-[12px] font-poppins font-light
         bg-black-el rounded-2xl border border-green-theme text-center w-32 mb-4 cursor-pointer"
            onClick={onClick}
        >
            <span className="flex items-center gap-2">
                <GoogleIcon />
                Google
            </span>
        </button>
    )
}

export default GoogleBtn;