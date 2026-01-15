'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
    const router = useRouter();
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);

        const accessToken = params.get('accessToken');
        const refreshToken = params.get('refreshToken');

        if (accessToken) {
            localStorage.setItem('authToken', accessToken);
        }
        if (refreshToken) {
            localStorage.setItem('refreshToken', refreshToken);
        }

        if (accessToken || refreshToken) {
            window.history.replaceState({}, '', '/home');
            return;
        }

        const storedToken = localStorage.getItem('authToken');
        if (!storedToken) {
            router.replace('/login');
        }
    }, []);

    return (
        <div>
            ...
        </div>
    )
}

export default Page;