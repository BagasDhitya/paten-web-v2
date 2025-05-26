'use client'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { loginSchema, registerSchema } from '@/lib/validation'
import { useAuth } from '@/hooks/useAuth'

import { Input } from '../ui/Input'
import { Button } from '../ui/Button'

type AuthFormProps = {
    type: 'login' | 'register'
}

type AuthInput = {
    name?: string,
    email: string,
    password: string,
    role?: string
}

export default function AuthForm({ type }: AuthFormProps) {
    const { login, register } = useAuth()
    const schema = type === 'login' ? loginSchema : registerSchema
    const initialValues = type === 'login' ? { email: '', password: '' } : { name: '', email: '', password: '', role: 'vendor' }

    async function handleSubmit(values: AuthInput) {
        if (type === 'login') {
            await login(values.email, values.password)
        } else {
            await register(values.name as string, values.email, values.password, values.role as string)
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={toFormikValidationSchema(schema)}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form className="space-y-4">
                    {type === 'register' && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Nama</label>
                            <Field as={Input} name="name" type="text" />
                            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <Field as={Input} name="email" type="email" />
                        <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <Field as={Input} name="password" type="password" />
                        <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                    </div>

                    {type === 'register' && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Role</label>
                            <Field as="select" name="role" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                                <option value="vendor">Vendor</option>
                                <option value="ppk">PPK</option>
                                <option value="panitia">Panitia</option>
                                <option value="auditor">Auditor</option>
                            </Field>
                        </div>
                    )}

                    <Button type="submit" disabled={isSubmitting} className="w-full">
                        {isSubmitting ? 'Memproses...' : type === 'login' ? 'Masuk' : 'Daftar'}
                    </Button>
                </Form>
            )}
        </Formik>
    )
}