import Link from "next/link";
import FullLogo from "./fullLogo";
import Logo from "./logo";
import SignUpBtn from "./signUpBtn";

type HeaderItem = {
    label: string,
    href: string,
}

type Props = {
    headerItems: HeaderItem[],
    isBtn: boolean,
}
const Header = ({ headerItems, isBtn }: Props) => {
    return (
        <div className="flex justify-center">
            <header
                className="bg-secondary-el py-2 max-md:py-2.5 px-3 sm:p-1 rounded-2xl w-[90dvw] text-[3.2vw] sm:text-[12px] md:text-sm
            text-nowrap font-koho shadow-sm"
            >
                <ul className="flex items-center justify-between sm:justify-center gap-4 md:gap-6">
                    <li className="cursor-pointer">
                        <div className="sm:hidden">
                            <Link href={'/'}>
                                <Logo
                                    className="w-[7.5dvw]"
                                />
                            </Link>
                        </div>
                        <div className="hidden sm:block py-1">
                            <Link href={'/'}>
                                <FullLogo
                                    className="w-20 md:w-24"
                                />
                            </Link>
                        </div>
                    </li>
                    {headerItems.map(item => (
                        <li className="cursor-pointer" key={item.label}>
                            <Link href={item.href}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                    <Link href={'/register'}>
                        {isBtn && <SignUpBtn label="Registre-se" />}
                    </Link>
                </ul>
            </header>
        </div>
    )
}

export default Header;