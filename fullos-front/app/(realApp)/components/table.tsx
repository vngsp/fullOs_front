import { ReactNode } from 'react';
import AddBtn from '../home/components/addBtn';

export type Column<T> = {
    header: string;
    render: (row: T) => ReactNode;
};

type TableProps<T> = {
    title: string;
    data: T[];
    columns: Column<T>[];
    addBtn?: boolean;
};

const Table = <T,>({ title, data, columns, addBtn }: TableProps<T>) => {
    return (
        <div className="mt-9 md:m-0 flex flex-col justify-center">
            <h2 className="text-lg font-lao mb-2 md:text-xl">{title}</h2>

            <table className={`w-full border-separate border-spacing-0`}>
                <thead className="bg-tertiary-el">
                    <tr>
                        {columns.map((col, index) => (
                            <th
                                key={index}
                                className={`
                                    text-[11px] text-nowrap py-3 px-1.5 font-poppins font-light
                                    ${index === 0 ? 'rounded-bl-2xl rounded-tl-2xl' : ''}
                                    ${index === columns.length - 1 ? 'rounded-br-2xl rounded-tr-2xl' : ''}
                                `}
                            >
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className="font-poppins text-[12px] text-center"
                        >
                            {columns.map((col, colIndex) => (
                                <td key={colIndex} className="border-b py-3">
                                    {col.render(row)}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            {addBtn &&
                <AddBtn />
            }
        </div>
    );
};

export default Table;