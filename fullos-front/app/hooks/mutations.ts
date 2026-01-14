'use client'
import {useMutation } from '@tanstack/react-query'
import { authUser, registerUser } from '../api/auth';
import { AuthSchemaObj } from '../schemas/authSchema';
import { useRouter } from 'next/navigation';

export const useRegisterUser = () => {
    const router = useRouter();

    return useMutation({
        mutationFn: (data: AuthSchemaObj) => registerUser(data),
        mutationKey: ['registerUser'],  
        onSuccess: (data) => {
            router.push('/home');        
        },
        onError: (err) => {
            console.error("Error for register", err);
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