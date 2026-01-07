import Link from "next/link";

type Props = {
    isLogin?: boolean,
}

const baseClass = "bg-black-el rounded-xl px-5 xl:px-6 py-[0.22rem]";

const SwitchAuth = ({ isLogin }: Props) => {
    return (
        <div className="inline-flex bg-black-el rounded-xl text-[10px] font-poppins font-light shadow-sm">
            {isLogin ? (
                <>
                    <span className="bg-[#6E6B6B] rounded-xl px-5 xl:px-6 py-[0.22rem]">Entre agora</span>
                    <Link href={'/register'} className={baseClass}>
                        Registre-se
                    </Link>
                </>
            ) : (
                <>
                    <Link href={'/login'} className={baseClass}>
                        Entre agora
                    </Link>
                    <span className="bg-[#6E6B6B] rounded-xl px-5 xl:px-6 py-[0.22rem]">Registre-se</span>
                </>
            )}
        </div>
    )
}

export default SwitchAuth;