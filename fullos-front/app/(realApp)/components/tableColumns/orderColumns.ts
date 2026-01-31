import { OrderTableRowSchemaObj } from "@/app/schemas/ui/orderTableRowSchema";
import { Column } from "../table";

export const orderColumns: Column<OrderTableRowSchemaObj>[] = [
  {
    header: 'Recurso',
    render: r => r.resourceId,
  },
  {
    header: 'Responsável',
    render: r => r.collaborator,
  },
  {
    header: 'Data',
    render: r =>
      r.dataDayMonth.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
      }),
  },
  {
    header: 'Hora',
    render: r =>
      r.startDateTime.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
      }),
  },
  {
    header: 'Tempo',
    render: r => {
      const diffMs = r.endDateTime.getTime() - r.startDateTime.getTime();
      const totalMin = Math.floor(diffMs / 60000);
      const h = Math.floor(totalMin / 60);
      const m = totalMin % 60;
      return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
    },
  },
];
