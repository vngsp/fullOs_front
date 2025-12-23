import FullLogo from "./fullLogo";
import Logo from "./logo";
import SignUpBtn from "./signUpBtn";

type Props = {
    headerLabels: string[]
    isBtn: boolean
}
const Header = ({ headerLabels, isBtn }: Props) => {
    return (
        <div
            className="bg-secondary-el py-2 md:py-2.5 px-3 sm:p-1 rounded-2xl w-[90dvw] text-[3.2vw] sm:text-[12px] md:text-sm
            text-nowrap font-koho shadow-[0_4px_8px_3px_rgba(0,0,0,0.15),0_1px_3px_0_rgba(0,0,0,0.3)]"
        >
            <ul className="flex items-center justify-between sm:justify-center gap-4 md:gap-6">
                <li>
                    <div className="sm:hidden">
                        <Logo
                            className="w-[7.5dvw]"
                        />
                    </div>
                    <div className="hidden sm:block py-1">
                        <FullLogo
                            className="w-20 md:w-24"
                        />
                    </div>
                </li>
                {headerLabels.map(label => (
                    <li className="cursor-pointer" key={label}>{label}</li>
                ))}
                {isBtn ? <SignUpBtn /> : headerLabels[2]}
            </ul>
        </div>
    )
}

export default Header;