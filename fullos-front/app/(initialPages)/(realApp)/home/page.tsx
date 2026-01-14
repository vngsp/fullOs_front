'use client'
import { useEffect } from "react";

const Page = () => {
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);

        const accessToken = params.get('accesToken');
        const refreshToken = params.get('refreshToken');

        if (accessToken) {
            localStorage.setItem('authToken', accessToken);
        }
        if (refreshToken) {
            localStorage.setItem('refreshToken', refreshToken);
        }

        if (accessToken || refreshToken) {
            window.history.replaceState({}, '', '/home');
        }
    }, []);

    return (
        <div>
            ...
        </div>
    )
}

export default Page;