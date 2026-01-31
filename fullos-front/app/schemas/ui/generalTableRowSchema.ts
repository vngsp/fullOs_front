import * as z from 'zod'

export const GeneralTableRowSchema = z.object({
    position: z.number(),
    collaborator: z.string(),
    averageTime: z.date(),
    totalOs: z.number(),
})

export type GeneralTableRowSchemaObj = z.infer<typeof GeneralTableRowSchema>;