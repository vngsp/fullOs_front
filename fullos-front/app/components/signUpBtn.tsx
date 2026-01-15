type Props = {
    label: string,
    darkMode?: boolean,
    className?: string,
    padding?: string,
    disabled?: boolean
}

const SignUpBtn = ({ darkMode, label, className, padding, disabled }: Props) => {
    return (
        <button
            className={`rounded-4xl font-poppins font-light cursor-pointer
                ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer active:scale-95"}
                ${!darkMode
                    ? "bg-white-el text-text-black px-4 sm:px-3 py-1"
                    : `bg-black-el text-text-white text-[10px] ${padding ? `${padding}` : "py-3 px-3"} text-nowrap lg:p-4`}
                ${className ?? ""}
      `}
        >
            {label}
        </button >
    )
}

export default SignUpBtn;