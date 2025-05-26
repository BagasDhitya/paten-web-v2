import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email('Email tidak valid'),
    password: z.string()
        .min(6, 'Password minimal 6 karakter')
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
            'Password harus mengandung huruf kecil, huruf besar, angka, dan karakter spesial'
        )
});

export const registerSchema = z.object({
    name: z.string().min(3, 'Nama minimal 3 karakter'),
    email: z.string().email('Email tidak valid'),
    password: z.string()
        .min(6, 'Password minimal 6 karakter')
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
            'Password harus mengandung huruf kecil, huruf besar, angka, dan karakter spesial'
        ),
    role: z.enum(['vendor', 'ppk', 'panitia', 'auditor'])
})

export type LoginFormValues = z.infer<typeof loginSchema>
export type RegisterFormValues = z.infer<typeof registerSchema>