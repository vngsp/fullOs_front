import * as z from 'zod';

export const AuthSchema = z.object({
    email: z.email(),
    password: z.string().min(8).max(20),
})

export type AuthSchemaObj = z.infer<typeof AuthSchema>;