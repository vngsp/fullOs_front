type Props = {
    label: string,
    placeholder: string,
    textArea?: boolean,
    width?: string,
}

const DefaultInput = ({ label, placeholder, textArea, width = 'w-[50vw]' }: Props) => {
    return (
        <label className="font-poppins flex flex-col font-light text-sm" htmlFor={label}>
            {label}
            {textArea
                ?
                <textarea
                    placeholder={placeholder}
                    className="bg-white-el h-60 rounded-xl p-1 placeholder:text-black-el/50 placeholder:text-[10px] placeholder:pl-2"
                />
                :
                <input
                    type="text"
                    placeholder={placeholder}
                    className={`bg-white-el rounded-xl p-1 placeholder:text-black-el/50 placeholder:text-[10px] placeholder:pl-2 ${width}`}
                />
            }
        </label>
    )
}

export default DefaultInput;