import PlanItemIcon from "./planItemIcon"

type Props = {
    itemText: string,
    plus?: boolean,
}

const PlanItem = ({ itemText, plus }: Props) => {
    return (
        <li className="flex gap-1 font-poppins font-light">
            {plus ? <PlanItemIcon color="B49A32" /> : <PlanItemIcon />}
            {itemText}
        </li>
    )
}

export default PlanItem;