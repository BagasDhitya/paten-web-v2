import React from 'react'
import Link from 'next/link'

interface AuthLayoutProps {
    children?: React.ReactNode,
    title: string,
    linkText: string,
    linkHref: string
}

export function AuthLayout({ children, title, linkText, linkHref }: AuthLayoutProps) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        {title}
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Sistem Pengadaan Elektronik Kementerian Keuangan
                    </p>
                </div>

                <div className="bg-white py-8 px-4 shadow rounded-lg sm:px-10">
                    {children}

                    <div className="mt-6 text-center">
                        <Link href={linkHref} className="font-medium text-blue-600 hover:text-blue-500">
                            {linkText}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}