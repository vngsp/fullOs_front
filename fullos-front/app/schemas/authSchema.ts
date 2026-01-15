import * as z from 'zod';

export const AuthSchema = z.object({
        email: z.email("E-mail inválido").nonempty("E-mail é obrigatório"),
        password: 
            z.string()
            .nonempty("Senha é obrigatória")
            .min(8, "A senha deve ter no mínimo 8 caracteres")
            .max(20, "A senha deve ter no máximo 20 caracteres"),
})

export type AuthSchemaObj = z.infer<typeof AuthSchema>;