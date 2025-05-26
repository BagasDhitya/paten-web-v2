'use client'

import { useRouter } from 'next/navigation'
import { api } from '@/lib/api'
import { toast } from 'react-toastify'

export function useAuth() {
    const router = useRouter()

    async function login(email: string, password: string) {
        try {
            const { data } = await api.post('api/auth/login', { email, password })
            localStorage.setItem('token', data?.data?.token)
            toast.success("Login berhasil")
            router.push("/")
        } catch (error) {
            console.log('error : ', error)
            if (error && typeof error === 'object' && 'response' in error) {
                const err = error as { response?: { data?: { message?: 'Login gagal' } } }
                toast.error(err.response?.data?.message)
            } else {
                toast.error('An unexpected error occurred')
            }
        }
    }

    async function register(name: string, email: string, password: string, role: string) {
        try {
            await api.post('api/auth/register', { name, email, password, role })
            toast.success("Registrasi berhasil! Silakan login")
            router.push("/auth/login")
        } catch (error) {
            if (error && typeof error === 'object' && 'response' in error) {
                const err = error as { response?: { data?: { message?: 'Registrasi gagal' } } }
                toast.error(err.response?.data?.message)
            } else {
                toast.error('An unexpected error occurred')
            }
        }
    }

    function logout() {
        localStorage.removeItem("token")
        toast.success("Berhasil logout")
        router.push("/auth/login")
    }

    return { login, logout, register }
}