import * as z from 'zod';

export const OrderSchema = z.object({
  id: z.number(),
  isRework: z.boolean(),
  resourceId: z.number(),
  startDateTime: z.date(),
  endDateTime: z.date(),
  durationMin: z.number(),
  collaboratorId: z.number(),
})


export type OrderSchemaObj = z.infer<typeof OrderSchema>;