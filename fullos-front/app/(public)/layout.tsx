import Background from "../components/background";
import Header from "../components/header";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Background />
            <Header
                headerItems={[
                    { label: "Planos", href: "/plans" },
                    { label: "Sobre Nós", href: "/about" },
                ]}
                isBtn
            />
            {children}
        </>
    );
}
