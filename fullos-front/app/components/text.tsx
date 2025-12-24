type Props = {
    text: string,
}
const Text = ({ text }: Props) => {
    return (
        <p className="text-[12px] sm:text-sm sm:text-center sm:w-1/2 lg:w-2xs font-arial">{text}</p>
    )
}

export default Text;