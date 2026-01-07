import {useMutation, useQueryClient} from '@tanstack/react-query'
import { useRouter } from 'next/router';
import { AuthSchemaObj } from '../schemas/authSchema';
import { registerUser } from '../api/auth';

export const useRegister = () => {
    const queryClient = useQueryClient();
    const router = useRouter();

    return useMutation({
        mutationFn: (data: AuthSchemaObj) => registerUser(data),
        onSuccess: (res) => {
            console.log('Sucesso')
        }
    })
}