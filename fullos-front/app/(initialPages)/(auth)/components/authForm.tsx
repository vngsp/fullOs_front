'use client'
import FullLogo from "@/app/components/fullLogo"
import SwitchAuth from "./switchAuth"
import FormInput from "./formInput"
import SignUpBtn from "@/app/components/signUpBtn"
import GoogleBtn from "./googleBtn"
import BgForm from "@/app/components/bgForm"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthSchema, AuthSchemaObj } from "@/app/schemas/authSchema"

type Props = {
    isRegister?: boolean,
}

const AuthForm = ({ isRegister }: Props) => {
    const { control, handleSubmit } = useForm<AuthSchemaObj>({
        resolver: zodResolver(AuthSchema),
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const handleFormSubmit = () => {
        console.log('Bucetinhas')
    }

    return (
        <div className="relative overflow-hidden bg-secondary-el rounded-xl px-6 py-4 flex flex-col items-center shadow-sm">
            <Link href={'/'}>
                <FullLogo className="w-24 mb-6" />
            </Link>
            <form
                className="flex flex-col items-center gap-4"
                onSubmit={handleSubmit(handleFormSubmit)}
            >
                {isRegister
                    ?
                    <SwitchAuth />
                    :
                    <SwitchAuth isLogin />
                }
                <FormInput
                    label="Email"
                    placeholder="Registre seu e-mail"
                    control={control}
                    name="email"
                />
                <FormInput
                    label="Senha"
                    placeholder="***************"
                    control={control}
                    name="password"
                />
                <SignUpBtn darkMode label="Cadastre-se" padding="py-2 px-12" />
                <div className="flex items-center w-full gap-2 font-poppins font-light">
                    <span className="bg-white-el h-px flex-1 -ml-4"></span>
                    <span className="text-[12px] whitespace-nowrap">Ou continue com</span>
                    <span className="bg-white-el h-px flex-1 -mr-4"></span>
                </div>
                <GoogleBtn />
            </form>
            <BgForm
                className="absolute w-28 sm:w-32 xl:w-40 -left-2 md:-left-8 
                    top-64 sm:top-60 lg:top-68 xl:top-68 stroke-white-el z-10 overflow-hidden -rotate-90"
            />
        </div>
    )
}

export default AuthForm