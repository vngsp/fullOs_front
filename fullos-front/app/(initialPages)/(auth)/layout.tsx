import Background from "@/app/components/background";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            {children}
            <Background />
        </div>
    );
}
