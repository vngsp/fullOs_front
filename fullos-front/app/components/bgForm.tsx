type Props = {
    className?: string
    width?: string
    color?: string
}

const BgForm = ({ width, color, className }: Props) => (
    <svg
        className={className}
        width={width}
        height="248"
        viewBox="0 0 247 248"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M245.888 115.582L145.598 164.425L145.386 164.528L145.331 164.757L125.537 246.281L0.589822 131.376L29.2075 57.5996L120.884 0.625666L245.888 115.582Z"
            stroke={color}
        />
    </svg>
)

export default BgForm
