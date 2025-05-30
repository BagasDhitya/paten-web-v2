import { AuthLayout } from "@/components/auth/AuthLayout"
import { AuthForm } from "@/components/auth/AuthForm"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

function Login() {
    return (
        <>
            <AuthLayout
                title="Masuk ke PATEN"
                linkText="Belum punya akun? Daftar disini"
                linkHref="/auth/register"
            >
                <AuthForm type="login" />
            </AuthLayout>
            <ToastContainer position="bottom-right" />
        </>
    )
}

export default Login