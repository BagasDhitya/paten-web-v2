'use client'

import React, { useEffect, useState } from "react"
import { usePathname, useRouter } from 'next/navigation'

interface AuthProviderProps {
    children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {

    const router = useRouter()
    const pathname = usePathname()

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (!token && !pathname.startsWith("/auth")) {
            setIsAuthenticated(false)
            router.push("/auth/login")
        } else if (token && pathname.startsWith("/auth")) {
            setIsAuthenticated(true)
            router.push("/")
        }
        setLoading(false)
    }, [pathname, router])

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">Loading ...</div>
        )
    }

    return <>
        {children}
    </>
}