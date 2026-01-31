import * as z from 'zod'

export const CollaboratorTableRowSchema = z.object({
    id: z.number(),
    collaborator: z.string(),
    registerData: z.date(),
})

export type CollaboratorTableRowSchemaObj = z.infer<typeof CollaboratorTableRowSchema>;