type Props = {
    label: string,
    darkMode?: boolean,
    className?: string,
}

const SignUpBtn = ({ darkMode, label, className }: Props) => {
    return (
        <button
            className={`rounded-4xl font-poppins font-light cursor-pointer
                ${!darkMode
                    ? "bg-white-el text-text-black px-4 sm:px-2 py-1"
                    : "bg-black-el text-text-white text-[10px] py-3 px-3 text-nowrap lg:p-4"}
                ${className ?? ""}
      `}
        >
            {label}
        </button >
    )
}

export default SignUpBtn;