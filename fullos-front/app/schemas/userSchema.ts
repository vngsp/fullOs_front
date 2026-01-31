import * as z from 'zod';

export const UserSchema = z.object({
    id: z.number(),
    name: z.string(),
    registerData: z.date(),
    osCounter: z.number(),
    reworkCounter: z.number(),
    totalTimeMinutes: z.number(),
    score: z.number()
})

export type UserSchemaObj = z.infer<typeof UserSchema>;