import Header from "@/app/components/header";

export default function RealAppLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header
                headerItems={[
                    { label: 'Ordens', href: '/orders' },
                    { label: 'Estatísticas', href: '/statistics' },
                    { label: 'Visão Geral', href: '/generalVision' },
                ]}
                isBtn={false}
                isApp
            />
            {children}
        </>
    )
}