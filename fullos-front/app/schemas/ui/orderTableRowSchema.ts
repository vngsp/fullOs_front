import * as z from 'zod';

export const OrderTableRowSchema = z.object({
    resourceId: z.number(),
    collaborator: z.string(),
    dataDayMonth: z.date(),
    startDateTime: z.date(),
    endDateTime: z.date(),
})

export type OrderTableRowSchemaObj = z.infer<typeof OrderTableRowSchema>;