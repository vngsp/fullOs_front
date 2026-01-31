type Props = {
    name: string,
    color: string,
}

const GraphLegend = ({ name, color }: Props) => {
    return (
        <div className="flex items-center w-fit gap-2">
            <div className={`w-[3vh] h-[3vh] rounded-sm ${color}`}></div>
            <h4 className="text-[12px] font-poppins">{name}</h4>
        </div>
    )
}

export default GraphLegend;