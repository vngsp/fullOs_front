import { CollaboratorTableRowSchemaObj } from "@/app/schemas/ui/collaboratorTableRowSchema";
import { Column } from "../table";

export const collaboratorColumns: Column<CollaboratorTableRowSchemaObj>[] = [
  {
    header: 'Identificador',
    render: r => r.id,
  },
  {
    header: 'Colaborador',
    render: r => r.collaborator,
  },
  {
    header: 'Data de Registro',
    render: r =>
      r.registerData.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }),
  },
];