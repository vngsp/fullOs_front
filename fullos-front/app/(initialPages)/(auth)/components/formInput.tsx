'use client'
import { AuthSchemaObj } from "@/app/schemas/authSchema";
import { useController, UseControllerProps, FieldValues } from "react-hook-form";

type Props = UseControllerProps<AuthSchemaObj> & {
    label: string,
    placeholder: string,
}

const FormInput = <T extends FieldValues>({ label, placeholder, ...controllerProps }: Props) => {
    const { field, fieldState } = useController(controllerProps);

    return (
        <label className="font-poppins flex flex-col font-light text-[12px]">
            {label}
            <input
                {...field}
                placeholder={placeholder}
                type="text"
                className="bg-white-el rounded-2xl p-1.5 placeholder:text-black-el/50 
                placeholder:text-[10px] placeholder:pl-2 w-[50vw] sm:w-[30vw] lg:w-[20vw] xl:w-[14vw]"
            />
            {fieldState.error && (
                <span className="text-red-500 text-[10px]">
                    {fieldState.error?.message}
                </span>
            )}
        </label>
    )
}

export default FormInput;