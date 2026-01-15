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
import { useAuthUser, useRegisterUser } from "@/app/hooks/mutations"

type Props = {
    isRegister?: boolean,
}

const AuthForm = ({ isRegister }: Props) => {
    const { control, handleSubmit, setError, formState: { errors } } = useForm<AuthSchemaObj>({
        resolver: zodResolver(AuthSchema),
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const register = useRegisterUser(setError);
    const login = useAuthUser();

    const isWorking = register.isPending || login.isPending;

    const handleFormSubmit = (data: AuthSchemaObj) => {
        isRegister ? register.mutate(data) : login.mutate(data);
    }

    const googleClick = () => {
        window.location.href = 'http://localhost:1000/auth/google';
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
                    inputType="text"
                    label="Email"
                    placeholder="Registre seu e-mail"
                    control={control}
                    name="email"
                />
                <FormInput
                    inputType="password"
                    label="Senha"
                    placeholder="***************"
                    control={control}
                    name="password"
                />
                {isRegister
                    ?
                    <SignUpBtn darkMode label="Cadastre-se" padding="py-2 px-12" disabled={isWorking} />
                    :
                    <SignUpBtn darkMode label="Entre agora" padding="py-2 px-12" disabled={isWorking} />
                }
                <div className="flex items-center w-full gap-2 font-poppins font-light">
                    <span className="bg-white-el h-px flex-1 -ml-4"></span>
                    <span className="text-[12px] whitespace-nowrap">Ou continue com</span>
                    <span className="bg-white-el h-px flex-1 -mr-4"></span>
                </div>
                <GoogleBtn
                    onClick={googleClick}
                />
            </form>
            <BgForm
                className="absolute w-28 sm:w-32 xl:w-40 -left-2 md:-left-8 pointer-events-none 
                    top-64 sm:top-60 lg:top-68 xl:top-68 stroke-white-el z-10 overflow-hidden -rotate-90"
            />
        </div>
    )
}

export default AuthForm