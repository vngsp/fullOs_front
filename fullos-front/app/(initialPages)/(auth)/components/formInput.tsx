'use client'
import { AuthSchemaObj } from "@/app/schemas/authSchema";
import { useController, UseControllerProps, FieldValues } from "react-hook-form";

type Props = UseControllerProps<AuthSchemaObj> & {
    label: string,
    placeholder: string,
    inputType: string,
}

const FormInput = <T extends FieldValues>({ label, placeholder, inputType, ...controllerProps }: Props) => {
    const { field, fieldState } = useController(controllerProps);

    return (
        <label className="font-poppins flex flex-col font-light text-[12px]">
            {label}
            <input
                {...field}
                placeholder={placeholder}
                type={inputType}
                className="bg-white-el rounded-2xl p-1.5 placeholder:text-black-el/50 
                placeholder:text-[10px] placeholder:pl-2 w-[50vw] sm:w-[30vw] lg:w-[20vw] xl:w-[14vw] text-black-el"
            />
            {fieldState.error?.message && (
                <span className="text-red-500 text-[12px] mt-0.5">
                    {fieldState.error?.message}
                </span>
            )}
        </label>
    )
}

export default FormInput;