type Props = {
    text: string,
    highlightWord?: number,
    secondaryTitle?: boolean,
    width?: string,
}

const SectionTitle = ({ text, highlightWord, secondaryTitle, width }: Props) => {
    const words = text.split(' ');
    return (
        <h1 className={`font-lao w-${width} ${secondaryTitle
            ? "text-lg lg:text-xl"
            : "text-3xl sm:text-center sm:w-lg lg:text-4xl"
            }`}>
            {words.map((word, index) => (
                <span
                    key={index}
                    className={index === highlightWord ? 'text-green-theme' : 'text-text-white'}
                >
                    {word}{' '}
                </span>
            ))}
        </h1>
    )
}

export default SectionTitle;