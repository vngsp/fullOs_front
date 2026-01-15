'use client'
import {useMutation } from '@tanstack/react-query'
import { authUser, registerUser } from '../api/auth';
import { AuthSchemaObj } from '../schemas/authSchema';
import { useRouter } from 'next/navigation';

export const useRegisterUser = (setError: any) => {
    const router = useRouter();

    return useMutation({
        mutationFn: (data: AuthSchemaObj) => registerUser(data),
        mutationKey: ['registerUser'],  
        onSuccess: (data) => {
            router.push('/home');        
        },
        onError: (err: any) => {
            const errorMsg = err.response?.data?.message;

            if (errorMsg === "Este e-mail já está em uso") {
                setError("email", { 
                    type: "manual", 
                    message: errorMsg 
                });
            } else {
                console.error("Erro inesperado:", err);
            }
        }
    });
};

export const useAuthUser = () => {
    const router = useRouter();

    return useMutation({
        mutationFn: (data: AuthSchemaObj) => authUser(data),
        mutationKey: ['authUser'],
        onSuccess: () => {
            router.push('/home');
        },
        onError: (err) => {
            console.error("Error on auth", err);
        }
    })
}