import { AuthLayout } from "@/components/auth/AuthLayout"
import { AuthForm } from "@/components/auth/AuthForm"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

function Login() {
    return (
        <>
            <AuthLayout
                title="Daftar ke PATEN"
                linkText="Sudah punya akun? Silakan login disini"
                linkHref="/auth/login"
            >
                <AuthForm type="register" />
            </AuthLayout>
            <ToastContainer position="bottom-right" />
        </>
    )
}

export default Login