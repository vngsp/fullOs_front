import { GeneralTableRowSchemaObj } from "@/app/schemas/ui/generalTableRowSchema";
import { Column } from "../table";

export const resumeColumns: Column<GeneralTableRowSchemaObj>[] = [
  {
    header: 'Posição',
    render: r => r.position,
  },
  {
    header: 'Colaborador',
    render: r => r.collaborator,
  },
  {
    header: 'Média',
    render: r =>
      r.averageTime.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
      }),
  },
  {
    header: 'Total OS',
    render: r => r.totalOs,
  },
];
