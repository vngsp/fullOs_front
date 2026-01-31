'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Table from '../components/table';
import { ordersTableData } from '@/app/mocks/orders.mock';
import { orderColumns } from '../components/tableColumns/orderColumns';
import { resumeTableData } from '@/app/mocks/resume.mock';
import { resumeColumns } from '../components/tableColumns/resumeColumns';
import { collaboratorsTableData } from '@/app/mocks/collaborators.mock';
import { collaboratorColumns } from '../components/tableColumns/collaboratorColumns';
import WeekGraph from './components/weekGraph';

const Page = () => {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('authToken');

        if (!token) {
            router.replace('/login');
        }
    }, [router])

    return (
        <div className='flex flex-col
            md:grid md:grid-cols-[1fr_2fr] md:grid-rows-1 md:gap-6 md:m-auto md:pl-5 md:pr-4 md:mt-12 lg:px-12'
        >
            <div className="
                md:col-start-1 flex flex-col md:justify-around gap-6 order-1 md:order-0 md:border-r md:border-white-el md:pr-8
            "
            >
                <Table
                    title="Colaboradores"
                    data={collaboratorsTableData}
                    columns={collaboratorColumns}
                    addBtn
                />

                <Table
                    title="Resumo geral"
                    data={resumeTableData}
                    columns={resumeColumns}
                />
            </div>

            <div className="md:col-start-2 flex flex-col gap-6 order-2 md:order-0 md:pl-6">
                <Table
                    title="Ultimas Ordens"
                    data={ordersTableData}
                    columns={orderColumns}
                />

                <div>
                    <WeekGraph
                        values={[
                            [12, 18, 10, 15, 9],
                            [8, 14, 6, 11, 7],
                            [20, 16, 14, 19, 13],
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}

export default Page;